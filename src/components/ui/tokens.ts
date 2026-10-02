// Shared class strings. Whole literals so Tailwind can see them.

export const CONTAINER = "relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10";
export const SECTION = "py-24 md:py-32 lg:py-40";

export const DISPLAY = "text-[clamp(3rem,7.4vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.035em]";
export const H2 = "text-[clamp(2.5rem,5.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em]";
export const H3 = "text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.025em]";
export const LEDE = "max-w-[54ch] text-[17px] leading-[1.65] md:text-[18px]";

export type Register = "night" | "paper" | "sea" | "belle";

export const REGISTER: Record<Register, string> = {
  night: "bg-night text-fg",
  paper: "bg-paper text-ink",
  sea: "bg-sea text-fg",
  belle: "bg-belle text-ink",
};

/** Secondary text that passes AA on each register. */
export const MUTED: Record<Register, string> = {
  night: "text-muted",
  paper: "text-ink-muted",
  sea: "text-fg/80",
  belle: "text-ink-muted",
};

export const RULE: Record<Register, string> = {
  night: "border-fg/15",
  paper: "border-ink/15",
  sea: "border-fg/20",
  belle: "border-ink/15",
};
