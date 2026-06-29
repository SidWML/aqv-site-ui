import { PathIcon } from "./dc";

type Stat = { value: string; label: string; icon: string };

export default function AQVStats({
  items = [],
  cols,
  theme = "dark",
}: {
  items?: Stat[];
  cols?: number;
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const tx = dark ? "text-cream" : "text-ink";
  const mut = dark ? "text-cream/60" : "text-ink/60";
  const line = dark ? "border-cream/[0.14]" : "border-ink/[0.14]";
  const c = cols || items.length || 4;
  return (
    <div className="grid gap-y-4.5 gap-x-1.5 font-display" style={{ gridTemplateColumns: `repeat(${c},1fr)` }}>
      {items.map((s, i) => (
        <div key={i} className={`flex flex-col gap-2.75 py-1.5 px-4.5 border-l ${line}`}>
          <PathIcon d={s.icon} size={24} sw={1.3} className="text-accent" />
          <div className={`t-stat-lg ${tx}`}>{s.value}</div>
          <div className={`t-caption ${mut}`}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
