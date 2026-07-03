export type Pill = { p: [number, number, number]; label: string; detail: string };
export type Station = {
  t: number; num: string; phase: string;
  eyebrow?: string; title?: string; body?: string;
  statChips?: string[]; photo?: string | null; photoCap?: string;
  pills?: Pill[]; finale?: boolean;
};

export const STATIONS: Station[] = [
  {
    t: .075, num: '01', phase: 'The Site', eyebrow: 'WELCOME TO', title: 'AMARAVATI QUANTUM VALLEY',
    body: "India's first integrated Quantum-AI ecosystem — a Top-5 global quantum hub by 2030, already running.",
    statChips: ['~9M sq ft planned', '88,000 people', 'Top-5 by 2030'], photo: 'render-towers.png', photoCap: 'Government master-plan render',
    pills: [
      { p: [-26, 50, 62], label: 'The Towers', detail: 'AQV Central under construction · ~9M sq ft master plan.' },
      { p: [0, 10.5, 0], label: 'The Rotunda', detail: 'The heart of the valley — the tour begins here.' },
      { p: [58, 3, 46], label: 'Hardware Park · 200 acres', detail: 'Identified in Amaravati Phase-2 for quantum hardware manufacturers.' }],
  },
  {
    t: .245, num: '02', phase: 'The Mission', eyebrow: 'WHY THIS PLACE EXISTS', title: 'THE ANSWER, BUILT FIRST',
    body: 'Once quantum hardware arrives, who will use it — and what will it solve? Andhra Pradesh built the answer before the hardware.',
    statChips: ['Ecosystem-first', '5 pillars'], photo: null,
    pills: [
      { p: [-4, 4, -3], label: 'Ecosystem-first strategy', detail: 'Most regions buy hardware, then hunt for talent. AP inverted the order.' },
      { p: [4, 4, -3], label: 'Five pillars', detail: 'Infrastructure · Hardware · R&D · Talent · Partnerships.' }],
  },
  {
    t: .345, num: '03', phase: 'The Ecosystem', eyebrow: 'PILLAR 2 · HARDWARE', title: '40+ COMPANIES, ALREADY BUILDING',
    body: 'Behind these glass walls: the four verticals of India’s quantum hardware stack.',
    statChips: ['4 verticals', '40+ companies'], photo: 'workshop.jpg', photoCap: 'QAIC workshop, June 2026',
    pills: [
      { p: [-4.5, 3.4, -27], label: 'Computing hardware', detail: 'Qbit Force · Srusti · TriQuanta · Quandela · Silicofeller · Photon Core…' },
      { p: [4.5, 3.4, -30], label: 'Quantum sensing', detail: 'Atomionics · Quanastra · Quantum Biosciences · GDQLabs · PrenishQ…' },
      { p: [-4.5, 3.4, -40], label: 'Communication', detail: 'Pramatra Space · Qclairvoyance · Photoncore — QKD & PQC.' },
      { p: [4.5, 3.4, -44], label: 'Infrastructure', detail: 'Keysight · Qblox · diamond foundry & cryo supply chain.' }],
  },
  {
    t: .505, num: '04', phase: 'The Cold', eyebrow: 'HISTORIC MILESTONE', title: '3.98 KELVIN, MADE IN INDIA',
    body: '−269.17 °C on a fully indigenous refrigeration platform — the first sub-4 K capability in India, breaking a global cryogenics monopoly.',
    statChips: ['3.98803 K', '85% → 100% localisation', 'Sub-4 K · first in India'], photo: 'testbed-medha.jpg', photoCap: 'AQV Testbed, Medha Towers',
    pills: [
      { p: [0, 5.2, -76.5], label: '85% → 100%', detail: 'Localisation pathway mapped — every critical component identified.' },
      { p: [-5, 2.4, -79], label: 'Supply chain live', detail: 'MoUs: Amber (Faridabad) · QUTE Electronics (Delhi) · Qbitforce.' }],
  },
  {
    t: .565, num: '04', phase: 'The Machine', eyebrow: 'APRIL 14, 2026', title: 'BUILT ACROSS INDIA, MADE IN AMARAVATI',
    body: "India's first open quantum computer — and this December, South Asia's most powerful one switches on here.",
    statChips: ['Amaravati 1Q & 1s', 'IBM System Two · Dec 2026', 'Cloud live · 365 hrs/yr'], photo: 'chandelier-srm.jpg', photoCap: 'Amaravati 1s at SRM-AP, April 14',
    pills: [
      { p: [0, 4.1, -76.5], label: 'Refrigerator', detail: 'Qbit Force, Amaravati · Amber, Faridabad.' },
      { p: [0, 1.5, -76.5], label: 'Processor', detail: 'Superconducting — TIFR Mumbai · IISc Bengaluru.' },
      { p: [-5, 1.6, -77.4], label: 'RF & control', detail: 'DRDO YSL Pune · cables: Dimira, QUTE.' },
      { p: [-8, 3.9, -88], label: 'IBM Quantum System Two', detail: 'License 18 Jun · ships Jul · assembly Aug · deployment Dec 2026.' }],
  },
  {
    t: .70, num: '05', phase: 'Momentum', eyebrow: 'PILLAR 5 · MOMENTUM', title: '105 LEADS. 15 OPERATIONAL.',
    body: 'The valley is filling — from early engagement to full operations at Medha Towers.',
    statChips: ['105 leads', '15 operational', '10 cos · 75 members'], photo: 'testbed-medha.jpg', photoCap: 'Operations at Medha Towers',
    pills: [
      { p: [24, 9, -100], label: 'Medha Towers', detail: '10 companies · 75 members on campus today.' },
      { p: [17.8, 3.4, -84], label: '11 GO · 11 SIPB · 7 DPR', detail: 'Orders issued · proposals cleared · DPRs in review.' },
      { p: [35.6, 3.4, -84], label: '9 new leads', detail: 'Cisco · AIG Hospitals · MIT Incubation · VIT +5.' }],
  },
  {
    t: .815, num: '06', phase: 'Proof', eyebrow: 'DEPLOYED IN ANDHRA PRADESH', title: 'PROOF, NOT PROMISES',
    body: "India's first quantum-powered emergency response platform runs on real state data.",
    statChips: ['69 → 60 min', '~14% faster', '1.5 lakh trained'], photo: 'control-room.jpg', photoCap: 'Operations & analytics',
    pills: [
      { p: [62, 4.6, -75], label: '69 → 60 minutes', detail: 'Quurium, on real 108/112/104 data.' },
      { p: [62, 4.6, -81], label: 'Quanfluence CIM', detail: 'Validated on a Coherent Ising Machine · Guntur pilot next.' },
      { p: [47.5, 3.6, -84], label: '1.5 lakh trained', detail: '64K WISER · 1.04L NPTEL · 380 QICs · 3,000 advanced cohort.' }],
  },
  { t: .985, num: '07', phase: 'Your Move', finale: true },
];
