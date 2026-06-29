"use client";

import React, { useState, useEffect, useRef } from "react";
import { Reveal, SectionShell } from "../ui";
import { ArrowUR, ArrowR, Pin, Placeholder } from "../dc";

/* ----------------------------------------------------------------- data --- */

const cats = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "partnerships", label: "Partnerships" },
  { id: "announcements", label: "Announcements" },
  { id: "events", label: "Events" },
  { id: "press", label: "Press" },
];
const catBase: React.CSSProperties = { cursor: "pointer", fontSize: "12px", fontWeight: 500, letterSpacing: "0.04em", padding: "11px 20px", borderRadius: "30px", transition: "all .3s ease" };

const allArticles = [
  { cat: "PARTNERSHIP", catId: "partnerships", title: "AQV expands collaboration on quantum hardware and talent development", meta: "May 16, 2025  ·  4 min read", img: "partnership signing" },
  { cat: "ANNOUNCEMENT", catId: "announcements", title: "New supercomputing infrastructure to power AQV’s quantum-AI research", meta: "May 12, 2025  ·  3 min read", img: "campus building" },
  { cat: "RESEARCH", catId: "research", title: "AQV researchers publish breakthrough in error-corrected qubit stability", meta: "May 9, 2025  ·  6 min read", img: "researchers in lab" },
];

/* ------------------------------------------------------------- component --- */

/* ============ 09 · INSIGHTS / JOURNAL (light) ============ */
export default function Journal() {
  const [activeCat, setActiveCat] = useState("all");
  const articles = activeCat === "all" ? allArticles : allArticles.filter((a) => a.catId === activeCat);

  // The page-level reveal observer only sees cards present at mount; reveal any
  // cards rendered by a later category switch so they don't stay hidden.
  const gridRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    gridRef.current?.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("aqv-in"));
  }, [activeCat]);

  return (
    <SectionShell theme="light" id="insights" innerClassName="px-5 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-27.5">
      {/* header row */}
      <div className="mb-8.5 flex flex-wrap items-start justify-between gap-6">
        <div>
          <Reveal className="mb-4.5 flex items-center gap-2.5 font-mono">
            <span className="t-eyebrow-num text-accent">09</span>
            <span className="text-ink/30">/</span>
            <span className="t-eyebrow text-ink/60">JOURNAL</span>
          </Reveal>
          <Reveal as="h2" variant="wipe" delay={0.05} className="mb-4 t-h2">
            Latest from AQV
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-95 t-body text-ink/65">
            Discover breakthroughs, announcements, and stories from across the AQV ecosystem.
          </Reveal>
        </div>
        <div className="flex flex-col items-end gap-5.5">
          <a
            href="#top"
            className="t-eyebrow inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-ink no-underline"
          >
            VIEW ALL NEWS <ArrowUR size={13} className="text-accent" sw={1.4} />
          </a>
          <div className="flex flex-wrap gap-2">
            {cats.map((ct) => (
              <button
                key={ct.id}
                onClick={() => setActiveCat(ct.id)}
                style={
                  ct.id === activeCat
                    ? { ...catBase, background: "#0A0E1A", color: "#F5F2EC", border: "1px solid #0A0E1A" }
                    : { ...catBase, background: "transparent", color: "rgba(26,26,26,0.7)", border: "1px solid rgba(26,26,26,0.2)" }
                }
              >
                {ct.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* featured grid */}
      <div className="mb-5.5 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5.5">
        <Reveal className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] overflow-hidden rounded-card border border-ink/10 bg-paper">
          <div className="relative min-h-85">
            <Placeholder label="quantum lab — system render" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="flex flex-col justify-center p-10">
            <span className="mb-4.5 t-eyebrow text-accent">RESEARCH BREAKTHROUGH</span>
            <h3 className="mb-4.5 t-title-lg">AQV launches India&apos;s first 100+ qubit research initiative</h3>
            <p className="mb-7.5 t-body-sm text-ink/65">A major step towards building sovereign quantum computing capability and accelerating scientific discovery for national impact.</p>
            <div className="flex items-center justify-between border-t border-ink/[0.12] pt-4.5">
              <span className="t-eyebrow flex items-center gap-2">READ STORY <ArrowUR size={13} className="text-accent" sw={1.4} /></span>
              <span className="t-body-sm text-ink/50">May 22, 2025</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col overflow-hidden rounded-card border border-ink/10 bg-paper">
          <div className="relative h-50">
            <Placeholder label="summit stage — keynote" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="flex flex-1 flex-col p-7.5">
            <div className="mb-4 flex items-center justify-between">
              <span className="t-eyebrow text-accent">UPCOMING EVENT</span>
              <span className="t-eyebrow text-ink/50">JUN 18–20, 2025</span>
            </div>
            <h3 className="mb-auto t-title">AQV Quantum Future Summit 2025</h3>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 t-caption text-ink/60">
                <Pin size={14} className="text-accent" sw={1.3} r={2} />Amaravati Quantum Valley, AP
              </div>
              <span className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-accent/[0.18]">
                <svg width="15" height="15" viewBox="0 0 16 16"><path d="M3 8 H13 M9 4 L13 8 L9 12" className="stroke-accent" strokeWidth="1.4" fill="none" /></svg>
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* articles grid */}
      <div ref={gridRef} className="mb-7.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
        {articles.map((a, i) => (
          <Reveal
            key={a.title}
            variant="scale"
            delay={i * 0.08}
            className="overflow-hidden rounded-card border border-ink/10 bg-paper"
          >
            <div className="relative h-50">
              <Placeholder label={a.img} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="p-6.5">
              <span className="t-eyebrow text-accent">{a.cat}</span>
              <h3 className="my-3.5 mb-5.5 t-title-sm">{a.title}</h3>
              <div className="flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="t-body-sm text-ink/55">{a.meta}</span>
                <ArrowR size={14} stroke="rgba(26,26,26,0.5)" sw={1.4} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* newsletter subscribe bar */}
      <Reveal className="flex flex-wrap items-center justify-between gap-7.5 rounded-card bg-stone px-5 sm:px-8 lg:px-10 py-8.5">
        <div className="flex items-center gap-5">
          <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full bg-accent/[0.18]">
            <svg width="22" height="22" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" className="stroke-accent" strokeWidth="1.3" fill="none" /><path d="M3 7 L12 13 L21 7" className="stroke-accent" strokeWidth="1.3" fill="none" /></svg>
          </span>
          <div>
            <div className="mb-1.25 t-title">Stay updated with the latest from AQV</div>
            <div className="t-body-sm text-ink/60">Subscribe to our newsletter for research highlights, events and ecosystem updates.</div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2.5 rounded-control border border-ink/15 bg-paper py-1.75 pl-5.5 pr-1.75 sm:w-auto">
          <input placeholder="Enter your email" className="min-w-0 flex-1 border-none bg-transparent t-body text-ink outline-none sm:w-50 sm:flex-none" />
          <button className="t-eyebrow flex shrink-0 cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-control border-none bg-night px-6 py-3.25 text-cream">
            SUBSCRIBE <ArrowR size={14} stroke="currentColor" sw={1.4} />
          </button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
