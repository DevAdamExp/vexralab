/** Wordmark: VEXRA set wide in Betha, with "Lab" signed underneath in Cranio's oblique. */
export function Logo({ tone = "fg", className = "" }: { tone?: "fg" | "ink"; className?: string }) {
  return (
    <span className={`relative inline-flex items-end pb-[0.35em] ${tone === "ink" ? "text-ink" : "text-fg"} ${className}`}>
      <span className="hero-type text-[22px] tracking-[0.32em]">VEXRA</span>
      <span className="voice absolute right-[-0.55em] bottom-[-0.05em] text-[18px] leading-none text-lamp">Lab</span>
    </span>
  );
}
