"use client";

import { Reveal, Eyebrow, Accent, ArrowLink, SectionShell } from "../../components/ui";
import { PathIcon } from "../../components/dc";

const pillars = [
  { num: "01", title: "INFRASTRUCTURE", desc: "A purpose-built campus with world-class labs, clean rooms and high-performance compute.", icon: "M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z M12 3 V21 M4 7.5 L20 16.5 M20 7.5 L4 16.5" },
  { num: "02", title: "HARDWARE", desc: "Access to IBM quantum systems, a next-gen hardware stack and advanced fabrication.", icon: "M7 7 H17 V17 H7 Z M9 3 V7 M12 3 V7 M15 3 V7 M9 17 V21 M12 17 V21 M15 17 V21 M3 9 H7 M3 12 H7 M3 15 H7 M17 9 H21 M17 12 H21 M17 15 H21" },
  { num: "03", title: "RESEARCH", desc: "Breakthroughs in quantum algorithms, materials, sensing and hybrid quantum-AI.", icon: "M12 4 a8 8 0 1 0 0.01 0 M5 12 a14 7 0 0 0 14 0 M5 12 a14 7 0 0 1 14 0 M12 4 V20" },
  { num: "04", title: "TALENT", desc: "WISER and education programs building a world-class quantum workforce.", icon: "M9 8 a3 3 0 1 0 6 0 a3 3 0 0 0 -6 0 M4 20 c0-4 3-6 8-6 s8 2 8 6 M18 6 a2 2 0 1 0 0.01 0" },
  { num: "05", title: "CAPITAL & STARTUPS", desc: "Ventures powered by funding, mentorship and industry partnerships.", icon: "M12 3 L20 7 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V7 Z M9 11 l2 2 4-4" },
];

export default function Pillars() {
  return (
    <SectionShell theme="light" id="pillars" bg="bg-white" innerClassName="px-5 sm:px-8 lg:px-10 py-16 sm:py-24 lg:py-30">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1fr_0.95fr] lg:gap-12">
        <div>
          <Eyebrow num="02" label="THE FIVE PILLARS" accent="iris" className="mb-9" />
          <Reveal as="h2" variant="fade" delay={0.1} className="mb-8 t-h2">Five pillars. <Accent>One quantum future.</Accent></Reveal>
          <Reveal as="p" delay={0.15} className="mb-8 max-w-95 t-body text-ink/70">AQV integrates five critical pillars into one self-reinforcing ecosystem — driving breakthroughs, building capability, and powering the quantum revolution from India to the world.</Reveal>
          <Reveal delay={0.2}><ArrowLink href="#ibm" label="EXPLORE THE ECOSYSTEM" accent="iris" theme="light" /></Reveal>
        </div>

        <Reveal variant="scale" delay={0.15} className="flex flex-col items-center">
          <img src="/images/s3-n.png" alt="The five pillars — an exploded view of the AQV quantum campus" className="block w-full max-w-110 object-contain" />
          <div className="mt-4 t-overline text-accent">INTERCONNECTED · INTENTIONAL · IMPACTFUL</div>
          <div className="mt-3 text-center t-title-sm text-ink/85">Designed to compound quantum advantage.</div>
        </Reveal>

        <div className="flex flex-col">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={0.1 + i * 0.05} className="flex gap-5 border-b border-ink/10 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-iris/10" style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,106,0.4)" }}>
                <PathIcon d={p.icon} size={17} className="text-accent" sw={1.3} />
              </span>
              <div className="flex-1">
                <div className="mb-1.5 flex items-baseline gap-3"><span className="border-b border-accent t-h4 text-accent">{p.num}</span><span className="t-eyebrow text-ink">{p.title}</span></div>
                <div className="t-body-sm text-ink/60">{p.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
