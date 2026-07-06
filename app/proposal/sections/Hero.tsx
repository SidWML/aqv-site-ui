"use client";

import { Reveal, TextReveal, Eyebrow, PillButton } from "../../components/ui";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-sand text-ink">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 sm:px-10 lg:px-14">
          <Eyebrow num="01" label="BUILT FOR THE FUTURE" accent="iris" className="mb-8" />
          <h1 className="max-w-[13ch] t-display">
            <TextReveal text="India's First" className="block" delay={0.1} />
            <TextReveal text="Quantum" className="block text-accent" delay={0.3} />
            <TextReveal text="Valley" className="block" delay={0.45} />
          </h1>
          <Reveal as="p" delay={0.15} className="mt-8 max-w-[46ch] t-lead text-ink/65">India&apos;s most advanced quantum ecosystem — uniting research, infrastructure, innovation and industry to solve humanity&apos;s hardest challenges.</Reveal>
          <Reveal delay={0.25} className="mt-11"><PillButton href="/contact" variant="solid">Invest in AQV ↗</PillButton></Reveal>
          <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45"><span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" /> Amaravati, Andhra Pradesh, India</div>
        </div>
        <Reveal variant="scale" className="relative hidden overflow-hidden lg:block">
          <img src="/images/tour/frame_0405.jpg" alt="Amaravati Quantum Valley campus" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--color-sand), transparent 22%)" }} />
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-6 z-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 sm:left-10 lg:left-14">↓ Scroll to explore</div>
    </section>
  );
}
