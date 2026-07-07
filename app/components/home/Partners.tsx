import { Reveal, Accent, ArrowLink, SectionShell } from "../ui";

/* ----------------------------------------------------------------- data --- */

const anchors = [
  { name: "IBM", role: "Quantum systems & cloud" },
  { name: "TCS", role: "Quantum cloud & services" },
  { name: "HCL", role: "Technology & engineering" },
];

// Confirmed national & academic institutions (HMIT June 2026). Interest-stage
// names (AstraZeneca, Laurus, HDFC) are intentionally excluded until confirmed.
const institutions = [
  "National Quantum Mission", "C-DAC", "C-DOT", "NIELIT", "CSIR", "IISc",
  "TIFR", "DRDO (NSTL)", "IIT Madras", "IIT Delhi", "IIT Tirupati", "APSCHE", "DST", "TDB",
];

/* ============ 07 · PARTNERS (light) ============ */
export default function Partners() {
  return (
    <SectionShell theme="light" id="partners" bg="bg-stone" className="px-5 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-27.5">
      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.6fr] items-start gap-8 lg:gap-12">
        {/* ------------------------------------------------- left column --- */}
        <div>
          <Reveal className="mb-7.5 flex items-center gap-3.5">
            <span className="t-eyebrow-num text-accent">07</span>
            <span className="h-px w-7.5 bg-ink/30" />
            <span className="t-eyebrow text-ink/60">PARTNERS & ECOSYSTEM</span>
          </Reveal>
          <Reveal as="h2" variant="wipe" delay={0.1} className="mb-6.5 t-h3">
            Built with global and <Accent>national partners.</Accent>
          </Reveal>
          <Reveal as="p" delay={0.15} className="mb-7 t-body text-ink/70">
            AQV works with anchor technology partners including IBM, TCS and HCL, alongside national research, defence, skilling and academic institutions — building a connected ecosystem for quantum innovation.
          </Reveal>
          <Reveal delay={0.2} className="mb-9">
            <ArrowLink href="/partners" label="SEE HOW TO COLLABORATE" accent="iris" theme="light" gap={40} />
          </Reveal>
          <Reveal delay={0.25} className="rounded-card border border-ink/12 bg-white/60 p-7">
            <div className="mb-5 t-eyebrow text-ink/50">ANCHOR TECHNOLOGY PARTNERS</div>
            <div className="grid grid-cols-3 gap-4">
              {anchors.map((a) => (
                <div key={a.name} className="flex flex-col gap-2 border-r border-ink/10 pr-4 last:border-r-0">
                  <span className="font-display text-[26px] font-extrabold tracking-[-0.03em] text-ink">{a.name}</span>
                  <span className="t-micro text-ink/55">{a.role}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------ right column --- */}
        <div>
          <Reveal className="mb-5.5 t-eyebrow text-ink/60">NATIONAL &amp; ACADEMIC INSTITUTIONS</Reveal>
          <div className="mb-5.5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {institutions.map((inst, i) => (
              <Reveal
                key={inst}
                variant="scale"
                delay={(i % 3) * 0.06}
                className="flex items-center rounded-card border border-ink/12 bg-white/60 px-4 py-4.5 t-body-sm text-ink/70 transition-colors duration-300 hover:border-accent/40"
              >
                {inst}
              </Reveal>
            ))}
          </div>
          <Reveal className="rounded-card border border-ink/12 bg-white/60 px-7.5 py-6.5">
            <div className="mb-4.5 t-eyebrow text-ink/50">A CONNECTED QUANTUM ECOSYSTEM</div>
            <div className="flex flex-wrap items-center justify-between gap-4.5">
              <span className="max-w-125 t-body-sm text-ink/60">Anchor partners, national missions, defence, skilling bodies and academia — collaborating across the valley.</span>
              <a href="/partners" className="t-eyebrow text-accent no-underline">VIEW ALL PARTNERS →</a>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
