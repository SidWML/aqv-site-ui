import { Reveal, Accent, ArrowLink, SectionShell } from "../ui";

/* ----------------------------------------------------------------- data --- */

// Logos live in /public/images/colbs — c1–c14 are national & academic
// institutions; c15–c17 are the anchor technology partners.
// c16 (TCS) is a white-fill logo, so it's inverted to show on the light tile.
const anchors = [
  { src: "/images/colbs/c15.webp", alt: "IBM" },
  { src: "/images/colbs/c16.svg", alt: "TCS", invert: true },
  { src: "/images/colbs/c17.png", alt: "HCL" },
];

const institutions = [
  "/images/colbs/c1.png", "/images/colbs/c2.png", "/images/colbs/c3.png", "/images/colbs/c4.png",
  "/images/colbs/c5.png", "/images/colbs/c6.png", "/images/colbs/c7.png", "/images/colbs/c8.png",
  "/images/colbs/c9.png", "/images/colbs/c10.png", "/images/colbs/c11.svg", "/images/colbs/c12.png",
  "/images/colbs/c13.jpg", "/images/colbs/c14.png",
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
          <Reveal delay={0.25} className="rounded-card border border-ink/12 bg-white/60 p-6">
            <div className="mb-4 t-eyebrow text-ink/50">ANCHOR TECHNOLOGY PARTNERS</div>
            <div className="grid grid-cols-3 gap-3">
              {anchors.map((a) => (
                <div key={a.src} className="flex h-20 items-center justify-center rounded-lg bg-white px-4">
                  <img src={a.src} alt={a.alt} className={`max-h-11 w-auto max-w-full object-contain${a.invert ? " invert" : ""}`} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------ right column --- */}
        <div>
          <Reveal className="mb-5.5 t-eyebrow text-ink/60">NATIONAL &amp; ACADEMIC INSTITUTIONS</Reveal>
          <div className="mb-5.5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {institutions.map((src, i) => (
              <Reveal
                key={src}
                variant="scale"
                delay={(i % 4) * 0.05}
                className="flex h-20 items-center justify-center rounded-card border border-ink/10 bg-white px-5 py-4 transition-colors duration-300 hover:border-accent/40"
              >
                <img src={src} alt="Partner institution" className="max-h-10 w-auto max-w-full object-contain" />
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
