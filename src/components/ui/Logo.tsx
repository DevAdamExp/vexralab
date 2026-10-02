/** The drop: one lamp-lit droplet with a curl of light. Wordmark set in the display face. */
export function Logo({ tone = "fg", className = "" }: { tone?: "fg" | "ink"; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[21px] font-bold tracking-[-0.04em] ${tone === "ink" ? "text-ink" : "text-fg"} ${className}`}>
      <svg width="20" height="25" viewBox="0 0 30 36" aria-hidden="true" className="shrink-0">
        <path d="M15 2C15 2 3 16 3 23a12 12 0 0 0 24 0C27 16 15 2 15 2Z" fill="var(--color-lamp)" />
        <path d="M9 23a6 6 0 0 0 6 6" stroke="var(--color-ink)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </svg>
      VexraLab
    </span>
  );
}
