import type { Metadata } from "next";
import Link from "next/link";
import { STATIONS } from "../data/stations";

export const metadata: Metadata = {
  title: "The Walk — Summary · Amaravati Quantum Valley",
  description: "Every stop of the AQV experience, as a static summary.",
};

const wrap: React.CSSProperties = { minHeight: "100vh", background: "#EFECE2", color: "var(--lt-ink)", fontFamily: "'Instrument Sans', system-ui, sans-serif", padding: "clamp(28px, 6vw, 80px)" };
const kick: React.CSSProperties = { fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--lt-gold-2)", marginBottom: 18 };
const h1: React.CSSProperties = { fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", margin: "0 0 12px" };
const lead: React.CSSProperties = { color: "var(--lt-ink-2)", fontSize: "1.05rem", maxWidth: "56ch", margin: "0 0 40px" };
const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 };
const card: React.CSSProperties = { background: "#fff", border: "1px solid var(--lt-line)", borderRadius: 20, boxShadow: "var(--lt-shadow)", padding: "24px 26px" };
const num: React.CSSProperties = { fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.16em", color: "var(--lt-gold-2)", marginBottom: 10 };
const ttl: React.CSSProperties = { fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "1.15rem", lineHeight: 1.15, letterSpacing: "-0.01em", textTransform: "uppercase", margin: "0 0 10px" };
const body: React.CSSProperties = { color: "var(--lt-ink-2)", fontSize: "0.95rem", lineHeight: 1.55, margin: "0 0 14px" };
const chipRow: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8 };
const chip: React.CSSProperties = { fontFamily: "'Space Mono', monospace", fontSize: 11, background: "var(--paper-2)", borderRadius: 999, padding: "5px 11px" };
const back: React.CSSProperties = { fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", background: "var(--leaf-2)", borderRadius: 999, padding: "13px 24px", textDecoration: "none", display: "inline-block", marginTop: 40, fontWeight: 700 };

export default function SummaryPage() {
  const stops = STATIONS.filter((s) => !s.finale);
  return (
    <main style={wrap}>
      <div style={kick}>AMARAVATI QUANTUM VALLEY · THE WALK</div>
      <h1 style={h1}>The valley, stop by stop.</h1>
      <p style={lead}>Every stop of the experience as a static summary — the same story, without the 3D. <Link href="/experience" style={{ color: "var(--leaf)", fontWeight: 700 }}>Take the full walk →</Link></p>
      <div style={grid}>
        {stops.map((st) => (
          <article key={`${st.num}-${st.phase}`} style={card}>
            <div style={num}>{st.num} ── {st.phase.toUpperCase()}</div>
            <h2 style={ttl}>{st.title}</h2>
            <p style={body}>{st.body}</p>
            {st.statChips && st.statChips.length > 0 && (
              <div style={chipRow}>{st.statChips.map((c, i) => <span key={i} style={chip}>{c}</span>)}</div>
            )}
          </article>
        ))}
      </div>
      <Link href="/contact?type=testbed" style={back}>Book the Testbed →</Link>
    </main>
  );
}
