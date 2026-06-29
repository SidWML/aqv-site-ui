"use client";

import { useEffect, useState } from "react";
import { PathIcon } from "./dc";

type Theme = "dark" | "light";

export default function AQVNav({
  active = "",
  theme: initialTheme = "dark",
}: {
  active?: string;
  theme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [mega, setMega] = useState<"eco" | "eng" | null>(null);
  const [drawer, setDrawer] = useState(false);

  // Switch nav theme by observing the page's [data-theme] sections crossing the top band.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]")
    );
    if (!sections.length) return;
    let current = theme;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target.getAttribute("data-theme") as Theme | null;
            if (t && t !== current) {
              current = t;
              setTheme(t);
            }
          }
        });
      },
      { rootMargin: "-50px 0px -93% 0px", threshold: 0 }
    );
    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dark = theme === "dark";

  // Per-surface conditional class groups, driven by the `dark` boolean.
  const text = dark ? "text-cream" : "text-ink";
  const barTheme = dark
    ? "bg-night/80 border-cream/10"
    : "bg-sand/[0.86] border-ink/10";
  const pillTheme = dark
    ? "bg-transparent text-accent border-accent/60"
    : "bg-night text-cream border-night";
  const menuBtnTheme = dark ? "border-cream/25" : "border-ink/20";
  const megaWrapTheme = dark
    ? "bg-night/[0.97] border-cream/10"
    : "bg-sand/[0.98] border-ink/10";
  const megaItemTheme = dark ? "border-cream/10" : "border-ink/10";

  // Nav link geometry shared by the mega-menu buttons and the plain links.
  const navBase =
    "flex items-center gap-1 bg-transparent border-none cursor-pointer no-underline text-[12.5px] font-medium tracking-[0.1em] whitespace-nowrap py-1.5";
  const navLink = (key: string) =>
    `${navBase} ${text} ${active === key ? "opacity-100" : "opacity-[0.82]"} border-b ${
      active === key ? "border-accent" : "border-transparent"
    }`;

  const megaEcosystem = [
    {
      label: "Ecosystem",
      href: "/ecosystem",
      desc: "The full quantum value chain, end to end.",
      icon: "M12 4 a8 8 0 1 0 0.01 0 M4 12 H20 M12 4 c3 3 3 13 0 16 M12 4 c-3 3-3 13 0 16",
    },
    {
      label: "Infrastructure",
      href: "/infrastructure",
      desc: "A 9M sq ft quantum campus, designed as one.",
      icon: "M4 20 H20 M6 20 V10 H10 V20 M14 20 V6 H18 V20",
    },
    {
      label: "Research",
      href: "/research",
      desc: "Frontier research on real quantum hardware.",
      icon: "M9 3 V9 L4 19 c-0.5 1 0.5 2 1.5 2 H18.5 c1 0 2-1 1.5-2 L15 9 V3 M8 3 H16",
    },
    {
      label: "Hardware",
      href: "/ecosystem#hardware",
      desc: "India’s quantum hardware supply chain.",
      icon: "M7 7 H17 V17 H7 Z M9 3 V7 M12 3 V7 M15 3 V7 M9 17 V21 M12 17 V21 M15 17 V21 M3 9 H7 M3 12 H7 M3 15 H7 M17 9 H21 M17 12 H21 M17 15 H21",
    },
  ];
  const megaEngage = [
    {
      label: "Talent / WISER",
      href: "/talent",
      desc: "Building India’s quantum workforce.",
      icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6",
    },
    {
      label: "Startups",
      href: "/startups",
      desc: "From research to market, founder-first.",
      icon: "M5 19 L12 4 L19 19 M9 13 H15",
    },
    {
      label: "Industry",
      href: "/industry",
      desc: "Industry-led adoption and co-innovation.",
      icon: "M3 21 V9 L9 6 V9 L15 6 V21 M19 21 V11 L15 9",
    },
    {
      label: "Programs",
      href: "/programs",
      desc: "Programs to build quantum capability.",
      icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11",
    },
  ];

  const mainLinks = [
    { label: "About", key: "about", isMega: false, href: "/about", mega: null as null | "eco" | "eng" },
    { label: "Ecosystem", key: "ecosystem", isMega: true, href: "/ecosystem", mega: "eco" as const },
    { label: "Engage", key: "engage", isMega: true, href: "#", mega: "eng" as const },
    { label: "Partners", key: "partners", isMega: false, href: "/partners", mega: null },
    { label: "News", key: "media", isMega: false, href: "/media", mega: null },
  ];

  const allLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Research", href: "/research" },
    { label: "Talent / WISER", href: "/talent" },
    { label: "Startups", href: "/startups" },
    { label: "Industry", href: "/industry" },
    { label: "Programs", href: "/programs" },
    { label: "Partners", href: "/partners" },
    { label: "News & Media", href: "/media" },
    { label: "Contact / Apply", href: "/contact" },
  ];

  const megaItems = mega === "eco" ? megaEcosystem : mega === "eng" ? megaEngage : null;

  return (
    <div className="font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-[120] backdrop-blur-[14px] border-b ${barTheme} transition-[background-color,border-color] duration-500 ease-linear`}
        onMouseLeave={() => setMega(null)}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center gap-8.5">
          <a href="/" className="flex items-center gap-3.25 no-underline shrink-0">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="shrink-0">
              <defs>
                <linearGradient id="aqvnavmark" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0" stopColor="#8B92E8" />
                  <stop offset="1" stopColor="#C9A86A" />
                </linearGradient>
              </defs>
              <path
                d="M20 4 L34 30 H26 L20 18 L14 30 H6 Z"
                stroke="url(#aqvnavmark)"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="20" cy="26" r="2.4" fill="url(#aqvnavmark)" />
            </svg>
            <span className={`leading-[1.05] ${text}`}>
              <span className="block font-bold text-[13px] tracking-[0.13em]">
                AMARAVATI
              </span>
              <span className="block font-bold text-[13px] tracking-[0.13em]">
                QUANTUM VALLEY
              </span>
              <span className="block text-[9.5px] tracking-[0.04em] mt-[3px] opacity-60">
                India&apos;s Quantum-AI Ecosystem
              </span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7.5 ml-auto">
            {mainLinks.map((item) => (
              <div
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => setMega(item.mega)}
              >
                {item.isMega ? (
                  <button className={navLink(item.key)}>
                    {item.label}
                    <svg width="9" height="9" viewBox="0 0 10 10" className="ml-0.5">
                      <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    </svg>
                  </button>
                ) : (
                  <a href={item.href} className={navLink(item.key)}>
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3.5 shrink-0 ml-auto lg:ml-0">
            <a
              href="/contact"
              className={`hidden sm:flex items-center gap-2.25 no-underline text-[12px] font-semibold tracking-[0.1em] px-5 py-3 rounded-pill border whitespace-nowrap transition-all duration-[400ms] ease-linear ${pillTheme}`}
            >
              APPLY / REGISTER
              <svg width="13" height="13" viewBox="0 0 14 14">
                <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </a>
            <button
              onClick={() => setDrawer((d) => !d)}
              className={`w-11 h-11 rounded-full flex lg:hidden flex-col items-center justify-center gap-1 cursor-pointer bg-transparent border ${menuBtnTheme}`}
            >
              <span className={`w-4 h-[1.5px] block ${dark ? "bg-cream" : "bg-ink"}`}></span>
              <span className={`w-4 h-[1.5px] block ${dark ? "bg-cream" : "bg-ink"}`}></span>
            </button>
          </div>
        </div>

        {megaItems && (
          <div
            className={`border-t ${megaWrapTheme} backdrop-blur-[16px] animate-[aqvMenuIn_.25s_ease] shadow-[0_24px_50px_rgba(0,0,0,0.25)]`}
          >
            <div className="max-w-[1600px] mx-auto pt-2 px-10 pb-6.5 grid grid-cols-4 gap-3.5">
              {megaItems.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  className={`block no-underline ${text} p-4.5 rounded-control border ${megaItemTheme} transition-colors duration-300 ease-linear`}
                >
                  <span className="flex w-10 h-10 rounded-control items-center justify-center bg-accent/[0.12] mb-3.5">
                    <PathIcon d={m.icon} size={18} sw={1.3} className="text-accent" />
                  </span>
                  <span className="block text-[13.5px] font-semibold mb-1">
                    {m.label}
                  </span>
                  <span className="block t-caption leading-[1.45] opacity-60">
                    {m.desc}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {drawer && (
        <div className="fixed inset-0 z-[140] bg-night animate-[aqvDrawerIn_.3s_ease] pt-22.5 px-8 pb-10 overflow-y-auto">
          <button
            onClick={() => setDrawer(false)}
            className="absolute top-6.5 right-7 w-11 h-11 rounded-full border border-cream/25 bg-transparent text-cream text-[22px] cursor-pointer"
          >
            ×
          </button>
          <div className="flex flex-col gap-1">
            {allLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setDrawer(false)}
                className="no-underline text-cream font-sans text-[1.7rem] py-3.5 border-b border-cream/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
