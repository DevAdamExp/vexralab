import { FAQ } from "@/data/services";
import { Blob } from "@/components/ui/Blob";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";
import styles from "./services.module.css";

/** Blue Sail: plain answers to the questions that keep founders up. Native details/summary. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-x-clip bg-sail text-fg">
      <Blob tone="lamp" side="left" emoji="🌙" className="!absolute bottom-24 left-0 hidden w-[30%] max-w-[440px] lg:block" />
      <div className={`${CONTAINER} grid gap-16 py-28 md:py-40 lg:grid-cols-12`}>
        <Seen className="lg:col-span-4">
          <p className="label fade text-fg/85">Questions</p>
          <h2 id="faq-title" className="rise mt-6 text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.98]" style={i(1)}>
            Asked at <Mark>2 AM.</Mark>
          </h2>
          <LiquidButton href="/contact" variant="lamp" className="rise mt-10" style={i(2)}>
            Ask yours <Arrow />
          </LiquidButton>
        </Seen>

        <Seen className="border-t border-fg/25 lg:col-span-7 lg:col-start-6">
          {FAQ.map((f, k) => (
            <details key={f.q} name="faq" className={`${styles.faq} fade border-b border-fg/25`} style={i(k)}>
              <summary className="group flex min-h-11 cursor-pointer items-center gap-5 py-6 md:py-7">
                <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-lamp text-[1.25rem]">
                  {f.emoji}
                </span>
                <span className="display flex-1 text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.2]">{f.q}</span>
                <span
                  aria-hidden="true"
                  className={`${styles.sign} relative grid size-11 shrink-0 place-items-center rounded-full border border-fg/30 transition-[transform,background-color,border-color,color] duration-500 ease-water group-hover:border-lamp group-hover:bg-lamp group-hover:text-ink`}
                >
                  <span className="absolute h-[1.5px] w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-[1.5px] bg-current" />
                </span>
              </summary>
              <p className={`${styles.answer} max-w-[52ch] pb-8 pl-16 text-[17px] leading-[1.6] text-fg/90`}>{f.a}</p>
            </details>
          ))}
        </Seen>
      </div>
    </section>
  );
}
