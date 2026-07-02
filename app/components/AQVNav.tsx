"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { PathIcon } from "./dc";

type Theme = "dark" | "light";
type LinkType = "page" | "anchor" | "filter" | "external" | "cta";
type Item = { label: string; href: string; type?: LinkType };
type Group = { title: string; items: Item[] };
type Feature = { eyebrow: string; title: string; href: string; img: string };
type Top = { label: string; key: string; blurb: string; groups: Group[]; feature: Feature };

const EASE = [0.22, 1, 0.36, 1] as const;

const MENU: Top[] = [
  {
    label: "About AQV", key: "about", blurb: "Who we are, our mandate, and the people driving it.",
    groups: [
      { title: "ABOUT", items: [{ label: "About AQV", href: "/about" }] },
      { title: "STRATEGY & GOVERNANCE", items: [{ label: "Quantum Mission & Mandate", href: "/about/quantum-mission" }, { label: "Governance & Leadership", href: "/about/governance" }] },
      { title: "CONNECT", items: [{ label: "Partners & Sponsors", href: "/partners" }, { label: "Contact", href: "/contact" }] },
    ],
    feature: { eyebrow: "WHO WE ARE", title: "The AQV story", href: "/about", img: "/images/s2.png" },
  },
  {
    label: "Technology & Infrastructure", key: "technology", blurb: "The full quantum stack — research, hardware, software and the campus.",
    groups: [
      { title: "RESEARCH DOMAINS", items: [{ label: "Quantum Computing", href: "/technology/quantum-computing" }, { label: "Quantum Sensing & Metrology", href: "/technology/quantum-sensing" }, { label: "Quantum Communication", href: "/technology/quantum-communication" }, { label: "Quantum Materials & Devices", href: "/technology/quantum-materials" }] },
      { title: "FULL QUANTUM STACK", items: [{ label: "Quantum Hardware & Systems", href: "/technology/hardware" }, { label: "Quantum Software & Applications", href: "/technology/software" }, { label: "Research & Technology Roadmap", href: "/research" }] },
      { title: "INFRASTRUCTURE & FACILITIES", items: [{ label: "Infrastructure & Masterplan", href: "/infrastructure" }, { label: "Research Facilities & Testbeds", href: "/infrastructure/facilities" }] },
    ],
    feature: { eyebrow: "THE MACHINE", title: "IBM Quantum System Two", href: "/technology/hardware", img: "/images/s7.png" },
  },
  {
    label: "Engage with AQV", key: "engage", blurb: "Build, partner and invest across the ecosystem.",
    groups: [
      { title: "FOR INDUSTRY", items: [{ label: "Industry & Enterprise", href: "/industry" }] },
      { title: "BUILD AT AQV", items: [{ label: "Hardware & Component Companies", href: "/engage/hardware-companies" }, { label: "Software & Application Companies", href: "/engage/software-companies" }] },
      { title: "GROW & INVEST", items: [{ label: "Startups & Launchpad", href: "/startups" }, { label: "Invest & Establish", href: "/invest" }] },
    ],
    feature: { eyebrow: "BUILD AT AQV", title: "Establish in the valley", href: "/engage/hardware-companies", img: "/images/s5/c1.png" },
  },
  {
    label: "Learn", key: "learn", blurb: "Talent, programs and pathways into the quantum era.",
    groups: [
      { title: "TALENT & PROGRAMS", items: [{ label: "Talent & Skills", href: "/talent" }, { label: "Programs", href: "/programs" }] },
      { title: "LEARNING PATHWAYS", items: [{ label: "Quantum for Everyone", href: "/learn" }] },
      { title: "OPPORTUNITIES", items: [{ label: "Apply to a Program", href: "/contact", type: "cta" }] },
    ],
    feature: { eyebrow: "WISER", title: "Learn to think in quantum", href: "/learn", img: "/images/s5/s3.png" },
  },
  {
    label: "News & Resources", key: "news", blurb: "Announcements, events, reports and official documents.",
    groups: [
      { title: "LATEST", items: [{ label: "Newsroom", href: "/news" }, { label: "Press Releases", href: "/news?type=press", type: "filter" }, { label: "Events & Summits", href: "/events" }] },
      { title: "KNOWLEDGE", items: [{ label: "Reports & Publications", href: "/resources/reports" }, { label: "Insights", href: "/resources/insights", type: "filter" }] },
      { title: "OFFICIAL", items: [{ label: "Government Orders & Policies", href: "/resources/government-orders" }, { label: "FAQs", href: "/faq" }] },
    ],
    feature: { eyebrow: "LATEST", title: "News from the valley", href: "/news", img: "/images/s3.png" },
  },
];

