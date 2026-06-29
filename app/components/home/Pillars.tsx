import { Reveal, Accent, ArrowLink } from "../ui";

/* ============ 03 · FIVE PILLARS (dark) ============ */

const pillars = [
  {
    num: "01",
    title: "INFRASTRUCTURE",
    desc: "A purpose-built campus with world-class labs, clean rooms, and high-performance compute.",
    icon: "M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z M12 3 V21 M4 7.5 L20 16.5 M20 7.5 L4 16.5",
  },
  {
    num: "02",
    title: "HARDWARE",
    desc: "Access to IBM quantum systems, a next-gen hardware stack, and advanced fabrication facilities.",
    icon: "M7 7 H17 V17 H7 Z M9 3 V7 M12 3 V7 M15 3 V7 M9 17 V21 M12 17 V21 M15 17 V21 M3 9 H7 M3 12 H7 M3 15 H7 M17 9 H21 M17 12 H21 M17 15 H21",
  },
  {
    num: "03",
    title: "RESEARCH",
    desc: "Driving breakthroughs in quantum algorithms, materials, sensing, and hybrid quantum-AI systems.",
    icon: "M12 4 a8 8 0 1 0 0.01 0 M5 12 a14 7 0 0 0 14 0 M5 12 a14 7 0 0 1 14 0 M12 4 V20",
  },
  {
    num: "04",
    title: "TALENT",
    desc: "WISER and education programs building a world-class quantum workforce and leadership.",
    icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6 M18 6 a2 2 0 1 0 0.01 0",
  },
  {
    num: "05",
    title: "CAPITAL & STARTUPS",
    desc: "Enabling ventures through funding, mentorship, and industry partnerships.",
    icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M9 11 l2 2 4-4",
  },
];

/** Hexagon-framed pillar icon (gold outline + centred 24×24 glyph). */
function HexIcon({ d }: { d: string }) {
  return (
    <svg width="44" height="50" viewBox="0 0 44 50" fill="none" aria-hidden>
      <path d="M22 2 L40 13 V37 L22 48 L4 37 V13 Z" stroke="#C9A86A" strokeOpacity="0.45" strokeWidth="1" />
      <g transform="translate(10,13)">
        <path d={d} stroke="#C9A86A" strokeWidth="1.3" fill="none" />
      </g>
    </svg>
  );
}

const hexPts = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

/** Small hexagonal "AQV core" web diagram. */
function SpiderWeb() {
  const spokes = [0, 1, 2, 3, 4, 5].map((i) => {
    const a = (Math.PI / 180) * 60 * i;
    return { x: 32 + 26 * Math.cos(a), y: 32 + 26 * Math.sin(a) };
  });
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <g stroke="#C9A86A" strokeOpacity="0.4" strokeWidth="0.7">
        <polygon points={hexPts(32, 32, 26)} />
        <polygon points={hexPts(32, 32, 17)} />
        <polygon points={hexPts(32, 32, 9)} />
        {spokes.map((s, i) => (
          <line key={i} x1="32" y1="32" x2={s.x} y2={s.y} />
        ))}
      </g>
      {spokes.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r="1.4" fill="#C9A86A" />
      ))}
      <circle cx="32" cy="32" r="2" fill="#C9A86A" />
    </svg>
  );
}

/** Small orbital diagram paired with the state-vector equations. */
function Orbital() {
  return (
    <svg width="116" height="116" viewBox="0 0 120 120" fill="none" aria-hidden className="shrink-0">
      <g stroke="#C9A86A" strokeOpacity="0.3" strokeWidth="0.8">
        <ellipse cx="60" cy="60" rx="48" ry="20" />
        <ellipse cx="60" cy="60" rx="48" ry="20" transform="rotate(60 60 60)" />
        <ellipse cx="60" cy="60" rx="48" ry="20" transform="rotate(120 60 60)" />
      </g>
      <circle cx="60" cy="60" r="3" fill="#C9A86A" />
      <circle cx="108" cy="60" r="2" fill="#8B92E8" />
      <circle cx="36" cy="20" r="1.6" fill="#C9A86A" />
      <circle cx="84" cy="100" r="1.6" fill="#8B92E8" />
    </svg>
  );
}

export default function Pillars() {
  return (
    <section
      id="pillars"
      data-theme="dark"
      className="relative overflow-hidden bg-[#000000] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-30"
    >
      {/* vertical edge label */}
      <div className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 rotate-180 t-overline text-cream/35 [writing-mode:vertical-rl] lg:block">
        BUILT FOR THE FUTURE
      </div>

      {/* dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="relative z-[2] mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1fr_0.95fr] lg:gap-12">
        {/* ---- LEFT: intro ---- */}
        <div>
          <Reveal className="mb-10 flex items-center gap-4.5">
            <span className="t-eyebrow-num text-accent">03</span>
            <span className="h-px w-8.5 bg-accent/50" />
            <span className="t-eyebrow text-cream/70">THE FIVE PILLARS</span>
          </Reveal>
          <Reveal
            as="h2"
            variant="wipe"
            delay={0.1}
            className="mb-8.5 t-h2"
          >
            Five pillars. <Accent>One quantum future.</Accent>
          </Reveal>
          <Reveal
            as="p"
            delay={0.15}
            className="mb-8.5 max-w-95 t-body text-cream/70"
          >
            AQV integrates five critical pillars to create a self-reinforcing ecosystem — driving breakthroughs, building capabilities, and powering the quantum revolution from India to the world.
          </Reveal>
          <Reveal delay={0.2}>
            <ArrowLink href="#ibm" label="EXPLORE THE ECOSYSTEM" accent="iris" theme="dark" gap={50} />
          </Reveal>

          <Reveal delay={0.25} className="mt-14 flex items-center gap-5 border-t border-cream/[0.12] pt-8">
            <SpiderWeb />
            <div>
              <div className="mb-2 t-eyebrow text-accent">AQV CORE</div>
              <div className="max-w-52.5 t-body-sm text-cream/60">
                The convergence of science, technology, and ambition.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex items-center gap-5">
            <Orbital />
            <div className="t-mono text-cream/45">
              <div>|ψ⟩ = α|0⟩ + β|1⟩</div>
              <div className="mt-1.5">|α|² + |β|² = 1</div>
            </div>
          </Reveal>
        </div>

        {/* ---- CENTER: exploded-disc render ---- */}
        <Reveal delay={0.15} className="flex flex-col items-center">
          <img
            src="/images/s3-n.png"
            alt="The five pillars — an exploded view of the AQV quantum campus"
            className="block w-full max-w-110 object-contain"
          />
          <div className="mt-4 t-overline text-accent">
            INTERCONNECTED · INTENTIONAL · IMPACTFUL
          </div>
          <div className="mt-3 text-center t-title-sm text-cream/85">
            Designed to compound quantum advantage.
          </div>
        </Reveal>

        {/* ---- RIGHT: numbered pillar list ---- */}
        <div className="flex flex-col">
          {pillars.map((p, i) => (
            <Reveal
              key={p.num}
              delay={0.1 + i * 0.05}
              className="flex gap-5 border-b border-cream/10 py-5.5"
            >
              <div className="flex h-12 w-11 shrink-0 items-center justify-center">
                <HexIcon d={p.icon} />
              </div>
              <div className="flex-1">
                <div className="mb-1.75 flex items-baseline gap-3">
                  <span className="border-b border-accent t-h4 text-accent">{p.num}</span>
                  <span className="t-eyebrow">{p.title}</span>
                </div>
                <div className="t-body-sm text-cream/60">{p.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
