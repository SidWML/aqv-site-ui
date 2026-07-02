"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Lightformer, Loader } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

export type Metric = { value: string; label: string };
export type Phase = { range: [number, number, number, number]; num?: string; eyebrow: string; title: React.ReactNode; sub?: string; metrics?: Metric[]; cta?: boolean };

class SceneBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

const MathLerp = THREE.MathUtils.lerp;

/** Real scroll progress (0–1) through the section, straight from the DOM. */
function progressOf(el: HTMLElement | null) {
  if (!el) return 0;
  const rect = el.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  return total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
}

/** Opacity envelope: 0 → 1 (a→b), hold (b→c), 1 → 0 (c→d). */
function bump(p: number, [a, b, c, d]: [number, number, number, number]) {
  if (p <= a || p >= d) return 0;
  if (p < b) return (p - a) / ((b - a) || 1);
  if (p <= c) return 1;
  return 1 - (p - c) / ((d - c) || 1);
}

function Campus({ wrapRef }: { wrapRef: React.RefObject<HTMLDivElement | null> }) {
  const { scene } = useGLTF("/3d/campus.glb");
  const fit = React.useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return { scale: 6 / maxDim, center };
  }, [scene]);

  const target = React.useRef(new THREE.Vector3());
  const look = React.useRef(new THREE.Vector3());

  useFrame((state) => {
    const p = progressOf(wrapRef.current);
    const angle = -0.6 + p * 1.7;            // continuous orbit around the campus
    let radius: number, y: number, lookY: number;
    if (p < 0.85) {                          // aerial → push right in
      const k = p / 0.85;
      radius = MathLerp(13, 3.4, k); y = MathLerp(7.6, 1.3, k); lookY = MathLerp(1.9, 0.5, k);
    } else {                                 // final: pull far back, whole valley
      const k = (p - 0.85) / 0.15;
      radius = MathLerp(3.4, 17, k); y = MathLerp(1.3, 8.5, k); lookY = MathLerp(0.5, 1.6, k);
    }
    target.current.set(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
    look.current.set(0, lookY, 0);
    state.camera.position.lerp(target.current, 0.1);
    state.camera.lookAt(look.current);
  });

  return (
    <group scale={fit.scale} position={[-fit.center.x * fit.scale, -fit.center.y * fit.scale, -fit.center.z * fit.scale]}>
      <primitive object={scene} />
    </group>
  );
}

export default function CampusFilm({ phases, vh = 850 }: { phases: Phase[]; vh?: number }) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [p, setP] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setP(progressOf(wrapRef.current))); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={wrapRef} className="relative bg-night" style={{ height: `${vh}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <SceneBoundary>
            <Canvas camera={{ position: [0, 9, 13], fov: 42, near: 0.1, far: 100 }} dpr={[1, 1.7]} gl={{ antialias: true, powerPreference: "high-performance" }}>
              <color attach="background" args={["#0A0E1A"]} />
              <fog attach="fog" args={["#0A0E1A", 16, 40]} />
              <ambientLight intensity={0.6} />
              <directionalLight position={[8, 12, 6]} intensity={1.8} color="#dfe3ff" />
              <pointLight position={[-8, 4, -4]} intensity={2} color="#5B6CFF" />
              <pointLight position={[6, 2, 8]} intensity={1} color="#ffd9b0" />
              <React.Suspense fallback={null}>
                <Campus wrapRef={wrapRef} />
                <Environment resolution={256}>
                  <Lightformer intensity={2.2} position={[0, 6, -8]} scale={[14, 14, 1]} color="#8b92e8" />
                  <Lightformer intensity={1.1} position={[-8, 2, 6]} scale={[10, 6, 1]} color="#ffffff" />
                  <Lightformer intensity={1.5} position={[8, -1, 4]} scale={[8, 8, 1]} color="#cdd3ff" />
                </Environment>
              </React.Suspense>
              <EffectComposer><Bloom intensity={0.5} luminanceThreshold={0.6} luminanceSmoothing={0.4} mipmapBlur /></EffectComposer>
            </Canvas>
          </SceneBoundary>
        </div>
        {/* legibility scrims */}
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(8,11,22,0.85) 0%,rgba(8,11,22,0.32) 44%,transparent 70%)" }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,11,22,0.45) 0%,transparent 26%,transparent 62%,rgba(8,11,22,0.78) 100%)" }} />

        {phases.map((ph, i) => {
          const o = bump(p, ph.range);
          return (
            <div key={i} aria-hidden={o < 0.5} style={{ opacity: o, pointerEvents: ph.cta && o > 0.5 ? "auto" : "none" }} className="absolute inset-0">
              <div style={{ transform: `translateY(${(1 - o) * 24}px)` }} className="mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center px-5 sm:px-8 lg:px-10">
                <div className="max-w-[20ch]">
                  <div className="mb-6 flex items-center gap-3.5">
                    {ph.num && <span className="font-serif text-[1.4rem] italic leading-none text-accent">{ph.num}</span>}
                    {ph.num && <span className="h-px w-7 bg-accent/50" />}
                    <span className="t-overline text-accent">{ph.eyebrow}</span>
                  </div>
                  <h2 className="font-serif text-[clamp(2.2rem,6vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream">{ph.title}</h2>
                  {ph.sub && <p className="mt-6 max-w-110 t-lead text-cream/[0.78]">{ph.sub}</p>}
                  {ph.cta && (
                    <div className="mt-9 flex flex-wrap gap-4">
                      <a href="/contact" className="inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-8 py-4 t-eyebrow text-cream no-underline">INVEST IN AQV<svg width="12" height="12" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></a>
                      <a href="#" className="inline-flex items-center rounded-pill border border-cream/30 px-8 py-4 t-eyebrow text-cream no-underline transition-colors hover:border-accent/60">DOWNLOAD PROPOSAL</a>
                      <a href="#" className="inline-flex items-center rounded-pill border border-cream/30 px-8 py-4 t-eyebrow text-cream no-underline transition-colors hover:border-accent/60">REGISTER INTEREST</a>
                    </div>
                  )}
                </div>
              </div>
              {ph.metrics && (
                <div className="absolute inset-x-0 bottom-16 px-5 sm:px-8 lg:px-10">
                  <div className="mx-auto flex max-w-[1500px] flex-wrap gap-x-12 gap-y-4 border-t border-cream/15 pt-5">
                    {ph.metrics.map((m) => (
                      <div key={m.label}><div className="font-serif text-[clamp(1.5rem,2.6vw,2.3rem)] italic leading-none text-accent">{m.value}</div><div className="mt-1.5 t-overline text-cream/55">{m.label}</div></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div aria-hidden className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent" style={{ transform: `scaleX(${p})` }} />
      </div>
      <Loader />
    </section>
  );
}

useGLTF.preload("/3d/campus.glb");
