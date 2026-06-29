"use client";

import { useRef } from "react";
import { Reveal, Counter } from "../ui";
import { PathIcon, ArrowUR, Placeholder } from "../dc";

const rbtnBase: React.CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1px solid rgba(245,242,236,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const researchCards = [
  { num: "01", title: "Quantum Computing", desc: "Building scalable quantum systems and algorithms to solve real-world problems.", labs: "12+", img: "/images/s6/c1.png", btn: { background: "var(--color-accent)", color: "var(--color-night)", borderColor: "var(--color-accent)" } as React.CSSProperties },
  { num: "02", title: "Quantum Materials", desc: "Designing and discovering novel materials for quantum devices and extreme environments.", labs: "9+", img: "/images/s6/c2.png", btn: { color: "var(--color-cream)" } as React.CSSProperties },
  { num: "03", title: "Quantum Communications", desc: "Developing secure quantum networks and communication protocols for a connected future.", labs: "7+", img: "/images/s6/c3.png", btn: { color: "var(--color-cream)" } as React.CSSProperties },
  { num: "04", title: "Quantum + AI", desc: "Combining quantum technologies with AI to unlock new capabilities in optimization, simulation and learning.", labs: "7+", img: "/images/s6/c4.png", btn: { color: "var(--color-cream)" } as React.CSSProperties },
  { num: "05", title: "Quantum Security", desc: "Building next-gen cryptography and security frameworks for a quantum-safe world.", labs: "5+", img: "/images/s6/c5.png", btn: { color: "var(--color-cream)" } as React.CSSProperties },
].map((rc) => ({ ...rc, btnStyle: { ...rbtnBase, ...rc.btn } }));

const researchPillars = [
  { title: "ACADEMIC COLLABORATIONS", desc: "Working with leading universities and research institutions worldwide.", icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11" },
  { title: "TALENT DEVELOPMENT", desc: "Fellowships, PhD programs, and workshops to nurture quantum talent.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
  { title: "PUBLICATIONS & IP", desc: "Pushing the boundaries of science with impactful research and patents.", icon: "M6 3 H15 L18 6 V21 H6 Z M9 9 H15 M9 13 H15 M9 17 H13" },
];

/* ============ 06 · RESEARCH (dark carousel) ============ */
export default function Research() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollCarousel = (dx: number) =>
    carouselRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section
      id="research"
      data-theme="dark"
      className="relative overflow-hidden bg-night pl-5 sm:pl-8 lg:pl-10 pr-0 py-14 sm:py-20 lg:py-27.5"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)",
          backgroundSize: "46px 46px",
        }}
      />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_2fr] items-start gap-8 lg:gap-12.5 pr-5 sm:pr-8 lg:pr-10">
          <div>
            <Reveal className="mb-8.5 flex items-center gap-3.5">
              <span className="t-eyebrow-num text-accent">06</span>
              <span className="t-eyebrow text-cream/70">RESEARCH ENGINE</span>
            </Reveal>
            <Reveal
              as="h2"
              variant="wipe"
              delay={0.1}
              className="mb-7 t-h3"
            >
              Advancing knowledge. Building the{" "}
              <span className="text-accent">future.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={0.15}
              className="mb-8.5 t-body text-cream/70"
            >
              AQV drives deep, collaborative research across quantum computing, materials, communications, and beyond. Our programs, labs, and partnerships are creating breakthroughs that will define the next era of technology.
            </Reveal>
            <Reveal
              as="a"
              href="#infra"
              delay={0.2}
              className="inline-flex items-center gap-10 border-b border-cream/25 pb-2.75 text-cream no-underline"
            >
              <span className="t-eyebrow">EXPLORE RESEARCH AT AQV</span>
              <ArrowUR size={15} className="text-accent" sw={1.5} />
            </Reveal>
          </div>
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="aqv-carousel flex gap-4.5 overflow-x-auto scroll-smooth pb-2"
            >
              {researchCards.map((r, i) => (
                <Reveal
                  key={r.num}
                  variant="scale"
                  delay={i * 0.07}
                  className="relative h-120 flex-[0_0_300px] overflow-hidden rounded-card border border-cream/[0.14]"
                >
                  <div className="absolute inset-0 opacity-50">
                    <img src={r.img} style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg,rgba(10,14,26,0.7) 0%,rgba(10,14,26,0.4) 45%,rgba(10,14,26,0.95) 100%)",
                    }}
                  />
                  <div className="relative flex h-full flex-col p-7">
                    <span className="mb-auto t-h4 text-accent">{r.num}</span>
                    <h3 className="mb-4 t-title-lg">{r.title}</h3>
                    <p className="mb-6.5 t-body-sm text-cream/70">{r.desc}</p>
                    <div className="flex items-end justify-between border-t border-cream/15 pt-4.5">
                      <div>
                        <div className="t-stat"><Counter value={r.labs} /></div>
                        <div className="mt-0.5 t-micro text-cream/55">Active Labs</div>
                      </div>
                      <span style={r.btnStyle}>
                        <ArrowUR size={15} stroke="currentColor" sw={1.4} />
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8.5 flex items-center justify-end gap-3.5 pr-5 sm:pr-8 lg:pr-10">
          <button
            onClick={() => scrollCarousel(-340)}
            className="flex h-13.5 w-13.5 cursor-pointer items-center justify-center rounded-full border border-cream/25 bg-transparent text-cream"
          >
            <svg width="18" height="18" viewBox="0 0 20 20">
              <path d="M12 4 L6 10 L12 16" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
          <button
            onClick={() => scrollCarousel(340)}
            className="flex h-13.5 w-13.5 cursor-pointer items-center justify-center rounded-full border border-cream/25 bg-transparent text-cream"
          >
            <svg width="18" height="18" viewBox="0 0 20 20">
              <path d="M8 4 L14 10 L8 16" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
        </div>
        <Reveal className="mr-5 sm:mr-8 lg:mr-10 mt-12.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,0.8fr)_1.2fr] items-center gap-9 rounded-card border border-cream/10 bg-cream/[0.03] p-5">
          {researchPillars.map((rp) => (
            <div
              key={rp.title}
              className="flex flex-col gap-3 border-r border-cream/10 pr-5"
            >
              <PathIcon d={rp.icon} size={24} className="text-accent" sw={1.3} />
              <div className="t-eyebrow">{rp.title}</div>
              <div className="t-body-sm text-cream/60">{rp.desc}</div>
            </div>
          ))}
          <div>
            <div className="mb-4 t-quote text-cream/85">Research at AQV is powered by curiosity, collaboration, and a commitment to solving humanity&apos;s most complex challenges.</div>
            <span className="t-eyebrow inline-block border-b border-cream/40 pb-1.5">VIEW RESEARCH PROGRAMS →</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
