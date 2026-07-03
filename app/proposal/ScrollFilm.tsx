"use client";

import * as React from "react";

export type Metric = { value: string; label: string };
export type Phase = { range: [number, number, number, number]; num?: string; eyebrow: string; title: React.ReactNode; sub?: string; metrics?: Metric[]; cta?: boolean };

const FRAMES = 162;
const src = (i: number) => `/images/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;

/** Opacity envelope: 0 → 1 (a→b), hold (b→c), 1 → 0 (c→d). */
function bump(p: number, [a, b, c, d]: [number, number, number, number]) {
  if (p <= a || p >= d) return 0;
  if (p < b) return (p - a) / ((b - a) || 1);
  if (p <= c) return 1;
  return 1 - (p - c) / ((d - c) || 1);
}

/** NRG-style interactive film: a sticky full-screen canvas whose frame is
 *  scrubbed by scroll, tilts toward the cursor (parallax 3D), opens on a
 *  centered "Tap to Explore" intro, then settles on story chapters. */
export default function ScrollFilm({ phases, vh = 850 }: { phases: Phase[]; vh?: number }) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const imagesRef = React.useRef<HTMLImageElement[]>([]);
  const frameRef = React.useRef(-1);
  const [p, setP] = React.useState(0);
  const [ready, setReady] = React.useState(false);

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

  // preload the frame sequence
  React.useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < FRAMES; i++) {
      const img = new Image();
      img.src = src(i);
      if (i === 0) img.onload = () => { draw(0); setReady(true); };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [draw]);

  // size the canvas to the viewport (device-pixel aware)
  React.useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.floor(window.innerWidth * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
      draw(Math.max(0, frameRef.current));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [draw]);

  // scroll → progress + frame
  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const prog = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        setP(prog);
        const idx = Math.min(FRAMES - 1, Math.max(0, Math.round(prog * (FRAMES - 1))));
        if (idx !== frameRef.current) { frameRef.current = idx; draw(idx); }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [draw]);

  // cursor parallax — the scene tilts toward the pointer (the "3D" feel)
  React.useEffect(() => {
    const m = { tx: 0, ty: 0, cx: 0, cy: 0 };
    const onMove = (e: MouseEvent) => { m.tx = (e.clientX / window.innerWidth - 0.5) * 2; m.ty = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      m.cx += (m.tx - m.cx) * 0.06;
      m.cy += (m.ty - m.cy) * 0.06;
      const c = canvasRef.current;
      if (c) c.style.transform = `perspective(1300px) rotateY(${m.cx * -2.4}deg) rotateX(${m.cy * 2.4}deg) scale(1.1) translate3d(${m.cx * -1.3}%, ${m.cy * -1.3}%, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const goto = (tp: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + tp * scrollable, behavior: "smooth" });
  };

  const introO = p < 0.05 ? Math.max(0, 1 - p / 0.05) : 0;

  return (
    <section ref={wrapRef} className="relative bg-night" style={{ height: `${vh}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full will-change-transform" style={{ transformOrigin: "center" }} />

        {/* legibility scrims */}
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(8,11,22,0.82) 0%,rgba(8,11,22,0.3) 44%,transparent 72%)", opacity: 1 - introO }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,11,22,0.5) 0%,transparent 30%,transparent 58%,rgba(8,11,22,0.78) 100%)" }} />

        {!ready && <div className="absolute inset-0 flex items-center justify-center"><span className="t-overline text-cream/40">ENTERING AMARAVATI QUANTUM VALLEY…</span></div>}

        {/* ---- centered welcome intro ---- */}
        {introO > 0 && (
          <div style={{ opacity: introO, pointerEvents: introO > 0.5 ? "auto" : "none" }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-6 t-overline text-cream/70">WELCOME TO</div>
            <h1 className="font-serif text-[clamp(2.6rem,8vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-cream">Amaravati <em className="italic text-accent">Quantum Valley</em></h1>
            <p className="mt-6 max-w-100 t-lead text-cream/[0.78]">India&apos;s first sovereign quantum ecosystem.</p>
            <button onClick={() => goto(0.1)} className="mt-11 inline-flex cursor-pointer items-center gap-3 rounded-pill border border-cream/30 bg-white/10 px-9 py-4.5 t-eyebrow text-cream backdrop-blur-md transition-colors hover:bg-white/20">
              TAP TO EXPLORE
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-night"><svg width="12" height="12" viewBox="0 0 14 14"><path d="M3 7 H11 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg></span>
            </button>
          </div>
        )}

        {/* ---- story chapters ---- */}
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
                    {ph.metrics.map((mm) => (
                      <div key={mm.label}><div className="font-serif text-[clamp(1.5rem,2.6vw,2.3rem)] italic leading-none text-accent">{mm.value}</div><div className="mt-1.5 t-overline text-cream/55">{mm.label}</div></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div aria-hidden className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent" style={{ transform: `scaleX(${p})` }} />
        <div className="pointer-events-none absolute bottom-7 right-6 t-overline text-cream/40" style={{ opacity: 1 - introO }}>SCROLL</div>
      </div>
    </section>
  );
}
