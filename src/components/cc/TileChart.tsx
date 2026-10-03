import { tone } from "./parts";
import s from "./cc.module.css";

const ROWS = 10;

/**
 * A bar chart built from the brand's tiles: each month is a column of cells that
 * fills from the bottom when the section scrolls into view, coloured on the same
 * Blue Sail to teal ramp as every tile grid. Sample values.
 */
export function TileChart({ values, label }: { values: number[]; label: string }) {
  return (
    <figure aria-label={label} className="m-0">
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))` }}>
        {values.map((v, c) => {
          const filled = Math.round(v / 10);
          return (
            <div key={c} className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${ROWS}, 9px)` }}>
              {Array.from({ length: ROWS }, (_, r) => {
                const fromBottom = ROWS - 1 - r;
                const on = fromBottom < filled;
                const top = fromBottom === filled - 1;
                return (
                  <i
                    key={r}
                    className={on ? `${s.cell} ${top && c === values.length - 1 ? s.cellLive : ""}` : s.cellEmpty}
                    style={
                      on
                        ? ({ "--c": tone(c + 1, 1, values.length, false), "--o": 0.35 + (0.65 * (fromBottom + 1)) / filled, "--d": c * 45 + fromBottom * 35 } as React.CSSProperties)
                        : undefined
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <figcaption className={`${s.mono} mt-3 flex justify-between text-[10px] text-white/50`}>
        <span>Jan</span>
        <span>Jun</span>
        <span>Dec</span>
      </figcaption>
    </figure>
  );
}
