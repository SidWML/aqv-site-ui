"use client";

import * as React from "react";
import { motion } from "motion/react";

/**
 * Word-by-word reveal — each word rises + sharpens (blur→0) in sequence as the
 * line scrolls into view. No overflow masks, so display glyphs are never clipped.
 * Use one per line for a staggered headline; cascade lines with `delay`.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.07,
  amount = 0.4,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="inline-block" aria-hidden>
            <motion.span
              className="inline-block will-change-transform"
              initial={{ opacity: 0, y: "0.42em", filter: "blur(7px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount }}
              transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </span>
  );
}
