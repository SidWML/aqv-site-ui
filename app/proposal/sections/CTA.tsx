"use client";

import { Reveal, Eyebrow, Accent, PillButton } from "../../components/ui";

export default function CTA() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center bg-sand px-6 text-center text-ink">
      <Eyebrow num="06" label="THE NEXT CHAPTER" accent="iris" className="mb-8 justify-center" />
      <Reveal as="h2" variant="wipe" className="max-w-[16ch] t-display">Build India&apos;s <Accent>quantum future.</Accent></Reveal>
      <Reveal as="p" delay={0.15} className="mt-7 max-w-[48ch] t-lead text-ink/65">Bring your components, systems and ambition — test at sub-4 Kelvin in India&apos;s first indigenous cryogenic facility, and build what comes next.</Reveal>
      <Reveal delay={0.25} className="mt-11 flex flex-wrap justify-center gap-4">
        <PillButton href="/contact?type=invest" variant="solid">Invest in AQV ↗</PillButton>
        <a href="/contact?type=partner" className="inline-flex items-center rounded-[40px] border border-ink/20 px-[34px] py-[18px] text-[13px] font-semibold tracking-[0.1em] text-ink no-underline transition-colors hover:border-ink/45">Partner with us</a>
        <a href="/contact?type=testbed" className="inline-flex items-center rounded-[40px] border border-ink/20 px-[34px] py-[18px] text-[13px] font-semibold tracking-[0.1em] text-ink no-underline transition-colors hover:border-ink/45">Book the Testbed</a>
      </Reveal>
      <div className="mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">Government of Andhra Pradesh · National Quantum Mission</div>
    </section>
  );
}
