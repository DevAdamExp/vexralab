// Shared class strings. Whole literals so Tailwind can see them.

export const CONTAINER = "relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12";
/** Generous vertical rhythm: sections breathe. */
export const SECTION = "py-28 md:py-40 lg:py-48";

export const DISPLAY = "text-[clamp(3rem,7.4vw,7.25rem)] leading-[0.95]";
export const H2 = "text-[clamp(2.5rem,5.4vw,5rem)] leading-[1.02]";
export const H3 = "text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.08]";
export const LEDE = "max-w-[44ch] text-[17px] leading-[1.7] md:text-[18px]";

/** Every brand colour is a register a section can sit on. */
export type Register = "night" | "paper" | "sea" | "belle" | "sail" | "red";

export const REGISTER: Record<Register, string> = {
  night: "bg-void text-fg",
  paper: "bg-paper text-ink",
  belle: "bg-paper-2 text-ink",
  sea: "bg-sea text-fg",
  sail: "bg-sail text-fg",
  red: "bg-red text-fg",
};

/** Secondary text that passes AA on each register. */
export const MUTED: Record<Register, string> = {
  night: "text-muted",
  paper: "text-ink-muted",
  belle: "text-ink-muted",
  sea: "text-fg/80",
  sail: "text-fg/85",
  red: "text-fg/90",
};

export const RULE: Record<Register, string> = {
  night: "border-fg/15",
  paper: "border-ink/15",
  belle: "border-ink/15",
  sea: "border-fg/20",
  sail: "border-fg/25",
  red: "border-fg/25",
};
