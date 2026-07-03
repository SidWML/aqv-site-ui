"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import s from "./tour.module.css";
import Chrome from "./ui/Chrome";
import Hud from "./ui/Hud";
import { prog, setTour } from "./store";

/* Poster = full-screen fallback so the page NEVER shows an empty canvas (Part 2.1).
   render-towers.png is a spec asset that may not exist yet → onError leaves the
   paper block + chip (never a broken image). */
function Poster() {
  const [imgOk, setImgOk] = React.useState(true);
  return (
    <div className={s.poster}>
      {imgOk && <img src="/images/render-towers.png" alt="" className={s.posterImg} onError={() => setImgOk(false)} />}
      <div className={s.posterChip}>◈ loading the valley…</div>
    </div>
  );
}

const Scene = dynamic(() => import("./Scene"), { ssr: false, loading: () => <Poster /> });

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { err: string | null }> {
  state = { err: null as string | null };
  static getDerivedStateFromError(e: Error) { return { err: e.message }; }
  render() {
    return (<>{this.props.children}{this.state.err && <div className={s.errBanner}>Scene error: {this.state.err} · <a href="/experience/summary" style={{ color: "#fff", textDecoration: "underline" }}>view the summary →</a></div>}</>);
  }
}

export default function ExperiencePage() {
  const [booted, setBooted] = React.useState(false);
  const [stalled, setStalled] = React.useState(false);

  React.useEffect(() => {
    prog.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const enter = () => setTour({ entered: true });
    window.addEventListener("wheel", enter, { once: true, passive: true });
    window.addEventListener("touchstart", enter, { once: true, passive: true });
    window.addEventListener("keydown", enter, { once: true });
    // boot-guard: if nothing has rendered after 2s, surface a route to the static summary
    const id = window.setTimeout(() => setStalled(true), 2000);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(id);
      window.removeEventListener("wheel", enter);
      window.removeEventListener("touchstart", enter);
      window.removeEventListener("keydown", enter);
    };
  }, []);

  return (
    <div className={s.root}>
      <ErrorBoundary>
        <div className={s.canvasWrap}><Scene onReady={() => setBooted(true)} /></div>
      </ErrorBoundary>
      {!booted && <Poster />}
      {!booted && stalled && (
        <div className={s.bootFail}>Taking longer than expected — <a href="/experience/summary">open the summary instead →</a></div>
      )}
      <Hud />
      <Chrome />
    </div>
  );
}
