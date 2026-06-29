import React from "react";

/**
 * Section eyebrow: an index number, a short rule, then a tracked label —
 * e.g. `04 — IBM POWERED QUANTUM SYSTEM`. Bound to the type scale; the accent
 * defaults to the quantum (iris) tone on every surface.
 */
export default function Eyebrow({
  num,
  label,
  accent = "iris",
  className = "",
}: {
  num?: string;
  label: string;
  /** quantum iris by default; gold is the sparing warm option */
  accent?: "iris" | "gold";
  className?: string;
}) {
  const acc = accent === "gold" ? "text-gold" : "text-accent";
  const rule = accent === "gold" ? "bg-gold/50" : "bg-accent/50";
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {num && <span className={`t-eyebrow-num ${acc}`}>{num}</span>}
      <span className={`h-px w-[30px] ${rule}`} />
      <span className="t-eyebrow text-current/70">{label}</span>
    </div>
  );
}
