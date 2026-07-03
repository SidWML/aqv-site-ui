"use client";

import * as React from "react";
import { loadFrames, FRAMES } from "./frames";

export type Hotspot = { x: number; y: number; label: string };
export type Scene = { frame: number; step: string; title: string; desc: string; spots: Hotspot[] };

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a: number, b: number, x: number) => { const t = clamp((x - a) / (b - a || 1)); return t * t * (3 - 2 * t); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * NRG-style act. The film (a pre-rendered 3D model) enters as a card, clips
 * open to full-screen, then scrubs smoothly — easing to a DWELL on each scene
 * where content + hotspot tooltips animate in. Cursor parallax + motion-blur on
 * fast scrub give the 3D/liquid feel. AQV default palette + type throughout.
 */
export default function FilmAct({
  startFrame, scenes, phaseList, phaseOffset = 0,
}: { startFrame: number; scenes: Scene[]; phaseList: string[]; phaseOffset?: number }) {
  const secRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const clipRef = React.useRef<HTMLDivElement>(null);
  const cueRef = React.useRef<HTMLDivElement>(null);
  const imagesRef = React.useRef<HTMLImageElement[]>([]);
  const drawnRef = React.useRef(-1);
  const curRef = React.useRef(startFrame);
  const lastT = React.useRef(0);
  const px = React.useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });
  const [active, setActive] = React.useState(0);
  const [shown, setShown] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  const P = scenes.length;
  const endFrame = scenes[P - 1].frame;
  const nFrames = Math.max(1, endFrame - startFrame);
  const sectionVh = 120 + P * 130; // room for smooth travel + a dwell per scene

  const draw = React.useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width, ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight, cr = cw / ch;
    let dw: number, dh: number, dx: number, dy: number;
    if (ir > cr) { dh = ch; dw = ch * ir; dx = (cw - dw) / 2; dy = 0; }
    else { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  React.useEffect(() => {
    imagesRef.current = loadFrames();
    const im = imagesRef.current[startFrame];
    if (im?.complete) draw(startFrame); else if (im) im.onload = () => draw(startFrame);
  }, [draw, startFrame]);

  React.useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.floor(window.innerWidth * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
      draw(Math.max(0, drawnRef.current < 0 ? startFrame : drawnRef.current));
    };
    resize();
    const onMove = (e: MouseEvent) => { px.current.tx = (e.clientX / window.innerWidth - 0.5) * 2; px.current.ty = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
  }, [draw, startFrame]);

  React.useEffect(() => {
    let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    lastT.current = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - lastT.current) / 1000 || 1 / 60, 1 / 30);
      lastT.current = now;
      const el = secRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.bottom > -50 && rect.top < vh + 50) {
          const u = clamp(-rect.top / (rect.height - vh || 1));
          const g = smooth(0, 0.12, u);

          if (clipRef.current) {
            const padY = (1 - g) * 8, padX = (1 - g) * 7, rad = (1 - g) * 26;
            clipRef.current.style.clipPath = `inset(${padY}% ${padX}% round ${rad}px)`;
            clipRef.current.style.filter = `drop-shadow(0 26px 60px rgba(10,14,26,${0.32 * (1 - g)}))`;
          }

          // travel → DWELL per scene
          const playU = clamp((u - 0.12) / 0.85);
          const seg = playU * P;
          const i = Math.min(P - 1, Math.floor(seg));
          const frac = seg - i;
          const prev = i > 0 ? scenes[i - 1].frame : startFrame;
          const target = frac < 0.5 ? lerp(prev, scenes[i].frame, smooth(0, 0.5, frac)) : scenes[i].frame;

          curRef.current += (target - curRef.current) * (reduced ? 1 : 1 - Math.exp(-9 * dt));
          const idx = Math.min(FRAMES - 1, Math.max(0, Math.round(curRef.current)));
          if (idx !== drawnRef.current) { drawnRef.current = idx; draw(idx); }

          // motion-blur while scrubbing + cursor parallax (the 3D/liquid feel)
          const speed = Math.abs(target - curRef.current);
          const m = px.current;
          m.cx += (m.tx - m.cx) * 0.06; m.cy += (m.ty - m.cy) * 0.06;
          if (canvasRef.current) {
            canvasRef.current.style.filter = reduced ? "none" : `blur(${clamp(speed * 0.14, 0, 4)}px)`;
            canvasRef.current.style.transform = reduced ? "scale(1.04)" : `perspective(1500px) rotateY(${m.cx * -1.6}deg) rotateX(${m.cy * 1.4}deg) scale(1.06)`;
          }

          setActive((v) => (v === i ? v : i));
          const dwelling = g > 0.9 && frac > 0.55 && frac < 0.97;
          setShown((v) => (v === dwelling ? v : dwelling));
          if (cueRef.current) cueRef.current.style.opacity = String(g * (1 - smooth(0.0, 0.06, playU)));
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [draw, scenes, startFrame, P]);

  const sc = scenes[active];
  const T = "transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <section ref={secRef} style={{ height: `${sectionVh}vh` }} className="bg-sand">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-sand">
        <div ref={clipRef} className="absolute inset-0 bg-night" style={{ clipPath: "inset(8% 7% round 26px)" }}>
          <canvas ref={canvasRef} className="block h-full w-full will-change-transform" style={{ transformOrigin: "center" }} />
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.32) 0%,transparent 26%,transparent 52%,rgba(10,14,26,0.72) 100%)" }} />
        </div>

        {/* hotspot tooltips — anchor dot → connector line → pill (NRG style) */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {sc.spots.map((h, i) => (
            <div key={`${active}-${i}`} className={T} style={{ position: "absolute", left: `${h.x}%`, top: `${h.y}%`, opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(8px)", transitionDelay: `${140 + i * 90}ms` }}>
              {/* pill (above the anchor) */}
              <div className="pointer-events-auto absolute left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-pill border border-black/5 bg-paper/95 px-3.5 py-2 font-sans text-[12.5px] font-semibold text-ink shadow-float backdrop-blur-sm" style={{ bottom: 48 }}>
                <span className="text-gold">◈</span>{h.label}
              </div>
              {/* connector line */}
              <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 7, width: 1, height: 41, background: "linear-gradient(180deg, rgba(245,242,236,0.75), rgba(201,168,106,0.95))" }} />
              {/* anchor dot */}
              <div className="absolute left-1/2" style={{ bottom: 0, width: 9, height: 9, transform: "translate(-50%,50%)", borderRadius: "50%", background: "#C9A86A", boxShadow: "0 0 0 3px rgba(245,242,236,0.3), 0 0 12px rgba(201,168,106,0.85)" }} />
            </div>
          ))}
        </div>

        {/* step chip + big title, lower-left */}
        <div className={`absolute bottom-[13vh] left-0 z-10 px-6 sm:px-10 lg:px-14 ${T}`} style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(22px)" }}>
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-gold"><span>◈</span>{sc.step}</div>
          <h2 className="max-w-[15ch] font-display text-[clamp(2.6rem,7vw,6.2rem)] font-semibold uppercase leading-[0.92] tracking-[-0.02em] text-cream" style={{ textShadow: "0 2px 40px rgba(10,14,26,0.5)" }}>{sc.title}</h2>
        </div>

        {/* description, lower-right */}
        <div className={`absolute bottom-[14vh] right-0 z-10 max-w-[34ch] px-6 text-right sm:px-10 lg:px-14 ${T}`} style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(22px)", transitionDelay: "80ms" }}>
          <p className="t-lead font-medium text-cream/90" style={{ textShadow: "0 2px 24px rgba(10,14,26,0.55)" }}>{sc.desc}</p>
        </div>

        {/* phase navigator — collapsed pill that expands (top-right) */}
        <div className="absolute right-6 top-20 z-20 sm:right-10 lg:right-14">
          <button onClick={() => setMenu((v) => !v)} className="flex items-center gap-3 rounded-pill bg-paper px-4 py-2.5 shadow-panel">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent font-mono text-[12px] text-night">{phaseOffset + active + 1}</span>
            <span className="text-[14px] font-semibold text-ink">{phaseList[phaseOffset + active]}</span>
            <span className="text-ink/40">≡</span>
          </button>
          {menu && (
            <div className="mt-2 w-[264px] rounded-card bg-paper p-2 shadow-float">
              {phaseList.map((label, i) => {
                const on = i === phaseOffset + active;
                return (
                  <div key={i} className="flex items-center gap-3 rounded-chip px-3 py-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full font-mono text-[11px]" style={{ background: on ? "var(--color-accent)" : "var(--color-stone)", color: on ? "var(--color-night)" : "var(--color-ink)" }}>{i + 1}</span>
                    <span className="text-[13.5px] font-semibold" style={{ color: on ? "var(--color-ink)" : "rgba(26,26,26,0.5)" }}>{label}</span>
                  </div>
                );
              })}
              <a href="/contact" className="mt-1 block rounded-pill bg-accent py-2.5 text-center text-[13px] font-bold text-night no-underline">Get in Touch</a>
            </div>
          )}
        </div>

        {/* scroll cue while the card opens */}
        <div ref={cueRef} className="pointer-events-none absolute bottom-8 left-6 z-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60 sm:left-10 lg:left-14" style={{ opacity: 0 }}>Scroll to explore</div>
      </div>
    </section>
  );
}
