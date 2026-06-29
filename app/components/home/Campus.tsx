import { Reveal } from "../ui";
import { PathIcon, ArrowUR } from "../dc";

const infraStats = [
  { title: "500+ ACRES", desc: "Integrated quantum innovation campus.", icon: "M4 20 H20 M6 20 V10 H10 V20 M14 20 V6 H18 V20" },
  { title: "SUSTAINABLE BY DESIGN", desc: "Built with green infrastructure and responsible technology.", icon: "M12 3 c-3 4-3 8 0 12 c3-4 3-8 0-12 Z M12 15 V21" },
  { title: "BUILT FOR COLLABORATION", desc: "Where academia, industry and startups build the future together.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
];

/* ============ 07 · INFRASTRUCTURE (light) ============ */
export default function Campus() {
  return (
    <section
      id="infra"
      data-theme="light"
      className="relative overflow-hidden bg-sand text-ink px-5 sm:px-8 lg:px-10 "
    >
      {/* full-bleed s7 background + left scrim — desktop only (mobile shows it inline below) */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img
          src="/images/s7.png"
          alt="Aerial master plan — riverside quantum campus"
          className="block h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg,rgba(244,241,234,0.97) 0%,rgba(244,241,234,0.62) 32%,rgba(244,241,234,0.12) 62%)",
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1600px] py-12">
        <div className="min-h-0 lg:min-h-115 max-w-115 pt-2.5">
          <Reveal className="mb-7.5 flex items-center gap-3.5">
            <span className="t-eyebrow-num text-accent">07</span>
            <span className="h-px w-7.5 bg-ink/30" />
            <span className="t-eyebrow text-ink/60">BUILT FOR THE FUTURE</span>
          </Reveal>
          <Reveal as="h2" variant="wipe" delay={0.1} className="mb-7 t-h3">
            A purpose-built home for quantum <span className="text-accent">innovation.</span>
          </Reveal>
          <Reveal as="p" delay={0.15} className="mb-7.5 max-w-105 t-body text-ink/70">
            AQV spans a 500+ acre integrated campus designed to accelerate discovery, innovation and industry creation. World-class infrastructure for world-changing ideas.
          </Reveal>
          <Reveal as="a" delay={0.2} href="#partners" className="inline-flex items-center gap-11 border-b border-ink/25 pb-2.75 text-ink no-underline">
            <span className="t-eyebrow">EXPLORE INFRASTRUCTURE</span>
            <ArrowUR size={15} className="text-accent" sw={1.5} />
          </Reveal>
        </div>

        {/* mobile: show the aerial as an inline image (no text overlap); strip stacks below */}
        <img
          src="/images/s7.png"
          alt="Aerial master plan — riverside quantum campus"
          className="mt-8 block aspect-16/10 w-full rounded-card object-cover lg:hidden"
        />

        <Reveal
          className="mt-8 lg:mt-45 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,0.85fr)_1.1fr] items-center gap-8.5 rounded-card border border-ink/[0.12] bg-sand/95 p-5 shadow-panel backdrop-blur-sm"
        >
          {infraStats.map((is) => (
            <div key={is.title} className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-ink/[0.12] pb-4.5 sm:pb-0 pr-4.5">
              <span className="flex h-10.5 w-10.5 flex-shrink-0 items-center justify-center rounded-full bg-ink/[0.05]">
                <PathIcon d={is.icon} size={18} stroke="#6B655C" sw={1.4} />
              </span>
              <div>
                <div className="mb-1.5 whitespace-nowrap text-[12px] font-bold tracking-[0.07em] text-ink">{is.title}</div>
                <div className="max-w-55 t-caption text-ink/60">{is.desc}</div>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4.5">
            <div className="h-18.5 w-30 flex-shrink-0 rounded-lg bg-ink/[0.06]" />
            <div>
              <div className="mb-1.5 whitespace-nowrap text-[12px] font-bold tracking-[0.07em] text-ink">EXPERIENCE AQV</div>
              <div className="mb-2.5 max-w-55 t-caption text-ink/60">Take a virtual walkthrough of the AQV campus and infrastructure.</div>
              <span className="t-eyebrow border-b border-accent pb-1 text-accent">LAUNCH TOUR →</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
