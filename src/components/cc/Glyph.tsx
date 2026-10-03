import { tone } from "./parts";
import s from "./cc.module.css";

/*
 * Service glyphs: each service drawn as a pattern of cells on a 7 x 5 grid, in
 * the same cell shape as the logo and the same Blue Sail to teal ramp as the
 * tile grids. '#' is a lit cell, '.' an empty one.
 */
const PATTERNS: Record<string, string[]> = {
  // CRM: many leads narrowing into one pipeline.
  crm: ["#.#.#.#", ".#.#.#.", "..###..", "...#...", "...#..."],
  // ERP: modules stacked into one system.
  erp: ["#######", ".......", "####.##", ".......", "##.####"],
  // Warehouse: sources in columns feeding one store.
  warehouse: ["#.#.#.#", "#.#.#.#", ".......", "#######", "#######"],
  // Dashboards: bars rising.
  dashboards: ["......#", "....#.#", "..#.#.#", "#.#.#.#", "#######"],
  // Automation: a stepped flow, one hand-off to the next.
  automation: ["##.....", ".##....", "..##...", "...##..", "....###"],
  // Migration: a block moving from old to new.
  migration: ["##...##", "##...##", "##.#.##", "##...##", "##...##"],
  // Care: a steady loop.
  care: [".#####.", "#.....#", "#..#..#", "#.....#", ".#####."],
};

export function Glyph({ id, size = 7, label }: { id: string; size?: number; label?: string }) {
  const rows = PATTERNS[id] ?? PATTERNS.crm;
  const gap = Math.max(2, Math.round(size / 3));
  // Number the lit cells in reading order so they can light up in sequence.
  const order = new Map<string, number>();
  rows.forEach((row, r) => [...row].forEach((ch, c) => ch === "#" && order.set(`${r}-${c}`, order.size + 1)));
  return (
    <span role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} className={`${s.glyph} inline-grid`} style={{ gridTemplateColumns: `repeat(7, ${size}px)`, gap }}>
      {rows.flatMap((row, r) =>
        [...row].map((ch, c) => {
          const n = order.get(`${r}-${c}`);
          if (!n) return <i key={`${r}-${c}`} className={s.glyphOff} />;
          return <i key={`${r}-${c}`} className={s.glyphOn} style={{ "--c": tone(c + 1, 1, 7, false), "--n": n } as React.CSSProperties} />;
        })
      )}
    </span>
  );
}
