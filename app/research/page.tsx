"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const domainIndex = [
  { n: "01", name: "Quantum Computing", labs: "12+ labs" },
  { n: "02", name: "Quantum Materials", labs: "9+ labs" },
  { n: "03", name: "Communications", labs: "7+ labs" },
  { n: "04", name: "Quantum + AI", labs: "7+ labs" },
  { n: "05", name: "Quantum Security", labs: "5+ labs" },
];

const philosophy = [
  {
    k: "Discover",
    label: "FRAME THE PROBLEM",
    desc: "We begin from real scientific and industrial problems worth solving — not from technology in search of a use.",
    icon: "M11 3 a8 8 0 1 0 0.01 0 M16.5 16.5 L21 21",
  },
  {
    k: "Develop",
    label: "BUILD & EXPERIMENT",
    desc: "Prototype directly on quantum hardware, iterate fast, and validate results against rigorous benchmarks.",
    icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21",
  },
  {
    k: "Deploy",
    label: "TRANSLATE TO IMPACT",
    desc: "Move breakthroughs toward industry, IP and the wider ecosystem so discovery becomes deployed advantage.",
    icon: "M3 21 V9 L9 6 V9 L15 6 V21 M19 21 V11 L15 9",
  },
];

const domains = [
  { num: "01", title: "Quantum Computing", desc: "Scalable quantum systems and algorithms aimed at problems classical machines can't reach.", labs: "12+", img: "/images/s6/c1.png" },
  { num: "02", title: "Quantum Materials", desc: "Novel materials engineered for quantum devices and the extreme environments they operate in.", labs: "9+", img: "/images/s6/c2.png" },
  { num: "03", title: "Communications", desc: "Provably secure quantum networks and the protocols that move information across them.", labs: "7+", img: "/images/s6/c3.png" },
  { num: "04", title: "Quantum + AI", desc: "Quantum and AI fused for optimization, simulation and learning at a new scale.", labs: "7+", img: "/images/s6/c4.png" },
  { num: "05", title: "Quantum Security", desc: "Post-quantum cryptography and key distribution for a quantum-safe world.", labs: "5+", img: "/images/s6/c5.png" },
];

const access = [
  { t: "IBM Quantum System Two", d: "Direct, hands-on time on a utility-scale quantum machine." },
  { t: "Shared cryogenics & fabrication", d: "Dilution refrigerators and device fabrication, open to every group." },
  { t: "Hybrid quantum-classical compute", d: "HPC tightly coupled to the quantum stack for real workloads." },
  { t: "Visiting-researcher programs", d: "Residencies that bring external scientists onto the floor." },
];

const programs = [
  { num: "01", title: "Research Fellowships", label: "EARLY & SENIOR RESEARCHERS", desc: "Funded fellowships that put researchers on real quantum hardware from day one." },
  { num: "02", title: "Doctoral Programs", label: "PHD TRACKS", desc: "Joint PhD programs run with leading universities and national institutes." },
  { num: "03", title: "Joint Industry Projects", label: "CO-FUNDED RESEARCH", desc: "Co-funded projects that translate research directly into deployable products." },
  { num: "04", title: "Publications & Open IP", label: "SCIENTIFIC OUTPUT", desc: "Papers, patents and open scientific output that compound across the field." },
];

const impact = [
  { value: "40+", label: "Research collaborations" },
  { value: "380+", label: "Affiliated research centres" },
  { value: "5", label: "Core research domains" },
  { value: "62K+", label: "Learners in the pipeline" },
];

/* ============================================================== page === */

