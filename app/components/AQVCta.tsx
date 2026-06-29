"use client";

import { useEffect, useRef } from "react";
import { ArrowUR, ArrowR } from "./dc";

export default function AQVCta({
  eyebrow = "THE NEXT CHAPTER",
  title = "Build India’s",
  titleItalic = "quantum future.",
  subtitle = "AQV is India’s movement to lead the quantum era. Together, let’s create breakthroughs that will define generations.",
  primaryLabel = "APPLY / REGISTER",
  primaryHref = "/contact",
  secondaryLabel = "EXPLORE THE ECOSYSTEM",
  secondaryHref = "/ecosystem",
}: {
  eyebrow?: string;
  title?: string;
  titleItalic?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    root.querySelectorAll(".aqv-cta-rv").forEach((el) => io.observe(el));
    const t = setTimeout(() => root.querySelectorAll(".aqv-cta-rv").forEach((el) => el.classList.add("in")), 3000);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative overflow-hidden bg-night font-sans text-cream text-center py-32.5 px-10"
    >
      <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle,rgba(245,242,236,0.5)_0.5px,transparent_0.5px)] bg-[length:44px_44px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-105 opacity-40 pointer-events-none">
        <svg viewBox="0 0 900 420" className="w-full h-full">
          <g style={{ transformOrigin: "450px 210px", animation: "aqvCtaSpin 80s linear infinite" }}>
            <ellipse cx="450" cy="210" rx="430" ry="160" className="stroke-gold/[0.18]" strokeWidth="1" fill="none" />
            <circle cx="880" cy="210" r="3" className="fill-gold" />
          </g>
          <g style={{ transformOrigin: "450px 210px", animation: "aqvCtaSpin 60s linear infinite reverse" }}>
            <ellipse cx="450" cy="210" rx="320" ry="200" className="stroke-accent/[0.18]" strokeWidth="1" fill="none" />
            <circle cx="450" cy="10" r="2.6" className="fill-accent" />
          </g>
        </svg>
      </div>
      <div className="relative z-[2] max-w-225 mx-auto">
        <div className="aqv-cta-rv inline-flex items-center gap-3.5 mb-7.5">
          <span className="w-8.5 h-px bg-gold/60" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-gold">{eyebrow}</span>
          <span className="w-8.5 h-px bg-gold/60" />
        </div>
        <h2 className="aqv-cta-rv font-medium text-[4.4rem] leading-none tracking-[-0.01em] mb-6.5" style={{ fontFamily: "'Inter',serif" }}>
          {title} <span className="text-gold">{titleItalic}</span>
        </h2>
        <p className="aqv-cta-rv t-body leading-[1.65] text-cream/70 max-w-140 mx-auto mb-10">{subtitle}</p>
        <div className="aqv-cta-rv flex gap-4 justify-center flex-wrap">
          <a
            href={primaryHref}
            className="flex items-center gap-2.75 no-underline text-night px-8 py-4.25 rounded-pill text-[13px] font-semibold tracking-[0.1em]"
            style={{ background: "linear-gradient(100deg,var(--color-gold),#e0c896)" }}
          >
            {primaryLabel}
            <ArrowUR size={14} sw={1.5} />
          </a>
          <a
            href={secondaryHref}
            className="flex items-center gap-2.75 no-underline border border-cream/30 text-cream px-8 py-4.25 rounded-pill text-[13px] font-semibold tracking-[0.1em]"
          >
            {secondaryLabel}
            <ArrowR size={14} className="text-accent" sw={1.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
