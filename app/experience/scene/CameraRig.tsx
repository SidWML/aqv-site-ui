"use client";

import * as React from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PATH, FOCUS } from "../data/path";
import { STATIONS } from "../data/stations";
import { prog, getTour, setTour } from "../store";

const curve = new THREE.CatmullRomCurve3(PATH.map((p) => new THREE.Vector3(p[0], p[1], p[2])), false, "centripetal", 0.5);
const STOPS = STATIONS.map((s) => s.t);
function nearest(p: number) { let bi = 0; for (let i = 1; i < STOPS.length; i++) if (Math.abs(STOPS[i] - p) < Math.abs(STOPS[bi] - p)) bi = i; return { t: STOPS[bi], i: bi }; }
const smoothstep = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const clampU = (u: number) => Math.min(0.9995, Math.max(0.0005, u));

export default function CameraRig() {
  const { camera } = useThree();
  const lastInput = React.useRef(-9999);
  const pos = React.useRef(new THREE.Vector3());
  const look = React.useRef(new THREE.Vector3());       // damped look target (persistent)
  const goal = React.useRef(new THREE.Vector3());
  const fv = React.useRef(new THREE.Vector3());
  const lastGood = React.useRef(new THREE.Vector3(0, 48, 146));
  const started = React.useRef(false);

  React.useEffect(() => {
    prog.camera = camera;
    // seed the damped look so the first frames don't swing
    curve.getPointAt(clampU(0.02), look.current);

    const bump = (d: number) => {
      if (!getTour().entered) return;
      const n = nearest(prog.pT);
      if (Math.abs(prog.pT - n.t) < 0.028) d *= 0.28; // station magnetism friction
      prog.pT = Math.min(1, Math.max(0, prog.pT + d));
      lastInput.current = performance.now();
    };
    const onWheel = (e: WheelEvent) => bump(e.deltaY * 0.00016);
    let ty = 0;
    const onTS = (e: TouchEvent) => { ty = e.touches[0]?.clientY ?? 0; };
    const onTM = (e: TouchEvent) => { const y = e.touches[0]?.clientY ?? ty; bump((ty - y) * 0.0006); ty = y; };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) bump(0.03);
      else if (["ArrowUp", "PageUp"].includes(e.key)) bump(-0.03);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchmove", onTM, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchmove", onTM);
      window.removeEventListener("keydown", onKey);
    };
  }, [camera]);

  useFrame((s, delta) => {
    const reduced = prog.reduced;
    const dt = Math.min(delta || 1 / 60, 1 / 30);                 // clamp — no teleport after tab-switch
    const kScroll = reduced ? 1 : 1 - Math.exp(-3.5 * dt);
    const kPos = reduced ? 1 : 1 - Math.exp(-3.2 * dt);
    const kLook = reduced ? 1 : 1 - Math.exp(-4.0 * dt);

    // magnetism: after a pause, ease pT toward the nearest station
    if (getTour().entered && performance.now() - lastInput.current > 300) {
      const n = nearest(prog.pT);
      prog.pT += (n.t - prog.pT) * (reduced ? 1 : 0.10);
    }
    prog.pC += (prog.pT - prog.pC) * kScroll;
    const t = Math.min(1, Math.max(0, prog.pC));
    const u = clampU(t);

    // constant-speed position (arc-length) + settle-only idle drift
    curve.getPointAt(u, pos.current);
    const nearStation = Math.abs(t - nearest(t).t) < 0.006;
    if (!reduced && nearStation && started.current) {
      pos.current.x += Math.sin(s.clock.elapsedTime * 0.5) * 0.06;
      pos.current.y += Math.sin(s.clock.elapsedTime * 0.7) * 0.04;
    }

    // look goal = point a little ahead, blended toward focus overrides via smoothstep (no pops)
    curve.getPointAt(clampU(u + 0.02), goal.current);
    for (const [a, b, tgt, k] of FOCUS) {
      if (t >= a - 0.02 && t <= b + 0.02) {
        const pad = Math.max(0.008, (b - a) * 0.2);
        const w = k * smoothstep(a, a + pad, t) * (1 - smoothstep(b - pad, b, t));
        if (w > 0.0001) { fv.current.set(tgt[0], tgt[1], tgt[2]); goal.current.lerp(fv.current, Math.min(1, w)); }
      }
    }

    // damp toward goal (persistent look vector) then apply
    look.current.lerp(goal.current, kLook);
    if (kPos < 1) camera.position.lerp(pos.current, kPos); else camera.position.copy(pos.current);

    // NaN guard — restore last good pose if anything went non-finite
    if (!Number.isFinite(camera.position.x) || !Number.isFinite(camera.position.y) || !Number.isFinite(camera.position.z)) {
      camera.position.copy(lastGood.current);
    } else {
      lastGood.current.copy(camera.position);
    }
    camera.lookAt(look.current);
    started.current = true;

    const n = nearest(t);
    const settled = Math.abs(t - n.t) < 0.006 ? n.i : -1;
    if (settled !== getTour().settled) setTour({ settled });
  });

  return null;
}
