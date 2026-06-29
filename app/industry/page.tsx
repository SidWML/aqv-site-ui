"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

/* sectors — the bold pill index. img: real where one fits, else placeholder */
const sectors = [
  { num: "01", title: "Finance", desc: "Portfolio optimization, risk modelling and real-time fraud detection.", img: "/images/s6/c1.png", icon: "M3 21 H21 M5 21 V11 M10 21 V8 M15 21 V13 M20 21 V6" },
  { num: "02", title: "Healthcare", desc: "Molecular simulation and drug discovery at quantum scale.", img: "/images/s6/c2.png", icon: "M12 5 V19 M5 12 H19 M9 9 H15 V15 H9 Z" },
  { num: "03", title: "Manufacturing", desc: "Materials science, process tuning and supply-chain optimization.", img: "/images/s6/c3.png", icon: "M3 21 V9 L9 6 V9 L15 6 V21 M19 21 V11 L15 9" },
  { num: "04", title: "Energy", desc: "Grid optimization and new materials for storage and capture.", img: "/images/s6/c4.png", icon: "M13 3 L4 14 H11 L9 21 L20 9 H13 Z" },
  { num: "05", title: "Logistics", desc: "Routing, scheduling and fleet optimization across vast networks.", img: "/images/s6/c5.png", icon: "M3 17 H7 L9 11 H17 L19 17 H21 M3 17 V11 H9 M7 17 a2 2 0 1 0 4 0 M16 17 a2 2 0 1 0 4 0" },
  { num: "06", title: "Security", desc: "Quantum-safe cryptography and sensing for critical systems.", img: "/images/s5/c1.png", icon: "M12 3 L19 6 V11 c0 5-3 8-7 10 c-4-2-7-5-7-10 V6 Z M9 12 l2 2 l4-4" },
];

/* classical-today vs with-quantum — the two-column reframe */
const shift = [
  { classical: "Optimization limited by problem size", quantum: "Tackle optimization at new scales" },
  { classical: "Molecular simulation only approximated", quantum: "Simulate quantum systems natively" },
  { classical: "Security on hard-but-breakable math", quantum: "Quantum-safe cryptography by design" },
  { classical: "Slow search through vast solution spaces", quantum: "Explore solution spaces in parallel" },
];

/* readiness → deployment journey */
const journey = [
  { k: "Readiness", label: "STEP 01", desc: "Assess your use cases and quantify the quantum opportunity for your business.", icon: "M3 12 H7 L9 5 L13 19 L15 12 H21" },
  { k: "Pilot", label: "STEP 02", desc: "Run a focused proof-of-concept on real quantum hardware.", icon: "M9 3 V9 L4 19 c-0.5 1 0.5 2 1.5 2 H18.5 c1 0 2-1 1.5-2 L15 9 V3 M8 3 H16" },
  { k: "Co-innovate", label: "STEP 03", desc: "Build inside a joint AQV lab — your team, our researchers and hardware.", icon: "M7 12 l3 3 M10 15 l4-4 M3 11 l4-4 4 4 M21 11 l-4-4-4 4" },
  { k: "Deploy", label: "STEP 04", desc: "Scale validated solutions into production at enterprise scale.", icon: "M5 12 l4 4 L19 6 M5 19 H19" },
];

/* co-innovation lab inclusions */
const labIncludes = [
  "Dedicated lab space inside the valley",
  "Access to IBM Quantum System Two",
  "Embedded AQV research collaboration",
  "A clear path from pilot to production",
];

/* enterprise impact stats */
const impact = [
  { value: "6", label: "Priority industry verticals" },
  { value: "40+", label: "Industry collaborations" },
  { value: "30+", label: "Co-innovation projects" },
  { value: "₹500Cr+", label: "Quantum fund backing" },
];

/* ============================================================== page === */

