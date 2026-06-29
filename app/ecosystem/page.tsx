"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const layers = [
  { n: "01", name: "Infrastructure", note: "9M sq ft campus" },
  { n: "02", name: "Hardware", note: "Sovereign supply chain" },
  { n: "03", name: "Research", note: "Five frontier domains" },
  { n: "04", name: "Talent", note: "The WISER pipeline" },
  { n: "05", name: "Capital", note: "₹500Cr+ fund" },
];

const flow = [
  { k: "Discover", label: "RESEARCH & IDEAS", desc: "Frontier research and IP across five quantum domains.", icon: "M9 3 V9 L4 19 c-0.5 1 0.5 2 1.5 2 H18.5 c1 0 2-1 1.5-2 L15 9 V3 M8 3 H16" },
  { k: "Build", label: "HARDWARE & TOOLS", desc: "Quantum systems, fabrication and the full software stack.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21" },
  { k: "Scale", label: "STARTUPS & TALENT", desc: "Founders, capital and a WISER-trained workforce.", icon: "M5 19 L12 4 L19 19 M9 13 H15" },
  { k: "Commercialize", label: "INDUSTRY & IMPACT", desc: "Industry adoption that turns breakthroughs into value.", icon: "M3 21 V9 L9 6 V9 L15 6 V21 M19 21 V11 L15 9" },
];

const cold = [
  { t: "300", u: "K", title: "Room temperature", desc: "Classical control and readout electronics interface with the system." },
  { t: "4", u: "K", title: "Liquid helium", desc: "The first cooling stage shields the qubits from thermal noise." },
  { t: "100", u: "mK", title: "Mixing chamber", desc: "Dilution refrigeration drives the system toward its operating point." },
  { t: "15", u: "mK", title: "Operating point", desc: "Near absolute zero — the ideal, perfectly stable quantum state." },
];

const hardware = [
  { num: "01", title: "Cryogenics", desc: "Dilution refrigeration to millikelvin temperatures." },
  { num: "02", title: "Processors", desc: "High-coherence, low-error quantum processors." },
  { num: "03", title: "Control", desc: "Ultra-low-latency control and readout electronics." },
  { num: "04", title: "Fabrication", desc: "Advanced quantum-device fabrication facilities." },
  { num: "05", title: "Packaging", desc: "Quantum-grade packaging and interconnect." },
];

const domains = [
  { num: "01", title: "Quantum Computing", desc: "Scalable quantum systems and algorithms for real-world problems.", labs: "12+", img: "/images/s6/c1.png" },
  { num: "02", title: "Quantum Materials", desc: "Novel materials for quantum devices and extreme environments.", labs: "9+", img: "/images/s6/c2.png" },
  { num: "03", title: "Communications", desc: "Secure quantum networks and communication protocols.", labs: "7+", img: "/images/s6/c3.png" },
  { num: "04", title: "Quantum + AI", desc: "Quantum and AI combined for optimization, simulation and learning.", labs: "7+", img: "/images/s6/c4.png" },
  { num: "05", title: "Quantum Security", desc: "Next-generation cryptography for a quantum-safe world.", labs: "5+", img: "/images/s6/c5.png" },
];

const pipeline = [
  { k: "Awareness", desc: "62K+ learners reached through outreach and foundations." },
  { k: "University", desc: "Degree and PhD tracks with leading institutions." },
  { k: "Fellowships", desc: "Industry fellowships on real quantum hardware." },
  { k: "Leadership", desc: "Research leaders who carry the field forward." },
];

const startupStats = [
  { value: "40+", label: "Startups in the pipeline" },
  { value: "₹500Cr+", label: "AQV Quantum Fund" },
  { value: "250+", label: "Mentors & experts" },
  { value: "25+", label: "Investment partners" },
];

const sectors = ["Finance", "Healthcare", "Manufacturing", "Energy", "Logistics", "Security", "Materials", "Mobility"];

const impact = [
  { value: "62K+", label: "Learners reached" },
  { value: "₹25K Cr+", label: "Investment target" },
  { value: "100K+", label: "Jobs envisioned" },
  { value: "380+", label: "Research centres" },
  { value: "40+", label: "Companies engaged" },
  { value: "9M", label: "sq ft campus" },
];

/* ============================================================== page === */

