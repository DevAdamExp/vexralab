"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";
import { SERVICES } from "@/data/site";

const PLATE: Record<(typeof SERVICES)[number]["tone"], string> = {
  red: "bg-[radial-gradient(120%_90%_at_20%_10%,#d02a2e,#bd1b1f_45%,#6e0e11)] text-fg",
  sea: "bg-[radial-gradient(120%_90%_at_20%_10%,#0a666d,#075056_45%,#032a2d)] text-fg",
  sail: "bg-[radial-gradient(120%_90%_at_20%_10%,#3a5fb8,#2a4c9e_45%,#142a5c)] text-fg",
  lamp: "bg-[radial-gradient(120%_90%_at_20%_10%,#ffd04a,#f6bb02_45%,#b88400)] text-ink",
  void: "bg-[radial-gradient(120%_90%_at_20%_10%,#2e2d35,#151419_60%)] text-fg",
};

/**
 * What we make: an index on the left, and on the right a plate in that
 * service's brand colour that changes as you move down the list.
 */
export function Services() {
  const [on, setOn] = useState(0);
  const s = SERVICES[on];

  return (
    <section aria-labelledby="services-title" className="bg-paper text-ink">
      <div className={`${CONTAINER} py-28 md:py-40`}>
        <Seen className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label fade text-ink-muted">What we make</p>
            <h2 id="services-title" className="rise mt-6 text-[clamp(2.75rem,6.4vw,6rem)] leading-[0.98]" style={i(1)}>
              Five things, done <Mark tone="red">properly.</Mark>
            </h2>
          </div>
        </Seen>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-12">
          <ul className="border-t border-ink/15 lg:col-span-7">
            {SERVICES.map((x, k) => (
              <li key={x.id} className="border-b border-ink/15">
                <Link
                  href={`/services#${x.id}`}
                  onPointerEnter={() => setOn(k)}
                  onFocus={() => setOn(k)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-7 md:grid-cols-[3.5rem_1fr_auto] md:py-8"
                >
                  <span className={`font-mono text-[12px] tracking-[0.2em] transition-colors ${on === k ? "text-red" : "text-ink-subtle"}`}>0{k + 1}</span>
                  <span>
                    <span className="display block text-[clamp(1.75rem,3vw,2.6rem)] leading-tight transition-transform duration-500 ease-water group-hover:translate-x-2">
                      {x.name} <span aria-hidden="true" className="text-[0.7em]">{x.emoji}</span>
                    </span>
                    <span className="mt-1 block max-w-[46ch] text-[15px] text-ink-muted">{x.line}</span>
                  </span>
                  <span aria-hidden="true" className={`grid size-11 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-water ${on === k ? "-rotate-45 border-ink bg-ink text-fg" : "border-ink/20"}`}>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div key={s.id} className={`relative aspect-[4/3.4] overflow-hidden rounded-[22px] p-8 animate-[plate-in_700ms_var(--ease-water)] ${PLATE[s.tone]}`}>
                <span className="label opacity-80">{s.name}</span>
                <span aria-hidden="true" className="absolute right-8 bottom-6 text-[7.5rem] leading-none drop-shadow-[0_18px_30px_rgb(0_0_0/0.35)]">{s.emoji}</span>
                <p className="voice absolute bottom-8 left-8 max-w-[11ch] text-[2.4rem] leading-[1.02]">&ldquo;{s.feeling}&rdquo;</p>
              </div>
              <div className="label mt-4 flex justify-between text-ink-muted">
                <span>What it feels like</span>
                <span className="text-red tabular">0{on + 1} / 0{SERVICES.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-end">
          <LiquidButton href="/services" variant="ghost-paper">
            All services <Arrow />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
