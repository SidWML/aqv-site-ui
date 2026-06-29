import React from "react";


function HudChip({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-card border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl ${className}`}
    >
      <div className="text-[11px] uppercase tracking-[0.24em] text-cream/50">
        {title}
      </div>
      <div className="mt-2 text-lg font-medium">{value}</div>
    </div>
  );
}

function HeroObject() {
  return (
    <div className="relative mx-auto h-[720px] w-full max-w-[780px]">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo opacity-20 blur-[150px]" />

      {/* Orbit ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[540px] w-[540px] rounded-full border border-white/[0.06]" />
      </div>

      {/* Secondary ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full border border-indigo/20" />
      </div>

      {/* Main object */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[280px] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-full w-full rounded-[42px] bg-gradient-to-b from-white/20 to-white/[0.04] p-[1px]">
          <div className="relative h-full w-full rounded-[42px] bg-night-2 backdrop-blur-xl">
            {/* Core glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-gold blur-3xl opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* HUD Chips */}
      <HudChip
        className="right-6 top-20"
        title="Campus"
        value="9M SQ FT"
      />
      <HudChip
        className="left-8 top-1/2"
        title="Hardware"
        value="IBM Quantum"
      />
      <HudChip
        className="bottom-16 right-20"
        title="Ecosystem"
        value="5 Pillars"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-night text-cream">
      {/* BACKGROUND MATERIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(91,108,255,0.12),transparent_35%)]" />
      <div className="absolute inset-0 v2-grain opacity-15" />

      {/* GRID */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-8 lg:px-14">
        {/* NAV */}
        <nav className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-medium tracking-tight">AQV</div>
          </div>

          <div className="hidden items-center gap-10 lg:flex text-sm text-cream/80">
            <a>About</a>
            <a>Ecosystem</a>
            <a>Infrastructure</a>
            <a>Partners</a>
            <a>News</a>
          </div>

          <button className="rounded-pill border border-white/10 px-6 py-3 hover:bg-white/5">
            Apply / Register
          </button>
        </nav>

        {/* HERO GRID */}
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            {/* STATUS CHIP */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-pill border border-white/10 bg-white/[0.03] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="t-overline text-cream/65">
                NATIONAL QUANTUM MISSION · ANDHRA PRADESH
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="t-display max-w-[8ch] leading-[0.95]">
              Build the{" "}
              <span className="bg-gradient-to-r from-white to-indigo bg-clip-text text-transparent">
                quantum
              </span>{" "}
              age.
            </h1>

            {/* COPY */}
            <p className="t-lead mt-7 max-w-[42ch] text-cream/72">
              India’s first integrated Quantum–AI ecosystem—uniting
              infrastructure, talent, research, capital, and industry to
              accelerate the next computing era.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-pill bg-accent px-7 py-4 font-medium text-night transition hover:scale-[1.02]">
                Explore AQV
              </button>

              <button className="rounded-pill border border-white/10 px-7 py-4 hover:bg-white/5">
                Partner With Us
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative lg:col-span-7">
            <HeroObject />
          </div>
        </div>

        {/* METRICS BAR */}
        <div className="mb-10 grid rounded-card border border-white/8 bg-night-2 md:grid-cols-4">
          <Metric value="62K+" label="Learners" />
          <Metric value="380+" label="Centres" />
          <Metric value="₹25K Cr+" label="Investment Potential" />
          <Metric value="100K+" label="Jobs" />
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-white/8 px-8 py-8 md:border-r last:border-r-0">
      <div className="t-stat-lg">{value}</div>
      <div className="mt-2 text-sm text-cream/55">{label}</div>
    </div>
  );
}