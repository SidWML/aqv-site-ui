import { PathIcon } from "./dc";

type Card = { value: string; label: string; desc: string; icon: string };

export default function AQVMetricCards({
  cards = [],
  cols,
  theme = "dark",
}: {
  cards?: Card[];
  cols?: number;
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const tx = dark ? "text-cream" : "text-ink";
  const mut = dark ? "text-cream/[0.62]" : "text-ink/[0.62]";
  const bd = dark ? "border-cream/[0.14]" : "border-ink/[0.12]";
  const card = dark ? "bg-cream/[0.02]" : "bg-paper";
  const c = cols || cards.length || 4;
  return (
    <div className="grid gap-4.5 font-display" style={{ gridTemplateColumns: `repeat(${c},1fr)` }}>
      {cards.map((cc, i) => (
        <div key={i} className={`border ${bd} rounded-card p-7.5 ${card}`}>
          <PathIcon d={cc.icon} size={24} sw={1.3} className="text-accent mb-5.5" />
          <div className={`t-stat-lg ${tx} mb-3`}>{cc.value}</div>
          <div className={`text-[13px] font-semibold tracking-[0.04em] ${tx} mb-2`}>{cc.label}</div>
          <div className={`t-body-sm ${mut}`}>{cc.desc}</div>
        </div>
      ))}
    </div>
  );
}
