"use client";

import * as React from "react";
import * as THREE from "three";
import s from "../tour.module.css";
import { STATIONS } from "../data/stations";
import { prog, useTour } from "../store";

function Pills() {
  const settled = useTour((st) => st.settled);
  const pills = settled >= 0 ? STATIONS[settled]?.pills ?? null : null;
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [open, setOpen] = React.useState<number | null>(null);

  React.useEffect(() => { setOpen(null); }, [settled]);

  React.useEffect(() => {
    if (!pills) return;
    let raf = 0;
    const v = new THREE.Vector3();
    const loop = () => {
      const cam = prog.camera;
      if (cam) {
        pills.forEach((pl, i) => {
          const el = refs.current[i];
          if (!el) return;
          v.set(pl.p[0], pl.p[1], pl.p[2]).project(cam);
          if (v.z > 1 || v.x < -1.15 || v.x > 1.15 || v.y < -1.15 || v.y > 1.15) {
            el.style.opacity = "0"; el.style.pointerEvents = "none";
          } else {
            el.style.opacity = "1"; el.style.pointerEvents = "auto";
            el.style.left = (v.x * 0.5 + 0.5) * window.innerWidth + "px";
            el.style.top = (-v.y * 0.5 + 0.5) * window.innerHeight + "px";
          }
        });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [pills]);

  if (!pills) return null;
  return (
    <div className={s.hotspots}>
      {pills.map((pl, i) => (
        <div key={i} ref={(el) => { refs.current[i] = el; }} className={s.hotspot} style={{ opacity: 0 }}>
          <div className={s.hsPill} onClick={() => setOpen(open === i ? null : i)}><span className={s.diamond}>◈</span>{pl.label}</div>
          {open === i && <div className={s.hsTip}>{pl.detail}</div>}
        </div>
      ))}
    </div>
  );
}

function TempHUD() {
  const wrap = React.useRef<HTMLDivElement>(null);
  const val = React.useRef<HTMLDivElement>(null);
  const settled = useTour((st) => st.settled);

  React.useEffect(() => {
    let raf = 0;
    const loop = () => {
      const p = prog.pC, w = wrap.current, vEl = val.current;
      if (w && vEl) {
        if (p < 0.40) { w.style.opacity = "0"; }
        else {
          w.style.opacity = "1";
          let t: number;
          if (p >= 0.505) t = 3.98803;
          else { const u = Math.min(1, Math.max(0, (p - 0.40) / (0.505 - 0.40))); t = 3.98803 + (300 - 3.98803) * Math.pow(1 - u, 3); }
          vEl.textContent = (t < 10 ? t.toFixed(5) : t.toFixed(1)) + " K";
          vEl.style.color = t > 10 ? "#C9962F" : "#1E8FA8"; // readable amber / cryo on the white card
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    const w = wrap.current;
    if (!w) return;
    if (settled === 3) { w.classList.add(s.hudFlash); const id = setTimeout(() => w.classList.remove(s.hudFlash), 2200); return () => clearTimeout(id); }
  }, [settled]);

  return (
    <div ref={wrap} className={s.hud} style={{ opacity: 0 }}>
      <div className={s.hudLabel}>AQV TESTBED · LIVE</div>
      <div ref={val} className={s.hudVal}>300.0 K</div>
    </div>
  );
}

export default function Hud() { return (<><Pills /><TempHUD /></>); }
