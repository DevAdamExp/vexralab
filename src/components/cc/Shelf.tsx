import Link from "next/link";
import { PiCaretRight, PiCheck, PiX } from "react-icons/pi";
import { SERVICES } from "@/data/vx";
import { Glyph } from "./Glyph";
import { Slash } from "./parts";
import s from "./cc.module.css";

/**
 * Services signature: The Shelf. While the section is pinned, scrolling down
 * slides the seven service panels sideways, with a progress rail above them.
 * Static fallback (and phones): the panels stack vertically.
 */
export function Shelf() {
  return (
    <section className={s.shelf} aria-labelledby="shelf-title">
      <div className={s.shelfStage}>
        <div className="mx-auto flex w-full max-w-[1152px] flex-col gap-6 px-6 pt-10 pb-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <Slash>
            <span id="shelf-title">seven services, one partner.</span>
          </Slash>
          <div aria-hidden="true" className={`${s.rail} max-lg:hidden`}>
            <span className={s.railFill} />
            {SERVICES.map((x, k) => (
              <i key={x.id} style={{ left: `${(k / (SERVICES.length - 1)) * 100}%` }} />
            ))}
          </div>
        </div>

        <div className={s.shelfTrack}>
          {SERVICES.map((x, k) => (
            <article key={x.id} id={x.id} data-glyph-host className={`${s.panel} scroll-mt-24`} aria-labelledby={`${x.id}-title`}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className={s.rowNum}>
                    0{k + 1} / 0{SERVICES.length}
                  </span>
                  <Glyph id={x.id} size={8} label={`${x.name} icon`} />
                </div>
                <h3 id={`${x.id}-title`} className="text-[32px] leading-[1.1] font-semibold tracking-[-0.03em]">
                  {x.name}
                </h3>
                <p className="text-[18px] leading-7 text-(--muted)">
                  <b className="font-semibold text-white">{x.title}</b> {x.body}
                </p>
                <dl className={`${s.mono} mt-2 grid grid-cols-2 gap-4 border-t border-(--line) pt-5 text-[13px]`}>
                  <div>
                    <dt className="text-white/60">Timeline</dt>
                    <dd className="mt-1">{x.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-white/60">Price</dt>
                    <dd className="mt-1">{x.price}</dd>
                  </div>
                </dl>
                <Link href="/contact" data-magnet className={`${s.btnWhite} mt-auto self-start`}>
                  Start with this <PiCaretRight aria-hidden="true" />
                </Link>
              </div>

              <div className="flex flex-col gap-6 border-(--line) max-md:border-t max-md:pt-6 md:border-l md:pl-8">
                <div>
                  <p className={`${s.kicker} ${s.kickerCoral}`}>Before</p>
                  <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-6 text-white/60">
                    {x.before.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <PiX aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-(--coral)" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={`${s.kicker} !text-(--hi)`}>After</p>
                  <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-6 text-white">
                    {x.after.map((a) => (
                      <li key={a} className="flex gap-2.5">
                        <PiCheck aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-(--hi)" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={s.kicker}>What you get</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {x.deliverables.map((d) => (
                      <li key={d} className="rounded-full border border-(--line) px-3 py-1 text-[13px] text-white/80">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
