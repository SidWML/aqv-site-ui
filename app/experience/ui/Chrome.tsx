"use client";

import * as React from "react";
import s from "../tour.module.css";
import { STATIONS } from "../data/stations";
import { prog, useTour, setTour } from "../store";

/** nearest station index to the live scroll position (rAF, no re-render storms) */
function useNearest() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const loop = () => {
      let bi = 0;
      for (let k = 1; k < STATIONS.length; k++) if (Math.abs(STATIONS[k].t - prog.pC) < Math.abs(STATIONS[bi].t - prog.pC)) bi = k;
      setI((p) => (p === bi ? p : bi));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return i;
}

function jump(t: number) { prog.pT = t; setTour({ menuOpen: false, entered: true }); }

/** placeholder-safe photo (spec assets may not exist yet — never a broken image) */
function StationPhoto({ photo, cap }: { photo: string; cap?: string }) {
  const [ok, setOk] = React.useState(true);
  return (
    <div className={s.photoWrap}>
      {ok ? <img className={s.photo} src={`/images/${photo}`} alt={cap || ""} onError={() => setOk(false)} />
        : <div className={s.photoPh}>◈ {photo}</div>}
      {cap && <div className={s.photoCap}>{cap}</div>}
    </div>
  );
}

function Landing() {
  const entered = useTour((s2) => s2.entered);
  return (
    <div className={`${s.landing} ${entered ? s.landingGone : ""}`}>
      <div className={s.landingInner}>
        <div className={s.landingKick}>AMARAVATI QUANTUM VALLEY · GOVERNMENT OF ANDHRA PRADESH</div>
        <h1 className={s.landingH1}>THE QUANTUM CENTURY IS <span className={s.hl}>BUILT</span>, NOT AWAITED.</h1>
        <p className={s.landingSub}>A continuous walk through India&apos;s most advanced quantum ecosystem — from the boulevard to 3.98&nbsp;Kelvin. Take the walk.</p>
        <div className={s.landingBtns}>
          <button className={s.btnLeaf} onClick={() => setTour({ entered: true })}>◈ Enter the Valley →</button>
          <a className={s.btnGhost} href="/experience/summary">Skip to summary</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const idx = useNearest();
  const menuOpen = useTour((s2) => s2.menuOpen);
  const st = STATIONS[idx];
  return (
    <>
      <header className={s.header}>
        <div className={s.brand}>AQV<span style={{ color: "var(--lt-gold)" }}>✦</span></div>
        <div className={s.hgroup}>
          <button className={s.pill} onClick={() => setTour({ modalOpen: true })}><span className={s.diamond}>◈</span> What is AQV?</button>
          <button className={s.pill} onClick={() => setTour({ menuOpen: !menuOpen })}>
            <span className={s.pillNum}>{st.num}</span> {st.phase} <span style={{ opacity: 0.5 }}>≡</span>
          </button>
          <a className={`${s.pill} ${s.getInTouch}`} href="/contact">Get in Touch</a>
        </div>
      </header>
      {menuOpen && (
        <div className={s.menu}>
          {STATIONS.map((station, i) => (
            <div key={i} className={s.menuItem} onClick={() => jump(station.t)}>
              <span className={`${s.menuIdx} ${i === idx ? s.menuIdxActive : ""}`}>{station.num}</span>
              <span className={s.menuLabel}>{station.phase}</span>
            </div>
          ))}
          <a className={`${s.btnLeaf} ${s.menuGet}`} href="/contact" style={{ display: "inline-block", textAlign: "center", textDecoration: "none" }}>Get in Touch</a>
        </div>
      )}
    </>
  );
}

function StationOverlay() {
  const settled = useTour((s2) => s2.settled);
  const [shown, setShown] = React.useState(-1);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    if (settled >= 0 && STATIONS[settled] && !STATIONS[settled].finale) {
      setShown(settled);
      const r = requestAnimationFrame(() => setVis(true));
      return () => cancelAnimationFrame(r);
    }
    setVis(false);
  }, [settled]);
  const st = shown >= 0 ? STATIONS[shown] : null;
  if (!st || st.finale) return null;
  return (
    <div className={s.overlay}>
      <div className={`${s.panel} ${s.fade} ${vis ? s.fadeIn : ""}`}>
        <div className={s.eyebrow}><span className={s.diamond}>◈</span> {st.num} · {st.eyebrow}</div>
        <h2 className={s.oTitle}>{st.title}</h2>
        <p className={s.oBody}>{st.body}</p>
        {st.statChips && st.statChips.length > 0 && (
          <div className={s.chips}>{st.statChips.map((c, i) => <span key={i} className={s.chip}>{c}</span>)}</div>
        )}
        {st.photo && <StationPhoto photo={st.photo} cap={st.photoCap} />}
      </div>
    </div>
  );
}

function Dots() {
  const idx = useNearest();
  const entered = useTour((s2) => s2.entered);
  if (!entered) return null;
  return (
    <div className={s.dots}>
      {STATIONS.map((station, i) => (
        <button key={i} className={`${s.dot} ${i === idx ? s.dotActive : ""}`} aria-label={station.phase} onClick={() => jump(station.t)} />
      ))}
    </div>
  );
}

function Cue() {
  const entered = useTour((s2) => s2.entered);
  const idx = useNearest();
  if (!entered || idx >= STATIONS.length - 1) return null;
  return <div className={s.cue}><span>⌇</span> Scroll to explore</div>;
}

function Modal() {
  const open = useTour((s2) => s2.modalOpen);
  if (!open) return null;
  return (
    <div className={s.modalWrap} onClick={() => setTour({ modalOpen: false })}>
      <div className={s.modalCard} onClick={(e) => e.stopPropagation()}>
        <button className={s.modalClose} onClick={() => setTour({ modalOpen: false })}>×</button>
        <div className={s.eyebrow}><span className={s.diamond}>◈</span> WHAT IS AQV?</div>
        <h2 className={s.oTitle} style={{ fontSize: "2rem" }}>India&apos;s quantum ecosystem, built first.</h2>
        <p className={s.oBody}>Amaravati Quantum Valley unites infrastructure, hardware, research, talent and capital into one system — anchored by IBM Quantum System Two and already producing proof, from a sub-4 Kelvin indigenous refrigerator to quantum-for-governance.</p>
      </div>
    </div>
  );
}

function Finale() {
  const settled = useTour((s2) => s2.settled);
  const show = settled === STATIONS.length - 1;
  if (!show) return null;
  return (
    <div className={s.finaleWrap}>
      <div className={s.finaleCard}>
        <h1 className={s.finaleH1}>NOW BUILD <span className={s.hl}>YOURS.</span></h1>
        <p className={s.finaleBody}>Startup, lab, or company — bring your quantum components, devices and systems here. Test at sub-4 Kelvin in India&apos;s first indigenous cryogenic facility.</p>
        <div className={s.finaleBtns}>
          <a className={s.btnLeaf} href="/contact?type=testbed" style={{ textDecoration: "none" }}>Book the Testbed</a>
          <a className={`${s.pill}`} href="/contact?type=partner" style={{ textDecoration: "none" }}>Partner with AQV</a>
          <a className={`${s.pill}`} href="/contact?type=invest" style={{ textDecoration: "none" }}>Invest &amp; Establish</a>
        </div>
        <div className={s.finaleFine}>AMARAVATI QUANTUM VALLEY · GOVERNMENT OF ANDHRA PRADESH · NATIONAL QUANTUM MISSION</div>
      </div>
    </div>
  );
}

export default function Chrome() {
  return (<><Header /><StationOverlay /><Dots /><Cue /><Modal /><Finale /><Landing /></>);
}
