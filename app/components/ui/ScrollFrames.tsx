"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Scroll-scrubbed image sequence. Preloads a numbered frame set (e.g. an
 * exported video) and paints the frame that matches the host section's progress
 * through the viewport onto a <canvas>. Scrolling down advances the sequence
 * (create → dissolve); scrolling up rewinds it. Frame-accurate and codec-free.
 *
 * Drop in as an `absolute inset-0` background layer; place content above with z-index.
 */
export default function ScrollFrames({
  dir,
  prefix = "",
  ext = "jpg",
  count,
  pad = 3,
  start = 1,
  fit = "contain",
  smoothing = 0.14,
  trackRef,
  className = "",
  label,
}: {
  /** Folder under /public, e.g. "/images/frames". */
  dir: string;
  /** Filename prefix before the number, e.g. "ezgif-frame-". */
  prefix?: string;
  /** File extension without the dot. */
  ext?: string;
  /** Total number of frames. */
  count: number;
  /** Zero-pad width of the frame number. */
  pad?: number;
  /** First frame number (usually 1). */
  start?: number;
  /** "contain" shows the whole frame (no crop); "cover" fills + crops. */
  fit?: "contain" | "cover";
  /** 0–1: how quickly the frame chases the scroll target (higher = snappier). */
  smoothing?: number;
  /**
   * Optional taller "scroll track" element. When provided, progress is measured
   * against how far the track has scrolled past the viewport top — use this for a
   * pinned (`sticky`) stage so the canvas stays fixed while the sequence scrubs.
   */
  trackRef?: RefObject<HTMLElement | null>;
  className?: string;
  label?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---- preload frames ----
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < count; i++) {
      const n = String(start + i).padStart(pad, "0");
      const img = new Image();
      img.decoding = "async";
      img.src = `${dir}/${prefix}${n}.${ext}`;
      const idx = i;
      img.onload = () => {
        if (idx === lastDrawn || lastDrawn < 0) draw(curIndex);
      };
      imgs[i] = img;
    }

    let cur = 0; // smoothed progress 0..1
    let target = 0;
    let curIndex = 0;
    let lastDrawn = -1;
    let inView = true;
    let raf = 0;

    const draw = (index: number) => {
      const i = Math.max(0, Math.min(count - 1, Math.round(index)));
      const img = imgs[i];
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = fit === "cover" ? Math.max(cw / iw, ch / ih) : Math.min(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      lastDrawn = i;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      lastDrawn = -1; // force redraw at new size
      draw(curIndex);
    };

    const computeTarget = () => {
      const vh = window.innerHeight || 1;
      const track = trackRef?.current;
      if (track) {
        // pinned: 0 when the track's top hits the viewport top, 1 when its
        // bottom reaches the viewport bottom (i.e. the sticky stage releases).
        const rect = track.getBoundingClientRect();
        target = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - vh)));
      } else {
        const rect = wrap.getBoundingClientRect();
        target = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      }
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!inView) return;
      cur += (target - cur) * smoothing;
      curIndex = cur * (count - 1);
      if (Math.round(curIndex) !== lastDrawn) draw(curIndex);
    };

    computeTarget();
    cur = target;
    curIndex = cur * (count - 1);
    resize();
    raf = requestAnimationFrame(tick);

    const onScroll = () => computeTarget();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (inView = e.isIntersecting)),
      { threshold: 0 }
    );
    io.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [dir, prefix, ext, count, pad, start, fit, smoothing, trackRef]);

  // Fills whatever box the parent gives it — supply position + size via `className`.
  return (
    <div ref={wrapRef} aria-label={label} className={`overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
