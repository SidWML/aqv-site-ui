import React from "react";

const dotsOverlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "radial-gradient(circle,rgba(245,242,236,0.5) 0.5px,transparent 0.5px)",
  backgroundSize: "44px 44px",
  opacity: 0.04,
};

/** Standard page section shell (dark = ink + dotted grid, light = parchment). */
export function Section({
  theme = "dark",
  bg,
  pad = "clamp(90px,9vw,140px) 40px",
  id,
  children,
}: {
  theme?: "dark" | "light";
  bg?: string;
  pad?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const dark = theme === "dark";
  return (
    <section
      id={id}
      data-theme={theme}
      style={{
        position: "relative",
        background: bg || (dark ? "#0A0E1A" : "#F4F1EA"),
        color: dark ? "#F5F2EC" : "#1A1A1A",
        padding: pad,
        overflow: "hidden",
      }}
    >
      {dark && <div style={dotsOverlay} />}
      <div style={{ position: "relative", maxWidth: "1600px", margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

/** Scroll-reveal wrapper — translates up into place once `aqv-in` is applied. */
export function Reveal({
  delay = 0,
  style,
  children,
}: {
  delay?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      data-reveal=""
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `all .9s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
