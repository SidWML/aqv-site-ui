"use client";

import { useState } from "react";
import { Placeholder } from "./dc";

type Panel = { num: string; title: string; desc: string; meta: string; img: string };

export default function AQVPanels({
  panels = [],
  height = 440,
}: {
  panels?: Panel[];
  height?: number;
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-3.5 font-sans" style={{ height: `${height}px` }}>
      {panels.map((p, i) => {
        const on = i === active;
        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            className={`relative h-full min-w-0 overflow-hidden rounded-card border cursor-pointer ${
              on ? "border-accent/50" : "border-cream/12"
            }`}
            style={{
              flex: on ? "3.2" : "1",
              transition: "flex .55s cubic-bezier(.22,1,.36,1),border-color .4s ease",
            }}
          >
            <div className="absolute inset-0 opacity-50">
              <Placeholder label={p.img} style={{ width: "100%", height: "100%" }} />
            </div>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg,color-mix(in srgb,var(--color-night) 25%,transparent),color-mix(in srgb,var(--color-night) 94%,transparent))" }}
            />
            <div className="relative flex h-full flex-col justify-between p-7 text-cream">
              <span className="font-sans text-[1.3rem] text-accent">{p.num}</span>
              <div>
                <h3 className="mb-3.5 whitespace-nowrap t-title-lg">{p.title}</h3>
                <div
                  className="overflow-hidden transition-all duration-500 ease-[ease]"
                  style={{ maxHeight: on ? "160px" : "0px", opacity: on ? 1 : 0 }}
                >
                  <p className="mb-4.5 max-w-70 t-body-sm text-cream/[0.72]">{p.desc}</p>
                  <div className="font-mono text-[11px] tracking-[0.14em] text-gold">{p.meta}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
