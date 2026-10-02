import Link from "next/link";
import { SERVICES } from "@/data/site";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";
import styles from "./services.module.css";

/** Each row fills with its service's colour on hover and focus. */
const FILL: Record<(typeof SERVICES)[number]["tone"], string> = {
  red: "bg-red",
  sea: "bg-sea",
  sail: "bg-sail",
  lamp: "bg-lamp",
  void: "bg-void",
};

/** Paper opening: the promise on one side, an index of the five on the other. */
export function ServicesOpening() {
  return (
    <section aria-labelledby="services-title" className={`bg-paper text-ink ${styles.inkFocus}`}>
      <div className={`${CONTAINER} grid gap-20 pt-40 pb-28 md:pt-48 md:pb-40 lg:grid-cols-12 lg:items-end lg:gap-12`}>
        <div className="lg:col-span-5">
          <p className="label load text-ink-muted">Services</p>
          <h1 id="services-title" className="load mt-6 text-[clamp(3.25rem,7vw,6.75rem)] leading-[0.95]" style={i(1)}>
            Five things we <Mark tone="red" onLoad delay={1100}>make.</Mark>
          </h1>
          <p className="load mt-8 max-w-[30ch] text-[18px] leading-[1.6] text-ink-muted" style={i(2)}>
            Each one starts with a feeling. The work is drawn, so you see what you get.
          </p>
        </div>

        <nav aria-label="Services on this page" className="lg:col-span-7 lg:col-start-6">
          <Seen as="ol" className="border-t border-ink/15">
            {SERVICES.map((s, k) => {
              const onDark = s.tone !== "lamp";
              return (
                <li key={s.id} className="rise border-b border-ink/15" style={i(k)}>
                  <Link
                    href={`#${s.id}`}
                    className={`group relative isolate grid min-h-11 grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 overflow-hidden px-2 py-5 transition-colors duration-500 ease-water md:grid-cols-[3rem_1fr_auto] md:px-4 md:py-6 ${onDark ? "hover:text-fg focus-visible:text-fg" : ""}`}
                  >
                    <span aria-hidden="true" className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-700 ease-water group-hover:scale-y-100 group-focus-visible:scale-y-100 ${FILL[s.tone]}`} />
                    <span className="font-mono text-[12px] tracking-[0.2em] text-red transition-colors duration-500 group-hover:text-current group-focus-visible:text-current">0{k + 1}</span>
                    <span className="min-w-0">
                      <span className="display block text-[clamp(1.6rem,2.6vw,2.25rem)] leading-tight">
                        {s.name} <span aria-hidden="true" className="text-[0.7em]">{s.emoji}</span>
                      </span>
                      <span className="voice mt-1 block text-[16px] opacity-75">{s.feeling}</span>
                    </span>
                    <span aria-hidden="true" className="grid size-11 place-items-center rounded-full border border-current/25 transition-transform duration-500 ease-water group-hover:translate-y-1 group-focus-visible:translate-y-1">
                      ↓
                    </span>
                  </Link>
                </li>
              );
            })}
          </Seen>
        </nav>
      </div>
    </section>
  );
}
