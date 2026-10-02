import type { ReactNode } from "react";
import { Seen, i } from "./Seen";
import { H2, MUTED, type Register } from "./tokens";

const TAG: Record<Register, string> = {
  night: "bg-lamp text-ink",
  paper: "bg-ink text-fg",
  sea: "bg-lamp text-ink",
  belle: "bg-ink text-fg",
};

/**
 * A chapter's opening: a number tag that wipes open, a plain label, then the headline.
 * `num` only when the chapters really are a sequence; omit it otherwise.
 */
export function ChapterHead({
  id,
  num,
  label,
  register,
  children,
  className = "",
  h2ClassName = "",
  as = "h2",
}: {
  id: string;
  num?: string;
  label: string;
  register: Register;
  children: ReactNode;
  className?: string;
  h2ClassName?: string;
  as?: "h1" | "h2";
}) {
  const H = as;
  return (
    <Seen className={className} threshold={0.5}>
      <p className={`label flex items-center gap-3 ${MUTED[register]}`}>
        {num && <span className={`wipe inline-grid h-7 min-w-9 place-items-center rounded-full px-2.5 tracking-[0.08em] ${TAG[register]}`}>{num}</span>}
        <span className="fade" style={i(1)}>
          {label}
        </span>
      </p>
      <H id={`${id}-title`} className={`rise mt-5 md:mt-7 ${H2} ${h2ClassName}`} style={i(1)}>
        {children}
      </H>
    </Seen>
  );
}
