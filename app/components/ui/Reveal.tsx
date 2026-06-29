"use client";

import * as React from "react";
import { motion } from "motion/react";

/**
 * Scroll reveal powered by Framer Motion. Variants:
 *  • `fade`  — opacity + rise (default, body/content)
 *  • `wipe`  — clip-path wipe up + rise (headings). End state uses a *negative*
 *              inset so tall display glyphs are never clipped.
 *  • `scale` — scale + rise (media / cards)
 * `as` picks the element (`h2`,`p`,`a`,…); `delay` staggers siblings.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

const VARIANTS = {
  fade: { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } },
  wipe: {
    hidden: { opacity: 1, y: 14, clipPath: "inset(0% 0% 100% 0%)" },
    show: { opacity: 1, y: 0, clipPath: "inset(-30% -4% -30% 0%)" },
  },
  scale: { hidden: { opacity: 0, scale: 0.94, y: 18 }, show: { opacity: 1, scale: 1, y: 0 } },
} as const;

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  variant?: keyof typeof VARIANTS;
  className?: string;
  children?: React.ReactNode;
} & Record<string, unknown>;

export default function Reveal({
  as = "div",
  delay = 0,
  duration,
  variant = "fade",
  className = "",
  children,
  ...rest
}: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M: any = (motion as any)[as] ?? motion.div;
  const v = VARIANTS[variant] ?? VARIANTS.fade;
  return (
    <M
      className={className}
      initial={v.hidden}
      whileInView={v.show}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration ?? (variant === "wipe" ? 0.9 : 0.75), delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  );
}
