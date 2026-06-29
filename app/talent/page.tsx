"use client";

import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Reveal, TextReveal, Counter, Eyebrow, ArrowLink, Accent } from "../components/ui";
import { PathIcon } from "../components/dc";

/* ----------------------------------------------------------------- data --- */

/* The WISER pipeline — the staged journey from first exposure to leadership. */
const pipeline = [
  {
    n: "01",
    stage: "Awareness",
    desc: "Outreach, talks and quantum literacy that bring the field to learners across India.",
    metric: "62K+",
    metricLabel: "LEARNERS REACHED",
    icon: "M12 3 a6 6 0 0 0 -3 11 v3 h6 v-3 a6 6 0 0 0 -3 -11 Z M9 21 h6",
  },
  {
    n: "02",
    stage: "University",
    desc: "Foundations, electives and PhD tracks built with leading institutions and faculty.",
    metric: "10+",
    metricLabel: "UNIVERSITIES",
    icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11",
  },
  {
    n: "03",
    stage: "Fellowships",
    desc: "Hands-on work on real quantum hardware — research-grade skill, earned in the lab.",
    metric: "5",
    metricLabel: "LEARNING TRACKS",
    icon: "M7 7 H17 V17 H7 Z M9 3 V7 M15 3 V7 M9 17 V21 M15 17 V21 M3 11 H7 M17 11 H21",
  },
  {
    n: "04",
    stage: "Leadership",
    desc: "Researchers, founders and engineers who go on to carry the quantum field forward.",
    metric: "100K+",
    metricLabel: "JOBS ENVISIONED",
    icon: "M5 19 L12 4 L19 19 M9 13 H15",
  },
];

/* Learning tracks — a track for every stage of a life. */
const tracks = [
  { num: "01", title: "School", meta: "AWARENESS", desc: "Early exposure and quantum literacy for students.", img: "/images/s6/c1.png" },
  { num: "02", title: "Undergraduate", meta: "FOUNDATIONS", desc: "Foundations, electives and first quantum projects.", img: "/images/s6/c2.png" },
  { num: "03", title: "Graduate", meta: "DEEP SKILLS", desc: "Advanced coursework and research preparation.", img: "/images/s6/c3.png" },
  { num: "04", title: "Professional", meta: "RESKILLING", desc: "Reskilling for engineers and working scientists.", img: "/images/s6/c4.png" },
  { num: "05", title: "Researcher", meta: "RESEARCH", desc: "Fellowships, PhD tracks and lab leadership.", img: "/images/s6/c5.png" },
];

/* Who WISER is for — the eligibility split. */
const audience = [
  { k: "Students", line: "From school to graduate study — curious minds at any level." },
  { k: "Professionals", line: "Engineers and scientists reskilling for quantum work." },
  { k: "Researchers", line: "Fellows and PhDs ready for research-grade hardware." },
  { k: "Institutions", line: "Universities bringing WISER to their own campuses." },
];

/* Institutional partnership offerings. */
const institutional = [
  "Curriculum & faculty development",
  "Shared quantum hardware access",
  "Joint research projects",
  "Student fellowships & placement",
];

/* Reach band — the human numbers. */
const reach = [
  { value: "62K+", label: "Learners reached" },
  { value: "100K+", label: "Jobs envisioned" },
  { value: "10+", label: "Universities & institutes" },
  { value: "5", label: "Learning tracks" },
];

/* Four steps to join. */
const join = [
  { n: "01", title: "Apply", desc: "Choose a track and submit your application." },
  { n: "02", title: "Assess", desc: "A short assessment matches you to the right level." },
  { n: "03", title: "Enroll", desc: "Join cohorts, mentors and the AQV community." },
  { n: "04", title: "Build", desc: "Learn, build on hardware, move toward industry." },
];

/* ============================================================== page === */

