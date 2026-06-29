"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

/* the catalog of programs / tracks — rendered as an asymmetric index */
const tracks = [
  {
    n: "01",
    name: "WISER Learning",
    tag: "FOR STUDENTS & RESKILLERS",
    format: "Cohort",
    duration: "8–24 weeks",
    desc: "Quantum literacy to research-grade skill, from school classrooms to professional reskilling — at national scale.",
    img: "/images/s5/s1.png",
  },
  {
    n: "02",
    name: "Research Fellowships",
    tag: "FOR RESEARCHERS & PhDs",
    format: "Fellowship",
    duration: "1–3 years",
    desc: "PhD tracks and joint research on real quantum hardware, run with leading institutions and the AQV labs.",
    img: "/images/s6/c1.png",
  },
  {
    n: "03",
    name: "Startup Incubation",
    tag: "FOR FOUNDERS",
    format: "Accelerator",
    duration: "6–12 months",
    desc: "Founder-first incubation with capital, mentorship and go-to-market support — research turned into companies.",
    img: "/images/s5/s3.png",
  },
  {
    n: "04",
    name: "Industry Co-innovation",
    tag: "FOR ENTERPRISES",
    format: "Partnership",
    duration: "Ongoing",
    desc: "Co-innovation labs and enterprise programs that take organisations from quantum readiness to deployment.",
    img: "/images/s5/s2.png",
  },
];

/* who each track is for — the split */
const audiences = [
  { k: "Students", desc: "Curious minds entering quantum for the first time.", img: "/images/s5/c1.png" },
  { k: "Researchers", desc: "Scientists ready to work on frontier hardware.", img: "/images/s5/c2.png" },
  { k: "Founders", desc: "Builders turning deep-tech into companies.", img: "/images/s5/c3.png" },
  { k: "Institutions", desc: "Enterprises adopting quantum at scale.", img: "/images/s6/c4.png" },
];

/* WISER — the flagship, shown as a structured progression */
const wiser = [
  { n: "1", phase: "LEARN", title: "Foundations", desc: "Quantum literacy and core skilling delivered at scale across the country." },
  { n: "2", phase: "BUILD", title: "Hands-on", desc: "Projects and labs running on real quantum hardware, not simulation." },
  { n: "3", phase: "LEAD", title: "Research & industry", desc: "Fellowships and direct pathways into the quantum workforce." },
];

/* formats / structure — how programs are delivered */
const formats = [
  {
    title: "Cohort-based",
    desc: "Structured intakes that move learners through together, with shared milestones and peer review.",
    icon: "M4 7 H20 M4 12 H20 M4 17 H14 M7 4 V20",
  },
  {
    title: "Hardware-backed",
    desc: "Every advanced track runs on IBM Quantum System Two and the AQV fabrication stack.",
    icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 9 H7 M3 15 H7 M17 9 H21 M17 15 H21",
  },
  {
    title: "Mentor-led",
    desc: "250+ mentors and experts pair with participants from first principles through to delivery.",
    icon: "M12 12 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8 M5 20 c0-4 3-6 7-6 s7 2 7 6",
  },
  {
    title: "Industry-bridged",
    desc: "Programs end in placements, fellowships or company formation — not just a certificate.",
    icon: "M5 19 L12 4 L19 19 M9 13 H15",
  },
];

/* how to join — the four-step path */
const join = [
  { n: "01", title: "Choose", desc: "Pick the track that fits where you are — learning, research, startup or industry." },
  { n: "02", title: "Apply", desc: "Submit your application and profile through a single shared intake." },
  { n: "03", title: "Match", desc: "Get matched to the right cohort, lab or partner team." },
  { n: "04", title: "Start", desc: "Join AQV and begin building the quantum future." },
];

/* outcomes — the stat band */
const outcomes = [
  { value: "62K+", label: "Learners reached" },
  { value: "10+", label: "Universities & institutes" },
  { value: "250+", label: "Mentors & experts" },
  { value: "4", label: "Program tracks" },
  { value: "40+", label: "Startups in pipeline" },
  { value: "100K+", label: "Jobs envisioned" },
];

/* ============================================================== page === */

