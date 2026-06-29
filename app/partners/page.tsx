"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

const partnerTypes = [
  {
    num: "01",
    name: "Technology",
    tag: "SYSTEMS & STACK",
    desc: "Quantum hardware makers and software vendors building the systems the ecosystem runs on.",
    count: "40+",
    countLabel: "TECH PARTNERS",
    icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21",
    img: "/images/s6/c1.png",
  },
  {
    num: "02",
    name: "Cloud",
    tag: "COMPUTE & ACCESS",
    desc: "Hyperscalers and providers delivering quantum compute, HPC and managed access at scale.",
    count: "8+",
    countLabel: "CLOUD PARTNERS",
    icon: "M7 16 a4 4 0 0 1 0.5-7.9 A5.5 5.5 0 0 1 18 8 a3.5 3.5 0 0 1 -0.5 8 Z",
    img: "/images/s6/c3.png",
  },
  {
    num: "03",
    name: "Academic",
    tag: "RESEARCH & TALENT",
    desc: "Universities and institutes feeding research, IP and a quantum-ready workforce into the valley.",
    count: "50+",
    countLabel: "INSTITUTIONS",
    icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11 M19 10 V15",
    img: "/images/s6/c4.png",
  },
  {
    num: "04",
    name: "Government",
    tag: "POLICY & MISSION",
    desc: "National missions and agencies providing policy backing, programs and sovereign support.",
    count: "12+",
    countLabel: "AGENCIES",
    icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M12 9 V14 M9.5 11.5 H14.5",
    img: "/images/s6/c5.png",
  },
  {
    num: "05",
    name: "Research",
    tag: "LABS & CONSORTIA",
    desc: "Research labs and consortia co-developing frontier IP across the five quantum domains.",
    count: "30+",
    countLabel: "ACTIVE LABS",
    icon: "M9 3 V9 L4 19 c-0.5 1 0.5 2 1.5 2 H18.5 c1 0 2-1 1.5-2 L15 9 V3 M8 3 H16 M8 14 H16",
    img: "/images/s6/c2.png",
  },
];

const whyPartner = [
  {
    k: "Shared infrastructure",
    desc: "Plug into a 9M sq ft campus of labs, clean rooms, cryogenics and HPC — built for quantum.",
    icon: "M3 21 V9 L9 6 V9 L15 6 V21 M19 21 V11 L15 9 M7 21 V16 H11 V21",
  },
  {
    k: "Frontier research",
    desc: "Co-develop IP with leading labs across computing, materials, communications, AI and security.",
    icon: "M12 3 a9 9 0 1 0 0.01 0 M12 8 v4 l3 2",
  },
  {
    k: "A talent pipeline",
    desc: "Recruit from the WISER pipeline — researchers trained to research-grade quantum capability.",
    icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6",
  },
  {
    k: "Path to market",
    desc: "Reach a launchpad of startups, capital and industry adoption that scales breakthroughs.",
    icon: "M5 19 L12 4 L19 19 M9 13 H15",
  },
];

const models = [
  { num: "01", k: "Strategic Alliance", desc: "Long-horizon joint roadmaps, co-investment and shared go-to-market across the value chain." },
  { num: "02", k: "Research Collaboration", desc: "Joint labs and funded programs producing shared IP across the five quantum domains." },
  { num: "03", k: "Technology Integration", desc: "Hardware and software integrated into the AQV stack and made available to the ecosystem." },
  { num: "04", k: "Talent & Fellowships", desc: "Co-designed curricula, fellowships and hiring channels from the WISER pipeline." },
];

const logos = [
  "PARTNER 01",
  "PARTNER 02",
  "PARTNER 03",
  "PARTNER 04",
  "PARTNER 05",
  "PARTNER 06",
  "PARTNER 07",
  "PARTNER 08",
];

const stats = [
  { value: "100+", label: "Global partners" },
  { value: "25+", label: "Countries represented" },
  { value: "50+", label: "Academic institutions" },
  { value: "₹500Cr+", label: "Co-invested capital" },
];

/* ============================================================== page === */

