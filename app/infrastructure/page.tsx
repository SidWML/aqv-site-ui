"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const keySpecs = [
  { value: "9M", unit: "SQ FT", label: "Built environment" },
  { value: "500+", unit: "ACRES", label: "Integrated campus" },
  { value: "15", unit: "mK", label: "Operating temperature" },
  { value: "99.9", unit: "%", label: "Uptime by design" },
];

const zones = [
  { num: "01", title: "Research Zone", desc: "Quantum, materials, AI and communications labs under one roof.", img: "/images/s6/c1.png" },
  { num: "02", title: "Hardware & Fabrication", desc: "Clean rooms and device fabrication facilities for quantum systems.", img: "/images/s6/c2.png" },
  { num: "03", title: "Startup & Incubation", desc: "Co-working and incubation tailored to deep-tech founders.", img: "/images/s6/c3.png" },
  { num: "04", title: "Talent & Living", desc: "Residences, wellness and community spaces for the workforce.", img: "/images/s6/c4.png" },
  { num: "05", title: "Data Center", desc: "High-performance, ultra-secure hybrid quantum-classical compute.", img: "/images/s6/c5.png" },
  { num: "06", title: "Innovation Park", desc: "Green collaborative zones engineered for breakthroughs.", img: "/images/s5/c1.png" },
];

const labs = [
  { num: "01", title: "Cryogenics", meta: "SHARED FACILITY", desc: "Dilution refrigeration and ultra-cold millikelvin environments." },
  { num: "02", title: "Fabrication", meta: "CLASS-100 CLEAN ROOM", desc: "Clean rooms purpose-built for quantum device fabrication." },
  { num: "03", title: "Characterization", meta: "METROLOGY SUITE", desc: "Precision measurement and device-characterization instruments." },
  { num: "04", title: "Compute / HPC", meta: "HPC CLUSTER", desc: "High-performance and hybrid quantum-classical compute." },
  { num: "05", title: "Collaboration", meta: "OPEN ACCESS", desc: "Shared workspaces and visiting-researcher laboratories." },
];

const cold = [
  { t: "300", u: "K", title: "Room temperature", desc: "Classical control and readout electronics interface with the system." },
  { t: "4", u: "K", title: "Liquid helium", desc: "The first cooling stage shields the qubits from thermal noise." },
  { t: "100", u: "mK", title: "Mixing chamber", desc: "Dilution refrigeration drives the system toward its operating point." },
  { t: "15", u: "mK", title: "Operating point", desc: "Near absolute zero — the ideal, perfectly stable quantum state." },
];

const sustain = [
  { title: "Renewable-led power", desc: "Clean energy carries the campus load by design.", icon: "M12 3 V8 M12 8 L8 14 H16 L12 8 M9 14 L7 21 H17 L15 14" },
  { title: "Water-positive design", desc: "Closed-loop systems return more than they take.", icon: "M12 3 C8 9 6 12 6 15 a6 6 0 0 0 12 0 c0-3-2-6-6-12 Z" },
  { title: "High-bandwidth connectivity", desc: "Road, rail, air and digital links to India and the world.", icon: "M4 12 H20 M12 4 V20 M6 6 L18 18 M18 6 L6 18" },
  { title: "Low-carbon construction", desc: "Responsible materials across the full build-out.", icon: "M5 20 H19 M7 20 V11 H11 V20 M13 20 V7 H17 V20" },
];

const roadmap = [
  { year: "2024 – 25", title: "Foundation", desc: "Core facilities, first labs and the system core come online." },
  { year: "2026 – 27", title: "Activation", desc: "Research zones and incubation open for tenants and partners." },
  { year: "2028 – 29", title: "Scale", desc: "Full campus build-out across all six masterplan zones." },
  { year: "2030", title: "Quantum City", desc: "A globally connected, full-scale quantum city." },
];

const builtFor = [
  { k: "Vibration", desc: "Isolated foundations decouple labs from ground motion." },
  { k: "EM Shielding", desc: "Shielded enclosures keep stray fields off the qubits." },
  { k: "Power Quality", desc: "Conditioned, redundant power feeds every instrument." },
  { k: "Thermal Stability", desc: "Tight environmental control across every facility." },
];

