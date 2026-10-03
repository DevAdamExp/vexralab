import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";

const ITEMS = [
  { title: "A site you’re embarrassed to send.", line: "So you send your Instagram instead.", accent: "bg-sea" },
  { title: "Visitors who never become enquiries.", line: "They look, they shrug, they leave.", accent: "bg-sail" },
  { title: "An agency that went quiet.", line: "“Two weeks” turned into March.", accent: "bg-red" },
];

/**
 * Section 2 — "Sticky". The question stays pinned on the left while three
 * problem cards scroll past on the right, each edged in a brand colour.
 * Then the turn: "Good enough" struck through in red, and the promise.
 */
export function Problems() {
  return (
    <section id="story" aria-labelledby="problems-title" className="bg-paper py-32 font-ui text-ink md:py-44">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <Seen className="lg:sticky lg:top-36">
            <p className="fade text-[13px] font-medium tracking-[0.18em] text-ink/60 uppercase">Three problems</p>
            <h2 id="problems-title" className="rise mt-6 font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1]" style={i(1)}>
              Sound familiar?
            </h2>
          </Seen>
        </div>

        <Seen as="ol" className="flex flex-col gap-5 lg:col-span-7" threshold={0.1}>
          {ITEMS.map((p, k) => (
            <li
              key={p.title}
              className="rise group relative overflow-hidden rounded-[20px] bg-paper-2 px-8 pt-10 pb-11 transition-[transform,box-shadow] duration-700 ease-water hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(21_20_25/0.25)] md:px-12 md:pt-12 md:pb-14"
              style={i(k)}
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 origin-top transition-transform duration-700 ease-water group-hover:scale-y-[2] ${p.accent}`} />
              <span className="text-[14px] font-medium text-ink/45 tabular-nums">0{k + 1} / 03</span>
              <h3 className="mt-8 max-w-[18ch] font-display text-[clamp(1.9rem,3vw,2.75rem)] leading-[1.06]">{p.title}</h3>
              <p className="mt-4 text-[17px] text-ink/60">{p.line}</p>
            </li>
          ))}
        </Seen>
      </div>

      <Seen className="mx-auto mt-32 max-w-[1320px] px-6 md:mt-44 lg:px-12">
        <p className="fade font-display text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.1] text-ink/45">
          <Mark gesture="strike" tone="red">Good enough</Mark>{"\u00a0"}isn&rsquo;t enough.
        </p>
        <p className="rise mt-3 max-w-[16ch] font-display text-[clamp(2.75rem,6.6vw,6rem)] leading-[1.02]" style={i(1)}>
          You deserve a site that does the selling.
        </p>
      </Seen>
    </section>
  );
}
