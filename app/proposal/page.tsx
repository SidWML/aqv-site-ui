"use client";

import * as React from "react";
import AQVFooter from "../components/AQVFooter";
import ScrollFilm, { type Phase } from "./ScrollFilm";

const phases: Phase[] = [
  { range: [0.05, 0.075, 0.105, 0.12], num: "01", eyebrow: "THE THESIS",
    title: <>We built the ecosystem <em className="italic text-accent">first.</em></>,
    sub: "Andhra Pradesh built India's sovereign quantum ecosystem before the hardware arrived." },

  { range: [0.12, 0.145, 0.20, 0.22], eyebrow: "ACTIVATION",
    title: <>The system <em className="italic text-accent">awakens.</em></>,
    sub: "Infrastructure, talent and capital — already alive across the state.",
    metrics: [{ value: "3.98 K", label: "Indigenous fridge" }, { value: "64K+", label: "WISER learners" }, { value: "69 → 60", label: "Min · dispatch" }] },

  { range: [0.22, 0.25, 0.31, 0.34], num: "02", eyebrow: "THE PROOF",
    title: <>India's first indigenous <em className="italic text-accent">sub-4 Kelvin</em> refrigerator.</>,
    sub: "A fully indigenous quantum refrigeration platform — −269.17 °C, built at home.",
    metrics: [{ value: "3.98 K", label: "Achieved · Medha Towers testbed" }] },

  { range: [0.34, 0.37, 0.43, 0.46], num: "03", eyebrow: "THE MACHINE",
    title: <>South Asia's first on-prem <em className="italic text-accent">IBM Quantum System.</em></>,
    sub: "The most advanced quantum system in India — at the heart of AQV.",
    metrics: [{ value: "Heron", label: "133-qubit processor" }, { value: "Dec 2026", label: "Deployment" }, { value: "Cleared", label: "U.S. export · 18 Jun 2026" }] },

  { range: [0.46, 0.49, 0.57, 0.60], num: "04", eyebrow: "THE SYSTEM",
    title: <>Five pillars. One <em className="italic text-accent">sovereign ecosystem.</em></>,
    sub: "Compute, research, infrastructure, talent and capital — engineered as one.",
    metrics: [{ value: "01", label: "Infrastructure" }, { value: "02", label: "Hardware" }, { value: "03", label: "Research" }, { value: "04", label: "Talent" }, { value: "05", label: "Capital" }] },

  { range: [0.60, 0.63, 0.69, 0.72], num: "05", eyebrow: "TALENT",
    title: <>64K today. <em className="italic text-accent">3.5M</em> by 2030.</>,
    sub: "India's largest deep-tech talent pipeline — Quantum, AI and Cybersecurity.",
    metrics: [{ value: "~1.5L", label: "Learners trained" }, { value: "50+", label: "Institutions" }, { value: "51%", label: "Women participation" }] },

  { range: [0.72, 0.75, 0.81, 0.84], num: "06", eyebrow: "GOVERNANCE",
    title: <>69 → 60 <em className="italic text-accent">minutes.</em></>,
    sub: "India's first quantum-powered emergency-response optimisation — live in Guntur.",
    metrics: [{ value: "14%", label: "Faster turnaround" }, { value: "5", label: "Agencies unified" }] },

  { range: [0.84, 0.87, 0.915, 0.94], num: "07", eyebrow: "OPPORTUNITY",
    title: <>A generational investment in <em className="italic text-accent">sovereign compute.</em></>,
    metrics: [{ value: "₹500Cr+", label: "Quantum fund" }, { value: "500 Acres", label: "Campus" }, { value: "Top 5", label: "Global hub by 2030" }] },

  { range: [0.94, 0.965, 1.0, 1.08], num: "08", eyebrow: "INVEST IN AQV",
    title: <>Partner with <em className="italic text-accent">AQV.</em></>,
    sub: "From Amaravati, for India, to the world.", cta: true },
];

function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e: MouseEvent) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.3}px, ${(e.clientY - (r.top + r.height / 2)) * 0.3}px)`; };
    const leave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", move); el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  }, []);
  return <span ref={ref} className={`inline-block transition-transform duration-300 ease-out-quart ${className}`}>{children}</span>;
}

export default function ProposalPage() {
  return (
    <div className="w-full overflow-x-clip bg-night font-sans text-cream">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="/proposal" className="flex items-center gap-3 text-cream no-underline">
            <span className="font-serif text-2xl leading-none tracking-[-0.03em]">AQV</span>
            <span className="hidden text-[10px] font-semibold leading-[1.15] tracking-[0.18em] text-cream/70 sm:block">AMARAVATI<br />QUANTUM VALLEY</span>
          </a>
          <Magnetic><a href="/contact" className="inline-flex items-center gap-2.5 rounded-pill border border-cream/25 px-6 py-3 t-eyebrow text-cream no-underline transition-colors hover:border-accent/60">INVEST IN AQV<svg width="12" height="12" viewBox="0 0 14 14"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg></a></Magnetic>
        </div>
      </header>

      <ScrollFilm phases={phases} vh={850} />

      <AQVFooter />
    </div>
  );
}
