"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-scrubbed video. The clip already contains the "creation → dissolve"
 * animation; this component does NOT alter the video — it just maps the section's
 * progress through the viewport onto the video's `currentTime`, so scrolling down
 * plays it forward (create → dissolve) and scrolling up rewinds it.
 *
 * Drop in as an `absolute inset-0` background layer; place content above with z-index.
 * For smooth scrubbing the source should be encoded with frequent keyframes.
 */
export default function ScrollVideoScrub({
  src,
  poster,
  label,
  className = "",
  fit = "contain",
  smoothing = 0.12,
}: {
  src: string;
  poster?: string;
  label?: string;
  className?: string;
  /** "contain" shows the whole frame (no zoom/crop); "cover" fills + crops. */
  fit?: "contain" | "cover";
  /** 0–1: how quickly the frame chases the scroll target (higher = snappier). */
  smoothing?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const vid = videoRef.current;
    if (!wrap || !vid) return;

    let raf = 0;
    let cur = 0; // smoothed progress 0..1
    let target = 0;
    let duration = 0;
    let inView = true;

    const readDuration = () => {
      duration = Number.isFinite(vid.duration) ? vid.duration : 0;
    };
    // Prime the decode pipeline so seeked frames actually paint (esp. Safari/iOS).
    const prime = () => {
      readDuration();
      vid.play().then(() => vid.pause()).catch(() => {});
    };
    vid.addEventListener("loadedmetadata", prime);
    if (vid.readyState >= 1) prime();

    const computeTarget = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the section's top reaches the viewport bottom (just appearing),
      // 1 when its bottom passes the viewport top (about to leave).
      target = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!duration || !inView) return;
      cur += (target - cur) * smoothing;
      const time = cur * duration;
      if (Math.abs(vid.currentTime - time) > 0.015) {
        try {
          vid.currentTime = time;
        } catch {
          /* not seekable yet */
        }
      }
    };

    computeTarget();
    cur = target; // start in sync, no opening jump
    raf = requestAnimationFrame(tick);

    const onScroll = () => computeTarget();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (inView = e.isIntersecting)),
      { threshold: 0 }
    );
    io.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      vid.removeEventListener("loadedmetadata", prime);
    };
  }, [smoothing]);

  return (
    <div ref={wrapRef} aria-hidden className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        aria-label={label}
        className={`block h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
      />
    </div>
  );
}
