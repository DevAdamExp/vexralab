/** Wordmark: "VexraLab" in Cranio, with a single lamp-yellow dot for the light on the desk. */
export function Logo({ tone = "fg", className = "" }: { tone?: "fg" | "ink"; className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-[0.12em] font-display text-[24px] leading-none tracking-[-0.01em] ${tone === "ink" ? "text-ink" : "text-fg"} ${className}`}>
      VexraLab
      <span aria-hidden="true" className="inline-block size-[0.22em] rounded-full bg-lamp" />
    </span>
  );
}
