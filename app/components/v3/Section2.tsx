import React from "react";

function MetricCard({
  value,
  title,
  desc,
}: {
  value: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-card border border-black/[0.06] bg-paper p-8 shadow-card">
      <div className="t-stat-lg">{value}</div>
      <div className="mt-4 t-title text-accent">{title}</div>
      <p className="mt-4 t-body text-ink/65">{desc}</p>
    </div>
  );
}


function TrustItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="t-title-sm">{title}</div>
      <p className="mt-3 t-body text-ink/60">{text}</p>
    </div>
  );
}

function SystemDiagram() {
  return (
    <div className="relative h-[320px] w-[320px]">
      <div className="absolute inset-0 rounded-full border border-accent/10" />
      <div className="absolute inset-[40px] rounded-full border border-accent/10" />
      <div className="absolute inset-[90px] rounded-full border border-accent/10" />

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
    </div>
  );
}


export default function Section2() {
  return (
    <section className="relative overflow-hidden bg-sand text-ink py-28 lg:py-36">
      {/* subtle diagram */}
      <div className="absolute right-16 top-20 opacity-40 hidden lg:block">
        <SystemDiagram />
      </div>

      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        {/* heading */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-start gap-6 mb-8">
              <span className="t-index text-accent/80">02</span>

              <div>
                <div className="t-overline text-accent mb-5">
                  IMPACT AT A GLANCE
                </div>

                <h2 className="t-display-2 max-w-[9ch]">
                  Instant credibility.
                  <br />
                  Measurable momentum.
                </h2>
              </div>
            </div>

            <p className="t-lead max-w-[48ch] text-ink/70">
              AQV is not a vision on paper. It is a national initiative backed
              by infrastructure, partnerships, capital, and a coordinated
              ecosystem designed to accelerate quantum innovation.
            </p>
          </div>
        </div>

        {/* metrics */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            value="62K+"
            title="Learners"
            desc="Students and professionals engaged in quantum education."
          />
          <MetricCard
            value="380+"
            title="Centres"
            desc="Research and skilling centres in the ecosystem."
          />
          <MetricCard
            value="₹25K Cr+"
            title="Investment Potential"
            desc="Capital aligned for long-term deep-tech growth."
          />
          <MetricCard
            value="100K+"
            title="Jobs"
            desc="Projected workforce opportunities across sectors."
          />
        </div>

        {/* trust strip */}
        <div className="mt-12 rounded-card border border-black/6 bg-paper shadow-card p-8">
          <div className="grid gap-8 lg:grid-cols-5">
            <TrustItem
              title="National Quantum Mission"
              text="Aligned with India’s national quantum strategy."
            />

            <TrustItem
              title="IBM Partnership"
              text="Home to IBM Quantum System Two."
            />

            <TrustItem
              title="Andhra Pradesh"
              text="State-backed ecosystem infrastructure."
            />

            <TrustItem
              title="9M sq ft"
              text="Integrated quantum city masterplan."
            />

            <TrustItem
              title="Global Network"
              text="Academic, government and enterprise alliances."
            />
          </div>
        </div>
      </div>
    </section>
  );
}