const CAREERS_URL = "https://quantumjobs.in";

export default function AQVNav({ active = "", theme: initialTheme = "dark" }: { active?: string; theme?: Theme }) {
  const [theme, setTheme] = React.useState<Theme>(initialTheme);
  const [scrolled, setScrolled] = React.useState(false);
  const [openKey, setOpenKey] = React.useState<string | null>(null);
  const [drawer, setDrawer] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  // theme follows the page's [data-theme] sections
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]"));
    if (!sections.length) return;
    let current = initialTheme;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const t = e.target.getAttribute("data-theme") as Theme | null;
          if (t && t !== current) { current = t; setTheme(t); }
        }
      });
    }, { rootMargin: "-50px 0px -93% 0px", threshold: 0 });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (key: string) => { if (closeTimer.current) window.clearTimeout(closeTimer.current); setOpenKey(key); };
  const scheduleClose = () => { closeTimer.current = window.setTimeout(() => setOpenKey(null), 120); };

  const dark = theme === "dark";
  const text = dark ? "text-cream" : "text-ink";
  const bar = dark
    ? (scrolled ? "bg-night/90 border-cream/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]" : "bg-night/40 border-transparent")
    : (scrolled ? "bg-sand/92 border-ink/10 shadow-[0_10px_40px_rgba(26,26,26,0.08)]" : "bg-sand/40 border-transparent");
  const line = dark ? "bg-cream/12" : "bg-ink/12";
  const hoverText = dark ? "hover:text-cream" : "hover:text-ink";
  const openTop = MENU.find((m) => m.key === openKey) || null;
  const highlight = openKey ?? active;

  const linkTarget = (it: Item) => it.type === "external" ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div className="font-sans">
      <header
        className={`fixed inset-x-0 top-0 z-[120] border-b backdrop-blur-[14px] transition-[background-color,border-color,box-shadow,padding] duration-500 ${bar}`}
        onMouseLeave={scheduleClose}
      >
        <div className={`mx-auto flex max-w-[1600px] items-center gap-8 px-5 sm:px-8 lg:px-10 transition-[padding] duration-300 ${scrolled ? "py-3" : "py-4.5"}`}>
          {/* logo */}
          <a href="/" className="flex shrink-0 items-center gap-3 no-underline" onMouseEnter={() => open("")}>
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" className="shrink-0">
              <defs><linearGradient id="aqvnavmark" x1="0" y1="0" x2="40" y2="40"><stop offset="0" stopColor="#8B92E8" /><stop offset="1" stopColor="#5B6CFF" /></linearGradient></defs>
              <path d="M20 4 L34 30 H26 L20 18 L14 30 H6 Z" stroke="url(#aqvnavmark)" strokeWidth="2" strokeLinejoin="round" fill="none" />
              <circle cx="20" cy="26" r="2.4" fill="url(#aqvnavmark)" />
            </svg>
            <span className={`leading-[1.05] ${text}`}>
              <span className="block text-[13px] font-bold tracking-[0.13em]">AMARAVATI</span>
              <span className="block text-[13px] font-bold tracking-[0.13em]">QUANTUM VALLEY</span>
            </span>
          </a>

          {/* top-level nav */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {MENU.map((m) => (
              <div key={m.key} className="relative" onMouseEnter={() => open(m.key)}>
                <a
                  href={`#`}
                  onClick={(e) => e.preventDefault()}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[12.5px] font-medium tracking-[0.06em] no-underline transition-opacity duration-200 ${text} ${highlight === m.key ? "opacity-100" : "opacity-70"} ${hoverText}`}
                >
                  {m.label}
                  <motion.svg width="9" height="9" viewBox="0 0 10 10" animate={{ rotate: openKey === m.key ? 180 : 0 }} transition={{ duration: 0.25, ease: EASE }}>
                    <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
                  </motion.svg>
                  {highlight === m.key && <motion.span layoutId="aqvNavUnderline" className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" transition={{ duration: 0.3, ease: EASE }} />}
                </a>
              </div>
            ))}
          </nav>

          {/* utility — Careers · CTA · Search (search last) */}
          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0 lg:gap-3">
            <a href={CAREERS_URL} target="_blank" rel="noopener noreferrer" className={`hidden items-center gap-1.5 px-1 text-[12px] font-medium tracking-[0.06em] no-underline opacity-75 transition-opacity hover:opacity-100 xl:flex ${text}`}>
              Careers<svg width="10" height="10" viewBox="0 0 12 12"><path d="M3 9 L9 3 M4 3 H9 V8" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
            </a>
            <a href="/contact" className={`hidden items-center gap-2 rounded-pill border px-5 py-2.75 text-[12px] font-semibold tracking-[0.08em] no-underline transition-all duration-300 sm:flex ${dark ? "border-accent/60 text-accent hover:bg-accent hover:text-night" : "border-night bg-night text-cream hover:bg-transparent hover:text-ink"}`}>
              APPLY / CONNECT
              <svg width="12" height="12" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </a>
            <button aria-label="Search" onClick={() => setSearch((s) => !s)} className={`flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors ${dark ? "hover:bg-cream/10" : "hover:bg-ink/[0.06]"} ${text}`}>
              <svg width="17" height="17" viewBox="0 0 20 20"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M13.5 13.5 L17 17" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <button onClick={() => setDrawer(true)} aria-label="Menu" className={`flex h-11 w-11 flex-col items-center justify-center gap-1.25 rounded-full border lg:hidden ${dark ? "border-cream/25" : "border-ink/20"}`}>
              <span className={`h-px w-4 ${dark ? "bg-cream" : "bg-ink"}`} /><span className={`h-px w-4 ${dark ? "bg-cream" : "bg-ink"}`} />
            </button>
          </div>
        </div>

        {/* mega menu — ONE persistent panel; content swaps without remount (no height glitch) */}
        <AnimatePresence>
          {openTop && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: EASE }}
              onMouseEnter={() => open(openTop.key)}
              className={`overflow-hidden border-t backdrop-blur-[18px] ${dark ? "border-cream/10 bg-night/95" : "border-ink/10 bg-sand/[0.97]"}`}
            >
              <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-x-12 gap-y-8 px-5 py-9 sm:px-8 lg:grid-cols-[170px_1fr_290px] lg:px-10">
                <p className={`hidden pt-1 font-serif text-[1.1rem] italic leading-[1.4] lg:block ${dark ? "text-cream/60" : "text-ink/60"}`}>{openTop.blurb}</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3">
                  {openTop.groups.map((g) => (
                    <div key={g.title}>
                      <div className={`mb-3.5 pl-2.5 t-overline ${dark ? "text-cream/55" : "text-ink/55"}`}>{g.title}</div>
                      <ul>
                        {g.items.map((it) => (
                          <li key={it.label}>
                            <a href={it.href} {...linkTarget(it)} className={`group flex items-center justify-between gap-3 rounded-control py-2 pl-2.5 pr-2.5 no-underline transition-colors ${dark ? "hover:bg-cream/8" : "hover:bg-ink/5"}`}>
                              <span className={`text-[14px] ${it.type === "cta" ? "font-semibold text-accent" : `font-medium ${text}`}`}>{it.label}</span>
                              <svg width="12" height="12" viewBox="0 0 14 14" className="shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"><path d={it.type === "external" ? "M3 9 L9 3 M4 3 H9 V8" : "M3 7 H11 M8 4 L11 7 L8 10"} stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <a href={openTop.feature.href} className="group relative hidden aspect-4/3 overflow-hidden rounded-card no-underline lg:block">
                  <img src={openTop.feature.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <span className="absolute inset-0 bg-linear-to-t from-night/92 via-night/35 to-night/5" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 block t-overline text-accent">{openTop.feature.eyebrow}</span>
                    <span className="flex items-center gap-2 font-serif text-[1.15rem] leading-tight text-cream">
                      {openTop.feature.title}
                      <svg width="13" height="13" viewBox="0 0 14 14" className="shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"><path d="M3 7 H11 M8 4 L11 7 L8 10" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                    </span>
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* search overlay */}
        <AnimatePresence>
          {search && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: EASE }}
              className={`border-t backdrop-blur-[18px] ${dark ? "border-cream/10 bg-night/95" : "border-ink/10 bg-sand/97"}`}>
              <div className="mx-auto flex max-w-[1600px] items-center gap-4 px-5 py-6 sm:px-8 lg:px-10">
                <svg width="20" height="20" viewBox="0 0 20 20" className={text}><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M13.5 13.5 L17 17" stroke="currentColor" strokeWidth="1.5" /></svg>
                <input autoFocus placeholder="Search AQV — research, programs, partners…" className={`flex-1 border-none bg-transparent text-[1.1rem] outline-none ${dark ? "text-cream placeholder:text-cream/40" : "text-ink placeholder:text-ink/40"}`} />
                <button onClick={() => setSearch(false)} className={`t-eyebrow ${dark ? "text-cream/50" : "text-ink/50"}`}>ESC</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[140] overflow-y-auto bg-night px-6 pb-12 pt-6 lg:hidden">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold tracking-[0.13em] text-cream">AMARAVATI QUANTUM VALLEY</span>
              <button onClick={() => setDrawer(false)} aria-label="Close" className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-[22px] text-cream">×</button>
            </div>
            <div className="mt-8 flex flex-col">
              {MENU.map((m) => (
                <div key={m.key} className="border-b border-cream/10">
                  <button onClick={() => setDrawerOpen((k) => (k === m.key ? null : m.key))} className="flex w-full items-center justify-between py-4.5 text-left font-serif text-[1.3rem] font-medium text-cream">
                    {m.label}
                    <motion.svg width="14" height="14" viewBox="0 0 14 14" animate={{ rotate: drawerOpen === m.key ? 45 : 0 }} transition={{ duration: 0.25 }}><path d="M7 2 V12 M2 7 H12" stroke="currentColor" strokeWidth="1.4" /></motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {drawerOpen === m.key && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
                        <div className="pb-6">
                          {m.groups.map((g) => (
                            <div key={g.title} className="mb-5 ml-0.5 border-l border-cream/12 pl-4 last:mb-1">
                              <div className="mb-1 t-overline text-cream/40">{g.title}</div>
                              {g.items.map((it) => (
                                <a key={it.label} href={it.href} {...linkTarget(it)} onClick={() => setDrawer(false)} className={`flex items-center gap-1.5 py-2 text-[1.05rem] leading-snug no-underline transition-colors ${it.type === "cta" ? "font-semibold text-accent" : "text-cream/80 hover:text-cream"}`}>
                                  {it.label}
                                  {it.type === "external" && <svg width="11" height="11" viewBox="0 0 12 12" className="shrink-0 opacity-50"><path d="M3 9 L9 3 M4 3 H9 V8" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a href="/contact" onClick={() => setDrawer(false)} className="flex items-center justify-center gap-2 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-6 py-4 t-eyebrow text-cream no-underline">APPLY / CONNECT</a>
              <a href={CAREERS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-pill border border-cream/25 px-6 py-4 t-eyebrow text-cream no-underline">CAREERS ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
