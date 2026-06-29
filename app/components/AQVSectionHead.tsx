export default function AQVSectionHead({
  num,
  eyebrow,
  title,
  titleItalic,
  theme = "dark",
}: {
  num: string;
  eyebrow: string;
  title: string;
  titleItalic?: string;
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const acc = dark ? "text-gold" : "text-accent";
  const tx = dark ? "text-cream" : "text-ink";
  const line2 = dark ? "bg-cream/40" : "bg-ink/30";
  const eye = dark ? "text-cream/70" : "text-ink/60";
  return (
    <div className="font-display">
      <div className="flex items-center gap-3.5 mb-4.5">
        <span className={`font-display text-[20px] ${acc}`}>{num}</span>
        <span className={`w-7.5 h-px ${line2}`} />
        <span className={`text-[11px] tracking-[0.28em] font-semibold ${eye}`}>{eyebrow}</span>
      </div>
      <h2 className={`t-h2 ${tx} max-w-[20ch]`}>
        {title} <span className={acc}>{titleItalic}</span>
      </h2>
    </div>
  );
}