export default function IndustryPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="engage" theme="dark" />

      {/* ============ 01 · HERO — statement ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 hidden h-full w-[46%] opacity-25 lg:block">
          <img src="/images/hero.png" alt="" className="block h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 8%,rgba(10,14,26,0.55) 45%,rgba(10,14,26,0.15) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">INDUSTRY</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="Quantum, put" className="block" delay={0.1} />
              <TextReveal text="to work for" className="block" delay={0.32} />
              <TextReveal text="your business." className="block text-accent" delay={0.5} />
            </h1>
            <Reveal as="p" delay={0.66} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              From readiness to deployment, AQV turns quantum from a research curiosity into real competitive advantage — across the sectors that move the economy.
            </Reveal>
            <Reveal delay={0.76}>
              <ArrowLink href="#sectors" label="SEE WHERE IT APPLIES" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* enterprise pulse — quick proof points */}
          <Reveal delay={0.3} className="lg:pb-3">
            <div className="mb-5 t-overline text-cream/45">ENTERPRISE MOMENTUM</div>
            <ul className="border-t border-cream/12">
              {[
                { v: "6", n: "Priority verticals" },
                { v: "40+", n: "Collaborations" },
                { v: "30+", n: "Co-innovation projects" },
              ].map((x) => (
                <li key={x.n} className="flex items-baseline justify-between gap-5 border-b border-cream/12 py-4.5">
                  <span className="font-display text-[2rem] leading-none tracking-[-0.02em] text-accent"><Counter value={x.v} /></span>
                  <span className="t-caption text-cream/55">{x.n}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="absolute bottom-9 left-5 z-10 flex items-center gap-3.5 sm:left-8 lg:left-10">
          <div className="relative h-11 w-px overflow-hidden bg-cream/20">
            <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
          </div>
          <span className="t-overline text-cream/45">SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* ============ 02 · SECTORS — asymmetric pill index ============ */}
      <section id="sectors" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* sticky intro on the left */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow num="02" label="INDUSTRY VERTICALS" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
                Six sectors, <Accent>one platform.</Accent>
              </Reveal>
              <Reveal as="p" delay={0.1} className="mb-8 max-w-105 t-body text-ink/70">
                The same quantum stack reshapes the hardest problems in finance, health, industry, energy, logistics and security.
              </Reveal>
              <Reveal delay={0.15} className="flex flex-wrap gap-2.5">
                {sectors.map((s) => (
                  <a key={s.title} href={`#sector-${s.num}`} className="rounded-pill border border-ink/15 px-4 py-2 t-caption text-ink/70 no-underline transition-colors duration-300 hover:border-accent hover:text-accent">
                    {s.title}
                  </a>
                ))}
              </Reveal>
            </div>

            {/* the index — alternating-offset rows */}
            <div>
              {sectors.map((s, i) => (
                <Reveal
                  as="div"
                  key={s.num}
                  id={`sector-${s.num}`}
                  delay={(i % 2) * 0.06}
                  className={`group flex items-start gap-5 border-t border-ink/12 py-7 last:border-b sm:gap-7 ${i % 2 ? "lg:ml-10" : ""}`}
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                    <PathIcon d={s.icon} size={20} className="text-accent" sw={1.4} />
                  </span>
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-baseline gap-3">
                      <span className="font-display text-[13px] text-accent">{s.num}</span>
                      <span className="font-display text-[1.7rem] tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1.5 sm:text-[2rem]">{s.title}</span>
                    </div>
                    <p className="max-w-105 t-body-sm text-ink/60">{s.desc}</p>
                  </div>
                  <div className="hidden w-24 flex-shrink-0 overflow-hidden rounded-card sm:block lg:w-32">
                    <img src={s.img} alt={s.title} className="block aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 · THE SHIFT — classical vs quantum, split ledger ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="03" label="WHY INDUSTRY NEEDS QUANTUM" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              The limits of today, <Accent>rewritten.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-x-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8">
            {/* classical column header */}
            <Reveal className="mb-3 lg:mb-7">
              <span className="t-overline text-cream/45">CLASSICAL TODAY</span>
            </Reveal>
            <div className="hidden lg:block" />
            <Reveal delay={0.08} className="mb-3 lg:mb-7 lg:pl-2">
              <span className="t-overline text-accent">WITH QUANTUM + AQV</span>
            </Reveal>

            {shift.map((row, i) => (
              <div key={i} className="contents">
                <Reveal delay={i * 0.07} className="flex items-start gap-4 border-t border-cream/12 py-6">
                  <span className="font-display text-[15px] leading-none text-cream/30">—</span>
                  <span className="t-body text-cream/55">{row.classical}</span>
                </Reveal>
                {/* center connector */}
                <div className="hidden items-center justify-center border-t border-cream/12 lg:flex">
                  <span aria-hidden className="text-accent/60">
                    <svg width="22" height="22" viewBox="0 0 22 22"><path d="M4 11 H17 M13 7 L17 11 L13 15" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
                  </span>
                </div>
                <Reveal delay={i * 0.07 + 0.05} className="flex items-start gap-4 border-cream/12 py-6 lg:border-t lg:pl-2">
                  <span className="font-display text-[15px] leading-none text-accent">+</span>
                  <span className="t-body text-cream">{row.quantum}</span>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · USE CASES — applications media banner ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <Eyebrow num="04" label="APPLICATIONS IN THE FIELD" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                From the lab bench <Accent>to the floor.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-110 t-body text-ink/70 lg:pb-2">
              Real enterprise workloads — modelled, piloted and proven on quantum hardware before they ever reach production.
            </Reveal>
          </div>

          {/* wide applications banner (s2) */}
          <Reveal variant="scale" className="overflow-hidden rounded-card shadow-float">
            <img src="/images/s2.png" alt="Industry applications across quantum workloads" className="block aspect-[16/7] w-full object-cover" />
          </Reveal>

          {/* three featured workloads beneath, offset */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-12 lg:gap-8">
            {[
              { img: "/images/s5/c1.png", t: "Optimization", d: "Routing, scheduling and portfolio problems solved at scale." },
              { img: "/images/s5/c2.png", t: "Simulation", d: "Molecules and materials simulated as quantum systems." },
              { img: "/images/s5/c3.png", t: "Secure systems", d: "Quantum-safe cryptography and high-fidelity sensing." },
            ].map((u, i) => (
              <Reveal key={u.t} variant="scale" delay={i * 0.08} className={`group ${["lg:mt-0", "lg:mt-8", "lg:mt-16"][i]}`}>
                <div className="overflow-hidden rounded-card shadow-card">
                  <img src={u.img} alt={u.t} className="block aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="mt-4 font-display text-[1.3rem] tracking-[-0.01em]">{u.t}</div>
                <p className="mt-1.5 max-w-70 t-body-sm text-ink/60">{u.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 05 · JOURNEY — readiness → deployment staircase ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-160">
            <Eyebrow num="05" label="ENGAGEMENT MODELS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              From quantum readiness <Accent>to deployment.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {journey.map((f, i) => (
              <Reveal
                key={f.k}
                delay={i * 0.1}
                variant="scale"
                className={`group relative ${["lg:mt-0", "lg:mt-10", "lg:mt-20", "lg:mt-30"][i]}`}
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <PathIcon d={f.icon} size={20} className="text-accent" sw={1.4} />
                </span>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-display text-[13px] text-accent">{`0${i + 1}`}</span>
                  <span className="t-eyebrow text-ink/45">{f.label}</span>
                </div>
                <div className="mb-2.5 font-display text-[1.6rem] tracking-[-0.015em]">{f.k}</div>
                <p className="max-w-60 t-body-sm text-ink/60">{f.desc}</p>
                {i < journey.length - 1 && (
                  <span aria-hidden className="absolute -right-4 top-6 hidden text-ink/25 lg:block">
                    <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 10 H15 M11 6 L15 10 L11 14" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 · CO-INNOVATION LAB — asymmetric media split ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="scale" className="relative lg:order-2">
            <div className="overflow-hidden rounded-card border border-cream/10 shadow-float">
              <img src="/images/s5/s2.png" alt="Co-innovation lab inside Amaravati Quantum Valley" className="block aspect-[16/10] max-h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-65 rounded-card border border-cream/10 bg-night-2/95 p-5 shadow-float backdrop-blur-sm sm:-left-6">
              <div className="t-eyebrow text-accent">YOUR TEAM, OUR LAB</div>
              <div className="mt-2 t-body-sm text-cream/65">A joint space where enterprise engineers build beside AQV researchers.</div>
            </div>
          </Reveal>

          <div className="lg:order-1">
            <Eyebrow num="06" label="CO-INNOVATION LABS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Build it with <Accent>us.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-cream/70">
              Set up a joint co-innovation lab inside AQV — your people, our researchers and real quantum hardware, working on your hardest problems together.
            </Reveal>
            <ul className="mb-9 border-t border-cream/12">
              {labIncludes.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.06} className="flex items-center gap-4 border-b border-cream/12 py-4">
                  <span aria-hidden className="text-accent">
                    <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8 l3.5 3.5 L13 4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                  </span>
                  <span className="t-body text-cream/75">{b}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <ArrowLink href="/partners" label="BECOME A PARTNER" accent="iris" theme="dark" gap={44} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 07 · IMPACT — big-number value band ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow num="07" label="INDUSTRY IMPACT" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
                Enterprise <Accent>momentum.</Accent>
              </Reveal>
              <Reveal as="p" delay={0.1} className="max-w-95 t-body text-ink/70">
                The numbers behind a growing community of enterprises already building on quantum with AQV.
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10">
              {impact.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.07} className="group bg-stone p-7 transition-colors duration-300 hover:bg-paper lg:p-10">
                  <div className="font-display text-[clamp(2.4rem,4.5vw,3.6rem)] leading-none tracking-[-0.02em] text-accent">
                    <Counter value={m.value} />
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                    <span className="t-eyebrow text-ink/55">{m.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08 · CTA ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">START YOUR QUANTUM JOURNEY</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Make your enterprise" className="block" delay={0.05} />
            <TextReveal text="quantum-ready." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Co-innovation labs, pilots and deployment support — from your first use case to production at scale.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              TALK TO US
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <a href="/partners" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              BECOME A PARTNER
            </a>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
