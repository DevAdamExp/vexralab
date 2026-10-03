import s from "./cc.module.css";

/*
 * Hero art: data packets from many sources travel along the grid's pipelines
 * and merge into one node, the brand idea ("many sources, one source of truth").
 * Drawn on the same 10 x 8 grid as the hero tiles (115.2 x 75 per cell in a
 * 1152 x 600 viewBox). SMIL motion; hidden under prefers-reduced-motion.
 */
const X = (c: number) => +(c * 115.2).toFixed(1);
const Y = (r: number) => r * 75;
const NODE = { x: X(8), y: Y(4) };

const PIPES: { d: string; color: string; dur: number; begin: number }[] = [
  { d: `M${X(10)},${Y(1)} H${X(8)} V${Y(4)}`, color: "var(--hi)", dur: 4.2, begin: 0 },
  { d: `M${X(8)},${Y(0)} V${Y(4)}`, color: "var(--fg)", dur: 3.4, begin: 1.1 },
  { d: `M${X(10)},${Y(6)} H${X(9)} V${Y(4)} H${X(8)}`, color: "var(--coral)", dur: 4.6, begin: 0.6 },
  { d: `M${X(6)},${Y(8)} V${Y(5)} H${X(8)} V${Y(4)}`, color: "var(--sail-hi)", dur: 4.8, begin: 2.0 },
  { d: `M${X(10)},${Y(3)} H${X(9)} V${Y(4)} H${X(8)}`, color: "var(--hi)", dur: 3.6, begin: 2.7 },
  { d: `M${X(6)},${Y(0)} V${Y(2)} H${X(7)} V${Y(4)} H${X(8)}`, color: "var(--coral)", dur: 5.2, begin: 3.3 },
];

export function DataFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1152 600" preserveAspectRatio="none" aria-hidden="true" className={`${s.flow} ${className}`}>
      {PIPES.map((p, k) => (
        <path key={`l${k}`} d={p.d} fill="none" stroke={p.color} strokeOpacity={0.16} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      ))}
      {PIPES.flatMap((p, k) =>
        [0, 0.5].map((off) => (
          <rect key={`p${k}-${off}`} x={-4} y={-4} width={8} height={8} rx={1.5} fill={p.color} opacity={0}>
            <animateMotion dur={`${p.dur}s`} begin={`${p.begin + off * p.dur}s`} repeatCount="indefinite" path={p.d} calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.45 0 0.2 1" />
            <animate attributeName="opacity" dur={`${p.dur}s`} begin={`${p.begin + off * p.dur}s`} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1" />
          </rect>
        ))
      )}
      {/* The node: where everything becomes one record. */}
      <g transform={`translate(${NODE.x} ${NODE.y})`}>
        <rect x={-22} y={-22} width={44} height={44} rx={6} fill="none" stroke="var(--hi)" strokeOpacity={0.5} className={s.nodeRing} vectorEffect="non-scaling-stroke" />
        <rect x={-9} y={-9} width={18} height={18} rx={3} fill="var(--hi)" className={s.nodeCore} />
      </g>
    </svg>
  );
}