export default function TalentPage() {
  return (
    <div className="w-full overflow-x-hidden bg-night font-sans text-cream">
      <AQVNav active="engage" theme="dark" />

      {/* ============ 01 · HERO — statement, portrait-pinned ============ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-night px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 hidden h-full w-[46%] opacity-30 lg:block">
          <img src="/images/s5/s1.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,var(--color-night) 4%,rgba(10,14,26,0.55) 42%,rgba(10,14,26,0.15) 100%)" }} />
        </div>
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <Reveal className="mb-7.5 flex items-center gap-4.5">
              <span className="t-eyebrow-num text-accent">01</span>
              <span className="h-px w-10 bg-accent/50" />
              <span className="t-overline text-accent">TALENT / WISER</span>
            </Reveal>
            <h1 className="mb-7 t-display">
              <TextReveal text="The people who" className="block" delay={0.1} />
              <TextReveal text="will build" className="block" delay={0.3} />
              <TextReveal text="quantum India." className="block text-accent" delay={0.48} />
            </h1>
            <Reveal as="p" delay={0.66} className="mb-9 max-w-130 t-lead text-cream/[0.72]">
              WISER carries people from their first spark of curiosity to research leadership — the workforce the entire quantum economy will run on.
            </Reveal>
            <Reveal delay={0.76}>
              <ArrowLink href="#pipeline" label="FOLLOW THE WISER JOURNEY" accent="iris" theme="dark" gap={48} />
            </Reveal>
          </div>

          {/* a quiet human stat, off to the side */}
          <Reveal delay={0.34} variant="scale" className="lg:pb-3">
            <div className="rounded-card border border-cream/12 bg-night-2/60 p-7 backdrop-blur-sm">
              <div className="font-display text-[clamp(3rem,5vw,4rem)] leading-none tracking-[-0.025em] text-accent">
                <Counter value="62K+" />
              </div>
              <div className="mt-3 t-eyebrow text-cream/55">LEARNERS ALREADY REACHED</div>
              <div className="mt-6 h-px w-full bg-cream/12" />
              <p className="mt-6 t-body-sm text-cream/60">
                Across schools, campuses and labs — and only just beginning.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-9 left-5 z-10 flex items-center gap-3.5 sm:left-8 lg:left-10">
          <div className="relative h-11 w-px overflow-hidden bg-cream/20">
            <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
          </div>
          <span className="t-overline text-cream/45">SCROLL TO BEGIN</span>
        </div>
      </section>

      {/* ============ 02 · THE WISER PIPELINE — staged journey ============ */}
      <section id="pipeline" className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="max-w-180">
              <Eyebrow num="02" label="THE WISER PIPELINE" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                From a first spark <Accent>to research leadership.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="t-body text-ink/65 lg:pb-2">
              Four stages, one continuous path — each one widening who gets to do quantum, and how far they can go.
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {pipeline.map((p, i) => (
              <Reveal
                key={p.stage}
                delay={i * 0.1}
                variant="scale"
                className={`group relative flex flex-col rounded-card border border-ink/10 bg-paper p-7 transition-colors duration-300 hover:border-accent/40 ${["lg:mt-0", "lg:mt-9", "lg:mt-18", "lg:mt-27"][i]}`}
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <PathIcon d={p.icon} size={20} className="text-accent" sw={1.4} />
                </span>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-display text-[13px] text-accent">{p.n}</span>
                  <span className="t-eyebrow text-ink/45">STAGE</span>
                </div>
                <div className="mb-2.5 font-display text-[1.6rem] tracking-[-0.015em]">{p.stage}</div>
                <p className="mb-7 t-body-sm text-ink/60">{p.desc}</p>
                <div className="mt-auto border-t border-ink/10 pt-5">
                  <div className="font-display text-[1.7rem] leading-none tracking-[-0.02em] text-accent">
                    <Counter value={p.metric} />
                  </div>
                  <div className="mt-2 t-eyebrow text-ink/45">{p.metricLabel}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <span aria-hidden className="absolute -right-4 top-7 hidden text-ink/25 lg:block">
                    <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 10 H15 M11 6 L15 10 L11 14" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · LEARNING TRACKS — asymmetric index ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow num="03" label="LEARNING TRACKS" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                A track for every <Accent>stage of a life.</Accent>
              </Reveal>
            </div>
            <Reveal as="p" delay={0.1} className="max-w-110 t-body text-cream/70 lg:justify-self-end lg:text-right">
              Whoever you are and wherever you start, there is a way in — from a school classroom to a research fellowship.
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-card border border-cream/10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* lead track — large portrait card */}
            <Reveal variant="scale" className="group relative overflow-hidden bg-night-2">
              <img src={tracks[0].img} alt={tracks[0].title} className="block aspect-[16/10] max-h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 38%,rgba(10,14,26,0.92) 100%)" }} />
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-display text-[15px] text-accent">{tracks[0].num}</span>
                  <span className="t-eyebrow text-cream/55">{tracks[0].meta}</span>
                </div>
                <div className="mb-2 font-display text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">{tracks[0].title}</div>
                <p className="max-w-90 t-body-sm text-cream/65">{tracks[0].desc}</p>
              </div>
            </Reveal>

            {/* the remaining four — stacked rows */}
            <ul className="flex flex-col bg-night">
              {tracks.slice(1).map((t, i) => (
                <Reveal
                  as="li"
                  key={t.num}
                  delay={i * 0.07}
                  className={`group flex flex-1 items-center gap-5 border-cream/10 px-7 py-6 transition-colors duration-300 hover:bg-night-2 ${i > 0 ? "border-t" : ""}`}
                >
                  <span className="hidden h-14 w-14 flex-shrink-0 overflow-hidden rounded-card sm:block">
                    <img src={t.img} alt="" className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <div className="flex-1">
                    <div className="mb-1 flex items-baseline gap-2.5">
                      <span className="font-display text-[13px] text-accent">{t.num}</span>
                      <span className="t-eyebrow text-cream/45">{t.meta}</span>
                    </div>
                    <div className="font-display text-[1.3rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1">{t.title}</div>
                    <div className="mt-1 t-body-sm text-cream/55">{t.desc}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 04 · WHO IT'S FOR — eligibility split ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="scale" className="relative lg:order-2">
            <div className="overflow-hidden rounded-card shadow-float">
              <img src="/images/s5/c2.png" alt="A WISER fellow at work in the lab" className="block aspect-[4/5] max-h-[400px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-6 max-w-60 rounded-card border border-ink/10 bg-paper/95 p-5 shadow-card backdrop-blur-sm sm:-right-6">
              <div className="t-eyebrow text-accent">NO SINGLE STARTING LINE</div>
              <div className="mt-2 t-body-sm text-ink/65">Curiosity is the only prerequisite — the rest, WISER builds with you.</div>
            </div>
          </Reveal>

          <div className="lg:order-1">
            <Eyebrow num="04" label="WHO IT'S FOR" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Built for whoever shows up <Accent>ready to learn.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-110 t-body text-ink/70">
              WISER isn't gated to one kind of person. It meets students, professionals, researchers and whole institutions exactly where they are.
            </Reveal>
            <ul className="border-t border-ink/12">
              {audience.map((a, i) => (
                <Reveal
                  as="li"
                  key={a.k}
                  delay={i * 0.07}
                  className={`group flex items-baseline gap-5 border-b border-ink/12 py-5 ${i % 2 ? "lg:ml-8" : ""}`}
                >
                  <span className="font-display text-[13px] text-accent/70">{`0${i + 1}`}</span>
                  <span className="w-36 flex-shrink-0 font-display text-[1.25rem] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1.5">{a.k}</span>
                  <span className="t-body-sm text-ink/60">{a.line}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 05 · FOR INSTITUTIONS — bring WISER to campus ============ */}
      <section className="relative overflow-hidden bg-sand px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow num="05" label="FOR INSTITUTIONS" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Bring WISER to your <Accent>own campus.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-115 t-body text-ink/70">
              Universities and colleges can bring WISER curriculum, faculty development and hardware access to their students — plugging an entire campus directly into the AQV ecosystem.
            </Reveal>
            <ul className="mb-9 grid gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {institutional.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.07} className="flex items-center gap-3.5 bg-paper px-6 py-5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-accent/40">
                    <PathIcon d="M4 8 L7 11 L12 4" size={14} className="text-accent" sw={1.6} vb="0 0 16 16" />
                  </span>
                  <span className="t-body-sm text-ink/75">{b}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <ArrowLink href="/partners" label="PARTNER ON TALENT" accent="iris" theme="light" gap={44} />
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.1} className="relative overflow-hidden rounded-card shadow-float">
            <img src="/images/s5/s2.png" alt="A university partnership workshop" className="block aspect-[4/3] max-h-[360px] w-full object-cover" />
            <div className="absolute left-6 top-6 rounded-pill bg-night/85 px-4 py-2 backdrop-blur-sm">
              <span className="t-eyebrow text-accent">CAMPUS PROGRAM</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 06 · REACH — human stat band ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-30">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-160">
              <Eyebrow num="06" label="REACH & OUTCOMES" className="mb-6" />
              <Reveal as="h2" variant="wipe" className="t-h2">
                Measured in <Accent>people, not papers.</Accent>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:pb-2">
              <ArrowLink href="/programs" label="VIEW ALL PROGRAMS" accent="iris" theme="dark" gap={44} />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {reach.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.08} className="group bg-night p-8 transition-colors duration-300 hover:bg-night-2 lg:p-10">
                <div className="font-display text-[clamp(2.6rem,4.5vw,3.8rem)] leading-none tracking-[-0.025em] text-accent">
                  <Counter value={r.value} />
                </div>
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                  <span className="t-eyebrow text-cream/55">{r.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 07 · HOW TO JOIN — four-step path ============ */}
      <section className="relative overflow-hidden bg-stone px-5 py-16 text-ink sm:px-8 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow num="07" label="HOW TO JOIN" className="mb-6" />
            <Reveal as="h2" variant="wipe" className="mb-6 t-h3">
              Four steps from <Accent>curious to building.</Accent>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-9 max-w-95 t-body text-ink/70">
              No gatekeeping, no guesswork. Pick a track, get matched to the right level, and start learning on real quantum hardware.
            </Reveal>
            <Reveal variant="scale" delay={0.15} className="overflow-hidden rounded-card shadow-card">
              <img src="/images/s5/c1.png" alt="" className="block aspect-[16/10] max-h-[360px] w-full object-cover" />
            </Reveal>
          </div>

          <ol>
            {join.map((j, i) => (
              <Reveal
                as="li"
                key={j.n}
                delay={i * 0.08}
                className={`group flex items-start gap-6 border-t border-ink/12 py-8 last:border-b ${i % 2 ? "lg:ml-10" : ""}`}
              >
                <span className="font-display text-[clamp(2.2rem,3.5vw,3rem)] leading-none tracking-[-0.02em] text-ink/15 transition-colors duration-300 group-hover:text-accent">
                  {j.n}
                </span>
                <div className="pt-1">
                  <div className="mb-1.5 font-display text-[1.5rem] tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1">{j.title}</div>
                  <p className="max-w-110 t-body text-ink/65">{j.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 08 · CTA — start your quantum career ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <img src="/images/cta.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.9) 0%,rgba(10,14,26,0.62) 50%,rgba(10,14,26,0.94) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center">
          <Reveal className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">START YOUR QUANTUM CAREER</span>
            <span className="h-px w-10 bg-accent/50" />
          </Reveal>
          <h2 className="mb-8 t-display-2">
            <TextReveal text="Your place in" className="block" delay={0.05} />
            <TextReveal text="quantum India." className="block text-accent" delay={0.24} />
          </h2>
          <Reveal as="p" delay={0.2} className="mb-11 max-w-140 t-lead text-cream/[0.72]">
            Student, professional or institution — there's a WISER track that meets you where you are and takes you as far as you'll go.
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
