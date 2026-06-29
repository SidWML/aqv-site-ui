import React, { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook. Attach the returned ref to a page root; every descendant
 * carrying `data-reveal` gets the `aqv-in` class once it scrolls into view, with
 * a 3.5s fallback so nothing stays hidden. Ports the per-page IntersectionObserver.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aqv-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    const t = setTimeout(
      () => root.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("aqv-in")),
      3500
    );
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return ref;
}

/**
 * Convert an inline CSS declaration string (as authored in the source
 * `.dc.html` design) into a React style object, camelCasing hyphenated
 * properties. Lets us port the design's inline styles verbatim.
 */
export function s(css: string): React.CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of css.split(";")) {
    const i = decl.indexOf(":");
    if (i === -1) continue;
    const key = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!key) continue;
    out[key.replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase())] = val;
  }
  return out as React.CSSProperties;
}

/** Labelled placeholder block (ports the design's shared `Placeholder` component). */
export function Placeholder({
  label,
  style,
}: {
  label: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "120px",
        background:
          "linear-gradient(135deg,#11162a 0%,#1b2140 55%,#141a30 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "inherit",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg,rgba(245,242,236,0.035) 0 1px,transparent 1px 16px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 90% at 70% 20%,rgba(139,146,232,0.12),transparent 60%)",
        }}
      />
      <span
        style={{
          fontFamily: "'IBM Plex Mono',ui-monospace,monospace",
          fontSize: "10.5px",
          lineHeight: 1.6,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(201,168,106,0.72)",
          position: "relative",
          textAlign: "center",
          padding: "0 18px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* Icons render with `stroke="currentColor"`, so colour is driven by a Tailwind
   text utility on `className` (e.g. `className="text-accent"`). An explicit
   `stroke` (hex or `var(--color-*)`) still works — it sets `color` inline — so
   existing call sites keep working while we migrate to classes. */

/** A stroked single-path icon on a 24×24 grid (used for the data-driven icons). */
export const PathIcon = ({
  d,
  size,
  stroke,
  sw = 1.3,
  vb = "0 0 24 24",
  className = "",
  style,
}: {
  d: string;
  size: number;
  stroke?: string;
  sw?: number | string;
  vb?: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox={vb}
    className={className}
    style={{ fill: "none", strokeWidth: sw, ...(stroke ? { color: stroke } : null), ...style }}
  >
    <path d={d} stroke="currentColor" />
  </svg>
);

/** Diagonal "open / external" arrow (↗). */
export const ArrowUR = ({
  size = 15,
  stroke,
  sw = 1.5,
  className = "",
}: {
  size?: number;
  stroke?: string;
  sw?: number | string;
  className?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={stroke ? { color: stroke } : undefined}>
    <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth={sw} fill="none" />
  </svg>
);

/** Horizontal "continue" arrow (→). */
export const ArrowR = ({
  size = 14,
  stroke,
  sw = 1.4,
  className = "",
}: {
  size?: number;
  stroke?: string;
  sw?: number | string;
  className?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={stroke ? { color: stroke } : undefined}>
    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth={sw} fill="none" />
  </svg>
);

/** Location pin. */
export const Pin = ({
  size = 22,
  stroke,
  sw = 1.3,
  r = 2.4,
  className = "",
  style,
}: {
  size?: number;
  stroke?: string;
  sw?: number | string;
  r?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={stroke ? { color: stroke, ...style } : style}>
    <path
      d="M12 2 C8 2 5 5 5 9 c0 5 7 13 7 13 s7-8 7-13 c0-4-3-7-7-7z"
      stroke="currentColor"
      strokeWidth={sw}
      fill="none"
    />
    <circle cx="12" cy="9" r={r} fill="currentColor" />
  </svg>
);
