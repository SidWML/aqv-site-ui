"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const timeline = [
  { year: "2023", tag: "MANDATE", text: "India launches the National Quantum Mission — a national commitment to quantum technology." },
  { year: "2024", tag: "SITE", text: "Amaravati is selected as the home of India's first integrated quantum valley." },
  { year: "2026", tag: "LIVE", text: "IBM Quantum System Two is commissioned on Indian soil — the differentiator goes live." },
  { year: "2030", tag: "SCALE", text: "AQV operates as a full-scale quantum city — research, industry and talent at global scale." },
];

const why = [
  { title: "A greenfield capital city", desc: "Amaravati is built from the ground up — quantum-ready land, power and planning, free of legacy constraints.", icon: "M4 20 H20 M6 20 V10 H10 V20 M14 20 V6 H18 V20" },
  { title: "Policy & mission backing", desc: "Anchored by the National Quantum Mission and the Government of Andhra Pradesh, with long-horizon commitment.", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M9 11 l2 2 4-4" },
  { title: "Connectivity & land", desc: "Road, rail, air and digital connectivity, with room to scale into a 9M sq ft quantum city.", icon: "M12 4 a8 8 0 1 0 0.01 0 M4 12 H20 M12 4 c3 3 3 13 0 16 M12 4 c-3 3-3 13 0 16" },
  { title: "A talent gateway", desc: "Beside India's deep engineering and research base, with WISER pipelines feeding the workforce.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
];

const principles = [
  { num: "01", title: "Infrastructure", desc: "A purpose-built campus and shared scientific facilities, open to every actor in the valley." },
  { num: "02", title: "Hardware", desc: "IBM Quantum System Two anchors a growing domestic hardware stack and supply chain." },
  { num: "03", title: "Research", desc: "Frontier research across five quantum domains, moving from theory to working systems." },
  { num: "04", title: "Talent", desc: "The WISER pipeline, carrying people from first exposure to research-grade capability." },
  { num: "05", title: "Capital & startups", desc: "Funding, incentives and a founder-first launchpad that turns research into companies." },
];

const leaders = [
  { quote: "AQV is how India turns a national mission into a place — where the whole quantum value chain compounds.", name: "Leadership Council", role: "Governance & strategy", img: "/images/s5/c1.png" },
  { quote: "We are building infrastructure for problems classical computers cannot solve, even in theory.", name: "Scientific Board", role: "Research direction", img: "/images/s5/c2.png" },
  { quote: "A valley succeeds when founders, researchers and industry win together. That is our mandate.", name: "Ecosystem Office", role: "Partnerships & startups", img: "/images/s5/c3.png" },
];

const stats = [
  { value: "9M", label: "sq ft quantum city" },
  { value: "₹25K Cr+", label: "Investment target" },
  { value: "100K+", label: "Jobs envisioned" },
  { value: "380+", label: "Research centres" },
  { value: "62K+", label: "Learners reached" },
  { value: "2030", label: "Full-scale city" },
];

/* ============================================================== page === */

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="about" theme="dark" />

      {/* ============ 01 · HERO — statement ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] opacity-30 lg:block">
          <img src="/images/s2.png" alt="" className="block h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 4%,rgba(10,14,26,0.55) 42%,rgba(10,14,26,0.15) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <Reveal className="mb-8 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">01</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">ABOUT AQV</span>
          </Reveal>
          <h1 className="mb-8 max-w-[18ch] t-display">
            <TextReveal text="A nation's chance," className="block" delay={0.1} />
            <TextReveal text="taken at the" className="block" delay={0.32} />
            <TextReveal text="right moment." className="block text-accent" delay={0.52} />
          </h1>
          <Reveal as="p" delay={0.7} className="mb-10 max-w-135 t-lead text-cream/[0.72]">
            Amaravati Quantum Valley is India&apos;s first integrated Quantum-AI ecosystem — research, hardware, infrastructure, talent and capital brought together in one place, built for the decade quantum changes everything.
          </Reveal>
          <Reveal delay={0.8}>
            <ArrowLink href="#story" label="READ THE STORY" accent="iris" theme="dark" gap={48} />
          </Reveal>
        </div>

        <div className="absolute bottom-9 left-5 z-10 flex items-center gap-3.5 sm:left-8 lg:left-10">
          <div className="relative h-11 w-px overflow-hidden bg-cream/20">
            <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
          </div>
          <span className="t-overline text-cream/45">SCROLL TO BEGIN</span>
        </div>
      </section>

      {/* ============ 02 · STORY + TIMELINE (asymmetric narrative + ledger) ============ */}
      <section id="story" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow num="02" label="THE AQV STORY" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-7 t-h2">
              The countries that build the ecosystem now <Accent>define the era.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-5 max-w-110 t-body text-ink/70">
              Quantum computing is moving from the lab to the real economy. The nations that assemble the ecosystem now — not just the machines — will define the next era of computing, security, materials and medicine.
            </Reveal>
            <Reveal as="p" delay={0.16} className="max-w-110 t-body text-ink/70">
              AQV is India&apos;s answer: a single, intentional place where the full quantum value chain compounds — backed by the National Quantum Mission and the Government of Andhra Pradesh.
            </Reveal>
          </div>

          <div className="relative pl-9 lg:pl-0">
            <div className="mb-9 hidden t-overline text-ink/45 lg:block">A FOUR-ACT TIMELINE · 2023 → 2030</div>
            <div className="relative pl-9">
              <span aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-ink/18" />
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08} className={`relative mb-11 last:mb-0 ${i % 2 ? "lg:ml-10" : ""}`}>
                  <span aria-hidden className="absolute -left-9 top-1.5 h-[13px] w-[13px] rounded-full border-2 border-accent bg-sand" />
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[2rem] leading-none tracking-[-0.02em] text-accent">{t.year}</span>
                    <span className="t-eyebrow text-ink/45">{t.tag}</span>
                  </div>
                  <p className="mt-2.5 max-w-90 t-body-sm text-ink/65">{t.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 · VISION & MISSION (asymmetric split) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-170">
            <Eyebrow num="03" label="VISION & MISSION" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Where we&apos;re going, and <Accent>how we get there.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
            {/* THE VISION — taller, leading panel */}
            <Reveal variant="scale" className="group relative border border-cream/12 bg-cream/[0.02] p-9 lg:p-14">
              <span className="mb-8 flex h-13 w-13 items-center justify-center rounded-chip bg-accent/12 ring-1 ring-accent/18">
                <PathIcon d="M12 3 a9 9 0 1 0 0.01 0 M12 8 a4 4 0 1 0 0.01 0 M12 11.6 a0.4 0.4 0 1 0 0.01 0" size={24} className="text-accent" sw={1.3} />
              </span>
              <div className="mb-5 t-eyebrow text-accent">THE VISION</div>
              <h3 className="mb-5 t-h3">Make India a global quantum power.</h3>
              <p className="max-w-100 t-body text-cream/68">
                A self-reinforcing ecosystem where breakthroughs in quantum and AI compound — placing India at the frontier of the next computing era.
              </p>
            </Reveal>
            {/* THE MISSION — offset lower */}
            <Reveal variant="scale" delay={0.1} className="group relative border border-cream/12 bg-cream/[0.02] p-9 lg:mt-16 lg:p-14">
              <span className="mb-8 flex h-13 w-13 items-center justify-center rounded-chip bg-accent/12 ring-1 ring-accent/18">
                <PathIcon d="M4 7 L12 3 L20 7 L12 11 Z M4 7 V17 L12 21 L20 17 V7 M12 11 V21" size={24} className="text-accent" sw={1.3} />
              </span>
              <div className="mb-5 t-eyebrow text-accent">THE MISSION</div>
              <h3 className="mb-5 t-h3">Build the value chain in one place.</h3>
              <p className="max-w-100 t-body text-cream/68">
                Unite infrastructure, hardware, research, talent and capital on a single campus — so discovery moves to deployment without leaving the valley.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 04 · PULL-QUOTE (full-bleed statement) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-start gap-10 lg:grid-cols-[0.2fr_1fr] lg:gap-12">
          <Reveal className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.7] tracking-[-0.04em] text-accent/30">
            &ldquo;
          </Reveal>
          <div>
            <Reveal as="blockquote" variant="wipe" className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink">
              We are not building a machine. We are building the place where a nation learns to think in quantum — and never has to leave to do it.
            </Reveal>
            <Reveal delay={0.15} className="mt-9 flex items-center gap-3.5">
              <span className="h-px w-10 bg-accent" />
              <span className="t-eyebrow text-ink/55">THE AQV CHARTER</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 05 · WHY AMARAVATI (media + reasoned list) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="scale" className="relative">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s3.png" alt="Amaravati greenfield capital — master plan" className="block aspect-[4/3] max-h-[420px] w-full object-cover" />
            </div>
            <div className="static mt-5 max-w-65 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm lg:absolute lg:-right-6 lg:bottom-8 lg:mt-0">
              <div className="t-eyebrow text-accent">BUILT FROM ZERO</div>
              <div className="mt-2 t-body-sm text-ink/65">A capital city designed for quantum from its first stone — no retrofits, no compromise.</div>
            </div>
          </Reveal>

          <div className="lg:pl-6">
            <Eyebrow num="05" label="WHY AMARAVATI" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-9 t-h3">
              Why build it <Accent>here?</Accent>
            </Reveal>
            <ul>
              {why.map((w, i) => (
                <Reveal as="li" key={w.title} delay={i * 0.07} className={`group flex items-start gap-5 border-t border-ink/12 py-6 last:border-b ${i % 2 ? "lg:ml-8" : ""}`}>
                  <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-chip bg-ink/[0.05]">
                    <PathIcon d={w.icon} size={22} className="text-accent" sw={1.3} />
                  </span>
                  <div>
                    <div className="font-display text-[1.2rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1">{w.title}</div>
                    <div className="mt-1.5 max-w-105 t-body-sm text-ink/62">{w.desc}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 06 · PRINCIPLES (index list) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow num="06" label="THE FIVE PRINCIPLES" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
              Five forces, <Accent>one valley.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="max-w-95 t-body text-cream/70">
              AQV is engineered as a single system. Each principle reinforces the others — the value is never one layer, but the way all five compound.
            </Reveal>
          </div>

          <ol className="border-t border-cream/12">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.num} delay={i * 0.06} className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-cream/12 py-7 sm:grid-cols-[auto_0.9fr_1.1fr]">
                <span className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-none tracking-[-0.02em] text-accent/70">{p.num}</span>
                <span className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-none tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1.5">{p.title}</span>
                <span className="col-span-2 max-w-115 t-body-sm text-cream/55 sm:col-span-1">{p.desc}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 07 · LEADERSHIP (portrait-led) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-170">
            <Eyebrow num="07" label="LEADERSHIP & GOVERNANCE" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              The people accountable for <Accent>the valley.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-x-10 gap-y-14 lg:grid-cols-3 lg:gap-x-12">
            {leaders.map((l, i) => (
              <Reveal key={l.name} variant="scale" delay={i * 0.08} className={`group ${["lg:mt-0", "lg:mt-12", "lg:mt-24"][i]}`}>
                <div className="mb-6 overflow-hidden rounded-card shadow-card">
                  <img src={l.img} alt={l.name} className="block aspect-[4/5] max-h-[400px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <span aria-hidden className="font-display text-[2.4rem] leading-[0.3] text-accent/45">&ldquo;</span>
                <p className="mb-6 mt-3 font-display text-[1.2rem] leading-[1.45] tracking-[-0.005em] text-ink/90">{l.quote}</p>
                <div className="flex items-center gap-3 border-t border-ink/12 pt-5">
                  <span className="h-px w-7 bg-accent" />
                  <div>
                    <div className="t-eyebrow text-ink/80">{l.name}</div>
                    <div className="mt-1.5 t-caption text-ink/50">{l.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 08 · STAT BAND ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-170">
            <Eyebrow num="08" label="THE VALLEY BY 2030" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              A national mission, <Accent>made measurable.</Accent>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-x-16">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) * 0.08} className="border-t border-cream/12 pt-6">
                <div className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.025em] text-accent">
                  <Counter value={s.value} />
                </div>
                <div className="mt-3 t-eyebrow text-cream/55">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 09 · CTA ============ */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-night px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,rgba(10,14,26,0.95) 0%,rgba(10,14,26,0.72) 48%,rgba(10,14,26,0.4) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">JOIN THE QUANTUM FUTURE</span>
          </Reveal>
          <h2 className="mb-8 max-w-[16ch] t-display-2">
            <TextReveal text="Join the quantum" className="block" delay={0.05} />
            <TextReveal text="future." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-130 t-lead text-cream/[0.72]">
            Whether you research, build, fund or govern — there is a place for you in the valley.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-4">
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
