"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

export type Section = { id: string; label: string };
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * On-page section navigator (scroll-spy). Collapsed to a chip showing the
 * current section (number + heading + count); click to expand the full list,
 * click a row / the ✕ to close. Fixed right, desktop only, dark glass.
 */
export default function SectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = React.useState(sections[0]?.id ?? "");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); setOpen(false); };
  const activeIdx = Math.max(0, sections.findIndex((s) => s.id === active));
  const total = String(sections.length).padStart(2, "0");
  const num = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <div className="fixed right-5 top-1/2 z-[90] hidden -translate-y-1/2 lg:block xl:right-8">
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, x: 10 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95, x: 10 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="w-60 origin-right rounded-2xl border border-cream/15 bg-night/85 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-3 pb-2 pt-1.5">
              <span className="t-overline text-cream/45">ON THIS PAGE</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="flex h-6 w-6 items-center justify-center rounded-full text-cream/60 transition-colors hover:bg-cream/10 hover:text-cream">
                <svg width="12" height="12" viewBox="0 0 14 14"><path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.4" /></svg>
              </button>
            </div>
            <div className="space-y-0.5">
              {sections.map((s, i) => {
                const on = active === s.id;
                return (
                  <button key={s.id} onClick={() => go(s.id)} aria-current={on ? "true" : undefined}
                    className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl border-none px-3 py-2 text-left transition-colors ${on ? "bg-accent/15" : "bg-transparent hover:bg-cream/8"}`}>
                    <span className={`w-5 shrink-0 font-mono text-[11px] ${on ? "text-accent" : "text-cream/35"}`}>{num(i)}</span>
                    <span className={`flex-1 text-[12.5px] font-medium ${on ? "text-cream" : "text-cream/55"}`}>{s.label}</span>
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${on ? "bg-accent" : "bg-transparent"}`} />
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="chip"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="flex cursor-pointer items-center gap-3 rounded-full border border-cream/15 bg-night/85 py-2.5 pl-2.5 pr-4 shadow-[0_16px_44px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent font-mono text-[11px] font-bold text-night">{num(activeIdx)}</span>
            <span className="max-w-40 truncate text-[13px] font-semibold text-cream">{sections[activeIdx]?.label}</span>
            <span className="font-mono text-[10px] text-cream/40">{num(activeIdx)}/{total}</span>
            <span className="flex flex-col gap-[3.5px]"><span className="block h-px w-3.5 bg-cream/70" /><span className="block h-px w-3.5 bg-cream/70" /></span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