/* ============================================================== page === */

export default function InfrastructurePage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="ecosystem" theme="dark" />

      {/* ============ 01 · HERO — aerial statement ============ */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/s7.png" alt="" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.86) 0%,rgba(10,14,26,0.5) 38%,rgba(10,14,26,0.92) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 0%,rgba(10,14,26,0.35) 55%,rgba(10,14,26,0.1) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <Reveal className="mb-7.5 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">01</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">INFRASTRUCTURE</span>
          </Reveal>
          <h1 className="mb-7 max-w-[15ch] t-display">
            <TextReveal text="A quantum city," className="block" delay={0.1} />
            <TextReveal text="built for" className="block" delay={0.34} />
            <TextReveal text="global scale." className="block text-accent" delay={0.52} />
          </h1>

          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal as="p" delay={0.7} className="max-w-130 t-lead text-cream/[0.72]">
              9M sq ft designed as a single campus — clean rooms, cryogenics, compute and collaboration under one masterplan, engineered specifically for quantum systems.
            </Reveal>
            <Reveal delay={0.8} className="lg:justify-self-end">
              <ArrowLink href="#masterplan" label="EXPLORE THE MASTERPLAN" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-9 right-5 z-10 hidden items-center gap-3.5 sm:right-8 lg:right-10 lg:flex">
          <span className="t-overline text-cream/45">AMARAVATI · ANDHRA PRADESH</span>
        </div>
      </section>

      {/* ============ 02 · KEY SPECS BAND ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow num="02" label="BY THE NUMBERS" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                The physical foundation, <Accent>quantified.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-110 t-body text-ink/70 lg:pb-2">
              Every dimension of the campus is sized for the demands of frontier quantum work — from raw footprint to the temperature its hardware runs at.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {keySpecs.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="group bg-sand p-7 transition-colors duration-300 hover:bg-paper lg:p-10">
                <div className="flex items-baseline gap-1.5 font-display tracking-[-0.02em] text-accent">
                  <span className="text-[clamp(2.6rem,4.4vw,3.8rem)] leading-none">
                    <Counter value={s.value} />
                  </span>
                  <span className="text-[clamp(1rem,1.4vw,1.3rem)] text-ink/45">{s.unit}</span>
                </div>
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                  <span className="t-eyebrow text-ink/55">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · MASTERPLAN — six zones (asymmetric index) ============ */}
      <section id="masterplan" className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow num="03" label="THE AQV MASTERPLAN" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                Six zones, <Accent>one campus.</Accent>
              </Reveal>
            </div>
            <Reveal variant="scale" delay={0.1} className="overflow-hidden rounded-card border border-cream/10 shadow-float lg:mt-0">
              <img src="/images/s2.png" alt="AQV campus facade" className="block aspect-[16/9] max-h-90 w-full object-cover" />
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {zones.map((z, i) => (
              <Reveal
                as="article"
                key={z.num}
                variant="scale"
                delay={(i % 3) * 0.08}
                className={`group overflow-hidden rounded-card border border-cream/10 bg-night-2 ${["lg:mt-0", "lg:mt-8", "lg:mt-16"][i % 3]}`}
              >
                <div className="overflow-hidden">
                  <img src={z.img} alt={z.title} className="block aspect-[16/10] max-h-90 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="mb-3 font-display text-[15px] text-accent/70">{z.num}</div>
                  <h3 className="mb-2.5 font-display text-[1.45rem] tracking-[-0.015em]">{z.title}</h3>
                  <p className="t-body-sm text-cream/55">{z.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · IBM SYSTEM TWO + the cold journey (signature) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="04" label="HOME TO IBM QUANTUM SYSTEM TWO" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              India&apos;s most powerful <Accent>quantum computer.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* the machine */}
            <div>
              <Reveal variant="scale" className="overflow-hidden rounded-card shadow-float">
                <img src="/images/s4.png" alt="IBM Quantum System Two" className="block aspect-[4/3] max-h-90 w-full object-cover" />
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-7 max-w-95 t-body text-ink/70">
                Commissioned within the campus core, cooled to its operating point and opened to researchers, startups and industry partners.
              </Reveal>
            </div>

            {/* the cold journey — vertical warm→cold scale */}
            <div className="lg:pt-2">
              <div className="mb-8 t-overline text-ink/55">THE COLD JOURNEY · 300 K → 15 mK</div>
              <div className="relative pl-9">
                <span aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg,var(--color-gold),var(--color-iris) 45%,var(--color-indigo-deep))" }} />
                {cold.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.08} className={`relative mb-9 last:mb-0 ${i % 2 ? "lg:ml-8" : ""}`}>
                    <span aria-hidden className="absolute -left-9 top-2 h-[11px] w-[11px] rounded-full border-2 border-stone bg-iris" style={{ boxShadow: "0 0 0 1px rgba(139,146,232,0.5)" }} />
                    <div className="flex items-baseline gap-2 font-display tracking-[-0.02em]">
                      <span className="text-[2rem] leading-none">{c.t}</span>
                      <span className="text-[15px] text-ink/55">{c.u}</span>
                    </div>
                    <div className="mt-1.5 t-eyebrow text-accent">{c.title}</div>
                    <div className="mt-1.5 max-w-75 t-body-sm text-ink/60">{c.desc}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 · SHARED LAB INFRASTRUCTURE (media split + index) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Eyebrow num="05" label="RESEARCH & LAB INFRASTRUCTURE" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Shared scientific <Accent>infrastructure.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-ink/70">
              World-class facilities are pooled, not duplicated — so every actor in the ecosystem builds on the same foundation of clean rooms, cryogenics and compute.
            </Reveal>
            <Reveal variant="scale" delay={0.15} className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s3.png" alt="Shared quantum laboratory infrastructure" className="block aspect-[16/10] max-h-90 w-full object-cover" />
            </Reveal>
          </div>

          <ul>
            {labs.map((l, i) => (
              <Reveal
                as="li"
                key={l.num}
                delay={i * 0.06}
                className={`group flex items-start gap-5 border-t border-ink/12 py-6 last:border-b ${i % 2 ? "lg:ml-8" : ""}`}
              >
                <span className="border-b border-accent pb-0.5 font-display text-[15px] leading-none text-accent">{l.num}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="font-display text-[1.45rem] tracking-[-0.012em] transition-transform duration-300 group-hover:translate-x-1">{l.title}</div>
                    <span className="t-overline text-ink/45">{l.meta}</span>
                  </div>
                  <p className="mt-2 max-w-110 t-body-sm text-ink/60">{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 06 · BUILT FOR QUANTUM (diagram-ish) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-16 max-w-180">
            <Eyebrow num="06" label="ENGINEERED FOR QUANTUM" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              A building that protects <Accent>the qubit.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
            {/* concentric protection diagram */}
            <Reveal variant="scale" className="relative mx-auto flex aspect-square w-full max-w-115 items-center justify-center">
              <span aria-hidden className="absolute inset-0 rounded-full border border-cream/10" />
              <span aria-hidden className="absolute inset-[14%] rounded-full border border-cream/12" />
              <span aria-hidden className="absolute inset-[30%] rounded-full border border-accent/25" />
              <span aria-hidden className="absolute inset-[46%] rounded-full border border-accent/40" style={{ background: "radial-gradient(circle,rgba(139,146,232,0.18),transparent 70%)" }} />
              {builtFor.map((b, i) => {
                const pos = ["left-1/2 top-1 -translate-x-1/2", "right-1 top-1/2 -translate-y-1/2 text-right", "left-1/2 bottom-1 -translate-x-1/2", "left-1 top-1/2 -translate-y-1/2"][i];
                return (
                  <span key={b.k} className={`absolute ${pos} t-overline text-cream/45`}>{b.k}</span>
                );
              })}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-night">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
            </Reveal>

            {/* the protections */}
            <div>
              <Reveal as="p" delay={0.05} className="mb-9 max-w-115 t-body text-cream/70">
                Quantum hardware is exquisitely sensitive. The campus is engineered as a series of protective layers — every facility is tuned to keep noise off the qubit.
              </Reveal>
              <div className="grid gap-px overflow-hidden rounded-card border border-cream/10 bg-cream/10 sm:grid-cols-2">
                {builtFor.map((b, i) => (
                  <Reveal key={b.k} delay={i * 0.07} className="bg-night-2 p-7">
                    <div className="font-display text-[15px] text-accent/70">{`0${i + 1}`}</div>
                    <div className="mt-2 font-display text-[1.2rem] tracking-[-0.01em]">{b.k}</div>
                    <p className="mt-1.5 t-body-sm text-cream/55">{b.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 07 · CONNECTIVITY & SUSTAINABILITY ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="scale" className="relative lg:order-2">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s5/s2.png" alt="Green, connected quantum campus" className="block aspect-[16/10] max-h-90 w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-65 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm sm:-left-6">
              <div className="t-eyebrow text-accent">BUILT GREEN</div>
              <div className="mt-2 t-body-sm text-ink/65">Water-positive, renewable-led and connected to India and the world.</div>
            </div>
          </Reveal>

          <div className="lg:order-1">
            <Eyebrow num="07" label="CONNECTIVITY & SUSTAINABILITY" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Built green, <Accent>built connected.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-ink/70">
              World-class road, rail, air and digital connectivity links AQV to India and the world — engineered alongside green infrastructure and responsible technology.
            </Reveal>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {sustain.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07} className="group flex gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-chip border border-ink/15 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                    <PathIcon d={s.icon} size={20} className="text-accent" sw={1.4} />
                  </span>
                  <div>
                    <div className="font-display text-[1.1rem] tracking-[-0.01em]">{s.title}</div>
                    <p className="mt-1 t-body-sm text-ink/60">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08 · ROADMAP (phased horizontal) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-160">
            <Eyebrow num="08" label="FUTURE EXPANSION ROADMAP" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Phased to a global <Accent>quantum city.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {roadmap.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 0.1}
                className={`group relative border-t-2 border-ink/15 pt-6 transition-colors duration-300 hover:border-accent ${["lg:mt-0", "lg:mt-8", "lg:mt-16", "lg:mt-24"][i]}`}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 font-display text-[12px] text-accent">{i + 1}</span>
                  <span className="t-overline text-ink/55">{r.year}</span>
                </div>
                <div className="mb-2.5 font-display text-[1.5rem] tracking-[-0.015em]">{r.title}</div>
                <p className="max-w-60 t-body-sm text-ink/60">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 09 · STAT BAND ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow num="09" label="THE FOUNDATION, IN FULL" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                One masterplan, <Accent>measured.</Accent>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-x-12">
              {[
                { value: "9M", label: "sq ft built" },
                { value: "500+", label: "acre campus" },
                { value: "6", label: "masterplan zones" },
                { value: "15", label: "mK operating temp" },
                { value: "5", label: "shared lab facilities" },
                { value: "99.9", label: "% uptime by design" },
              ].map((m, i) => (
                <Reveal key={m.label} delay={(i % 3) * 0.08} className="border-t border-cream/12 pt-6">
                  <div className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] leading-none tracking-[-0.025em] text-accent">
                    <Counter value={m.value} />
                  </div>
                  <div className="mt-3 t-eyebrow text-cream/55">{m.label}</div>
                </Reveal>
              ))}
            </div>
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
            <span className="t-overline text-accent">BUILD ON WORLD-CLASS INFRASTRUCTURE</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Build on the" className="block" delay={0.05} />
            <TextReveal text="foundation." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Labs, clean rooms, cryogenics and compute — purpose-built for quantum and ready for you.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              APPLY / REGISTER
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <a href="/ecosystem" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              EXPLORE THE ECOSYSTEM
            </a>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
