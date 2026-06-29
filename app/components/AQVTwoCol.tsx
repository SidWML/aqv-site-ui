import { Placeholder, ArrowUR } from "./dc";

export default function AQVTwoCol({
  num,
  eyebrow,
  title,
  titleItalic,
  paras = [],
  bullets = [],
  img = "image",
  imgHeight = 480,
  reverse = false,
  ctaLabel,
  ctaHref = "#",
  theme = "light",
}: {
  num: string;
  eyebrow: string;
  title: string;
  titleItalic?: string;
  paras?: string[];
  bullets?: string[];
  img?: string;
  imgHeight?: number;
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const tx = dark ? "text-cream" : "text-ink";
  const mut = dark ? "text-cream/[0.68]" : "text-ink/70";
  const acc = dark ? "text-gold" : "text-accent";
  const eye = dark ? "text-cream/70" : "text-ink/60";
  const line2 = dark ? "bg-cream/25" : "bg-ink/25";
  const border2 = dark ? "border-cream/25" : "border-ink/25";
  return (
    <div className="grid grid-cols-2 items-center gap-16 font-sans">
      <div className={reverse ? "order-2" : "order-1"}>
        <div className="mb-5.5 flex items-center gap-3.5">
          <span className={`font-sans text-[20px] ${acc}`}>{num}</span>
          <span className={`h-px w-7.5 ${line2}`} />
          <span className={`text-[11px] font-semibold tracking-[0.28em] ${eye}`}>{eyebrow}</span>
        </div>
        <h2 className={`mb-6.5 t-h2 ${tx}`}>
          {title} <span className={acc}>{titleItalic}</span>
        </h2>
        {paras.map((p, i) => (
          <p key={i} className={`mb-4 max-w-110 t-body ${mut}`}>{p}</p>
        ))}
        {bullets.length > 0 && (
          <div className="mt-6 flex flex-col gap-3">
            {bullets.map((b, i) => (
              <div key={i} className={`flex items-center gap-3 t-body ${tx}`}>
                <span className={`font-semibold ${acc}`}>+</span>
                {b}
              </div>
            ))}
          </div>
        )}
        {ctaLabel && (
          <a href={ctaHref} className={`mt-8.5 inline-flex items-center gap-11.5 border-b pb-2.75 no-underline ${tx} ${border2}`}>
            <span className="text-[12px] font-semibold tracking-[0.16em]">{ctaLabel}</span>
            <ArrowUR size={15} sw={1.5} className={acc} />
          </a>
        )}
      </div>
      <div
        className={`overflow-hidden rounded-[16px] ${reverse ? "order-1" : "order-2"}`}
        style={{ height: `${imgHeight}px`, boxShadow: "0 30px 70px color-mix(in srgb,var(--color-night) 18%,transparent)" }}
      >
        <Placeholder label={img} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}
