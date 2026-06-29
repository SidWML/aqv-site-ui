import { Reveal, Accent, ArrowLink, SectionShell, Counter } from "../ui";
import { PathIcon, Placeholder } from "../dc";

/* ----------------------------------------------------------------- data --- */

const partnerStats = [
  { value: "100+", label: "Global Partners", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
  { value: "25+", label: "Countries", icon: "M12 4 a8 8 0 1 0 0.01 0 M4 12 H20 M12 4 c3 3 3 13 0 16 M12 4 c-3 3-3 13 0 16" },
  { value: "50+", label: "Academic Institutions", icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11" },
  { value: "30+", label: "Industry Collaborations", icon: "M7 12 l3 3 M10 15 l4-4 M3 11 l4-4 4 4 M21 11 l-4-4-4 4" },
];

const partners = [
  { tag: "TECHNOLOGY PARTNER", name: "Quantum Hardware", desc: "Advancing quantum systems and enterprise solutions.", img: "partner — quantum lab visit" },
  { tag: "CLOUD PARTNER", name: "Cloud & AI", desc: "Empowering research with cloud infrastructure and AI capabilities.", img: "partner — cloud team session" },
  { tag: "COMPUTE PARTNER", name: "Accelerated Compute", desc: "High-performance computing for quantum simulation and AI.", img: "partner — data center" },
  { tag: "ACADEMIC PARTNER", name: "Institute of Technology", desc: "Joint research, talent development and academic excellence.", img: "partner — lecture hall" },
  { tag: "RESEARCH COLLABORATION", name: "Applied Research", desc: "Co-creating industry solutions with applied quantum research.", img: "partner — research lab" },
  { tag: "GOVERNMENT PARTNER", name: "Policy & Nation", desc: "Working together to build India’s quantum advantage.", img: "partner — government summit" },
];

const trustedLogos = ["PARTNER 01", "PARTNER 02", "PARTNER 03", "PARTNER 04", "PARTNER 05", "PARTNER 06", "PARTNER 07"];

/* ============ 08 · PARTNERS (dark) ============ */
export default function Partners() {
  return (
    <SectionShell theme="dark" id="partners" className="px-5 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-27.5">
      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.6fr] items-start gap-8 lg:gap-12">
        {/* ------------------------------------------------- left column --- */}
        <div>
          <Reveal className="mb-7.5 flex items-center gap-3.5">
            <span className="t-eyebrow-num text-accent">08</span>
            <span className="h-px w-7.5 bg-cream/30" />
            <span className="t-eyebrow text-cream/70">STRONGER TOGETHER</span>
          </Reveal>
          <Reveal as="h2" variant="wipe" delay={0.1} className="mb-6.5 t-h3">
            Collaborating with the world to build the <Accent>quantum future.</Accent>
          </Reveal>
          <Reveal as="p" delay={0.15} className="mb-7 t-body text-cream/70">
            AQV partners with global technology leaders, academic institutions, investors, and government bodies to accelerate breakthroughs, nurture talent and create real-world impact.
          </Reveal>
          <Reveal delay={0.2} className="mb-9">
            <ArrowLink href="#insights" label="EXPLORE PARTNERSHIPS" accent="iris" theme="dark" gap={40} />
          </Reveal>
          <Reveal delay={0.25} className="mb-6 grid grid-cols-2 gap-x-5 gap-y-6.5 rounded-card border border-cream/12 p-7">
            {partnerStats.map((ps) => (
              <div key={ps.label} className="flex items-start gap-3">
                <PathIcon d={ps.icon} size={20} className="text-accent" sw={1.3} style={{ flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <div className="t-stat"><Counter value={ps.value} /></div>
                  <div className="mt-[3px] t-micro text-cream/55">{ps.label}</div>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="rounded-card border border-cream/12 p-7">
            <div className="h-4.5 font-display text-[30px] leading-[0.5] text-accent">&quot;</div>
            <p className="mb-5 t-quote text-cream/90">Partnership is the force multiplier for quantum innovation. Together, we are building technologies that will transform industries and improve lives.</p>
            <div className="t-eyebrow">— DR. ARUN NAIR</div>
            <div className="mt-1 t-eyebrow text-cream/50">CO-FOUNDER &amp; CTO, QSECURE</div>
          </Reveal>
        </div>

        {/* ------------------------------------------------ right column --- */}
        <div>
          <Reveal className="mb-5.5 t-eyebrow text-cream/60">OUR PARTNERS IN INNOVATION</Reveal>
          <div className="mb-5.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {partners.map((pt, i) => (
              <Reveal key={pt.name} variant="scale" delay={(i % 3) * 0.08} className="overflow-hidden rounded-card border border-cream/12">
                <div className="relative h-45">
                  <Placeholder label={pt.img} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="p-5.5">
                  <div className="mb-3.5 t-eyebrow text-cream/55">{pt.tag}</div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1.5 text-[14px] font-semibold tracking-[-0.005em]">{pt.name}</div>
                      <div className="t-body-sm text-cream/60">{pt.desc}</div>
                    </div>
                    <span className="flex h-8.5 w-8.5 flex-shrink-0 items-center justify-center rounded-full border border-cream/25">
                      <svg width="13" height="13" viewBox="0 0 16 16"><path d="M3 13 L13 3 M6 3 H13 V10" className="stroke-cream" strokeWidth="1.4" fill="none" /></svg>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="rounded-card border border-cream/12 px-7.5 py-6.5">
            <div className="mb-4.5 t-eyebrow text-cream/50">TRUSTED BY LEADING ORGANIZATIONS WORLDWIDE</div>
            <div className="flex flex-wrap items-center justify-between gap-4.5">
              {trustedLogos.map((tl) => (
                <span key={tl} className="t-mono tracking-[0.12em] text-cream/40">{tl}</span>
              ))}
              <span className="t-eyebrow text-accent">VIEW ALL PARTNERS →</span>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
