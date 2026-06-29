import React from "react";

type Variant = "display" | "display-2" | "h2" | "h3" | "h4";

/**
 * Display heading bound to the type scale in globals.css. Pick a `variant`
 * (geometry) and the semantic tag with `as`; colour/margins via `className`.
 *   <Heading as="h2" variant="h2" className="text-ink mb-8">…</Heading>
 */
export function Heading({
  as: Tag = "h2",
  variant = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return <Tag className={`t-${variant} ${className}`}>{children}</Tag>;
}

/** Accent-coloured run inside a heading — the AQV signature flourish.
 *  Defaults to the quantum (iris) accent; `gold` is the sparing warm option. */
export function Accent({
  tone = "iris",
  children,
}: {
  tone?: "iris" | "gold";
  children: React.ReactNode;
}) {
  return (
    <span className={tone === "gold" ? "text-gold" : "text-accent"}>
      {children}
    </span>
  );
}
