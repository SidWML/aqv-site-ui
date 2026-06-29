"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import AQVNav from "../components/AQVNav";
import AQVFooter from "../components/AQVFooter";
import { Counter } from "../components/ui";
import { PathIcon } from "../components/dc";
import FrameSequence from "./FrameSequence";

const QuantumScene = dynamic(() => import("./QuantumScene"), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;
const CARD = "rounded-card border border-cream/12 bg-white/[0.045] backdrop-blur-md";

/* ============================================================ helpers === */

function Chars({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span key={i} aria-hidden className="inline-block will-change-transform"
          initial={{ y: "0.9em", opacity: 0, filter: "blur(8px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: delay + i * 0.04, ease: EASE }}>{c === " " ? " " : c}</motion.span>
      ))}
    </span>
  );
}

function Up({ children, delay = 0, className = "", y = 26 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, delay, ease: EASE }}>{children}</motion.div>
  );
}

function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e: MouseEvent) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.35}px, ${(e.clientY - (r.top + r.height / 2)) * 0.35}px)`; };
    const leave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", move); el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  }, []);
  return <span ref={ref} className={`inline-block transition-transform duration-300 ease-out-quart ${className}`}>{children}</span>;
}

function Tilt({ children, className = "", strength = 6 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `perspective(900px) rotateX(${-((e.clientY - r.top) / r.height - 0.5) * strength}deg) rotateY(${((e.clientX - r.left) / r.width - 0.5) * strength}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)"; };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`transition-transform duration-200 ease-out ${className}`}>{children}</div>;
}

function GlowCursor() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current; if (!el) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const loop = () => { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; el.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", move); raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[300] hidden h-7 w-7 rounded-full bg-accent/30 mix-blend-screen blur-[2px] lg:block" />;
}

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <Up className="mb-7 flex items-center gap-4">
      <span className="font-display text-[15px] text-accent">{n}</span>
      <span className="h-px w-9 bg-accent/50" />
      <span className="t-overline text-accent">{label}</span>
    </Up>
  );
}

function CtaLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="group inline-flex items-center gap-3 t-eyebrow text-cream no-underline">
      {label}<span className="transition-transform duration-300 group-hover:translate-x-1"><svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="var(--color-accent)" strokeWidth="1.4" fill="none" /></svg></span>
    </a>
  );
}

function DotGrid() {
  return <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,rgba(245,242,236,0.55) 0.5px,transparent 0.5px)", backgroundSize: "46px 46px" }} />;
}

/* pillar diagrams (iris-tinted) */
const hexPts = (cx: number, cy: number, r: number) => Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 180) * (60 * i); return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ");
function SpiderWeb() {
  const spokes = [0, 1, 2, 3, 4, 5].map((i) => { const a = (Math.PI / 180) * 60 * i; return { x: 32 + 26 * Math.cos(a), y: 32 + 26 * Math.sin(a) }; });
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
      <g stroke="#8B92E8" strokeOpacity="0.5" strokeWidth="0.7"><polygon points={hexPts(32, 32, 26)} /><polygon points={hexPts(32, 32, 17)} /><polygon points={hexPts(32, 32, 9)} />{spokes.map((s, i) => (<line key={i} x1="32" y1="32" x2={s.x} y2={s.y} />))}</g>
      {spokes.map((s, i) => (<circle key={i} cx={s.x} cy={s.y} r="1.4" fill="#8B92E8" />))}<circle cx="32" cy="32" r="2" fill="#5B6CFF" />
    </svg>
  );
}
function Orbital() {
  return (
    <svg width="112" height="112" viewBox="0 0 120 120" fill="none" aria-hidden className="shrink-0">
      <g stroke="#8B92E8" strokeOpacity="0.35" strokeWidth="0.8"><ellipse cx="60" cy="60" rx="48" ry="20" /><ellipse cx="60" cy="60" rx="48" ry="20" transform="rotate(60 60 60)" /><ellipse cx="60" cy="60" rx="48" ry="20" transform="rotate(120 60 60)" /></g>
      <circle cx="60" cy="60" r="3" fill="#5B6CFF" /><circle cx="108" cy="60" r="2" fill="#8B92E8" /><circle cx="36" cy="20" r="1.6" fill="#8B92E8" /><circle cx="84" cy="100" r="1.6" fill="#5B6CFF" />
    </svg>
  );
}
function HexIcon({ d }: { d: string }) {
  return (
    <svg width="44" height="50" viewBox="0 0 44 50" fill="none" aria-hidden>
      <path d="M22 2 L40 13 V37 L22 48 L4 37 V13 Z" stroke="#8B92E8" strokeOpacity="0.5" strokeWidth="1" />
      <g transform="translate(10,13)"><path d={d} stroke="#8B92E8" strokeWidth="1.3" fill="none" /></g>
    </svg>
  );
}

/* ============================================================== data === */

