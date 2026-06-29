import { Placeholder } from "./dc";

export default function AQVPageHero({
  num,
  eyebrow,
  title,
  titleItalic,
  subtitle,
  img,
}: {
  num: string;
  eyebrow: string;
  title: string;
  titleItalic?: string;
  subtitle: string;
  img?: string;
}) {
  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden bg-night font-sans text-cream pt-32 px-5 pb-16 sm:px-8 sm:pt-40 lg:pt-50 lg:px-10 lg:pb-30"
    >
      <div
        className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,rgba(245,242,236,0.5)_0.5px,transparent_0.5px)] bg-[length:44px_44px]"
      />
      {img ? (
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-full opacity-80">
          <Placeholder label={img} style={{ width: "100%", height: "100%" }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg,var(--color-night) 10%,rgba(10,14,26,0.55) 42%,rgba(10,14,26,0.15) 100%)",
            }}
          />
        </div>
      ) : (
        <div className="absolute top-[12%] right-[6%] w-90 h-90 opacity-55 pointer-events-none aqv-hero-deco hidden lg:block">
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <g style={{ transformOrigin: "180px 180px", animation: "aqvSpin 70s linear infinite" }}>
              <ellipse cx="180" cy="180" rx="150" ry="80" className="stroke-gold/25" strokeWidth="1" fill="none" />
              <circle cx="330" cy="180" r="3" className="fill-gold" />
            </g>
            <g style={{ transformOrigin: "180px 180px", animation: "aqvSpin 50s linear infinite reverse" }}>
              <ellipse cx="180" cy="180" rx="80" ry="150" className="stroke-accent/28" strokeWidth="1" fill="none" />
              <circle cx="180" cy="30" r="3" className="fill-accent" />
            </g>
            <circle cx="180" cy="180" r="5" className="fill-gold" style={{ filter: "drop-shadow(0 0 10px var(--color-gold))" }} />
          </svg>
        </div>
      )}
      <div className="relative z-[2] max-w-[1600px] mx-auto">
        <div className="aqv-hu flex items-center gap-4 mb-7.5" style={{ animationDelay: ".05s" }}>
          <span className="t-eyebrow-num text-accent">{num}</span>
          <span className="w-10 h-px bg-accent/50" />
          <span className="font-mono text-[12px] tracking-[0.3em] text-cream/70">{eyebrow}</span>
        </div>
        <h1 className="aqv-hu font-sans font-medium text-[clamp(3rem,5.4vw,5.2rem)] leading-none tracking-[-0.02em] max-w-[15ch] mb-7.5" style={{ animationDelay: ".15s" }}>
          {title} <span className="text-accent">{titleItalic}</span>
        </h1>
        <p className="aqv-hu t-lead text-cream/70 max-w-140" style={{ animationDelay: ".28s" }}>{subtitle}</p>
      </div>
    </section>
  );
}
