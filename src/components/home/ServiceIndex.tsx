import Link from "next/link";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, SECTION } from "@/components/ui/tokens";
import { SERVICES } from "@/data/site";

/**
 * Chapter three. Each row reads left to right as the founder would say it:
 * the feeling first, then the thing we make for it. Sea rises behind a row on hover.
 */
export function ServiceIndex() {
  return (
    <section aria-labelledby="services-title" className="bg-night text-fg">
      <div className={`${CONTAINER} ${SECTION}`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <ChapterHead id="services" label="Chapter three · what we make" register="night" className="lg:col-span-7">
            Every service starts with a <Mark>feeling.</Mark>
          </ChapterHead>
          <Seen className="lg:col-span-5">
            <p className="rise max-w-[44ch] text-[18px] leading-relaxed text-muted">
              We work backwards from what you want people to feel when they land on your site, then design and build whatever makes them feel it.
            </p>
          </Seen>
        </div>

        <Seen as="ul" className="mt-16 border-b border-fg/15 md:mt-24" threshold={0.1}>
          {SERVICES.map((s, k) => (
            <li key={s.id} className="draw rise" style={i(k)}>
              <Link
                href={`/services#${s.id}`}
                className="group relative isolate grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-3 overflow-hidden px-2 py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:gap-x-10 md:px-6 md:py-10"
              >
                <span aria-hidden="true" className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-sea transition-transform duration-700 ease-water group-hover:scale-y-100 group-focus-visible:scale-y-100" />
                <span className="voice text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.05] transition-transform duration-700 ease-water group-hover:translate-x-2">&ldquo;{s.feeling}&rdquo;</span>
                <span className="col-start-1 flex flex-col gap-1 md:col-start-auto">
                  <span className="text-[20px] font-semibold tracking-[-0.01em]">{s.name}</span>
                  <span className="text-[15px] leading-relaxed text-muted group-hover:text-fg/85">{s.line}</span>
                </span>
                <span aria-hidden="true" className="col-start-2 row-span-2 row-start-1 grid size-12 place-items-center rounded-full border border-fg/25 transition-[transform,background-color,border-color,color] duration-500 ease-water group-hover:-rotate-45 group-hover:border-lamp group-hover:bg-lamp group-hover:text-ink md:col-start-auto md:row-span-1 md:row-start-auto md:size-14">
                  →
                </span>
              </Link>
            </li>
          ))}
        </Seen>

        <div className="mt-12 flex justify-end">
          <LiquidButton href="/services" variant="ghost-night">
            Everything we make <Arrow />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