export default function PartnersPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="partners" theme="dark" />

      {/* ============ 01 · HERO (statement) ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 hidden h-full w-[46%] opacity-25 lg:block">
          <img src="/images/s2.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 6%,rgba(10,14,26,0.6) 42%,rgba(10,14,26,0.15) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">PARTNERS</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="We build the" className="block" delay={0.1} />
              <TextReveal text="quantum future" className="block text-accent" delay={0.3} />
              <TextReveal text="together." className="block" delay={0.54} />
            </h1>
            <Reveal as="p" delay={0.68} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              Technology leaders, cloud providers, universities, governments and research labs — partnering with AQV to turn frontier science into real-world impact.
            </Reveal>
            <Reveal delay={0.78}>
              <ArrowLink href="#types" label="EXPLORE PARTNER TYPES" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* mono index of partner types */}
          <Reveal delay={0.34} className="lg:pb-3">
            <div className="mb-5 t-overline text-cream/45">FIVE WAYS TO PARTNER</div>
            <ul className="border-t border-cream/12">
              {partnerTypes.map((p) => (
                <li key={p.num} className="group flex items-baseline gap-5 border-b border-cream/12 py-4">
                  <span className="font-display text-[15px] text-accent/70">{p.num}</span>
                  <span className="flex-1 font-display text-[1.35rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1.5">{p.name}</span>
                  <span className="t-caption text-cream/45">{p.count}</span>
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

      {/* ============ 02 · PARTNER TYPES (asymmetric editorial index) ============ */}
      <section id="types" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 max-w-180">
            <Eyebrow num="02" label="PARTNER TYPES" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              Five kinds of partner, <Accent>one ecosystem.</Accent>
            </Reveal>
          </div>

          <div className="flex flex-col gap-px">
            {partnerTypes.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={p.num} className="grid items-center gap-8 border-t border-ink/12 py-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                  <Reveal variant="scale" delay={0.05} className={`group overflow-hidden rounded-card ${flip ? "lg:order-2" : ""}`}>
                    <img src={p.img} alt={p.name} className="block aspect-[16/10] max-h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </Reveal>
                  <Reveal delay={0.08} className={flip ? "lg:order-1 lg:pr-8" : "lg:pl-4"}>
                    <div className="mb-4 flex items-center gap-4">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-accent">
                        <PathIcon d={p.icon} size={20} className="text-accent" sw={1.4} />
                      </span>
                      <span className="font-display text-[clamp(2.2rem,3.6vw,3.2rem)] leading-none tracking-[-0.02em] text-ink/15">{p.num}</span>
                    </div>
                    <div className="mb-1.5 t-eyebrow text-ink/45">{p.tag}</div>
                    <h3 className="mb-3 t-h3">{p.name}</h3>
                    <p className="mb-6 max-w-120 t-body text-ink/65">{p.desc}</p>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-[1.7rem] leading-none tracking-[-0.02em] text-accent"><Counter value={p.count} /></span>
                      <span className="t-eyebrow text-ink/50">{p.countLabel}</span>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 03 · WHY PARTNER (asymmetric media + reasons) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="scale" delay={0.1} className="relative lg:order-2">
            <div className="overflow-hidden rounded-card border border-cream/10 shadow-float">
              <img src="/images/s3.png" alt="Partners collaborating inside the AQV campus" className="block aspect-[4/3] max-h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-65 rounded-card border border-cream/12 bg-night-2/95 p-5 shadow-card backdrop-blur-sm sm:-left-6">
              <div className="t-eyebrow text-accent">ONE FOUNDATION</div>
              <div className="mt-2 t-body-sm text-cream/65">Every partner builds on the same world-class infrastructure, research and talent.</div>
            </div>
          </Reveal>

          <div className="lg:order-1">
            <Eyebrow num="03" label="WHY PARTNER WITH AQV" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Partner once, <Accent>access the whole valley.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-10 max-w-115 t-body text-cream/70">
              AQV is more than a partner — it is an entire quantum value chain. One agreement plugs you into infrastructure, research, talent and a path to market.
            </Reveal>
            <ul>
              {whyPartner.map((w, i) => (
                <Reveal
                  as="li"
                  key={w.k}
                  delay={i * 0.07}
                  className={`group flex items-start gap-5 border-t border-cream/10 py-5 last:border-b ${i % 2 ? "lg:ml-8" : ""}`}
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-chip border border-accent/25 bg-accent/[0.08]">
                    <PathIcon d={w.icon} size={18} className="text-accent" sw={1.4} />
                  </span>
                  <div>
                    <div className="font-display text-[1.3rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1">{w.k}</div>
                    <div className="mt-1 max-w-90 t-body-sm text-cream/55">{w.desc}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 04 · COLLABORATION MODELS (staircase) ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow num="04" label="COLLABORATION MODELS" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
                A model for <Accent>every partnership.</Accent>
              </Reveal>
              <Reveal as="p" delay={0.1} className="mb-9 max-w-100 t-body text-ink/70">
                From a deep strategic alliance to a focused research program — partnership at AQV is structured, clear and built around shared goals.
              </Reveal>
              <Reveal delay={0.15}>
                <ArrowLink href="/contact" label="START A CONVERSATION" accent="iris" theme="light" gap={44} />
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {models.map((m, i) => (
                <Reveal
                  key={m.num}
                  delay={i * 0.08}
                  variant="scale"
                  className={`group rounded-card border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card lg:p-9 ${["lg:mt-0", "lg:mt-10", "lg:mt-0", "lg:mt-10"][i]}`}
                >
                  <span className="border-b border-accent pb-0.5 font-display text-[15px] leading-none text-accent">{m.num}</span>
                  <div className="mb-3 mt-5 font-display text-[1.5rem] tracking-[-0.015em]">{m.k}</div>
                  <p className="t-body-sm text-ink/60">{m.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 · LOGO / TRUSTED-BY WALL (mono) ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-150">
              <Eyebrow num="05" label="OUR NETWORK" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h3">
                Trusted by leaders <Accent>worldwide.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-90 t-body-sm text-cream/55 lg:pb-2">
              A growing network of organizations building India&apos;s quantum advantage alongside us.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-cream/10 bg-cream/[0.06] sm:grid-cols-3 lg:grid-cols-4">
            {logos.map((lg, i) => (
              <Reveal
                key={lg}
                delay={(i % 4) * 0.06}
                className="group flex aspect-[3/2] items-center justify-center bg-night transition-colors duration-300 hover:bg-night-2"
              >
                <span className="t-overline text-cream/35 transition-colors duration-300 group-hover:text-accent/70">{lg}</span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-px flex flex-wrap items-center justify-between gap-4 rounded-card border border-cream/10 px-7 py-5">
            <span className="t-overline text-cream/45">TRUSTED BY LEADING ORGANIZATIONS WORLDWIDE</span>
            <a href="/ecosystem" className="t-overline text-accent no-underline transition-opacity duration-300 hover:opacity-70">
              VIEW THE ECOSYSTEM ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ 06 · PARTNER STAT BAND (big numbers) ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-180">
            <Eyebrow num="06" label="PARTNERSHIP IMPACT" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="t-h2">
              A network that <Accent>compounds.</Accent>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07} className="group bg-sand p-7 transition-colors duration-300 hover:bg-paper lg:p-10">
                <div className="font-display text-[clamp(2.4rem,4.4vw,3.6rem)] leading-none tracking-[-0.025em] text-accent">
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
      </section>

      {/* ============ 07 · QUOTE / TESTIMONIAL MOMENT ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <Eyebrow num="07" label="IN THEIR WORDS" className="mb-8" />
            <span aria-hidden className="mb-2 block font-display text-[5rem] leading-[0.6] text-accent/30">&ldquo;</span>
            <Reveal as="blockquote" variant="wipe" className="mb-9 font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.25] tracking-[-0.015em]">
              Partnering with AQV gave us more than infrastructure — it connected us to a living quantum ecosystem where research, talent and industry move as one.
            </Reveal>
            <Reveal delay={0.1} className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/50" />
              <div>
                <div className="font-display text-[1.05rem] tracking-[-0.01em]">A Founding Technology Partner</div>
                <div className="t-overline text-cream/45">GLOBAL QUANTUM SYSTEMS</div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.12} className="overflow-hidden rounded-card border border-cream/10 shadow-float">
            <img src="/images/s5/c2.png" alt="An AQV partnership lead" className="block aspect-[4/3] max-h-[400px] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ============ 08 · CTA (become a partner) ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">BECOME A PARTNER</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Let's build it" className="block" delay={0.05} />
            <TextReveal text="together." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Technology, cloud, academic, government or research — there is a place for you in India&apos;s quantum value chain.
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
              PARTNER WITH US
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
