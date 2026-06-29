type Step = { n: string; year: string; title: string; desc: string };

export default function AQVStepper({
  steps = [],
  theme = "dark",
}: {
  steps?: Step[];
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const tx = dark ? "text-cream" : "text-ink";
  const mut = dark ? "text-cream/[0.62]" : "text-ink/[0.65]";
  const acc = dark ? "text-gold" : "text-accent";
  const line = dark ? "bg-cream/20" : "bg-ink/20";
  return (
    <div className="relative grid font-display" style={{ gridTemplateColumns: `repeat(${steps.length || 4},1fr)` }}>
      <div className={`absolute top-3.25 left-[7%] right-[7%] h-px ${line}`} />
      {steps.map((r, i) => (
        <div key={i} className="relative px-4.5">
          <span className="relative z-[2] flex w-6.5 h-6.5 rounded-full bg-accent text-night text-[12px] font-bold items-center justify-center mb-5.5">{r.n}</span>
          <div className={`font-mono text-[11px] tracking-[0.16em] ${acc} mb-2.5`}>{r.year}</div>
          <div className={`t-title ${tx} mb-3`}>{r.title}</div>
          <div className={`t-body-sm ${mut} max-w-60`}>{r.desc}</div>
        </div>
      ))}
    </div>
  );
}
