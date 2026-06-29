import { Placeholder } from "./dc";

type Tile = { num: string; title: string; desc: string; img: string };

export default function AQVTiles({
  tiles = [],
  cols,
  height = 320,
  theme = "dark",
}: {
  tiles?: Tile[];
  cols?: number;
  height?: number;
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const bd = dark ? "border-cream/[0.12]" : "border-ink/[0.12]";
  const c = cols || tiles.length || 3;
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${c},1fr)` }}>
      {tiles.map((t, i) => (
        <div key={i} className={`relative rounded-card overflow-hidden border ${bd}`} style={{ height: `${height}px` }}>
          <div className="absolute inset-0 opacity-55">
            <Placeholder label={t.img} style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgb(from var(--color-night) r g b / 0.25),rgb(from var(--color-night) r g b / 0.92))",
            }}
          />
          <div className="relative h-full p-6.5 flex flex-col justify-between font-display text-cream">
            <span className="font-display text-[1.4rem] text-gold">{t.num}</span>
            <div>
              <div className="t-title-sm mb-2.5">{t.title}</div>
              <div className="t-caption text-cream/70">{t.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
