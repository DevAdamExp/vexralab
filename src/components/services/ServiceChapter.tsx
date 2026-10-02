import { SERVICE_PAGE } from "@/data/services";
import type { SERVICES } from "@/data/site";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, LEDE, MUTED, REGISTER, RULE, SECTION, type Register } from "@/components/ui/tokens";
import { DELIVERABLE } from "./Deliverables";
import styles from "./services.module.css";

/** The surface each drawing sits on: one step off its section's register. */
const PLATE: Record<Register, string> = {
  night: "bg-night-2 ring-1 ring-fg/10",
  paper: "bg-belle ring-1 ring-ink/10",
  sea: "bg-sea-2/55 ring-1 ring-fg/15",
  belle: "bg-paper ring-1 ring-ink/10",
};

const LIGHT: Record<Register, boolean> = { night: false, paper: true, sea: false, belle: true };

/**
 * One service: the 2 AM thought, the feeling after it, then the work.
 * Details and drawing swap sides from chapter to chapter.
 */
export function ServiceChapter({ service, register, flip }: { service: (typeof SERVICES)[number]; register: Register; flip: boolean }) {
  const { time, thought, timeline, price } = SERVICE_PAGE[service.id];
  const { Drawing, caption } = DELIVERABLE[service.id];
  const muted = MUTED[register];

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className={`${REGISTER[register]} ${SECTION} ${LIGHT[register] ? styles.inkFocus : ""} overflow-x-clip`}
    >
      <div className={CONTAINER}>
        <Seen>
          <p className={`label fade flex items-center gap-3 ${muted}`}>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
            <span className="tabular">{time}</span>
          </p>
          <p className="voice rise mt-4 max-w-[30ch] text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.18]" style={i(1)}>
            &ldquo;{thought}&rdquo;
          </p>
        </Seen>

        <ChapterHead id={service.id} label={service.name} register={register} className="mt-14 md:mt-20" h2ClassName="max-w-[16ch]">
          <span className="sr-only">{service.name}: </span>
          {service.feeling}
        </ChapterHead>

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-x-10">
          <div className={`lg:col-span-5 lg:row-start-1 ${flip ? "lg:col-start-8" : ""}`}>
            <p className={LEDE}>{service.line}</p>

            <p className={`label mt-12 ${muted}`}>What you get</p>
            <Seen as="ul" className="mt-4">
              {service.includes.map((item, k) => (
                <li key={item} className={`draw fade flex items-baseline gap-5 py-4 text-[17px] last:border-b ${RULE[register]}`} style={i(k)}>
                  <span className={`label tabular text-[11px] ${muted}`}>{String(k + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </Seen>

            <dl className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <dt className={`label text-[11px] ${muted}`}>Typical timeline</dt>
                <dd className="tabular mt-2 text-[20px] font-semibold tracking-[-0.02em]">{timeline}</dd>
              </div>
              <div>
                <dt className={`label text-[11px] ${muted}`}>Starting from</dt>
                <dd className="tabular mt-2 text-[20px] font-semibold tracking-[-0.02em]">{price}</dd>
              </div>
            </dl>

            <LiquidButton href="/contact" variant={LIGHT[register] ? "ink" : "lamp"} className="mt-10">
              Start with this<span className="sr-only">: {service.name}</span> <Arrow />
            </LiquidButton>
          </div>

          <Seen
            as="figure"
            threshold={0.2}
            className={`min-w-0 lg:sticky lg:top-28 lg:col-span-7 lg:row-start-1 lg:self-start ${flip ? "lg:col-start-1" : "lg:col-start-6"}`}
          >
            <div className={`wipe rounded-[22px] p-4 sm:p-6 md:p-8 ${PLATE[register]}`}>
              <Drawing />
            </div>
            <figcaption className={`label fade mt-4 text-[11px] leading-relaxed ${muted}`} style={i(3)}>
              {caption}
            </figcaption>
          </Seen>
        </div>
      </div>
    </section>
  );
}
