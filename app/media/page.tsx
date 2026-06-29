"use client";

import { useState } from "react";
import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon, ArrowUR, ArrowR } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const filters = ["All", "Press", "Research", "Events", "Blog"];

/* lead feature shown in the magazine layout */
const lead = {
  cat: "RESEARCH BREAKTHROUGH",
  title: "AQV launches India's first 100+ qubit research initiative",
  excerpt:
    "A defining step toward sovereign quantum computing — pairing frontier hardware with a national research mandate to accelerate discovery from Amaravati.",
  meta: "May 22, 2025 · 6 min read",
  img: "/images/s6/c1.png",
};

/* offset smaller stories in the asymmetric layout */
const stories = [
  { cat: "PRESS", title: "AQV expands collaboration on quantum hardware and talent", meta: "May 16, 2025 · 4 min", img: "/images/s6/c2.png" },
  { cat: "BLOG", title: "Why a quantum valley needs the whole value chain", meta: "May 14, 2025 · 5 min", img: "/images/s6/c3.png" },
  { cat: "RESEARCH", title: "New supercomputing infrastructure to power quantum-AI research", meta: "May 12, 2025 · 3 min", img: "/images/s6/c4.png" },
  { cat: "BLOG", title: "From learner to researcher: inside the WISER pipeline", meta: "May 10, 2025 · 6 min", img: "/images/s6/c5.png" },
];

/* upcoming press / events strip */
const events = [
  { date: "JUN 18–20", title: "AQV Quantum Future Summit 2025", place: "Amaravati Convention Centre", tag: "FLAGSHIP" },
  { date: "JUL 8–12", title: "Deep-tech Founders Week", place: "AQV Launchpad", tag: "FOUNDERS" },
  { date: "AUG 02", title: "Quantum Hardware Media Briefing", place: "Press Hall, AQV Campus", tag: "PRESS" },
];

/* newsroom stats */
const stats = [
  { value: "120+", label: "Stories published" },
  { value: "45+", label: "Press features" },
  { value: "18", label: "Events hosted" },
  { value: "9", label: "Languages covered" },
];

/* press-kit contents */
const kit = [
  { t: "Press releases", d: "Announcements and official statements.", icon: "M6 3 H15 L19 7 V21 H6 Z M14 3 V7 H18 M9 12 H16 M9 16 H16" },
  { t: "Brand & media kit", d: "Logos, wordmarks and approved imagery.", icon: "M4 5 H20 V19 H4 Z M4 9 H20 M9 5 V9 M8 14 L11 17 L16 12" },
  { t: "Fact sheets", d: "Key figures, timelines and the numbers.", icon: "M5 4 H15 L19 8 V20 H5 Z M9 9 H15 M9 13 H15 M9 17 H13" },
  { t: "Spokespeople", d: "Interviews with AQV leadership and researchers.", icon: "M12 3 a4 4 0 0 1 4 4 a4 4 0 0 1 -8 0 a4 4 0 0 1 4 -4 Z M5 21 c0-4 3-6 7-6 s7 2 7 6" },
];

/* ============================================================== page === */

