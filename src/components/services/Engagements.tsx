import { ENGAGEMENTS } from "@/data/services";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";

const PLATE = {
  sea: "bg-[radial-gradient(120%_90%_at_20%_10%,#0a666d,#075056_45%,#032a2d)]",
  sail: "bg-[radial-gradient(120%_90%_at_20%_10%,#3a5fb8,#2a4c9e_45%,#142a5c)]",
  red: "bg-[radial-gradient(120%_90%_at_20%_10%,#d02a2e,#bd1b1f_45%,#6e0e11)]",
};

/** Paper: three ways to start, each a plate in its own colour. */
export function Engagements() {
  return (
    <section aria-labelledby="engagements-title" className="bg-paper text-ink">
      <div className={`${CONTAINER} py-28 md:py-40`}>
        <Seen className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label fade text-ink-muted">How we work together</p>
            <h2 id="engagements-title" className="rise mt-6 text-[clamp(2.75rem,6.4vw,6rem)] leading-[0.98]" style={i(1)}>
              Three ways to <Mark tone="red">start.</Mark>
            </h2>
          </div>
          <p className="rise max-w-[28ch] text-[18px] text-ink-muted lg:col-span-4" style={i(2)}>
            Change shape any time. We&rsquo;ll say if smaller would do.
          </p>
        </Seen>

        <Seen as="ul" className="mt-16 grid gap-5 md:mt-24 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, k) => (
            <li key={e.name} className={`rise relative flex min-h-[360px] flex-col overflow-hidden rounded-[22px] p-8 text-fg md:p-10 ${PLATE[e.tone]}`} style={i(k)}>
              <div className="flex items-start justify-between">
                <span className="font-mono text-[13px] tracking-[0.2em] text-lamp">0{k + 1}</span>
                <span aria-hidden="true" className="text-[3.5rem] leading-none drop-shadow-[0_14px_24px_rgb(0_0_0/0.35)]">{e.emoji}</span>
              </div>
              <h3 className="mt-auto pt-16 text-[clamp(2.25rem,3vw,2.75rem)] leading-none">{e.name}</h3>
              <p className="voice mt-3 text-[20px] text-fg/90">{e.suits}</p>
              <p className="label mt-8 border-t border-fg/25 pt-5 tabular text-fg/90">{e.terms}</p>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}