export default function EcosystemPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="ecosystem" theme="dark" />

      {/* ============ 01 · HERO ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-25 lg:block">
          <img src="/images/hero.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 6%,rgba(10,14,26,0.6) 40%,rgba(10,14,26,0.2) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.35fr_0.85fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">THE ECOSYSTEM</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="India's complete" className="block" delay={0.1} />
              <TextReveal text="quantum" className="block text-accent" delay={0.34} />
              <TextReveal text="value chain." className="block" delay={0.5} />
            </h1>
            <Reveal as="p" delay={0.66} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              One place where discovery becomes deployment — infrastructure, hardware, research, talent and capital, engineered to work as a single living system.
            </Reveal>
            <Reveal delay={0.76}>
              <ArrowLink href="#flow" label="EXPLORE THE VALUE CHAIN" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* the five integrated layers */}
          <Reveal delay={0.3} className="lg:pb-3">
            <div className="mb-5 t-overline text-cream/45">FIVE INTEGRATED LAYERS</div>
            <ul className="border-t border-cream/12">
              {layers.map((l) => (
                <li key={l.n} className="group flex items-baseline gap-5 border-b border-cream/12 py-4 transition-colors duration-300">
                  <span className="font-display text-[15px] text-accent/70">{l.n}</span>
                  <span className="flex-1 font-display text-[1.35rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1.5">{l.name}</span>
                  <span className="t-caption text-cream/45">{l.note}</span>
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

      {/* ============ 02 · VALUE CHAIN (staircase) ============ */}
      <section id="flow" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-160">
            <Eyebrow num="02" label="ECOSYSTEM OVERVIEW" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              One value chain, <Accent>end to end.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {flow.map((f, i) => (
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
                {i < flow.length - 1 && (
                  <span aria-hidden className="absolute -right-4 top-6 hidden text-ink/25 lg:block">
                    <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 10 H15 M11 6 L15 10 L11 14" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · INFRASTRUCTURE (asymmetric media) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow num="03" label="INFRASTRUCTURE" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              The foundation for quantum <Accent>innovation.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-5 max-w-110 t-body text-ink/70">
              A purpose-built campus with world-class labs, clean rooms and high-performance compute — engineered specifically for quantum systems.
            </Reveal>
            <Reveal as="p" delay={0.15} className="mb-9 max-w-110 t-body text-ink/70">
              Shared scientific infrastructure lets every actor in the ecosystem build on the same world-class foundation.
            </Reveal>
            <Reveal delay={0.2} className="mb-9 flex gap-10">
              <div>
                <div className="font-display text-[2.6rem] leading-none tracking-[-0.02em] text-accent"><Counter value="500+" /></div>
                <div className="mt-2 t-eyebrow text-ink/55">ACRES</div>
              </div>
              <div className="border-l border-ink/15 pl-10">
                <div className="font-display text-[2.6rem] leading-none tracking-[-0.02em] text-accent"><Counter value="9M" /></div>
                <div className="mt-2 t-eyebrow text-ink/55">SQ FT BUILT</div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <ArrowLink href="/infrastructure" label="EXPLORE INFRASTRUCTURE" accent="iris" theme="light" gap={44} />
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.1} className="relative">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s7.png" alt="Quantum campus — aerial master plan" className="block aspect-[16/10] max-h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-65 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm sm:-left-6">
              <div className="t-eyebrow text-accent">ONE FOUNDATION</div>
              <div className="mt-2 t-body-sm text-ink/65">Labs, clean rooms, cryogenics and HPC — shared across the whole ecosystem.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 04 · HARDWARE — the cold journey (signature) ============ */}
      <section id="hardware" className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="04" label="HARDWARE" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Enabling India's quantum <Accent>hardware supply chain.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* the cold journey — vertical warm→cold scale */}
            <div>
              <div className="mb-8 t-overline text-cream/45">THE COLD JOURNEY · 300 K → 15 mK</div>
              <div className="relative pl-9">
                <span aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg,var(--color-gold),var(--color-iris) 45%,var(--color-indigo-deep))" }} />
                {cold.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.08} className="relative mb-9 last:mb-0">
                    <span aria-hidden className="absolute -left-9 top-2 h-[11px] w-[11px] rounded-full border-2 border-night bg-iris" style={{ boxShadow: "0 0 0 1px rgba(139,146,232,0.5)" }} />
                    <div className="flex items-baseline gap-2 font-display tracking-[-0.02em]">
                      <span className="text-[2rem] leading-none">{c.t}</span>
                      <span className="text-[15px] text-cream/55">{c.u}</span>
                    </div>
                    <div className="mt-1.5 t-eyebrow text-accent">{c.title}</div>
                    <div className="mt-1.5 max-w-75 t-body-sm text-cream/55">{c.desc}</div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* the supply chain — machine + staggered component list */}
            <div className="relative">
              <Reveal variant="scale" className="mb-10 overflow-hidden rounded-card border border-cream/10">
                <img src="/images/s4.png" alt="IBM Quantum System Two" className="mx-auto block w-[68%] max-w-95" />
              </Reveal>
              <ul>
                {hardware.map((h, i) => (
                  <Reveal
                    as="li"
                    key={h.num}
                    delay={i * 0.06}
                    className={`group flex items-start gap-5 border-t border-cream/10 py-5 last:border-b ${i % 2 ? "lg:ml-8" : ""}`}
                  >
                    <span className="border-b border-accent pb-0.5 font-display text-[15px] leading-none text-accent">{h.num}</span>
                    <div>
                      <div className="font-display text-[1.3rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1">{h.title}</div>
                      <div className="mt-1 t-body-sm text-cream/55">{h.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 · RESEARCH (zigzag editorial) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 max-w-180">
            <Eyebrow num="05" label="RESEARCH" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Where breakthrough research <Accent>becomes real.</Accent>
            </Reveal>
          </div>

          <div className="flex flex-col gap-px">
            {domains.map((d, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={d.num} className="grid items-center gap-8 border-t border-ink/12 py-10 lg:grid-cols-2 lg:gap-16">
                  <Reveal variant="scale" delay={0.05} className={`group overflow-hidden rounded-card ${flip ? "lg:order-2" : ""}`}>
                    <img src={d.img} alt={d.title} className="block aspect-[16/10] max-h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </Reveal>
                  <Reveal delay={0.08} className={flip ? "lg:order-1 lg:pr-8" : "lg:pl-4"}>
                    <div className="mb-3 font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none tracking-[-0.02em] text-ink/15">{d.num}</div>
                    <h3 className="mb-3 t-h3">{d.title}</h3>
                    <p className="mb-5 max-w-120 t-body text-ink/65">{d.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-accent" />
                      <span className="t-eyebrow text-ink/55">{d.labs} ACTIVE LABS</span>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 06 · TALENT (WISER pipeline) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <Eyebrow num="06" label="TALENT" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Building India's quantum <Accent>workforce.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-10 max-w-115 t-body text-cream/70">
              The WISER pipeline takes people from first exposure to research-grade quantum capability — building the workforce the entire ecosystem runs on.
            </Reveal>
            <ol className="mb-9">
              {pipeline.map((p, i) => (
                <Reveal as="li" key={p.k} delay={i * 0.08} className="relative flex gap-5 pb-7 last:pb-0">
                  {i < pipeline.length - 1 && <span aria-hidden className="absolute left-[15px] top-9 bottom-1 w-px bg-cream/15" />}
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-accent/40 font-display text-[13px] text-accent">{i + 1}</span>
                  <div className="pt-1">
                    <div className="font-display text-[1.2rem] tracking-[-0.01em]">{p.k}</div>
                    <div className="mt-1 t-body-sm text-cream/55">{p.desc}</div>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.1}>
              <ArrowLink href="/talent" label="EXPLORE TALENT / WISER" accent="iris" theme="dark" gap={44} />
            </Reveal>
          </div>
          <Reveal variant="scale" delay={0.12} className="overflow-hidden rounded-card border border-cream/10 shadow-float">
            <img src="/images/s5/s1.png" alt="WISER learners building India's quantum workforce" className="block aspect-[4/3] max-h-[400px] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ============ 07 · STARTUPS & CAPITAL (editorial stats) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Eyebrow num="07" label="STARTUPS & CAPITAL" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
                From research <Accent>to market.</Accent>
              </Reveal>
              <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-ink/70">
                A launchpad of capital, mentorship and network — turning deep-tech research into companies that scale from the valley to the world.
              </Reveal>
              <Reveal delay={0.15}>
                <ArrowLink href="/startups" label="EXPLORE STARTUPS" accent="iris" theme="light" gap={44} />
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10">
              {startupStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.07} className="group bg-sand p-7 transition-colors duration-300 hover:bg-paper lg:p-10">
                  <div className="font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none tracking-[-0.02em]">
                    <Counter value={s.value} />
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                    <span className="t-eyebrow text-ink/55">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08 · INDUSTRY (media + sectors) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="scale" className="overflow-hidden rounded-card shadow-float lg:order-2">
            <img src="/images/s5/s2.png" alt="Industry co-innovation across sectors" className="block aspect-[16/10] max-h-[360px] w-full object-cover" />
          </Reveal>
          <div className="lg:order-1">
            <Eyebrow num="08" label="INDUSTRY" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Industry-led <Accent>adoption.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-8 max-w-110 t-body text-ink/70">
              AQV brings enterprises into co-innovation — moving from quantum readiness to real deployments across every sector that matters.
            </Reveal>
            <Reveal delay={0.15} className="mb-9 flex flex-wrap gap-2.5">
              {sectors.map((s) => (
                <span key={s} className="rounded-pill border border-ink/15 px-4 py-2 t-caption text-ink/70 transition-colors duration-300 hover:border-accent hover:text-accent">
                  {s}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.2}>
              <ArrowLink href="/industry" label="EXPLORE INDUSTRY" accent="iris" theme="light" gap={44} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 09 · IMPACT (big-number band) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="09" label="ECOSYSTEM IMPACT" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              The whole is greater than <Accent>the sum.</Accent>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-x-16">
            {impact.map((m, i) => (
              <Reveal key={m.label} delay={(i % 3) * 0.08} className="border-t border-cream/12 pt-6">
                <div className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.025em] text-accent">
                  <Counter value={m.value} />
                </div>
                <div className="mt-3 t-eyebrow text-cream/55">{m.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10 · CTA ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">PLUG INTO THE ECOSYSTEM</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Plug into the" className="block" delay={0.05} />
            <TextReveal text="ecosystem." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Whether you build hardware, run research, found a startup or deploy quantum in industry — the value chain is open.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              APPLY / REGISTER
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