export default function MediaPage() {
  const [active, setActive] = useState("All");
  const feed =
    active === "All" ? stories : stories.filter((s) => s.cat === active.toUpperCase());

  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="media" theme="dark" />

      {/* ============ 01 · FEATURED-STORY HERO ============ */}
      <section className="relative overflow-hidden bg-night px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <Reveal className="mb-10 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">01</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">NEWS &amp; MEDIA · THE NEWSROOM</span>
          </Reveal>

          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <h1 className="mb-7 t-display">
                <TextReveal text="Stories from" className="block" delay={0.08} />
                <TextReveal text="the quantum" className="block" delay={0.28} />
                <TextReveal text="frontier." className="block text-accent" delay={0.46} />
              </h1>
              <Reveal as="p" delay={0.6} className="max-w-115 t-lead text-cream/[0.72]">
                Breakthroughs, partnerships and field notes from across the Amaravati Quantum Valley ecosystem — reported as they happen.
              </Reveal>
            </div>

            {/* live ticker / index card */}
            <Reveal delay={0.3} variant="scale" className="lg:pb-2">
              <div className="rounded-card border border-cream/12 bg-night-2/60 p-7 backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  <span className="t-overline text-cream/55">LATEST DROP</span>
                </div>
                <ul className="flex flex-col gap-px">
                  {["Press · 100+ qubit initiative", "Research · Quantum-AI compute", "Events · Future Summit 2025"].map((line) => (
                    <li key={line} className="group flex items-center justify-between border-t border-cream/10 py-3.5 first:border-t-0">
                      <span className="font-display text-[1rem] tracking-[-0.01em] text-cream/85 transition-transform duration-300 group-hover:translate-x-1">{line}</span>
                      <ArrowR size={14} className="text-accent" sw={1.4} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* the lead feature — big image + headline + meta */}
          <Reveal variant="scale" delay={0.2} className="group relative mt-14 overflow-hidden rounded-card border border-cream/10 shadow-float lg:mt-20">
            <div className="grid lg:grid-cols-[1fr_1.3fr]">
              <div className="relative overflow-hidden">
                <img src={lead.img} alt={lead.title} className="block aspect-[16/10] max-h-110 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(10,14,26,0.55) 100%)" }} />
              </div>
              <div className="flex flex-col justify-center bg-night-2 p-8 sm:p-11 lg:p-12">
                <span className="mb-6 t-eyebrow text-accent">FEATURED · {lead.cat}</span>
                <h2 className="mb-5 t-h3">{lead.title}</h2>
                <p className="mb-9 max-w-110 t-body text-cream/[0.68]">{lead.excerpt}</p>
                <div className="flex items-center justify-between border-t border-cream/12 pt-6">
                  <a href="/media" className="group/cta inline-flex items-center gap-3 t-eyebrow text-cream no-underline">
                    READ STORY
                    <ArrowUR size={13} className="text-accent transition-transform duration-300 group-hover/cta:translate-x-0.5" sw={1.4} />
                  </a>
                  <span className="t-caption text-cream/45">{lead.meta}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 02 · NEWS FEED (filter chips + asymmetric magazine) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-7">
            <div className="max-w-150">
              <Eyebrow num="02" label="NEWS FEED" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                From across <Accent>the ecosystem.</Accent>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="flex flex-wrap gap-2.5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-pill border px-4.5 py-2 t-caption transition-colors duration-300 ${
                    active === f
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/20 text-ink/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  {f}
                </button>
              ))}
            </Reveal>
          </div>

          {/* asymmetric layout: one tall feature left, offset stacked stories right */}
          {feed.length === 0 ? (
            <Reveal className="border-t border-ink/12 py-20 text-center t-body text-ink/55">
              No stories in this category yet — check back soon.
            </Reveal>
          ) : (
            <div className="grid gap-px lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* tall lead card */}
              <Reveal variant="scale" className="group flex flex-col">
                <a href="/media" className="block overflow-hidden rounded-card border border-ink/10 bg-paper no-underline shadow-card transition-shadow duration-300 hover:shadow-panel">
                  <div className="overflow-hidden">
                    <img src={stories[0].img} alt={stories[0].title} className="block aspect-[16/10] max-h-90 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <span className="t-eyebrow text-accent">{stories[0].cat}</span>
                    <h3 className="mb-5 mt-4 t-title-lg text-ink">{stories[0].title}</h3>
                    <div className="flex items-center justify-between border-t border-ink/10 pt-5">
                      <span className="t-caption text-ink/55">{stories[0].meta}</span>
                      <ArrowR size={15} className="text-ink/45 transition-transform duration-300 group-hover:translate-x-1" sw={1.4} />
                    </div>
                  </div>
                </a>
              </Reveal>

              {/* offset smaller stories — horizontal rows, staggered indents */}
              <div className="flex flex-col">
                {stories.slice(1).map((s, i) => (
                  <Reveal
                    as="a"
                    href="/media"
                    key={s.title}
                    variant="scale"
                    delay={i * 0.08}
                    className={`group grid grid-cols-[0.9fr_1.1fr] items-center gap-5 border-b border-ink/12 py-6 no-underline first:border-t sm:gap-7 ${i % 2 ? "lg:ml-8" : ""}`}
                  >
                    <div className="overflow-hidden rounded-card">
                      <img src={s.img} alt={s.title} className="block aspect-[4/3] max-h-55 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div>
                      <span className="t-eyebrow text-accent">{s.cat}</span>
                      <h3 className="mb-3 mt-2.5 t-title-sm text-ink transition-transform duration-300 group-hover:translate-x-1">{s.title}</h3>
                      <span className="t-caption text-ink/55">{s.meta}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <Reveal delay={0.1} className="mt-14">
            <ArrowLink href="/media" label="VIEW THE FULL ARCHIVE" accent="iris" theme="light" gap={44} />
          </Reveal>
        </div>
      </section>

      {/* ============ 03 · NEWSROOM STAT BAND ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-22.5">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow num="03" label="THE NEWSROOM IN NUMBERS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h3">
              A growing record of <Accent>quantum progress.</Accent>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 0.08} className="border-t border-cream/12 pt-5">
                <div className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none tracking-[-0.02em] text-accent">
                  <Counter value={s.value} />
                </div>
                <div className="mt-3 t-eyebrow text-cream/55">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · PRESS & EVENTS STRIP ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-160">
            <Eyebrow num="04" label="PRESS & EVENTS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Where the valley <Accent>shows up.</Accent>
            </Reveal>
          </div>

          <div className="flex flex-col gap-px">
            {events.map((e, i) => (
              <Reveal
                as="a"
                href="/media"
                key={e.title}
                delay={i * 0.07}
                className="group grid grid-cols-1 items-center gap-3 border-t border-ink/12 py-7 no-underline last:border-b sm:grid-cols-[auto_1fr_auto] sm:gap-8"
              >
                <span className="font-display text-[1.5rem] tracking-[-0.02em] text-accent sm:w-32">{e.date}</span>
                <div>
                  <div className="font-display text-[1.45rem] tracking-[-0.012em] text-ink transition-transform duration-300 group-hover:translate-x-1.5">{e.title}</div>
                  <div className="mt-1 t-body-sm text-ink/55">{e.place}</div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="rounded-pill border border-ink/15 px-3.5 py-1.5 t-overline text-ink/55">{e.tag}</span>
                  <ArrowUR size={15} className="text-ink/45 transition-transform duration-300 group-hover:translate-x-0.5" sw={1.4} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 05 · PRESS-KIT / CONTACT BAND (asymmetric media) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow num="05" label="FOR JOURNALISTS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Everything the press <Accent>needs.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-10 max-w-110 t-body text-cream/70">
              Press releases, brand assets, fact sheets and spokespeople — all in one place. For interviews and media enquiries, reach the AQV communications team directly.
            </Reveal>

            <ul className="mb-10 grid gap-px sm:grid-cols-2">
              {kit.map((k, i) => (
                <Reveal
                  as="li"
                  key={k.t}
                  delay={i * 0.07}
                  className={`group flex items-start gap-4 border-t border-cream/10 py-5 ${i % 2 ? "sm:pl-8" : ""}`}
                >
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-chip border border-accent/30 bg-accent/10">
                    <PathIcon d={k.icon} size={18} className="text-accent" sw={1.4} />
                  </span>
                  <div>
                    <div className="font-display text-[1.1rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1">{k.t}</div>
                    <div className="mt-1 t-body-sm text-cream/55">{k.d}</div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1} className="flex flex-wrap gap-4">
              <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
                CONTACT PRESS TEAM
                <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
              </a>
              <a href="/media" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
                DOWNLOAD MEDIA KIT
              </a>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.12} className="relative">
            <div className="overflow-hidden rounded-card border border-cream/10 shadow-float">
              <img src="/images/s5/c1.png" alt="AQV press and media resources" className="block aspect-[4/3] max-h-90 w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-65 rounded-card border border-cream/10 bg-night-2/95 p-5 shadow-card backdrop-blur-sm sm:-left-6">
              <div className="t-eyebrow text-accent">MEDIA ENQUIRIES</div>
              <div className="mt-2 t-body-sm text-cream/65">press@amaravatiquantum.in — responses within one business day.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 06 · SUBSCRIBE CTA ============ */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">STAY IN THE LOOP</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Never miss a" className="block" delay={0.05} />
            <TextReveal text="breakthrough." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Subscribe for research highlights, events and ecosystem updates from Amaravati Quantum Valley — straight to your inbox.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              SUBSCRIBE
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              CONTACT US
            </a>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
