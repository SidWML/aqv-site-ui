"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const fundStats = [
  { value: "₹500Cr+", label: "AQV QUANTUM FUND" },
  { value: "250+", label: "MENTORS & EXPERTS" },
  { value: "40+", label: "STARTUPS IN PIPELINE" },
  { value: "15+", label: "VENTURES ONBOARDED" },
];

const benefits = [
  { t: "Lab-grade space", d: "Clean rooms, cryogenics and bench space ready on day one." },
  { t: "Hardware access", d: "Run on IBM Quantum systems without owning a stack." },
  { t: "Founder mentorship", d: "Operators and scientists who have shipped deep tech." },
];

const offers = [
  {
    num: "01",
    title: "Capital",
    desc: "The ₹500Cr+ AQV Quantum Fund plus 25+ partner investors and government incentives — funding that understands frontier timelines.",
    icon: "M7 5 H16 M7 9 H16 M7 5 c5 0 5 8 0 8 L15 19",
    tag: "₹500Cr+ fund",
  },
  {
    num: "02",
    title: "Labs",
    desc: "Shared clean rooms, cryogenics and fabrication — the scientific infrastructure most startups could never build alone.",
    icon: "M9 3 V9 L4 19 c-0.5 1 0.5 2 1.5 2 H18.5 c1 0 2-1 1.5-2 L15 9 V3 M8 3 H16",
    tag: "9M sq ft campus",
  },
  {
    num: "03",
    title: "Mentorship",
    desc: "250+ mentors and domain experts — from quantum physicists to GTM operators — embedded alongside every founding team.",
    icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6",
    tag: "250+ mentors",
  },
  {
    num: "04",
    title: "Network",
    desc: "Plug into the full quantum value chain — research labs, talent pipelines, partners and the wider AQV ecosystem.",
    icon: "M12 4 a8 8 0 1 0 0.01 0 M4 12 H20 M12 4 c3 3 3 13 0 16 M12 4 c-3 3-3 13 0 16",
    tag: "One ecosystem",
  },
  {
    num: "05",
    title: "Go-to-market",
    desc: "Industry pilots, enterprise introductions and policy support that turn a working prototype into real revenue.",
    icon: "M3 21 V9 L9 6 V9 L15 6 V21 M19 21 V11 L15 9",
    tag: "Industry pilots",
  },
];

const founders = [
  {
    quote: "AQV gave us cryogenic lab time and hardware access in week one. We went from a whiteboard idea to a working prototype faster than we thought possible.",
    name: "Resident venture",
    role: "Quantum security & cryptography",
    img: "/images/s5/c2.png",
  },
  {
    quote: "The mentor network is the real moat. Having a quantum physicist and a GTM operator in the same room rewrites what an early team can attempt.",
    name: "Founding team",
    role: "Quantum sensing & devices",
    img: "/images/s5/c1.png",
  },
];

const sectors = ["Quantum security", "Sensing & devices", "Materials discovery", "Quantum-AI software", "Communications", "Cryptography"];

const journey = [
  { n: "01", k: "Apply", desc: "Pitch the problem and the quantum advantage. We look for founders, not finished decks." },
  { n: "02", k: "Incubate", desc: "Lab space, mentorship and early support to validate the science and the market." },
  { n: "03", k: "Build", desc: "Prototype on real quantum hardware with hands-on technical guidance." },
  { n: "04", k: "Fund", desc: "Access the AQV Quantum Fund and a network of 25+ partner investors." },
  { n: "05", k: "Scale", desc: "Industry pilots, GTM support and policy backing to lead your market." },
];

/* ============================================================== page === */

