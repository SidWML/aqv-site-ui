import { Reveal, ArrowLink } from "../ui";

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
        <span className="t-eyebrow text-ink/60">WHY AQV, WHY NOW</span>
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

        {/* image — single composite visual (carries its own text) */}
        <Reveal variant="scale" className="mt-14 overflow-hidden  lg:mt-18">
          <img
            src="/images/s2/why.png"
            alt="Why AQV — national capability, global partnerships and built for access"
            className="block w-full"
          />
        </Reveal>

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
