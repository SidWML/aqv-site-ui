import { Reveal, ArrowLink, TextReveal } from "../ui";
import { Pin } from "../dc";

/* ============ 01 · HERO (dark) ============ */
export default function Hero() {
  return (
    <section
      id="top"
      data-theme="dark"
      className="relative flex min-h-screen items-center overflow-hidden bg-night"
    >
      {/* backdrop image + left fade */}
      <div className="absolute right-0 top-0 h-full w-full opacity-85 lg:w-[100%]">
        <img
          src="/images/hero.png"
          alt="AQV quantum campus — night exterior, riverside"
          className="block h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#0A0E1A 8%,rgba(10,14,26,0.55) 38%,rgba(10,14,26,0.15) 100%)",
          }}
        />
      </div>

      {/* dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* orbital diagram */}
      {/* <div className="absolute left-[40%] top-[14%] hidden h-107.5 w-107.5 animate-[aqvFloat_9s_ease-in-out_infinite] lg:block">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <g style={{ transformOrigin: "200px 200px", animation: "aqvSpin 60s linear infinite" }}>
            <ellipse cx="200" cy="200" rx="150" ry="90" stroke="rgba(201,168,106,0.28)" strokeWidth="1" fill="none" />
            <circle cx="350" cy="200" r="3" fill="#C9A86A" />
          </g>
          <g style={{ transformOrigin: "200px 200px", animation: "aqvSpinR 44s linear infinite" }}>
            <ellipse cx="200" cy="200" rx="90" ry="150" stroke="rgba(139,146,232,0.3)" strokeWidth="1" fill="none" />
            <circle cx="200" cy="50" r="3" fill="#8B92E8" />
          </g>
          <g style={{ transformOrigin: "200px 200px", animation: "aqvSpin 30s linear infinite" }}>
            <circle cx="200" cy="200" r="110" stroke="rgba(245,242,236,0.12)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
            <circle cx="310" cy="200" r="2.4" fill="#F5F2EC" />
          </g>
          <circle cx="200" cy="200" r="6" fill="#C9A86A" style={{ filter: "drop-shadow(0 0 12px #C9A86A)", animation: "aqvPulse 3s ease-in-out infinite" }} />
        </svg>
      </div> */}

      {/* equation motif */}
      <div className="absolute right-[5%] top-[18%] hidden animate-[aqvDrift_6s_ease-in-out_infinite] border-l border-gold/40 pl-4.5 t-mono text-cream/55 lg:block">
        <div className="mb-2.5 t-overline text-gold">SUPERPOSITION</div>
        <div className="mb-1.5">|ψ⟩ = α|0⟩ + β|1⟩</div>
        <div className="border-t border-cream/15 pt-1.5">|α|² + |β|² = 1</div>
      </div>

      {/* content */}
      <div className="relative z-[5] mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-155 pt-15">
          <Reveal className="mb-7.5 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">01</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="t-overline text-accent">BUILT FOR THE FUTURE</span>
          </Reveal>
          <h1 className="mb-7.5 t-display">
            <TextReveal text="India's First" className="block" delay={0.15} />
            <TextReveal text="Quantum" className="block text-accent" delay={0.42} />
            <TextReveal text="Valley" className="block" delay={0.56} />
          </h1>
          <Reveal as="p" delay={0.2} className="mb-9.5 max-w-107.5 t-lead text-cream/[0.72]">
            India&apos;s most advanced quantum ecosystem — uniting research, infrastructure, innovation and industry to solve humanity&apos;s hardest challenges.
          </Reveal>
          <Reveal delay={0.3} className="mb-16">
            <ArrowLink href="#foundation" label="EXPLORE AQV" accent="iris" theme="dark" gap={60} />
          </Reveal>
          <Reveal delay={0.4} className="flex items-start gap-3.25">
            <Pin size={22} className="text-accent" sw={1.3} r={2.4} style={{ marginTop: "2px" }} />
            <div>
              <div className="t-body">Amaravati, Andhra Pradesh, India</div>
              <div className="mt-0.75 t-body-sm text-cream/50">The future is quantum.</div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll cue */}
      <div className="aqv-hero-deco absolute bottom-10.5 left-10 z-[5] flex items-center gap-3.5">
        <div className="relative h-11.5 w-px overflow-hidden bg-cream/20">
          <div className="absolute left-0 top-0 h-3.5 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" />
        </div>
        <span className="t-overline text-cream/50">SCROLL TO DISCOVER</span>
      </div>

      {/* coherence annotation */}
      <div className="aqv-hero-deco absolute bottom-[20%] right-[5%] z-[5] max-w-45 border-l border-iris/40 pl-4 text-left">
        <div className="mb-1.75 t-overline text-iris">COHERENCE</div>
        <div className="t-body-sm text-cream/65">Building stable systems for a quantum future</div>
      </div>
    </section>
  );
}
