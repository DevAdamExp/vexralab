import type { ReactNode } from "react";
import s from "./cc.module.css";

/** The 100px spacer band between sections: full-width rules, dashed column edges, corner squares. */
export function Band({ children }: { children?: ReactNode }) {
  return (
    <div className={s.band} data-r aria-hidden={children ? undefined : true}>
      <div className={s.bandCol}>
        <span className={s.sq} style={{ left: -9, top: -9 }} />
        <span className={s.sq} style={{ right: -9, top: -9 }} />
        <span className={s.sq} style={{ left: -9, bottom: -9 }} />
        <span className={s.sq} style={{ right: -9, bottom: -9 }} />
        {children}
      </div>
    </div>
  );
}

/** "// title." section heading in Geist Mono, 24px. */
export function Slash({ children, as = "h2", className = "" }: { children: ReactNode; as?: "h2" | "p"; className?: string }) {
  const T = as;
  return (
    <T className={`${s.slash} ${className}`}>
      <i aria-hidden="true">{"//"}</i>
      {children}
    </T>
  );
}

/**
 * A tile's colour from its position: share of Deep Sea teal at the tile's centre,
 * the rest Blue Sail. Hero grids stay mostly teal; the others sweep the full ramp.
 */
export const tone = (c: number, span: number, cols: number, hero: boolean) => {
  const t = (c - 1 + span / 2) / cols;
  const teal = Math.round(hero ? 45 + t * 55 : t * 100);
  return `color-mix(in oklab, var(--hi) ${teal}%, var(--sail-hi))`;
};

/** A dashed cell grid with grain tiles placed on it. tiles: [col, span, row]. */
export function Tiles({
  cols,
  rows,
  tiles,
  mono = false,
  rowH = 75,
  flip = false,
  className = "",
}: {
  cols: number;
  rows: number;
  tiles: [number, number, number][];
  mono?: boolean;
  rowH?: number;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${rows}, ${rowH}px)` }}
    >
      {Array.from({ length: cols * rows }, (_, k) => (
        <i key={`c${k}`} className={s.cellDash} style={{ gridColumn: (k % cols) + 1, gridRow: Math.floor(k / cols) + 1 }} />
      ))}
      {tiles.map(([c, span, r], k) => (
        <span
          key={k}
          className={`${mono ? s.tileMono : s.tile} ${flip && k % 3 === 1 ? s.tileFlip : ""}`}
          style={{ gridColumn: `${c} / span ${span}`, gridRow: r, margin: 12, animationDelay: `${k * 60}ms`, "--k": k, "--c": tone(c, span, cols, !mono) } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
