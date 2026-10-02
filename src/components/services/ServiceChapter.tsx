import { SERVICE_PAGE } from "@/data/services";
import { SERVICES, type ServiceId } from "@/data/site";
import { Blob } from "@/components/ui/Blob";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";
import { DELIVERABLE } from "./Deliverables";
import styles from "./services.module.css";

type Look = {
  register: string;
  muted: string;
  chip: string;
  tag: string;
  slab: string;
  mark: "lamp" | "red" | "sail" | "ink" | "fg";
  blob: "sea" | "sail" | "red" | "lamp";
  button: "lamp" | "ink";
  light: boolean;
};

/**
 * Each service wears its own colour: the register or the slab under its plate,
 * its blob, its mark and its counter. Registers run night, sea, belle, lamp, night,
 * so no two neighbours match.
 */
const LOOK: Record<ServiceId, Look> = {
  brand: { register: "bg-void text-fg", muted: "text-muted", chip: "border-fg/20", tag: "bg-red text-fg", slab: "bg-red", mark: "red", blob: "red", button: "lamp", light: false },
  websites: { register: "bg-sea text-fg", muted: "text-fg/80", chip: "border-fg/25", tag: "bg-fg text-sea", slab: "bg-void", mark: "lamp", blob: "sea", button: "lamp", light: false },
  apps: { register: "bg-paper-2 text-ink", muted: "text-ink-muted", chip: "border-ink/20", tag: "bg-sail text-fg", slab: "bg-sail", mark: "sail", blob: "sail", button: "ink", light: true },
  automation: { register: "bg-lamp text-ink", muted: "text-ink/80", chip: "border-ink/25", tag: "bg-ink text-lamp", slab: "bg-paper", mark: "ink", blob: "lamp", button: "ink", light: true },
  // ponytail: Blob has no void tone, so Care pours sea (🌱 growth). Add a void tone to Blob if the owner wants it exact.
  care: { register: "bg-void text-fg", muted: "text-muted", chip: "border-fg/20", tag: "bg-fg text-ink", slab: "bg-night-3", mark: "lamp", blob: "sea", button: "lamp", light: false },
};

/** Splits the feeling so its last word carries the mark. */
function lastWord(s: string) {
  const k = s.lastIndexOf(" ");
  return [s.slice(0, k + 1), s.slice(k + 1)];
}

/** One service: the 2 AM thought, the feeling, one line, what you get, the plate. */
export function ServiceChapter({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const { time, thought, get, terms } = SERVICE_PAGE[service.id];
  const { Drawing, caption } = DELIVERABLE[service.id];
  const look = LOOK[service.id];
  const flip = index % 2 === 1;
  const [head, tail] = lastWord(service.feeling);

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className={`relative scroll-mt-20 overflow-x-clip ${look.register} ${look.light ? styles.inkFocus : ""}`}
    >
      <div className={`${CONTAINER} py-28 md:py-40`}>
        {/* Heading row: words on one side, the liquid form poured in from the other edge. */}
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <Seen className={`relative z-10 lg:col-span-7 ${flip ? "lg:col-start-6" : ""}`}>
            <p className="label fade flex flex-wrap items-center gap-3">
              <span className={`tabular inline-grid h-7 place-items-center rounded-full px-3 tracking-[0.12em] ${look.tag}`}>
                0{index + 1} / 0{SERVICES.length}
              </span>
              <span className={look.muted}>{service.name}</span>
            </p>
            <p className={`voice rise mt-8 text-[clamp(1.2rem,1.8vw,1.5rem)] leading-snug ${look.muted}`} style={i(1)}>
              <span className="label not-italic mr-3 align-middle tabular">{time}</span>
              &ldquo;{thought}&rdquo;
            </p>
            <h2 id={`${service.id}-title`} className="rise mt-6 max-w-[13ch] text-[clamp(2.75rem,6.4vw,6rem)] leading-[0.98]" style={i(2)}>
              <span className="sr-only">{service.name}: </span>
              {head}
              <Mark tone={look.mark}>{tail}</Mark>
            </h2>
          </Seen>
          <Blob
            tone={look.blob}
            side={flip ? "left" : "right"}
            emoji={service.emoji}
            className={`w-[72%] max-w-[480px] lg:absolute lg:top-1/2 lg:w-[38%] lg:-translate-y-1/2 ${flip ? "-ml-5 sm:-ml-8 lg:ml-0 lg:left-[calc(50%-50vw)]" : "ml-auto -mr-5 sm:-mr-8 lg:mr-0 lg:right-[calc(50%-50vw)]"}`}
          />
        </div>

        {/* Detail row: one sentence, what you get, one CTA; the plate opposite. */}
        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-x-12">
          <Seen className={`lg:col-span-4 lg:row-start-1 lg:self-center ${flip ? "lg:col-start-9" : ""}`}>
            <p className={`rise max-w-[34ch] text-[18px] leading-[1.6] ${look.muted}`}>{service.line}</p>
            <ul aria-label="What you get" className="mt-8 flex flex-wrap gap-2">
              {get.map(([emoji, name], k) => (
                <li key={name} className={`fade inline-flex min-h-10 items-center gap-2 rounded-full border px-4 font-ui text-[13px] ${look.chip}`} style={i(k + 1)}>
                  <span aria-hidden="true">{emoji}</span>
                  {name}
                </li>
              ))}
            </ul>
            <p className={`label fade mt-8 tabular ${look.muted}`} style={i(6)}>
              {terms}
            </p>
            <LiquidButton href="/contact" variant={look.button} className="mt-10">
              Start with this<span className="sr-only">: {service.name}</span> <Arrow />
            </LiquidButton>
          </Seen>

          <Seen as="figure" threshold={0.15} className={`relative min-w-0 lg:col-span-8 lg:row-start-1 ${flip ? "lg:col-start-1" : "lg:col-start-5"}`}>
            <div className="rise relative">
              <div aria-hidden="true" className={`absolute top-[10%] bottom-[-7%] rounded-[26px] ${look.slab} ${flip ? "-left-5 right-[16%] sm:-left-8 lg:-left-10" : "-right-5 left-[16%] sm:-right-8 lg:-right-10"}`} />
              <div className="relative">
                <Drawing />
              </div>
            </div>
            <figcaption className={`label fade mt-[calc(7%+1.25rem)] ${look.muted}`} style={i(2)}>
              {caption}
            </figcaption>
          </Seen>
        </div>
      </div>
    </section>
  );
}