export default function ProgramsPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="engage" theme="dark" />

      {/* ============ 01 · HERO — statement ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute inset-y-0 right-0 hidden w-[44%] opacity-25 lg:block">
          <img src="/images/s3.png" alt="" className="block h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 4%,rgba(10,14,26,0.55) 46%,rgba(10,14,26,0.15) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">PROGRAMS</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="Four ways into" className="block" delay={0.1} />
              <TextReveal text="the quantum" className="block" delay={0.32} />
              <TextReveal text="future." className="block text-accent" delay={0.52} />
            </h1>
            <Reveal as="p" delay={0.66} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              One front door for students, researchers, founders and institutions — every program engineered to turn quantum ambition into real capability.
            </Reveal>
            <Reveal delay={0.76}>
              <ArrowLink href="#tracks" label="BROWSE THE PROGRAMS" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* the four tracks, previewed as a tight index */}
          <Reveal delay={0.32} className="lg:pb-3">
            <div className="mb-5 t-overline text-cream/45">FOUR TRACKS</div>
            <ul className="border-t border-cream/12">
              {tracks.map((t) => (
                <li key={t.n} className="group flex items-baseline gap-5 border-b border-cream/12 py-4">
                  <span className="font-display text-[15px] text-accent/70">{t.n}</span>
                  <span className="flex-1 font-display text-[1.3rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1.5">{t.name}</span>
                  <span className="t-caption text-cream/45">{t.format}</span>
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

      {/* ============ 02 · THE CATALOG — asymmetric alternating media rows ============ */}
      <section id="tracks" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-160">
              <div className="mb-6 flex items-center gap-3.5">
                <span className="t-eyebrow-num text-accent">02</span>
                <span className="h-px w-[30px] bg-accent/50" />
                <span className="t-eyebrow text-ink/55">THE PROGRAM CATALOG</span>
              </div>
              <Reveal as="h2" variant="wipe" className="t-h2">
                A track for every <Accent>way in.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-90 t-body text-ink/65 lg:pb-2">
              Each program is its own path — but all share one application, one ecosystem and one mission.
            </Reveal>
          </div>

          <div className="flex flex-col">
            {tracks.map((t, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={t.n} className="grid items-center gap-8 border-t border-ink/12 py-10 last:border-b lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-14">
                  <Reveal
                    variant="scale"
                    delay={0.05}
                    className={`group overflow-hidden rounded-card shadow-card ${flip ? "lg:order-2" : ""}`}
                  >
                    <img src={t.img} alt={t.name} className="block aspect-[16/10] max-h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </Reveal>
                  <Reveal delay={0.08} className={flip ? "lg:order-1 lg:pr-6" : "lg:pl-2"}>
                    <div className="mb-4 flex items-center gap-4">
                      <span className="font-display text-[clamp(2.6rem,4.5vw,3.8rem)] leading-none tracking-[-0.02em] text-ink/15">{t.n}</span>
                      <span className="t-eyebrow text-accent">{t.tag}</span>
                    </div>
                    <h3 className="mb-3 t-h3">{t.name}</h3>
                    <p className="mb-6 max-w-120 t-body text-ink/65">{t.desc}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                      <span className="inline-flex items-center gap-2.5">
                        <span className="t-overline text-ink/40">FORMAT</span>
                        <span className="t-caption text-ink/70">{t.format}</span>
                      </span>
                      <span className="hidden h-3.5 w-px bg-ink/15 sm:block" />
                      <span className="inline-flex items-center gap-2.5">
                        <span className="t-overline text-ink/40">DURATION</span>
                        <span className="t-caption text-ink/70">{t.duration}</span>
                      </span>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 03 · WHO IT'S FOR — split ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:pt-2">
            <div className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">03</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-cream/55">WHO IT&apos;S FOR</span>
            </div>
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Built for everyone <Accent>building quantum.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-105 t-body text-cream/70">
              Whatever stage you&apos;re at — first exposure or founding a company — there is a track shaped around where you are and where you&apos;re headed.
            </Reveal>
            <Reveal delay={0.16}>
              <ArrowLink href="/contact" label="FIND YOUR FIT" accent="iris" theme="dark" gap={44} />
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-cream/10 bg-cream/10">
            {audiences.map((a, i) => (
              <Reveal
                key={a.k}
                variant="scale"
                delay={i * 0.08}
                className={`group relative overflow-hidden bg-night ${i % 2 ? "sm:mt-0" : "lg:mt-10"}`}
              >
                <img src={a.img} alt={a.k} className="block aspect-[4/3] max-h-[360px] w-full object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.1) 0%,rgba(10,14,26,0.85) 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display text-[1.3rem] tracking-[-0.01em]">{a.k}</div>
                  <div className="mt-1 t-body-sm text-cream/60">{a.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · WISER — the flagship progression ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">04</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-ink/55">FEATURED · WISER</span>
            </div>
            <Reveal as="h2" variant="wipe" className="mb-6 t-h2">
              WISER — the <Accent>flagship.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-10 max-w-110 t-body text-ink/70">
              One pipeline carries a learner from first exposure all the way to research-grade quantum capability — the program the whole workforce runs on.
            </Reveal>

            <div className="relative pl-9">
              <span aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg,var(--color-indigo-deep),var(--color-iris) 50%,var(--color-gold))" }} />
              {wiser.map((w, i) => (
                <Reveal key={w.n} delay={i * 0.1} className="relative mb-9 last:mb-0">
                  <span aria-hidden className="absolute -left-9 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-stone bg-iris" style={{ boxShadow: "0 0 0 1px rgba(139,146,232,0.5)" }} />
                  <div className="mb-1.5 t-overline text-accent">{w.phase}</div>
                  <div className="font-display text-[1.5rem] tracking-[-0.015em]">{w.title}</div>
                  <div className="mt-1.5 max-w-95 t-body-sm text-ink/60">{w.desc}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="scale" delay={0.12} className="relative lg:mt-10">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s5/s4.png" alt="WISER learners on real quantum hardware" className="block aspect-[4/3] max-h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-60 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm sm:-left-6">
              <div className="font-display text-[2.2rem] leading-none tracking-[-0.02em] text-accent">
                <Counter value="62K+" />
              </div>
              <div className="mt-2 t-body-sm text-ink/65">learners already reached through WISER outreach.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 05 · FORMATS / STRUCTURE — staggered ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 max-w-170 lg:mb-20">
            <div className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">05</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-cream/55">HOW PROGRAMS RUN</span>
            </div>
            <Reveal as="h2" variant="wipe" className="t-h2">
              Structured to turn ambition <Accent>into capability.</Accent>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {formats.map((f, i) => (
              <Reveal
                key={f.title}
                variant="scale"
                delay={i * 0.08}
                className={`group relative rounded-card border border-cream/10 p-7 transition-colors duration-300 hover:border-accent/40 ${["lg:mt-0", "lg:mt-8", "lg:mt-16", "lg:mt-24"][i]}`}
              >
                <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <PathIcon d={f.icon} size={20} className="text-accent" sw={1.4} />
                </span>
                <div className="mb-2 font-display text-[1.35rem] tracking-[-0.01em]">{f.title}</div>
                <p className="t-body-sm text-cream/60">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 · HOW TO JOIN — index list + media ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="scale" className="overflow-hidden rounded-card shadow-float lg:order-2">
            <img src="/images/s5/s5.png" alt="Joining a program at AQV" className="block aspect-[16/10] max-h-[360px] w-full object-cover" />
          </Reveal>

          <div className="lg:order-1">
            <div className="mb-6 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">06</span>
              <span className="h-px w-[30px] bg-accent/50" />
              <span className="t-eyebrow text-ink/55">HOW TO JOIN</span>
            </div>
            <Reveal as="h2" variant="wipe" className="mb-10 t-h3">
              One application, <Accent>four steps.</Accent>
            </Reveal>
            <ol className="border-t border-ink/12">
              {join.map((j, i) => (
                <Reveal
                  as="li"
                  key={j.n}
                  delay={i * 0.07}
                  className={`group flex items-start gap-6 border-b border-ink/12 py-6 ${i % 2 ? "lg:ml-6" : ""}`}
                >
                  <span className="font-display text-[1.5rem] leading-none tracking-[-0.02em] text-accent">{j.n}</span>
                  <div>
                    <div className="font-display text-[1.3rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1">{j.title}</div>
                    <div className="mt-1 max-w-105 t-body-sm text-ink/60">{j.desc}</div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ 07 · OUTCOMES — stat band ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex flex-col gap-6 lg:mb-18 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-150">
              <div className="mb-6 flex items-center gap-3.5">
                <span className="t-eyebrow-num text-accent">07</span>
                <span className="h-px w-[30px] bg-accent/50" />
                <span className="t-eyebrow text-cream/55">PROGRAM OUTCOMES</span>
              </div>
              <Reveal as="h2" variant="wipe" className="t-h2">
                Reach that compounds <Accent>nationwide.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-85 t-body text-cream/65 lg:pb-2">
              The programs don&apos;t just teach — they seed a workforce, a research base and a startup pipeline at once.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-x-16">
            {outcomes.map((m, i) => (
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

      {/* ============ 08 · CTA ============ */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-night px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(10,14,26,0.95) 0%,rgba(10,14,26,0.7) 48%,rgba(10,14,26,0.4) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">FIND YOUR PROGRAM</span>
            </Reveal>
            <h2 className="mb-8 t-display-2">
              <TextReveal text="There&apos;s a path" className="block" delay={0.05} />
              <TextReveal text="for every" className="block" delay={0.22} />
              <TextReveal text="ambition." className="block text-accent" delay={0.4} />
            </h2>
            <Reveal as="p" delay={0.3} className="mb-11 max-w-130 t-lead text-cream/[0.72]">
              From WISER to research fellowships, startup incubation and industry co-innovation — pick where you start and we&apos;ll take it from there.
            </Reveal>
            <Reveal delay={0.4} className="flex flex-wrap gap-4">
              <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-[34px] py-[18px] text-cream no-underline">
                APPLY / REGISTER
                <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
              </a>
              <a href="/contact" className="t-eyebrow inline-flex items-center gap-3 rounded-pill border border-cream/30 px-[34px] py-[18px] text-cream no-underline transition-colors duration-300 hover:border-accent/60">
                TALK TO US
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.3} variant="scale" className="hidden lg:block">
            <div className="rounded-card border border-cream/12 bg-night-2/70 p-7 backdrop-blur-sm">
              <div className="t-overline text-cream/45">AT A GLANCE</div>
              <ul className="mt-5">
                {tracks.map((t) => (
                  <li key={t.n} className="flex items-baseline justify-between gap-4 border-t border-cream/10 py-3 first:border-t-0">
                    <span className="font-display text-[1.05rem] tracking-[-0.01em]">{t.name}</span>
                    <span className="t-caption text-cream/45">{t.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
