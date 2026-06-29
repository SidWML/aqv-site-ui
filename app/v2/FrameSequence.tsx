"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from "motion/react";

const FRAME_COUNT = 51;
const src = (i: number) => `/images/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

/** A scroll-driven text stage that fades in then out across a scroll range. */
function Stage({ progress, range, eyebrow, title, sub }: { progress: MotionValue<number>; range: [number, number, number, number]; eyebrow: string; title: React.ReactNode; sub: string }) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);
  return (
    <motion.div style={{ opacity, y }} className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
      <span className="mb-5 t-overline text-accent">{eyebrow}</span>
      <h2 className="max-w-[18ch] font-display text-[clamp(2rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em]">{title}</h2>
      <p className="mt-6 max-w-110 t-lead text-cream/70">{sub}</p>
    </motion.div>
  );
}

/** Apple-style cinematic frame sequence: a sticky canvas scrubbed by scroll
 *  through 51 frames, with text stages fading through over the top. */
export default function FrameSequence() {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const imagesRef = React.useRef<HTMLImageElement[]>([]);
  const frameRef = React.useRef(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

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

  // preload all frames
  React.useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = src(i);
      if (i === 0) img.onload = () => draw(0);
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [draw]);

  // size canvas to the viewport (device-pixel aware)
  React.useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.floor(window.innerWidth * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
      draw(frameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [draw]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(p * (FRAME_COUNT - 1))));
    if (idx === frameRef.current) return;
    frameRef.current = idx;
    requestAnimationFrame(() => draw(idx));
  });

  return (
    <section ref={wrapRef} className="relative h-[280vh] bg-night">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" />
        {/* legibility + vignette */}
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 50%, rgba(10,14,26,0.25), rgba(10,14,26,0.82) 100%)" }} />
        <div aria-hidden className="v2-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />

        <Stage progress={scrollYProgress} range={[0.0, 0.08, 0.24, 0.32]} eyebrow="ENGINEERED FOR THE QUANTUM ERA"
          title={<>Where the impossible<br />becomes <span className="text-accent">infrastructure.</span></>}
          sub="A campus, a machine and an ecosystem — built from the ground up for quantum." />
        <Stage progress={scrollYProgress} range={[0.36, 0.46, 0.6, 0.68]} eyebrow="DOWN TO 15 MILLIKELVIN"
          title={<>Colder than<br />deep <span className="text-accent">space.</span></>}
          sub="Dilution refrigeration holds the qubits in the stillest state in the known universe." />
        <Stage progress={scrollYProgress} range={[0.72, 0.82, 0.94, 1.0]} eyebrow="FROM AMARAVATI, FOR THE WORLD"
          title={<>One valley.<br />Infinite <span className="text-accent">states.</span></>}
          sub="The convergence of science, capital and ambition — in one place." />

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 t-overline text-cream/40">KEEP SCROLLING</div>
      </div>
    </section>
  );
}
