import React from "react";
import { ArrowUR } from "../dc";

/**
 * Underlined call-to-action link with a trailing ↗ — the design's primary
 * inline link ("EXPLORE THE ECOSYSTEM ↗"). Border + accent adapt to surface.
 */
export default function ArrowLink({
  href,
  label,
  accent = "iris",
  theme = "dark",
  gap = 50,
  className = "",
}: {
  href: string;
  label: string;
  /** quantum iris by default; gold is the sparing warm option */
  accent?: "iris" | "gold";
  theme?: "dark" | "light";
  /** spacing between label and arrow, px */
  gap?: number;
  className?: string;
}) {
  const dark = theme === "dark";
  return (
    <a
      href={href}
      style={{ gap: `${gap}px` }}
      className={`inline-flex items-center pb-3 no-underline border-b ${
        dark ? "text-cream border-cream/25" : "text-ink border-ink/25"
      } ${className}`}
    >
      <span className="t-eyebrow">{label}</span>
      <ArrowUR size={15} stroke={accent === "gold" ? "#C9A86A" : "#8B92E8"} sw={1.5} />
    </a>
  );
}
