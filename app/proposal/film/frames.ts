"use client";

// Merged 12-clip miniature-model film, transcoded from public/aqv.mp4.
export const FRAMES = 405;
export const frameSrc = (i: number) => `/images/tour/frame_${String(i + 1).padStart(4, "0")}.jpg`;

let cache: HTMLImageElement[] | null = null;

/** Preload once, shared across every FilmAct on the page. */
export function loadFrames(): HTMLImageElement[] {
  if (cache) return cache;
  const arr: HTMLImageElement[] = [];
  for (let i = 0; i < FRAMES; i++) {
    const im = new Image();
    im.decoding = "async";
    im.src = frameSrc(i);
    arr.push(im);
  }
  cache = arr;
  return arr;
}
