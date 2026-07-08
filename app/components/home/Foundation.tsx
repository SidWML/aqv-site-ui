import { Reveal, ArrowLink } from "../ui";

const whyCards = [
  { num: "01", title: "National capability", desc: "Quantum infrastructure and research, built in India.", img: "/images/s2/why-1.png" },
  { num: "02", title: "Global partnerships", desc: "Delivered with world-leading technology partners.", img: "/images/s2/why-2.png" },
  { num: "03", title: "Built for access", desc: "Open to companies, founders, investors and learners.", img: "/images/s2/why-3.png" },
];

const audiences = [
  { label: "Investor", href: "/invest" },
  { label: "Industry", href: "/industry" },
  { label: "Startup", href: "/startups" },
  { label: "Researcher", href: "/research" },
  { label: "Student", href: "/learn" },
];

/* ============ 02 · WHY AQV, WHY NOW (light) ============ */
export default function Foundation() {
  return (
    <section
      id="foundation"
      data-theme="light"
      className="relative overflow-hidden bg-sand px-5 py-24 text-ink sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* header — heading left, supporting copy right */}
        <Reveal className="mb-8 flex items-center gap-3.5">
          <span className="t-eyebrow-num text-accent">02</span>
          <span className="h-px w-9 bg-accent" />
          <span className="t-eyebrow text-ink/60">WHY AQV</span>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <Reveal as="h2" variant="wipe" delay={0.1} className="max-w-[15ch] t-display-2">
            Why AQV, <span className="text-accent">why now.</span>
          </Reveal>
          <div>
            <Reveal as="p" delay={0.15} className="max-w-[44ch] t-lead text-ink/75">
              Quantum is moving from research promise toward practical impact — and India is building for it.
            </Reveal>
            <Reveal as="p" delay={0.2} className="mt-5 max-w-[52ch] t-body text-ink/60">
              AQV is India&apos;s coordinated response: national quantum capability, built with global partners, and designed so industry, startups, researchers and students can access the ecosystem from the start.
            </Reveal>
            <Reveal delay={0.25} className="mt-8">
              <ArrowLink href="#pillars" label="EXPLORE THE ECOSYSTEM" accent="iris" theme="light" gap={50} />
            </Reveal>
          </div>
        </div>

        {/* image cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-18">
          {whyCards.map((c, i) => (
            <Reveal
              key={c.title}
              variant="scale"
              delay={i * 0.1}
              className="group relative aspect-4/3 overflow-hidden rounded-card shadow-panel"
            >
              <img
                src={c.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg,rgba(10,14,26,0) 30%,rgba(10,14,26,0.5) 60%,rgba(10,14,26,0.9) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="t-h3 leading-none text-accent">{c.num}</span>
                  <span className="t-eyebrow">{c.title}</span>
                </div>
                <div className="t-body-sm text-cream/80">{c.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* audience router */}
        <Reveal className="mt-12 flex flex-col items-start gap-4 border-t border-ink/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="t-eyebrow text-ink/55">I&apos;M AN &rarr;</span>
          <div className="flex flex-wrap items-center gap-2.5">
            {audiences.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className="rounded-pill border border-ink/20 px-5 py-2.5 t-eyebrow text-ink no-underline transition-colors duration-300 hover:border-accent/60 hover:text-accent"
              >
                {a.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
