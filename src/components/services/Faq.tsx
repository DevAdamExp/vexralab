import { FAQ } from "@/data/services";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, LEDE, SECTION } from "@/components/ui/tokens";
import styles from "./services.module.css";

/** Paper: plain answers to the questions that keep founders up. Native details/summary, no script. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={`bg-paper text-ink ${SECTION} ${styles.inkFocus}`}>
      <div className={`${CONTAINER} grid gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <ChapterHead id="faq" label="Questions founders ask" register="paper">
            Asked at 2 AM.
          </ChapterHead>
          <p className={`mt-8 text-ink-muted ${LEDE}`}>Something we haven&rsquo;t covered? Ask us directly. A real person replies within one working day.</p>
        </div>

        <Seen className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
          {FAQ.map((f, k) => (
            <details key={f.q} name="faq" className={`${styles.faq} fade border-b border-ink/15`} style={i(k)}>
              <summary className="group flex min-h-11 cursor-pointer items-center justify-between gap-6 py-6 text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.3] font-semibold tracking-[-0.015em]">
                {f.q}
                <span
                  aria-hidden="true"
                  className={`${styles.sign} relative grid size-11 shrink-0 place-items-center rounded-full border border-ink/20 transition-[transform,background-color,border-color] duration-500 ease-water group-hover:border-ink group-hover:bg-ink group-hover:text-fg`}
                >
                  <span className="absolute h-[1.5px] w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-[1.5px] bg-current" />
                </span>
              </summary>
              <p className={`${styles.answer} max-w-[60ch] pb-8 text-[17px] leading-[1.65] text-ink-muted`}>{f.a}</p>
            </details>
          ))}
        </Seen>
      </div>
    </section>
  );
}
