import React from "react";

/** Faint radial dot-grid used to texture dark sections. */
export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.04] ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
}

/**
 * Standard section shell: themed background + text colour, dot-grid on dark,
 * and a centred max-width inner. Set `bare` to skip the inner wrapper when a
 * section needs full-bleed control of its own layout.
 */
export default function SectionShell({
  theme = "dark",
  id,
  bg,
  className = "",
  innerClassName = "",
  bare = false,
  dots,
  children,
}: {
  theme?: "dark" | "light";
  id?: string;
  /** override the default surface (e.g. stone / sand) */
  bg?: string;
  className?: string;
  innerClassName?: string;
  bare?: boolean;
  /** force the dot-grid on/off; defaults to on for dark */
  dots?: boolean;
  children: React.ReactNode;
}) {
  const dark = theme === "dark";
  const showDots = dots ?? dark;
  const surface = bg ?? (dark ? "bg-night" : "bg-sand");
  return (
    <section
      id={id}
      data-theme={theme}
      className={`relative overflow-hidden ${surface} ${
        dark ? "text-cream" : "text-ink"
      } ${className}`}
    >
      {showDots && <DotGrid />}
      {bare ? (
        children
      ) : (
        <div className={`relative mx-auto max-w-[1600px] ${innerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
}
