import { ENGAGEMENTS } from "@/data/services";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, LEDE, SECTION } from "@/components/ui/tokens";

/** Sea: the studio's hand. Three ways to work together, set as paper plates. */
export function Engagements() {
  return (
    <section aria-labelledby="engagements-title" className={`bg-sea text-fg ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <ChapterHead id="engagements" label="How engagements work" register="sea" className="lg:col-span-7">
            Three ways to <Mark gesture="underline">start.</Mark>
          </ChapterHead>
          <p className={`text-fg/80 lg:col-span-4 lg:col-start-9 ${LEDE}`}>Pick the shape that fits your week. You can change it later, and we will tell you if a smaller one would do.</p>
        </div>

        <Seen as="ul" className="mt-16 grid gap-5 md:mt-24 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, k) => (
            <li
              key={e.name}
              className="rise flex flex-col rounded-[22px] bg-paper p-7 text-ink shadow-[0_40px_80px_-40px_rgb(5_20_22/0.7),0_14px_28px_-16px_rgb(5_20_22/0.5)] md:p-9"
              style={i(k)}
            >
              <p className="label tabular text-ink-muted">{String(k + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-[clamp(1.6rem,2.2vw,2rem)] leading-[1.05] font-semibold tracking-[-0.025em]">{e.name}</h3>
              <dl className="mt-8 flex flex-1 flex-col">
                <div className="draw py-4">
                  <dt className="label text-[11px] text-ink-muted">Suits</dt>
                  <dd className="mt-2 text-[16px] leading-[1.55]">{e.suits}</dd>
                </div>
                <div className="draw py-4">
                  <dt className="label text-[11px] text-ink-muted">How it&rsquo;s billed</dt>
                  <dd className="mt-2 text-[16px] leading-[1.55]">{e.billing}</dd>
                </div>
                <div className="draw py-4">
                  <dt className="label text-[11px] text-ink-muted">Length</dt>
                  <dd className="tabular mt-2 text-[16px]">{e.length}</dd>
                </div>
                <div className="mt-auto rounded-[14px] bg-belle px-5 py-4">
                  <dt className="label text-[11px] text-ink-muted">Price</dt>
                  <dd className="tabular mt-1 text-[24px] font-semibold tracking-[-0.02em]">{e.price}</dd>
                </div>
              </dl>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}