const pillars = [
  { n: "01", title: "INFRASTRUCTURE", desc: "A purpose-built campus with world-class labs, clean rooms and high-performance compute.", icon: "M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z M12 3 V21 M4 7.5 L20 16.5 M20 7.5 L4 16.5" },
  { n: "02", title: "HARDWARE", desc: "Access to IBM quantum systems, a next-gen hardware stack and advanced fabrication.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M12 3 V7 M15 3 V7 M9 17 V21 M12 17 V21 M15 17 V21 M3 9 H7 M3 12 H7 M3 15 H7 M17 9 H21 M17 12 H21 M17 15 H21" },
  { n: "03", title: "RESEARCH", desc: "Breakthroughs in quantum algorithms, materials, sensing and hybrid quantum-AI systems.", icon: "M12 4 a8 8 0 1 0 0.01 0 M5 12 a14 7 0 0 0 14 0 M5 12 a14 7 0 0 1 14 0 M12 4 V20" },
  { n: "04", title: "TALENT", desc: "WISER and education programs building a world-class quantum workforce.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6 M18 6 a2 2 0 1 0 0.01 0" },
  { n: "05", title: "CAPITAL & STARTUPS", desc: "Enabling ventures through funding, mentorship and industry partnerships.", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M9 11 l2 2 4-4" },
];

const ibmStats = [
  { value: "156+", label: "QUBITS", desc: "Scalable, high-fidelity quantum processor.", icon: "M12 4 a8 8 0 1 0 0.01 0 M5 12 a14 7 0 0 0 14 0 M12 4 V20" },
  { value: "<15 mK", label: "OPERATING TEMP", desc: "Ultra-cold environment for qubit stability.", icon: "M12 3 V21 M12 7 L8 5 M12 7 L16 5 M12 12 L8 10 M12 12 L16 10" },
  { value: "99.9%", label: "UPTIME DESIGN", desc: "Engineered for continuous research.", icon: "M3 14 L7 14 L9 8 L12 18 L15 11 L17 14 L21 14" },
  { value: "AI", label: "AI-NATIVE CONTROL", desc: "Real-time error mitigation & orchestration.", icon: "M5 8 L12 4 L19 8 L12 12 Z M5 12 L12 16 L19 12 M5 16 L12 20 L19 16" },
];
const ibmCallouts = [
  { num: "01", title: "CRYOGENIC SYSTEM", desc: "Dilution refrigeration reaching millikelvin temperatures to create the ideal quantum state." },
  { num: "02", title: "QUANTUM PROCESSOR", desc: "Next-generation processor with high coherence and low error rates." },
  { num: "03", title: "CONTROL ELECTRONICS", desc: "Ultra-low-latency electronics that read, process and stabilize qubits in real time." },
  { num: "04", title: "SOFTWARE STACK", desc: "Powerful tools and SDKs to build, test and scale quantum algorithms." },
];
const ibmDeviceTops = [16.3, 38.1, 57.7, 77.4];

const research = [
  { num: "01", title: "Quantum Computing", desc: "Scalable quantum systems and algorithms to solve real-world problems.", labs: "12+", img: "/images/s6/c1.png" },
  { num: "02", title: "Quantum Materials", desc: "Discovering novel materials for quantum devices and extreme environments.", labs: "9+", img: "/images/s6/c2.png" },
  { num: "03", title: "Communications", desc: "Secure quantum networks and communication protocols for a connected future.", labs: "7+", img: "/images/s6/c3.png" },
  { num: "04", title: "Quantum + AI", desc: "Quantum and AI combined to unlock optimization, simulation and learning.", labs: "7+", img: "/images/s6/c4.png" },
  { num: "05", title: "Quantum Security", desc: "Next-generation cryptography for a quantum-safe world.", labs: "5+", img: "/images/s6/c5.png" },
];
const researchPillars = [
  { title: "ACADEMIC COLLABORATIONS", desc: "Working with leading universities and research institutions worldwide.", icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11" },
  { title: "TALENT DEVELOPMENT", desc: "Fellowships, PhD programs and workshops to nurture quantum talent.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
  { title: "PUBLICATIONS & IP", desc: "Pushing the boundaries of science with impactful research and patents.", icon: "M6 3 H15 L18 6 V21 H6 Z M9 9 H15 M9 13 H15 M9 17 H13" },
];

const slides = [1, 2, 3, 4, 5].map((n) => `/images/s5/s${n}.png`);
const subCards = [
  { tag: "AQV VENTURE FUND", title: "Capital that believes in deep tech.", desc: "A ₹500Cr+ fund focused on quantum and frontier technologies, backing visionary founders building the next wave of global companies.", cta: "LEARN MORE", img: "/images/s5/c1.png" },
  { tag: "FOUNDER STORIES", title: "Built without limits.", desc: "“AQV gave us the infrastructure and belief to build without limits.” — Dr. Arjun Nair, Co-founder & CTO, QSecure.", cta: "READ STORY", img: "/images/s5/c2.png" },
  { tag: "ECOSYSTEM ACCESS", title: "A network that opens doors.", desc: "Connect with researchers, industry leaders, investors and global partners across AQV's growing ecosystem.", cta: "EXPLORE NETWORK", img: "/images/s5/c3.png" },
];
const launchStats = [
  { value: "40+", label: "Startups in pipeline" }, { value: "15+", label: "Ventures onboarded" }, { value: "250+", label: "Mentors & experts" },
  { value: "25+", label: "Global partners" }, { value: "₹500Cr+", label: "AQV Quantum Fund" }, { value: "10+", label: "Universities" },
];

const infraPoints = [
  { v: "9M", l: "SQ FT CAMPUS", d: "An integrated quantum innovation campus, purpose-built for the field." },
  { v: "500+", l: "ACRES", d: "Sustainable by design — green infrastructure and responsible technology." },
  { v: "5", l: "WORLD-CLASS LABS", d: "Where academia, industry and startups build the future together." },
];

const partnerStats = [
  { value: "100+", label: "Global partners", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6" },
  { value: "25+", label: "Countries", icon: "M12 4 a8 8 0 1 0 0.01 0 M4 12 H20 M12 4 c3 3 3 13 0 16 M12 4 c-3 3-3 13 0 16" },
  { value: "50+", label: "Academic institutions", icon: "M3 9 L12 5 L21 9 L12 13 Z M7 11 V16 c0 1 10 1 10 0 V11" },
  { value: "30+", label: "Industry collaborations", icon: "M7 12 l3 3 M10 15 l4-4 M3 11 l4-4 4 4 M21 11 l-4-4-4 4" },
];
const partners = [
  { tag: "TECHNOLOGY PARTNER", name: "Quantum Hardware", desc: "Advancing quantum systems and enterprise solutions.", img: "/images/s6/c2.png" },
  { tag: "CLOUD PARTNER", name: "Cloud & AI", desc: "Empowering research with cloud infrastructure and AI.", img: "/images/s6/c4.png" },
  { tag: "COMPUTE PARTNER", name: "Accelerated Compute", desc: "High-performance computing for quantum simulation.", img: "/images/s5/s3.png" },
  { tag: "ACADEMIC PARTNER", name: "Institute of Technology", desc: "Joint research, talent development and excellence.", img: "/images/s6/c1.png" },
  { tag: "RESEARCH COLLABORATION", name: "Applied Research", desc: "Co-creating industry solutions with applied research.", img: "/images/s6/c3.png" },
  { tag: "GOVERNMENT PARTNER", name: "Policy & Nation", desc: "Building India's quantum advantage, together.", img: "/images/s5/s4.png" },
];

const news = [
  { cat: "PARTNERSHIP", title: "AQV expands collaboration on quantum hardware and talent development", meta: "May 16, 2025 · 4 min read", img: "/images/s6/c3.png" },
  { cat: "ANNOUNCEMENT", title: "New supercomputing infrastructure to power AQV's quantum-AI research", meta: "May 12, 2025 · 3 min read", img: "/images/s6/c4.png" },
  { cat: "RESEARCH", title: "Researchers publish breakthrough in error-corrected qubit stability", meta: "May 9, 2025 · 6 min read", img: "/images/s6/c5.png" },
];

const impact = [
  { value: "62K+", label: "Learners reached" }, { value: "₹25K Cr+", label: "Investment target" }, { value: "100K+", label: "Jobs envisioned" }, { value: "380+", label: "Research centres" },
];
const marquee = ["QUANTUM", "RESEARCH", "HARDWARE", "AI", "TALENT", "CAPITAL", "INFRASTRUCTURE"];

/* ============================================================== page === */

export default function V2Page() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const infraRef = React.useRef<HTMLDivElement>(null);
  const infra = useScroll({ target: infraRef, offset: ["start end", "end start"] });
  const infraY = useTransform(infra.scrollYProgress, [0, 1], ["-8%", "8%"]);

  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000); return () => clearInterval(id); }, []);
  const railRef = React.useRef<HTMLDivElement>(null);
  const scrollRail = (dx: number) => railRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="relative w-full overflow-x-hidden bg-night font-sans text-cream">
      <GlowCursor />
      <div aria-hidden className="v2-grain pointer-events-none fixed inset-0 z-[250] opacity-[0.05] mix-blend-overlay" />
      <AQVNav active="" theme="dark" />

      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 sm:px-8 lg:px-10">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="v2-aurora absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(35% 35% at 38% 42%, rgba(91,108,255,0.22), transparent 60%), radial-gradient(30% 30% at 66% 60%, rgba(139,146,232,0.16), transparent 60%), radial-gradient(40% 30% at 50% 85%, rgba(75,84,214,0.14), transparent 60%)" }} />
        </div>
        <motion.div aria-hidden className="absolute inset-0" style={{ y: sceneY, scale: sceneScale }}><QuantumScene /></motion.div>
        <motion.div style={{ opacity: heroFade }} className="relative z-10 mx-auto flex max-w-[1500px] flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }} className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /><span className="t-overline text-cream/70">AMARAVATI · INDIA&apos;S QUANTUM-AI ECOSYSTEM</span>
          </motion.div>
          <h1 className="font-display font-medium leading-[0.86] tracking-[-0.04em]">
            <Chars text="QUANTUM" delay={0.2} className="block text-[clamp(3.5rem,15vw,13rem)]" />
            <Chars text="VALLEY" delay={0.5} className="block bg-[linear-gradient(180deg,var(--color-iris),var(--color-indigo-deep))] bg-clip-text text-[clamp(3.5rem,15vw,13rem)] text-transparent" />
          </h1>
          <motion.p initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.95, ease: EASE }} className="mt-8 max-w-150 t-lead text-cream/[0.68]">
            India&apos;s first integrated quantum-AI ecosystem — uniting research, infrastructure, hardware, talent and capital in Amaravati to solve humanity&apos;s hardest challenges.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.15, ease: EASE }} className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Magnetic><a href="#about" className="inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-9 py-4.5 t-eyebrow text-cream no-underline">ENTER THE VALLEY<svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></a></Magnetic>
            <Magnetic><a href="/" className="inline-flex items-center gap-3 rounded-pill border border-cream/25 px-9 py-4.5 t-eyebrow text-cream no-underline backdrop-blur-sm transition-colors duration-300 hover:border-accent/60">CLASSIC SITE</a></Magnetic>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"><span className="t-overline text-cream/40">SCROLL</span><div className="relative h-12 w-px overflow-hidden bg-cream/15"><div className="absolute left-0 top-0 h-4 w-px animate-[aqvCue_2.2s_ease-in-out_infinite] bg-accent" /></div></div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="relative overflow-hidden border-y border-cream/10 bg-night py-7">
        <div className="flex w-max v2-marquee">{[0, 1].map((dup) => (<div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">{marquee.map((w) => (<span key={w} className="flex items-center"><span className="px-7 font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium tracking-[-0.02em] text-cream/85">{w}</span><span className="h-1.5 w-1.5 rounded-full bg-accent/70" /></span>))}</div>))}</div>
      </section>

      {/* ============ 01 · FOUNDATION ============ */}
      <section id="about" className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionTag n="01" label="POWERING POSSIBILITIES" />
            <Up><h2 className="mb-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em]">Building the foundation for <span className="text-accent">India&apos;s quantum future.</span></h2></Up>
            <Up delay={0.1}><p className="mb-8 max-w-120 t-lead text-cream/[0.66]">Amaravati Quantum Valley unites world-class research, advanced infrastructure, quantum hardware, talent and capital into a single, self-reinforcing system — accelerating discovery, driving innovation and creating lasting impact, from India for the world.</p></Up>
            <Up delay={0.16}><CtaLink href="/ecosystem" label="EXPLORE THE ECOSYSTEM" /></Up>
            <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-card border border-cream/12 bg-cream/10">
              {[{ v: "2024", l: "Founded" }, { v: "#1", l: "In India" }, { v: "IBM", l: "Powered" }].map((s, i) => (
                <Up key={s.l} delay={0.2 + i * 0.06}><div className="bg-night p-5 text-center lg:p-6"><div className="font-display text-[clamp(1.4rem,2.6vw,2rem)] tracking-[-0.02em] text-accent">{s.v}</div><div className="mt-2 t-eyebrow text-cream/55">{s.l}</div></div></Up>
              ))}
            </div>
          </div>
          <Up delay={0.1} y={36}>
            <Tilt strength={5} className="overflow-hidden rounded-card border border-cream/12 shadow-float">
              <div className="relative">
                <img src="/images/s2.png" alt="Quantum campus" className="block aspect-[4/3] w-full object-cover" />
                <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 50%,rgba(10,14,26,0.65))" }} />
                <div className="absolute bottom-0 left-0 flex items-center gap-3 p-6"><span className="h-px w-8 bg-accent" /><span className="t-eyebrow text-cream">Where research meets real-world impact</span></div>
              </div>
            </Tilt>
          </Up>
        </div>
      </section>

      {/* ============ 02 · FIVE PILLARS ============ */}
      <section className="relative overflow-hidden bg-[#05070F] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <DotGrid />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1fr_0.95fr] lg:gap-12">
            <div>
              <SectionTag n="02" label="THE FIVE PILLARS" />
              <Up><h2 className="mb-7 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em]">Five pillars. <span className="text-accent">One quantum future.</span></h2></Up>
              <Up delay={0.1}><p className="mb-8 max-w-95 t-body text-cream/65">AQV integrates five critical pillars into a self-reinforcing ecosystem — driving breakthroughs, building capabilities and powering the quantum revolution from India to the world.</p></Up>
              <Up delay={0.16} className="mt-12 flex items-center gap-5 border-t border-cream/12 pt-8"><SpiderWeb /><div><div className="mb-2 t-eyebrow text-accent">AQV CORE</div><div className="max-w-52 t-body-sm text-cream/60">The convergence of science, technology and ambition.</div></div></Up>
              <Up delay={0.2} className="mt-9 flex items-center gap-5"><Orbital /><div className="t-mono text-cream/45"><div>|ψ⟩ = α|0⟩ + β|1⟩</div><div className="mt-1.5">|α|² + |β|² = 1</div></div></Up>
            </div>
            <Up delay={0.12} className="relative flex flex-col items-center">
              <div aria-hidden className="absolute top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,255,0.22),transparent)] blur-2xl" />
              <img src="/images/s3-n.png" alt="The five pillars — exploded view of the AQV quantum campus" className="relative block w-full max-w-110 object-contain" />
              <div className="mt-4 t-overline text-accent">INTERCONNECTED · INTENTIONAL · IMPACTFUL</div>
              <div className="mt-3 text-center font-display text-[1.15rem] tracking-[-0.01em] text-cream/85">Designed to compound quantum advantage.</div>
            </Up>
            <div className="flex flex-col">
              {pillars.map((p, i) => (
                <Up key={p.n} delay={0.1 + i * 0.05} className="flex gap-5 border-b border-cream/10 py-5.5"><div className="flex h-12 w-11 shrink-0 items-center justify-center"><HexIcon d={p.icon} /></div><div className="flex-1"><div className="mb-1.5 flex items-baseline gap-3"><span className="border-b border-accent font-display text-[1.05rem] text-accent">{p.n}</span><span className="t-eyebrow">{p.title}</span></div><div className="t-body-sm text-cream/60">{p.desc}</div></div></Up>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 · IBM SYSTEM TWO ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div aria-hidden className="absolute left-1/2 top-1/3 h-[70vmax] w-[70vmax] -translate-x-1/2" style={{ background: "radial-gradient(closest-side, rgba(91,108,255,0.13), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_2fr] lg:gap-12">
          <div>
            <SectionTag n="03" label="IBM POWERED QUANTUM SYSTEM" />
            <Up><h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em]">IBM Quantum <span className="text-accent">System Two.</span></h2></Up>
            <Up delay={0.08}><p className="mb-4 max-w-82 t-lead text-cream/85">The most advanced quantum system in India. At the heart of AQV.</p></Up>
            <Up delay={0.12}><p className="mb-7 max-w-90 t-body text-cream/60">It brings together cutting-edge hardware, ultra-low temperatures and intelligent control to solve problems classical computers cannot — even in theory.</p></Up>
            <div className="grid grid-cols-2 gap-3">
              {ibmStats.map((st, i) => (
                <Up key={st.label} delay={i * 0.06}><div className={`group h-full p-4 transition-colors duration-500 hover:border-accent/40 hover:bg-white/[0.08] ${CARD}`}><span className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-chip bg-accent/10 ring-1 ring-accent/20"><PathIcon d={st.icon} size={16} className="text-accent" sw={1.4} /></span><div className="font-display text-[1.4rem] leading-none tracking-[-0.02em]"><Counter value={st.value} /></div><div className="mt-1.5 t-eyebrow text-cream/80">{st.label}</div><div className="mt-1 t-micro text-cream/50">{st.desc}</div></div></Up>
              ))}
            </div>
          </div>
          <Up delay={0.12} className="relative">
            <div className="relative w-full">
              <div aria-hidden className="absolute left-[6%] top-1/2 h-[80%] w-[55%] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,255,0.3),transparent)] blur-2xl" />
              <img src="/images/s4.png" alt="IBM Quantum System Two — assembled render" className="relative z-[1] mx-auto block h-auto w-full max-w-105 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:mx-0 lg:w-[62%] lg:max-w-none" />
              <div className="absolute left-[-2px] top-[42%] hidden -translate-y-1/2 flex-col items-center gap-1.5 text-cream/40 lg:flex"><span className="t-overline">HEIGHT</span><span className="t-micro">2.3 M</span></div>
              <div className="absolute bottom-[-4px] left-[18%] hidden items-center gap-2 text-cream/40 lg:flex"><span className="t-overline">DIAMETER</span><span className="t-micro">1.6 M</span></div>
              {ibmCallouts.map((co, i) => (
                <div key={co.num} className="mt-6 static lg:absolute lg:left-[66%] lg:right-0 lg:mt-0 lg:-translate-y-1/2" style={{ top: `${ibmDeviceTops[i]}%` }}>
                  <Up className="flex items-start gap-3.5"><span className="mt-2.5 hidden h-px w-8.5 flex-shrink-0 bg-iris lg:block" /><div><div className="mb-1.5 flex items-baseline gap-2.5"><span className="border-b border-accent font-display text-[1.05rem] text-accent">{co.num}</span><span className="t-eyebrow">{co.title}</span></div><div className="max-w-72 t-body-sm text-cream/55">{co.desc}</div></div></Up>
                </div>
              ))}
            </div>
            <Up className={`relative z-[3] ml-0 mt-8 flex items-center gap-4.5 p-4.5 lg:ml-[66%] lg:mt-[-4%] ${CARD}`}><div className="flex-shrink-0 font-display text-[24px] font-extrabold tracking-[-0.03em]">IBM</div><div><div className="mb-1 t-eyebrow">POWERED BY IBM</div><div className="t-body-sm text-cream/55">A strategic collaboration bringing world-class quantum technology to India for the world.</div></div></Up>
          </Up>
        </div>
      </section>

      {/* ============ CINEMATIC FRAME SEQUENCE ============ */}
      <FrameSequence />

      {/* ============ 04 · RESEARCH ============ */}
      <section className="relative overflow-hidden bg-night py-20 pl-5 sm:pl-8 lg:py-32 lg:pl-10">
        <DotGrid />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 items-start gap-8 pr-5 sm:pr-8 lg:grid-cols-[0.62fr_2fr] lg:gap-12 lg:pr-10">
            <div>
              <SectionTag n="04" label="RESEARCH ENGINE" />
              <Up><h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em]">Advancing knowledge. Building the <span className="text-accent">future.</span></h2></Up>
              <Up delay={0.1}><p className="mb-8 t-body text-cream/65">AQV drives deep, collaborative research across quantum computing, materials, communications, AI and security — creating breakthroughs that will define the next era of technology.</p></Up>
              <Up delay={0.16}><CtaLink href="/research" label="EXPLORE RESEARCH AT AQV" /></Up>
            </div>
            <div className="overflow-hidden">
              <div ref={railRef} className="aqv-carousel flex gap-4.5 overflow-x-auto scroll-smooth pb-2">
                {research.map((r, i) => (
                  <Up key={r.num} delay={i * 0.06} className="group relative h-115 flex-[0_0_290px] overflow-hidden rounded-card border border-cream/14">
                    <img src={r.img} alt={r.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.6) 0%,rgba(10,14,26,0.35) 45%,rgba(10,14,26,0.95) 100%)" }} />
                    <div className="relative flex h-full flex-col p-7"><span className="mb-auto font-display text-[1.05rem] text-accent">{r.num}</span><h3 className="mb-3 font-display text-[1.55rem] leading-[1.1] tracking-[-0.01em]">{r.title}</h3><p className="mb-6 t-body-sm text-cream/70">{r.desc}</p><div className="flex items-end justify-between border-t border-cream/15 pt-4.5"><div><div className="font-display text-[1.5rem] leading-none"><Counter value={r.labs} /></div><div className="mt-0.5 t-micro text-cream/55">Active labs</div></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25"><svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></span></div></div>
                  </Up>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end gap-3.5 pr-5 sm:pr-8 lg:pr-10">
            <button onClick={() => scrollRail(-330)} className="flex h-13 w-13 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-accent/60"><svg width="18" height="18" viewBox="0 0 20 20"><path d="M12 4 L6 10 L12 16" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></button>
            <button onClick={() => scrollRail(330)} className="flex h-13 w-13 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-accent/60"><svg width="18" height="18" viewBox="0 0 20 20"><path d="M8 4 L14 10 L8 16" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></button>
          </div>
          <Up className={`mr-5 mt-12 grid grid-cols-1 items-center gap-8 p-6 sm:mr-8 sm:grid-cols-2 lg:mr-10 lg:grid-cols-[repeat(3,0.8fr)_1.2fr] ${CARD}`}>
            {researchPillars.map((rp) => (<div key={rp.title} className="flex flex-col gap-3 border-cream/10 sm:border-r sm:pr-5"><PathIcon d={rp.icon} size={24} className="text-accent" sw={1.3} /><div className="t-eyebrow">{rp.title}</div><div className="t-body-sm text-cream/60">{rp.desc}</div></div>))}
            <div><div className="mb-4 font-display text-[1.05rem] leading-[1.45] text-cream/85">Research at AQV is powered by curiosity, collaboration and a commitment to solving humanity&apos;s most complex challenges.</div><CtaLink href="/research" label="VIEW RESEARCH PROGRAMS" /></div>
          </Up>
        </div>
      </section>

      {/* ============ 05 · LAUNCHPAD ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <SectionTag n="05" label="BUILDING THE FUTURE ECONOMY" />
              <Up><h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em]">Where quantum innovation becomes real-world <span className="text-accent">impact.</span></h2></Up>
              <Up delay={0.1}><p className="mb-4 t-body text-cream/65">AQV is the launchpad for deep-tech startups solving hard problems in compute, security, materials, healthcare, logistics and beyond.</p></Up>
              <Up delay={0.14}><p className="mb-8 t-body text-cream/65">We provide the infrastructure, capital, mentorship and network to take founders from idea to industry leadership.</p></Up>
              <Up delay={0.18}><CtaLink href="/startups" label="EXPLORE OPPORTUNITIES" /></Up>
            </div>
            <Up delay={0.12} className="relative h-72 overflow-hidden rounded-card border border-cream/12 shadow-float sm:h-80 lg:h-92">
              {slides.map((src, i) => (<img key={src} src={src} alt={`AQV Launchpad slide ${i + 1}`} className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-[900ms] ease-out" style={{ opacity: i === slide ? 1 : 0 }} />))}
              <div className="absolute bottom-6 right-8 z-[2] flex gap-2">{slides.map((_, i) => (<button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className="h-1.5 rounded-[3px] transition-all duration-300" style={{ width: i === slide ? 26 : 9, background: i === slide ? "#8B92E8" : "rgba(245,242,236,0.45)" }} />))}</div>
            </Up>
          </div>
          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subCards.map((sc, i) => (
              <Up key={sc.tag} delay={i * 0.08} className={`group relative grid min-h-62 grid-cols-2 overflow-hidden ${CARD}`}>
                <div className="flex flex-col p-6 pr-2"><span className="mb-5 t-eyebrow text-accent">{sc.tag}</span><h4 className="mb-2.5 font-display text-[1.2rem] leading-[1.15] tracking-[-0.01em]">{sc.title}</h4><p className="t-micro text-cream/60">{sc.desc}</p><span className="mt-auto self-start border-b border-accent/40 pb-1 pt-4 t-eyebrow text-cream/80">{sc.cta}</span></div>
                <div className="relative"><img src={sc.img} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(10,14,26,0.85),transparent 60%)" }} /></div>
              </Up>
            ))}
          </div>
          <Up className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ${CARD} px-6 py-7`}>
            {launchStats.map((st) => (<div key={st.label} className="px-2 py-2 lg:border-r lg:border-cream/12 lg:last:border-r-0"><div className="font-display text-[1.5rem] leading-none tracking-[-0.01em] text-accent"><Counter value={st.value} /></div><div className="mt-1.5 t-micro text-cream/60">{st.label}</div></div>))}
          </Up>
        </div>
      </section>

      {/* ============ 06 · INFRASTRUCTURE (immersive) ============ */}
      <section ref={infraRef} className="relative flex min-h-screen items-end overflow-hidden bg-night px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <motion.div aria-hidden className="absolute inset-0" style={{ y: infraY }}><img src="/images/s7.png" alt="" className="h-[116%] w-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,0.72) 0%,rgba(10,14,26,0.45) 38%,rgba(10,14,26,0.94) 100%)" }} /></motion.div>
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <SectionTag n="06" label="BUILT FOR THE FUTURE" />
          <Up><h2 className="mb-6 max-w-200 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-medium leading-[1] tracking-[-0.03em]">A purpose-built home for<br /><span className="text-accent">quantum innovation.</span></h2></Up>
          <Up delay={0.08}><p className="mb-12 max-w-130 t-body text-cream/75">A 500+ acre integrated campus designed to accelerate discovery, innovation and industry creation — world-class infrastructure for world-changing ideas.</p></Up>
          <div className="grid gap-4 sm:grid-cols-3">
            {infraPoints.map((s, i) => (<Up key={s.l} delay={i * 0.08} className={`${CARD} p-6`}><div className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.02em]"><Counter value={s.v} /></div><div className="mt-2 t-eyebrow text-accent/90">{s.l}</div><p className="mt-2.5 t-body-sm text-cream/65">{s.d}</p></Up>))}
          </div>
        </div>
      </section>

      {/* ============ 07 · PARTNERS ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <DotGrid />
        <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.7fr_1.6fr] lg:gap-12">
          <div>
            <SectionTag n="07" label="STRONGER TOGETHER" />
            <Up><h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em]">Collaborating with the world to build the <span className="text-accent">quantum future.</span></h2></Up>
            <Up delay={0.1}><p className="mb-7 t-body text-cream/65">AQV partners with global technology leaders, academic institutions, investors and government bodies to accelerate breakthroughs, nurture talent and create real-world impact.</p></Up>
            <Up delay={0.14} className={`mb-5 grid grid-cols-2 gap-x-5 gap-y-6 p-7 ${CARD}`}>{partnerStats.map((ps) => (<div key={ps.label} className="flex items-start gap-3"><PathIcon d={ps.icon} size={20} className="mt-1 shrink-0 text-accent" sw={1.3} /><div><div className="font-display text-[1.5rem] leading-none"><Counter value={ps.value} /></div><div className="mt-1 t-micro text-cream/55">{ps.label}</div></div></div>))}</Up>
            <Up delay={0.18} className={`p-7 ${CARD}`}><div className="font-display text-[28px] leading-[0.5] text-accent">&quot;</div><p className="mb-5 mt-3 font-display text-[1.05rem] leading-[1.5] text-cream/90">Partnership is the force multiplier for quantum innovation. Together, we are building technologies that will transform industries and improve lives.</p><div className="t-eyebrow">— DR. ARUN NAIR</div><div className="mt-1 t-eyebrow text-cream/50">CO-FOUNDER &amp; CTO, QSECURE</div></Up>
          </div>
          <div>
            <Up className="mb-5 t-eyebrow text-cream/60">OUR PARTNERS IN INNOVATION</Up>
            <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((pt, i) => (
                <Up key={pt.name} delay={(i % 3) * 0.08} className={`group overflow-hidden ${CARD} transition-colors duration-500 hover:border-accent/40`}>
                  <div className="relative h-40 overflow-hidden"><img src={pt.img} alt={pt.name} className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(10,14,26,0.85))" }} /></div>
                  <div className="p-5.5"><div className="mb-3 t-eyebrow text-cream/55">{pt.tag}</div><div className="flex items-start justify-between gap-3"><div><div className="mb-1.5 text-[14px] font-semibold tracking-[-0.005em]">{pt.name}</div><div className="t-body-sm text-cream/60">{pt.desc}</div></div><span className="flex h-8.5 w-8.5 flex-shrink-0 items-center justify-center rounded-full border border-cream/25"><svg width="13" height="13" viewBox="0 0 16 16"><path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></span></div></div>
                </Up>
              ))}
            </div>
            <Up className={`mt-4.5 px-7 py-6 ${CARD}`}><div className="mb-4 t-eyebrow text-cream/50">TRUSTED BY LEADING ORGANIZATIONS WORLDWIDE</div><div className="flex flex-wrap items-center justify-between gap-4">{["PARTNER 01", "PARTNER 02", "PARTNER 03", "PARTNER 04", "PARTNER 05", "PARTNER 06"].map((tl) => (<span key={tl} className="t-mono tracking-[0.12em] text-cream/40">{tl}</span>))}<CtaLink href="/partners" label="VIEW ALL" /></div></Up>
          </div>
        </div>
      </section>

      {/* ============ 08 · JOURNAL ============ */}
      <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div><SectionTag n="08" label="FROM THE NEWSROOM" /><Up><h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em]">Latest from <span className="text-accent">AQV.</span></h2></Up></div>
            <Up delay={0.1}><CtaLink href="/media" label="VIEW ALL NEWS" /></Up>
          </div>
          <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
            <Up className={`grid grid-cols-1 overflow-hidden sm:grid-cols-2 ${CARD}`}>
              <div className="relative min-h-72 overflow-hidden"><img src="/images/s6/c1.png" alt="" className="h-full w-full object-cover" /></div>
              <div className="flex flex-col justify-center p-9"><span className="mb-4 t-eyebrow text-accent">RESEARCH BREAKTHROUGH</span><h3 className="mb-4 font-display text-[1.5rem] leading-[1.15] tracking-[-0.01em]">AQV launches India&apos;s first 100+ qubit research initiative</h3><p className="mb-7 t-body-sm text-cream/65">A major step towards building sovereign quantum computing capability and accelerating scientific discovery for national impact.</p><div className="flex items-center justify-between border-t border-cream/12 pt-4"><CtaLink href="/media" label="READ STORY" /><span className="t-body-sm text-cream/50">May 22, 2025</span></div></div>
            </Up>
            <Up delay={0.08} className={`flex flex-col overflow-hidden ${CARD}`}>
              <div className="relative h-44 overflow-hidden"><img src="/images/s5/s2.png" alt="" className="h-full w-full object-cover" /></div>
              <div className="flex flex-1 flex-col p-7"><div className="mb-4 flex items-center justify-between"><span className="t-eyebrow text-accent">UPCOMING EVENT</span><span className="t-eyebrow text-cream/50">JUN 18–20</span></div><h3 className="mb-auto font-display text-[1.3rem] leading-[1.15] tracking-[-0.01em]">AQV Quantum Future Summit 2025</h3><div className="mt-6 flex items-center justify-between"><span className="t-caption text-cream/60">Amaravati Quantum Valley, AP</span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/[0.18]"><svg width="15" height="15" viewBox="0 0 16 16"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="var(--color-accent)" strokeWidth="1.4" fill="none" /></svg></span></div></div>
            </Up>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((a, i) => (
              <Up key={a.title} delay={i * 0.08} className={`group overflow-hidden ${CARD} transition-colors duration-500 hover:border-accent/40`}>
                <div className="relative h-48 overflow-hidden"><img src={a.img} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-pill bg-night/70 px-3 py-1.5 t-eyebrow text-accent backdrop-blur-sm">{a.cat}</span></div>
                <div className="p-6"><h3 className="mb-5 font-display text-[1.15rem] leading-[1.25] tracking-[-0.01em] text-cream">{a.title}</h3><div className="flex items-center justify-between border-t border-cream/12 pt-4"><span className="t-body-sm text-cream/55">{a.meta}</span><span className="t-eyebrow text-accent transition-transform duration-300 group-hover:translate-x-1">→</span></div></div>
              </Up>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IMPACT ============ */}
      <section className="relative overflow-hidden border-y border-cream/10 bg-night px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <Up className="mb-12"><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium tracking-[-0.02em]">The whole is greater than <span className="text-accent">the sum.</span></h2></Up>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">{impact.map((s, i) => (<Up key={s.label} delay={i * 0.08}><div className="bg-[linear-gradient(180deg,var(--color-cream),rgba(245,242,236,0.35))] bg-clip-text font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-none tracking-[-0.03em] text-transparent"><Counter value={s.value} /></div><div className="mt-4 flex items-center gap-2.5"><span className="h-px w-7 bg-accent" /><span className="t-eyebrow text-cream/55">{s.label}</span></div></Up>))}</div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night px-5 py-28 text-center sm:px-8 lg:px-10">
        <div aria-hidden className="v2-aurora absolute left-1/2 top-1/2 h-[90vmax] w-[90vmax] -translate-x-1/2 -translate-y-1/2 opacity-70" style={{ background: "radial-gradient(30% 30% at 50% 50%, rgba(91,108,255,0.22), transparent 60%)" }} />
        <div className="relative z-10 mx-auto flex max-w-160 flex-col items-center">
          <Up><h2 className="font-display text-[clamp(2.6rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em]">The future is <span className="text-accent">quantum.</span></h2></Up>
          <Up delay={0.12}><p className="mt-8 max-w-120 t-lead text-cream/[0.66]">AQV is India&apos;s movement to lead the quantum era. Build it with us — from Amaravati, for India, to the world.</p></Up>
          <Up delay={0.24} className="mt-11"><Magnetic><a href="/contact" className="inline-flex items-center gap-3 rounded-pill bg-[linear-gradient(100deg,var(--color-indigo),var(--color-iris))] px-10 py-5 t-eyebrow text-cream no-underline">APPLY / REGISTER<svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></a></Magnetic></Up>
        </div>
      </section>

      <AQVFooter />
    </div>
  );
}
