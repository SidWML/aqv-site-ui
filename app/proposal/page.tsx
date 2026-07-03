"use client";

import FilmAct, { type Scene } from "./film/FilmAct";
import Hero from "./sections/Hero";
import Pillars from "./sections/Pillars";
import CTA from "./sections/CTA";
import IbmSystem from "../components/home/IbmSystem";
import Launchpad from "../components/home/Launchpad";

const PHASE_LIST = ["The Valley", "The Atrium", "Quantum System", "The Labs", "The Cold", "The Processor", "Cryogenics", "The Testbed", "Talent", "The Horizon"];

// scene frames verified against the merged film (see per-scene notes)
const ACT1: Scene[] = [
  { frame: 17, step: "01 · The Site", title: "THE VALLEY", desc: "500 acres · 88,000 people — India's sovereign quantum ecosystem, at Amaravati.", spots: [{ x: 50, y: 47, label: "AQV Central" }, { x: 30, y: 25, label: "The Towers" }, { x: 67, y: 28, label: "Hardware Park" }, { x: 50, y: 80, label: "Reflecting Pools" }] },
  { frame: 85, step: "02 · The Heart", title: "THE ATRIUM", desc: "The rotunda — where the whole ecosystem gathers under one roof.", spots: [{ x: 19, y: 82, label: "AQV Emblem" }, { x: 62, y: 56, label: "The People" }, { x: 90, y: 50, label: "Glass Labs" }] },
  { frame: 119, step: "03 · The Machine", title: "THE QUANTUM SYSTEM", desc: "A dilution-refrigerated quantum computer, at the heart of the lab.", spots: [{ x: 50, y: 38, label: "Quantum Computer" }, { x: 50, y: 63, label: "Researchers" }, { x: 82, y: 50, label: "Coolant Supply" }] },
  { frame: 153, step: "04 · The Ecosystem", title: "THE LABS", desc: "40+ companies — computing, sensing, communication and materials.", spots: [{ x: 30, y: 56, label: "Computing" }, { x: 52, y: 60, label: "Sensing" }, { x: 74, y: 54, label: "Communication" }] },
  { frame: 187, step: "05 · The Cold", title: "3.98 KELVIN", desc: "−269.17 °C on a fully indigenous refrigeration platform — the first sub-4 K in India.", spots: [{ x: 50, y: 44, label: "Dilution Fridge" }, { x: 78, y: 51, label: "3.98 K · achieved" }, { x: 33, y: 46, label: "Cryogenics" }] },
];

const ACT2: Scene[] = [
  { frame: 221, step: "06 · The Qubit", title: "THE PROCESSOR", desc: "Superconducting qubits — from TIFR & IISc, assembled in Amaravati.", spots: [{ x: 50, y: 61, label: "Quantum Chip" }, { x: 50, y: 28, label: "Probe Station" }, { x: 84, y: 46, label: "RF Readout" }] },
  { frame: 255, step: "07 · The Cold Chain", title: "THE CRYOGENICS", desc: "Indigenous coolant and cryo supply — the cold chain, built at home.", spots: [{ x: 22, y: 48, label: "Coolant Plant" }, { x: 36, y: 47, label: "Controls" }, { x: 76, y: 55, label: "Distribution" }] },
  { frame: 289, step: "08 · The Testbed", title: "THE TESTBED", desc: "Characterisation and test — where quantum hardware is proven at scale.", spots: [{ x: 26, y: 60, label: "Test Benches" }, { x: 55, y: 61, label: "Characterisation" }, { x: 80, y: 57, label: "Instrumentation" }] },
  { frame: 350, step: "09 · The Talent", title: "64K → 3.5M", desc: "India's largest deep-tech talent pipeline — Quantum, AI & Cybersecurity.", spots: [{ x: 18, y: 32, label: "3.5M by 2030" }, { x: 30, y: 66, label: "Trainees" }] },
  { frame: 391, step: "10 · The Horizon", title: "THE VALLEY, ALIVE", desc: "The valley is running — 105 leads, 15 operational. Now build yours.", spots: [{ x: 50, y: 64, label: "Central Plaza" }, { x: 30, y: 30, label: "Medha Towers" }, { x: 58, y: 22, label: "Innovation Park" }] },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14" style={{ mixBlendMode: "difference", color: "#fff" }}>
      <a href="/proposal" className="font-display text-[18px] font-extrabold tracking-[-0.01em] text-white no-underline">AQV</a>
      <a href="/contact" className="font-mono text-[12px] uppercase tracking-[0.16em] text-white no-underline">Invest in AQV ↗</a>
    </header>
  );
}

export default function ProposalPage() {
  return (
    <div className="bg-sand font-sans text-ink">
      <Nav />
      <Hero />
      <FilmAct startFrame={0} scenes={ACT1} phaseList={PHASE_LIST} phaseOffset={0} />
      <Pillars />
      <FilmAct startFrame={195} scenes={ACT2} phaseList={PHASE_LIST} phaseOffset={5} />
      <IbmSystem />
      <Launchpad />
      <CTA />
    </div>
  );
}
