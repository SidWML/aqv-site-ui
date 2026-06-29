import { Reveal, PillButton } from "../ui";
import { PathIcon, ArrowUR, Pin } from "../dc";

/* ============ 10 · CTA (dark) ============ */
export default function Cta() {
  return (
    <section
      id="cta"
      data-theme="dark"
      className="relative overflow-hidden bg-night"
    >
      {/* full-bleed CTA background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta.png"
          alt="AQV campus — illuminated night panorama"
          className="block h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(10,14,26,0.88) 0%,rgba(10,14,26,0.6) 50%,rgba(10,14,26,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] flex min-h-[92vh] flex-col items-center justify-center px-5 sm:px-8 lg:px-10 py-24 text-center">
        {/* background orbital diagram */}
        <div className="hidden lg:block absolute left-1/2 top-[8%] h-140 w-275 -translate-x-1/2 opacity-50">
          <svg viewBox="0 0 1100 560" className="h-full w-full">
            <g style={{ transformOrigin: "550px 280px", animation: "aqvSpin 90s linear infinite" }}>
              <ellipse cx="550" cy="280" rx="520" ry="200" stroke="rgba(245,242,236,0.12)" strokeWidth="1" fill="none" />
              <circle cx="1070" cy="280" r="3" fill="#C9A86A" />
              <circle cx="30" cy="280" r="2.5" fill="#8B92E8" />
            </g>
            <g style={{ transformOrigin: "550px 280px", animation: "aqvSpinR 70s linear infinite" }}>
              <ellipse cx="550" cy="280" rx="400" ry="240" stroke="rgba(201,168,106,0.14)" strokeWidth="1" fill="none" />
              <circle cx="550" cy="40" r="2.5" fill="#C9A86A" />
            </g>
          </svg>
        </div>

        {/* eyebrow */}
        <Reveal className="z-[3] mb-10 flex items-center gap-4">
          <span className="t-eyebrow-num text-accent">10</span>
          <span className="h-px w-10 bg-accent/50" />
          <span className="t-eyebrow text-cream/70">THE NEXT CHAPTER</span>
        </Reveal>

        {/* heading */}
        <Reveal as="h2" variant="wipe" delay={0.1} className="z-[3] mb-9 t-display-2">
          Build India&apos;s<br /><span className="text-accent">Quantum Future</span>
        </Reveal>

        {/* paragraph */}
        <Reveal as="p" delay={0.15} className="z-[3] mb-11 max-w-140 t-lead text-cream/[0.72]">
          AQV is more than a vision — it is India&apos;s movement to lead the quantum era. Together, let&apos;s create breakthroughs that will define generations.
        </Reveal>

        {/* CTA pills */}
        <Reveal delay={0.2} className="z-[3] mb-7.5 flex flex-wrap justify-center gap-4">
          <PillButton href="#top" variant="solid" icon={<ArrowUR size={14} stroke="currentColor" sw={1.5} />}>
            INVEST IN AQV
          </PillButton>
          <PillButton href="#top" variant="outline" icon={<PathIcon d="M5 13 l3 3 6-6 M9 7 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0" size={16} className="text-accent" sw={1.4} />}>
            PARTNER WITH US
          </PillButton>
          <PillButton href="#top" variant="outline" icon={<svg width="16" height="16" viewBox="0 0 24 24" className="stroke-accent" style={{ fill: "none", strokeWidth: 1.4 }}><circle cx="12" cy="8" r="3.4" /><path d="M5 20 c0-4 3.5-6 7-6 s7 2 7 6" /></svg>}>
            APPLY TO PROGRAMS
          </PillButton>
        </Reveal>

        {/* founding partnership line */}
        <Reveal delay={0.25} className="z-[3] flex items-center gap-2.5 t-eyebrow text-accent">
          <PathIcon d="M12 3 L20 6 V12 c0 5-4 8-8 9 c-4-1-8-4-8-9 V6 Z" size={14} className="text-accent" sw={1.3} />LIMITED FOUNDING PARTNERSHIP OPPORTUNITIES AVAILABLE
        </Reveal>
      </div>

      {/* location — pinned to the foot of the section */}
      <div className="absolute bottom-8 left-0 right-0 z-[2] flex items-center justify-center gap-2.5 px-5 text-center t-eyebrow text-cream/80">
        <Pin size={14} className="text-accent" sw={1.3} r={2} />AMARAVATI QUANTUM VALLEY, ANDHRA PRADESH, INDIA
      </div>
    </section>
  );
}