export default function StartupsPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="engage" theme="dark" />

      {/* ============ 01 · HERO ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] opacity-30 lg:block">
          <img src="/images/s2.png" alt="" className="block h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 4%,rgba(10,14,26,0.55) 44%,rgba(10,14,26,0.15) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <Reveal className="mb-7.5 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">01</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">AQV LAUNCHPAD</span>
          </Reveal>
          <h1 className="mb-8 max-w-[15ch] t-display">
            <TextReveal text="Build a quantum" className="block" delay={0.1} />
            <TextReveal text="company" className="block text-accent" delay={0.32} />
            <TextReveal text="from India." className="block" delay={0.48} />
          </h1>
          <Reveal as="p" delay={0.64} className="mb-10 max-w-130 t-lead text-cream/[0.72]">
            The AQV Launchpad is India's most advanced quantum startup incubator — labs, hardware access, capital, mentorship and go-to-market, all under one roof.
          </Reveal>
          <Reveal delay={0.74} className="flex flex-wrap items-center gap-x-10 gap-y-5">
            <ArrowLink href="#offer" label="WHAT WE OFFER" accent="iris" theme="dark" gap={48} />
            <ArrowLink href="#apply" label="THE APPLICATION JOURNEY" accent="iris" theme="dark" gap={48} />
          </Reveal>
        </div>

        <div className="absolute bottom-9 left-5 z-10 flex items-center gap-3.5 sm:left-8 lg:left-10">
          <div className="relative h-11 w-px overflow-hidden bg-cream/20">
            <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
          </div>
          <span className="t-overline text-cream/45">SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* ============ 02 · FUND / MOMENTUM (big-number band) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
            <div>
              <Eyebrow num="02" label="MOMENTUM IN NUMBERS" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                Founder energy, <Accent>backed by capital.</Accent>
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-6 max-w-110 t-body text-cream/70">
                Deep tech needs patient money and a deep bench. The AQV Launchpad pairs a frontier-focused fund with the mentors, labs and partners that turn quantum research into companies.
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:gap-x-16">
              {fundStats.map((s, i) => (
                <Reveal key={s.label} delay={(i % 2) * 0.08} className="border-t border-cream/12 pt-6">
                  <div className="font-display text-[clamp(2.6rem,5.5vw,4.4rem)] leading-none tracking-[-0.025em] text-accent">
                    <Counter value={s.value} />
                  </div>
                  <div className="mt-3 t-eyebrow text-cream/55">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 · LAUNCHPAD VALUE PROP (asymmetric media + benefits) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="scale" className="relative">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s3.png" alt="Founders building inside the AQV incubator" className="block aspect-[16/10] max-h-[420px] w-full object-cover" />
            </div>
            <div className="static mt-5 max-w-72 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm sm:absolute sm:-bottom-7 sm:-right-6 sm:mt-0">
              <div className="t-eyebrow text-accent">ONE ROOF</div>
              <div className="mt-2 t-body-sm text-ink/65">Labs, hardware, capital and mentorship — the whole stack a founder needs, in one place.</div>
            </div>
          </Reveal>

          <div className="lg:pl-6">
            <Eyebrow num="03" label="WHY BUILD AT AQV" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Everything a founder <Accent>needs.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-ink/70">
              Most quantum startups die in the gap between a brilliant idea and a working prototype. The Launchpad closes that gap — so you spend your energy on the science, not the scaffolding.
            </Reveal>
            <ul className="mb-9">
              {benefits.map((b, i) => (
                <Reveal as="li" key={b.t} delay={i * 0.08} className="flex items-start gap-5 border-t border-ink/12 py-5 last:border-b">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <div>
                    <div className="font-display text-[1.25rem] tracking-[-0.01em]">{b.t}</div>
                    <div className="mt-1 max-w-105 t-body-sm text-ink/60">{b.d}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <ArrowLink href="#offer" label="EXPLORE WHAT WE OFFER" accent="iris" theme="light" gap={44} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 04 · WHAT WE OFFER (index list) ============ */}
      <section id="offer" className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="04" label="WHAT WE OFFER" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Five things every quantum <Accent>founder gets.</Accent>
            </Reveal>
          </div>

          <ul className="border-t border-cream/12">
            {offers.map((o, i) => (
              <Reveal
                as="li"
                key={o.num}
                delay={i * 0.06}
                className={`group grid grid-cols-1 items-start gap-5 border-b border-cream/12 py-8 lg:grid-cols-[auto_0.9fr_1.1fr_auto] lg:items-center lg:gap-10 ${i % 2 ? "lg:pl-8" : ""}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <PathIcon d={o.icon} size={20} className="text-accent" sw={1.4} />
                </span>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[15px] text-accent/70">{o.num}</span>
                  <span className="font-display text-[1.7rem] tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1.5">{o.title}</span>
                </div>
                <p className="max-w-130 t-body-sm text-cream/60">{o.desc}</p>
                <span className="t-eyebrow text-cream/45 lg:text-right">{o.tag}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 05 · FOUNDER STORIES (offset quotes + portraits) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 max-w-180">
            <Eyebrow num="05" label="FOUNDER STORIES" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Founders already <Accent>building here.</Accent>
            </Reveal>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {founders.map((f, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={f.name} className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <Reveal variant="scale" delay={0.05} className={`group overflow-hidden rounded-card shadow-float ${flip ? "lg:order-2" : ""}`}>
                    <img src={f.img} alt={f.name} className="block aspect-[4/5] max-h-[400px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </Reveal>
                  <Reveal delay={0.1} className={flip ? "lg:order-1 lg:mr-6" : "lg:ml-8"}>
                    <div aria-hidden className="mb-5 font-display text-[3.5rem] leading-none text-accent/30">&ldquo;</div>
                    <p className="mb-7 max-w-150 font-display text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.3] tracking-[-0.015em] text-ink/90">
                      {f.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-accent" />
                      <span className="t-eyebrow text-ink/70">{f.name}</span>
                      <span className="t-caption text-ink/45">{f.role}</span>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-16 flex flex-wrap gap-2.5 border-t border-ink/12 pt-10">
            <span className="mr-2 t-eyebrow text-ink/45">BUILDING ACROSS</span>
            {sectors.map((s) => (
              <span key={s} className="rounded-pill border border-ink/15 px-4 py-2 t-caption text-ink/70 transition-colors duration-300 hover:border-accent hover:text-accent">
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ 06 · APPLICATION JOURNEY (timeline) ============ */}
      <section id="apply" className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow num="06" label="THE JOURNEY" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              From application <Accent>to scale.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-105 t-body text-cream/70">
              A clear path from first pitch to market leadership — five stages, with the ecosystem behind you at every one.
            </Reveal>
            <Reveal variant="scale" delay={0.15} className="overflow-hidden rounded-card border border-cream/10">
              <img src="/images/s4.png" alt="Quantum hardware founders build on" className="block aspect-[16/10] max-h-[360px] w-full object-cover" />
            </Reveal>
          </div>

          <ol className="relative pl-9">
            <span aria-hidden className="absolute left-[5px] bottom-3 top-3 w-px" style={{ background: "linear-gradient(180deg,var(--color-iris),var(--color-indigo-deep))" }} />
            {journey.map((j, i) => (
              <Reveal as="li" key={j.n} delay={i * 0.08} className="relative mb-10 last:mb-0">
                <span aria-hidden className="absolute -left-9 top-2 h-[11px] w-[11px] rounded-full border-2 border-night bg-iris" style={{ boxShadow: "0 0 0 1px rgba(139,146,232,0.5)" }} />
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[15px] text-accent/70">{j.n}</span>
                  <span className="font-display text-[1.9rem] tracking-[-0.015em]">{j.k}</span>
                </div>
                <p className="mt-2 max-w-115 t-body text-cream/60">{j.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 07 · CTA ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">BRING YOUR STARTUP TO THE VALLEY</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Bring your startup" className="block" delay={0.05} />
            <TextReveal text="to the valley." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Labs, hardware, capital and mentorship — everything you need to build a deep-tech company from India. The Launchpad is open.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              APPLY / REGISTER
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <a href="/programs" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
              EXPLORE PROGRAMS
            </a>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
