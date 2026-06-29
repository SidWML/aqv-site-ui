"use client";

import * as React from "react";
import { useInView, animate } from "motion/react";

/**
 * Counts a metric up from zero the first time it scrolls into view, preserving
 * any prefix/suffix in the source string ("156+", "<15 mK", "₹500Cr+", "99.9%").
 * Non-numeric values ("AI") render as-is.
 */
export default function Counter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const m = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const [display, setDisplay] = React.useState(() => (m ? m[1] + "0" + m[3] : value));

  React.useEffect(() => {
    if (!m || !inView) return;
    const prefix = m[1];
    const suffix = m[3];
    const target = parseFloat(m[2].replace(/,/g, ""));
    const decimals = (m[2].split(".")[1] || "").length;
    const grouped = m[2].includes(",");
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const n = grouped ? Number(v.toFixed(decimals)).toLocaleString() : v.toFixed(decimals);
        setDisplay(prefix + n + suffix);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {m ? display : value}
    </span>
  );
}
