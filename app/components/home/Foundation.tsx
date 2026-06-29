import { Reveal, ArrowLink } from "../ui";

/* ============ 02 · FOUNDATION (light) ============ */
export default function Foundation() {
  return (
    <section
      id="foundation"
      data-theme="light"
      className="relative overflow-hidden bg-sand px-5 pb-14 pt-20 text-ink sm:px-8 sm:pt-24 lg:px-10 lg:pb-22.5 lg:pt-30"
    >
      {/* full-bleed background image + left scrim so text stays readable
          while the image stays fully clear on the right */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/s2.png"
          alt="Quantum campus — glass facade & courtyard trees"
          className="block h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#F4F1EA 30%,rgba(244,241,234,0.85) 44%,rgba(244,241,234,0) 64%)",
          }}
        />
      </div>

      {/* content grid */}
      <div className="relative z-[2] mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-15">
        <div className="relative ">
          <Reveal delay={0.05} className="mb-6.5 flex items-center gap-3.5">
            <span className="t-eyebrow-num text-accent">02</span>
            <span className="h-px w-7.5 bg-accent" />
            <span className="t-eyebrow text-ink/60">
              POWERING POSSIBILITIES
            </span>
          </Reveal>
          <Reveal
            as="h2"
            variant="wipe"
            delay={0.1}
            className="mb-8 t-h2"
          >
            Building the foundation for{" "}
            <span className="text-accent">India&apos;s quantum future.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.15}
            className="mb-8.5 max-w-100 t-body text-ink/70"
          >
            AQV unites world-class research, advanced infrastructure, and industry collaboration to accelerate discovery, drive innovation, and create lasting impact.
          </Reveal>
          <Reveal delay={0.2}>
            <ArrowLink
              href="#pillars"
              label="EXPLORE THE ECOSYSTEM"
              accent="iris"
              theme="light"
              gap={50}
            />
          </Reveal>
        </div>
      </div>

      {/* bottom border row */}
      <div className="relative z-[2] mx-auto mt-17.5 flex max-w-[1600px] flex-col items-start gap-4 pt-6.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="h-px w-7.5 bg-accent" />
          <span className="t-title">
            Where quantum research meets{" "}
            <span className="text-accent">real-world impact.</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-ink/55">
          <span className="t-eyebrow">SCROLL TO DISCOVER</span>
          <svg width="15" height="15" viewBox="0 0 16 16">
            <path d="M8 2 V13 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="1.3" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
