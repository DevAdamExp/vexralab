import s from "./cc.module.css";

/**
 * VexraLab mark: a V drawn from five data cells on a 5 x 3 grid. The outer cells
 * are raw data (faint), the middle pair is refined, and they converge on one
 * solid cell at the base: many sources, one source of truth.
 * Monochrome-safe: with mono, every cell uses currentColor.
 */
export function Mark({ size = 28, mono = false, className = "" }: { size?: number; mono?: boolean; className?: string }) {
  const cell = (x: number, y: number, o: number, accent = false, i = 0) => (
    <rect
      key={`${x}-${y}`}
      x={x * 10 + 1}
      y={y * 10 + 1}
      width={8}
      height={8}
      rx={1.6}
      fill={accent && !mono ? "var(--hi)" : "currentColor"}
      opacity={mono ? 1 : o}
      className={s.markCell}
      style={{ "--i": i } as React.CSSProperties}
    />
  );
  return (
    <svg viewBox="0 0 50 30" width={size * (5 / 3)} height={size} aria-hidden="true" className={className}>
      {cell(0, 0, 0.42, false, 0)}
      {cell(4, 0, 0.42, false, 0)}
      {cell(1, 1, 0.75, false, 1)}
      {cell(3, 1, 0.75, false, 1)}
      {cell(2, 2, 1, true, 2)}
    </svg>
  );
}

/** Mark + wordmark. "Vexra" in full ink, "Lab" a step quieter. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.logoLock} inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={19} />
      <span className="text-[21px] leading-none font-semibold tracking-[-0.045em]">
        Vexra<span className="font-medium text-white/60">Lab</span>
      </span>
    </span>
  );
}
