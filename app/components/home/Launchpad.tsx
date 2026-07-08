"use client";

import { useState, useEffect } from "react";
import { Reveal, Eyebrow, Accent, ArrowLink, SectionShell, Counter } from "../ui";
import { PathIcon, ArrowUR } from "../dc";

/* ----------------------------------------------------------------- data --- */

// Pre-composed banner slides (text + scrim baked into each image) for the
// launchpad showcase carousel.
const slides = [1, 2, 3, 4, 5].map((n) => `/images/s5/s${n}.png`);

type SubCard = {
  tag: string;
  cta: string;
  href: string;
  img: string;
  icon: string;
  title: string;
  desc: string;
};

const subCards: SubCard[] = [
  { tag: "INDUSTRY ADOPTION", title: "Bring quantum into your enterprise.", desc: "Pilots, applications and co-innovation across priority sectors — banking, pharma, energy, logistics and governance.", cta: "EXPLORE INDUSTRY", href: "/industry", icon: "M5 21 V7 L12 3 L19 7 V21 M9 21 V14 H15 V21 M9 10 H10 M14 10 H15", img: "/images/s5/c1.png" },
  { tag: "STARTUPS", title: "Build your deep-tech venture.", desc: "AQV Launchpad backs founders with infrastructure, mentorship, market access and a growing quantum ecosystem.", cta: "EXPLORE STARTUPS", href: "/startups", icon: "M5 19 L12 4 L19 19 M9 13 H15 M12 4 V9", img: "/images/s5/c2.png" },
  { tag: "INVESTMENT & ESTABLISHMENT", title: "Invest or establish at AQV.", desc: "Back the ecosystem, or set up and expand operations at the valley through capital and establishment pathways.", cta: "EXPLORE INVESTMENT", href: "/invest", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M9 11 l2 2 4-4", img: "/images/s5/c3.png" },
];

// Confirmed, public-safe ecosystem figures (HMIT June 2026) — time-sensitive,
// labelled "as of June 2026" on the bar.
const launchStats = [
  { value: "40+", label: "Companies engaged", icon: "M5 21 V7 L12 3 L19 7 V21 M9 21 V14 H15 V21 M9 10 H10 M14 10 H15" },
  { value: "380", label: "Quantum Innovation Cells", icon: "M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z M12 3 V21 M4 7.5 L20 16.5 M20 7.5 L4 16.5" },
  { value: "3,000+", label: "Innovators", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
  { value: "8+", label: "Focus sectors", icon: "M4 20 H20 M6 20 V10 H10 V20 M14 20 V6 H18 V20" },
];

/* ============ 05 · LAUNCHPAD (light) ============ */
export default function Launchpad() {
  const [active, setActive] = useState(0);

  // auto-advance the banner carousel
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <SectionShell theme="light" id="launchpad" bg="bg-white" innerClassName="px-5 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-27.5">
      <div className="mb-7.5 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-start gap-8 lg:gap-13.5">
        <div>
          <Eyebrow num="05" label="BUILDING THE FUTURE ECONOMY" accent="iris" className="mb-6.5" />
          <Reveal as="h2" variant="wipe" delay={0.1} className="mb-7 t-h3">
            A quantum ecosystem designed to grow companies, capability and <Accent>future-ready talent.</Accent>
          </Reveal>
          <Reveal as="p" delay={0.15} className="mb-7.5 t-body text-ink/70">
            AQV is building the conditions for a domestic quantum economy — connecting enterprises, startups and investors to shared infrastructure, talent and a growing supply chain.
          </Reveal>
          <Reveal delay={0.25}>
            <ArrowLink href="#research" label="EXPLORE OPPORTUNITIES" accent="iris" theme="light" gap={48} />
          </Reveal>
        </div>

        {/* ----- banner carousel (s1–s5) ----- */}
        <Reveal
          delay={0.15}
          className="relative h-64 sm:h-80 lg:h-87.5 overflow-hidden rounded-card bg-night shadow-float"
        >
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`AQV Launchpad — slide ${i + 1} of ${slides.length}`}
              className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-[900ms] ease-out"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
          {/* slide indicators */}
          <div className="absolute bottom-6 right-9 z-[2] flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className="h-1.25 cursor-pointer rounded-[3px] border-none p-0 transition-all duration-300"
                style={{
                  width: i === active ? 26 : 9,
                  background: i === active ? "#8B92E8" : "rgba(245,242,236,0.45)",
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {/* ----- feature cards (c1–c3) — two equal columns: content | image ----- */}
      <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subCards.map((sc, i) => (
          <Reveal
            as="a"
            href={sc.href}
            key={sc.tag}
            variant="scale"
            delay={i * 0.08}
            className="group relative grid min-h-62.5 grid-cols-2 overflow-hidden rounded-card border border-accent/30 bg-accent/5 text-ink no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-card"
          >
            {/* corner arrow */}
            <span className="absolute right-5.5 top-6 z-[2]">
              <ArrowUR size={14} stroke="rgba(26,26,26,0.4)" sw={1.4} />
            </span>

            {/* left column — content */}
            <div className="flex flex-col p-6 pr-2">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-iris/14">
                  <PathIcon d={sc.icon} size={15} className="text-accent" sw={1.4} />
                </span>
                <span className="t-eyebrow text-ink/70">{sc.tag}</span>
              </div>
              <h4 className="mb-2.5 t-title-sm">{sc.title}</h4>
              <p className="t-micro text-ink/60">{sc.desc}</p>
              <span className="mt-auto self-start t-eyebrow border-b border-accent/30 pb-1.25">{sc.cta}</span>
            </div>

            {/* right column — image (equal width, consistent fill) */}
            <div className="relative">
              <img
                src={sc.img}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="rounded-card border border-accent/30 bg-accent/5 px-6 py-7.5">
        <div className="mb-5 flex items-center justify-between">
          <span className="t-eyebrow text-ink/60">ECOSYSTEM MOMENTUM</span>
          <span className="t-overline text-ink/45">AS OF JUNE 2026</span>
        </div>
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {launchStats.map((st) => (
            <div key={st.label} className="flex items-center gap-3 px-1.5">
              <span className="flex h-9.5 w-9.5 flex-shrink-0 items-center justify-center rounded-full bg-iris/12">
                <PathIcon d={st.icon} size={17} className="text-accent" sw={1.4} />
              </span>
              <div>
                <div className="t-stat"><Counter value={st.value} /></div>
                <div className="mt-0.75 t-micro text-ink/60">{st.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
