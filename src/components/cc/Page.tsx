import Link from "next/link";
import type { ReactNode } from "react";
import { PiCaretRight } from "react-icons/pi";
import { FinalCta, Footer } from "./Bottom";
import { Motion } from "./Motion";
import { Nav } from "./Top";
import { Band, Tiles } from "./parts";
import s from "./cc.module.css";

/** Every page: nav, main, closing call-to-action, footer. */
export function Shell({ children, cta = true }: { children: ReactNode; cta?: boolean }) {
  return (
    <div className={s.page}>
      <Motion />
      <Nav />
      <main id="main-content">
        {children}
        {cta && <FinalCta />}
      </main>
      <Footer />
    </div>
  );
}

const TILES: [number, number, number][] = [
  [10, 1, 1], [8, 1, 2], [9, 2, 2], [9, 1, 3], [10, 1, 3], [8, 2, 4], [10, 1, 4], [7, 1, 5], [8, 3, 5], [9, 1, 6], [10, 1, 7], [7, 2, 8], [9, 2, 8],
];

/** Inner-page opening: a kicker, a two-tone headline, one line, an action, and grain tiles on the right. */
export function PageHead({ kicker, title, grey, lede, action }: { kicker: string; title: ReactNode; grey: string; lede: string; action?: { label: string; href: string } }) {
  return (
    <>
      <section className={s.col} aria-labelledby="page-title">
        <div className="relative lg:min-h-[600px]">
          <Tiles cols={10} rows={8} rowH={75} tiles={TILES} className="pointer-events-none absolute inset-0 hidden lg:grid" />
          <div className="relative z-10 flex flex-col justify-center px-6 py-20 lg:absolute lg:top-[75px] lg:left-0 lg:min-h-[450px] lg:w-[58%] lg:border-y lg:border-r lg:border-white/[0.13] lg:bg-black lg:px-10 lg:py-12">
            <p className={s.kicker}>
              <span className="text-white/35">{"//"}</span> {kicker}
            </p>
            <h1 id="page-title" className={`${s.h1} ${s.rise} mt-5 max-w-[620px]`}>
              {title}
              <span className="block text-white/55">{grey}</span>
            </h1>
            <p className={`${s.rise} mt-6 max-w-[52ch] text-[18px] leading-7 text-(--muted)`} style={{ animationDelay: "120ms" }}>
              {lede}
            </p>
            {action && (
              <div className={`${s.rise} mt-7`} style={{ animationDelay: "200ms" }}>
                <Link href={action.href} className={s.btnAccent}>
                  {action.label} <PiCaretRight aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