export default function ResearchPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="ecosystem" theme="dark" />

      {/* ============ 01 · HERO (split — headline + domain index) ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-25 lg:block">
          <img src="/images/s3.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 6%,rgba(10,14,26,0.6) 40%,rgba(10,14,26,0.2) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.35fr_0.85fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">RESEARCH ENGINE</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="Frontier quantum" className="block" delay={0.1} />
              <TextReveal text="research," className="block text-accent" delay={0.34} />
              <TextReveal text="made real." className="block" delay={0.5} />
            </h1>
            <Reveal as="p" delay={0.66} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              Deep, collaborative science across computing, materials, communications, AI and security — run on real quantum hardware, aimed at outcomes that matter.
            </Reveal>
            <Reveal delay={0.76}>
              <ArrowLink href="#philosophy" label="HOW WE RESEARCH" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* the five research domains, as an index */}
          <Reveal delay={0.3} className="lg:pb-3">
            <div className="mb-5 t-overline text-cream/45">FIVE FRONTIER DOMAINS</div>
            <ul className="border-t border-cream/12">
              {domainIndex.map((l) => (
                <li key={l.n} className="group flex items-baseline gap-5 border-b border-cream/12 py-4 transition-colors duration-300">
                  <span className="font-display text-[15px] text-accent/70">{l.n}</span>
                  <span className="flex-1 font-display text-[1.35rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1.5">{l.name}</span>
                  <span className="t-caption text-cream/45">{l.labs}</span>
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

      {/* ============ 02 · PHILOSOPHY (numbered descending process) ============ */}
      <section id="philosophy" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow num="02" label="RESEARCH PHILOSOPHY" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                Outcome-driven, <Accent>end to end.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-100 t-body text-ink/65 lg:pb-2">
              Three moves take an idea from a question on a whiteboard to deployed advantage — each one grounded in a real problem and a real machine.
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {philosophy.map((p, i) => (
              <Reveal
                key={p.k}
                delay={i * 0.1}
                variant="scale"
                className={`group relative border-t border-ink/15 pt-7 ${["lg:mt-0", "lg:mt-12", "lg:mt-24"][i]}`}
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <PathIcon d={p.icon} size={20} className="text-accent" sw={1.4} />
                </span>
                <div className="mb-2.5 flex items-baseline gap-3">
                  <span className="font-display text-[clamp(2.2rem,3.4vw,3rem)] leading-none tracking-[-0.02em] text-ink/15">{`0${i + 1}`}</span>
                  <span className="t-eyebrow text-accent">{p.label}</span>
                </div>
                <div className="mb-2.5 font-display text-[1.7rem] tracking-[-0.015em]">{p.k}</div>
                <p className="max-w-72 t-body-sm text-ink/60">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · DOMAINS (zigzag editorial rows) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-16 max-w-180">
            <Eyebrow num="03" label="CORE RESEARCH DOMAINS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Five domains, one research <Accent>engine.</Accent>
            </Reveal>
          </div>

          <div className="flex flex-col gap-px">
            {domains.map((d, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={d.num} className="grid items-center gap-8 border-t border-cream/12 py-10 lg:grid-cols-2 lg:gap-16">
                  <Reveal variant="scale" delay={0.05} className={`group overflow-hidden rounded-card border border-cream/10 ${flip ? "lg:order-2" : ""}`}>
                    <img src={d.img} alt={d.title} className="block aspect-[16/10] max-h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </Reveal>
                  <Reveal delay={0.08} className={flip ? "lg:order-1 lg:pr-8" : "lg:pl-4"}>
                    <div className="mb-3 font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none tracking-[-0.02em] text-cream/15">{d.num}</div>
                    <h3 className="mb-3 t-h3">{d.title}</h3>
                    <p className="mb-5 max-w-120 t-body text-cream/65">{d.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-accent" />
                      <span className="t-eyebrow text-cream/55">{d.labs} ACTIVE LABS</span>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 04 · FACILITIES (asymmetric media split + access) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="scale" className="relative">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s4.png" alt="Researchers at the cryostat" className="block aspect-[16/10] max-h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-6 max-w-65 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm sm:-right-6">
              <div className="t-eyebrow text-accent">UTILITY-SCALE HARDWARE</div>
              <div className="mt-2 t-body-sm text-ink/65">The same world-class quantum stack, shared across every research group on campus.</div>
            </div>
          </Reveal>

          <div>
            <Eyebrow num="04" label="FACILITIES & ACCESS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Research on real quantum <Accent>hardware.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-ink/70">
              Researchers get hands-on access to IBM Quantum System Two, shared cryogenics, fabrication and HPC — no waiting list, no simulator-only science.
            </Reveal>
            <ul className="mb-9">
              {access.map((a, i) => (
                <Reveal as="li" key={a.t} delay={i * 0.07} className={`group flex items-start gap-4 border-t border-ink/12 py-4 last:border-b ${i % 2 ? "lg:ml-6" : ""}`}>
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
                  <div>
                    <div className="font-display text-[1.15rem] tracking-[-0.01em]">{a.t}</div>
                    <div className="mt-1 t-body-sm text-ink/60">{a.d}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <ArrowLink href="/infrastructure" label="EXPLORE FACILITIES" accent="iris" theme="light" gap={44} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 05 · PROGRAMS (index list) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <Eyebrow num="05" label="PROGRAMS & COLLABORATION" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                How institutions work <Accent>with AQV.</Accent>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:pb-2 lg:text-right">
              <ArrowLink href="/programs" label="VIEW ALL PROGRAMS" accent="iris" theme="light" gap={44} />
            </Reveal>
          </div>

          <ul className="border-t border-ink/15">
            {programs.map((p, i) => (
              <Reveal
                as="li"
                key={p.num}
                delay={i * 0.07}
                className="group grid items-baseline gap-3 border-b border-ink/15 py-8 lg:grid-cols-[auto_0.9fr_1.1fr] lg:gap-10"
              >
                <span className="font-display text-[clamp(2rem,3vw,2.6rem)] leading-none tracking-[-0.02em] text-ink/20 transition-colors duration-300 group-hover:text-accent">{p.num}</span>
                <div>
                  <div className="font-display text-[1.5rem] tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1.5">{p.title}</div>
                  <div className="mt-2 t-eyebrow text-accent">{p.label}</div>
                </div>
                <p className="max-w-120 t-body text-ink/60">{p.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 06 · IMPACT (big-number band) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="06" label="RESEARCH IMPACT" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Measurable <Accent>output.</Accent>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
            {impact.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="border-t border-cream/12 pt-6">
                <div className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.025em] text-accent">
                  <Counter value={m.value} />
                </div>
                <div className="mt-3 t-eyebrow text-cream/55">{m.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 07 · CTA (full-bleed) ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">RESEARCH WITH REAL QUANTUM HARDWARE</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Bring your research" className="block" delay={0.05} />
            <TextReveal text="to the machine." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Fellowships, PhD tracks and institutional collaborations — all built around hands-on access to IBM Quantum System Two.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              APPLY / REGISTER
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <a href="/programs" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              VIEW PROGRAMS
            </a>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
