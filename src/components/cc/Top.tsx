import Link from "next/link";
import { PiCaretDown } from "react-icons/pi";
import { SiGooglebigquery, SiHubspot, SiLooker, SiOdoo, SiPostgresql, SiQuickbooks, SiSap, SiShopify, SiSnowflake, SiStripe, SiXero, SiZoho } from "react-icons/si";
import { CopyText } from "./CopyText";
import { Band, Tiles } from "./parts";
import s from "./cc.module.css";

export const EMAIL = "hello@vexralab.com";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Platform", href: "#platform" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.13] bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between px-6">
        <Link href="/" aria-label="VexraLab home" className={`${s.mono} text-[22px] font-semibold tracking-[-0.04em]`}>
          vexra<span className="text-[#7c97f0]">/</span>lab
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={s.navLink}>
              {n.label}
            </a>
          ))}
          <Link href="/contact" className={s.navLink}>
            Contact
          </Link>
        </nav>
        <Link href="/contact" className="inline-flex h-9 items-center rounded-full bg-[#fafafa] px-5 text-[14px] font-medium text-black transition-colors hover:bg-white">
          Book a call
        </Link>
      </div>
    </header>
  );
}

// 10 x 8 cells of 75px; the text panel covers columns 1-5, rows 2-7.
const HERO_TILES: [number, number, number][] = [
  [10, 1, 1], [8, 1, 2], [9, 2, 2], [9, 1, 3], [10, 1, 3], [9, 2, 4],
  [8, 1, 5], [9, 2, 5], [9, 1, 6], [10, 1, 6], [7, 1, 7], [8, 3, 7], [8, 1, 8], [9, 2, 8],
];

export function Hero() {
  return (
    <section className={s.col} aria-labelledby="hero-title">
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.13] px-4 py-3 text-[14px] sm:px-5">
        <a href="#pricing" className="flex items-center gap-2.5 underline decoration-white/30 underline-offset-4 hover:decoration-white">
          <span aria-hidden="true" className="grid size-[18px] place-items-center rounded-[4px] bg-white/10 text-[10px]">✦</span>
          Free 30-minute data audit for growing teams.
        </a>
        <span className="hidden text-[12px] text-white/70 md:block">
          <b className="font-semibold text-[#7c97f0]">AUDIT</b>
          <span className="mx-2 font-semibold text-white">Free</span>written plan in 5 days
          <span className="mx-2 font-semibold text-white">CRM · ERP · BI</span>
          (fixed-price builds)
        </span>
      </div>

      <div className="relative lg:h-[600px]">
        <Tiles cols={10} rows={8} rowH={75} tiles={HERO_TILES} className="pointer-events-none absolute inset-0 hidden lg:grid" />

        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-6 lg:absolute lg:top-[75px] lg:left-0 lg:h-[450px] lg:w-[54%] lg:border-y lg:border-r lg:border-white/[0.13] lg:bg-black lg:py-0">
          <div>
            <h1 id="hero-title" className={`${s.h1} ${s.rise} max-w-[520px]`}>
              Meet the data partner built for <span className="text-[#7c97f0]">growing businesses</span>.
              <span className="block text-white/55">VexraLab.</span>
            </h1>

            <div className={`${s.rise} mt-7 flex flex-wrap items-center gap-2.5`} style={{ animationDelay: "120ms" }}>
              <div className={s.pill}>
                <Link href="/contact" className={s.pillBtn}>
                  Book a call <PiCaretDown aria-hidden="true" className="size-3.5 -rotate-90" />
                </Link>
                <CopyText text={EMAIL} className={`${s.mono} flex h-[34px] items-center gap-2 px-3 text-[14px] text-[#a1a1aa] hover:text-white`} />
              </div>
              <a href="#platform" className="inline-flex h-11 items-center gap-2.5 rounded-full border border-white/[0.13] px-3.5 text-[14px] font-medium transition-colors hover:border-white/35">
                <span aria-hidden="true" className="size-2 rounded-full bg-[#7c97f0]" />
                <span className={s.mono}>sample-dashboard</span>
              </a>
            </div>

            <p className={`${s.rise} mt-9 text-[18px] leading-7 text-[#a1a1aa]`} style={{ animationDelay: "200ms" }}>
              Data <span className="text-white">in one place</span>. Reports, <span className="text-white">automated</span>. Decisions, <span className="text-white">faster</span>.
            </p>
            <p className={`${s.rise} mt-2 text-[14px] leading-5 text-white/55`} style={{ animationDelay: "240ms" }}>
              Start with a <a href="#pricing" className="font-semibold text-[#7c97f0]">free audit</a>, then a fixed-price plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  { Icon: SiHubspot, name: "HubSpot" },
  { Icon: SiZoho, name: "Zoho" },
  { Icon: SiOdoo, name: "Odoo" },
  { Icon: SiSap, name: "SAP" },
  { Icon: SiShopify, name: "Shopify" },
  { Icon: SiStripe, name: "Stripe" },
  { Icon: SiQuickbooks, name: "QuickBooks" },
  { Icon: SiXero, name: "Xero" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiSnowflake, name: "Snowflake" },
  { Icon: SiGooglebigquery, name: "BigQuery" },
  { Icon: SiLooker, name: "Looker" },
];

export function Logos() {
  return (
    <>
      <Band />
      <section className={s.col} aria-label="Platforms we work with">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          <p className="flex h-[100px] items-center border-r border-b border-white/[0.13] px-6 text-[14px] leading-5 text-white">
            <span>
              Built on the platforms <span className="text-[#a1a1aa]">you already run.</span>
            </span>
          </p>
          {LOGOS.slice(0, 11).map(({ Icon, name }) => (
            <div key={name} className="flex h-[100px] items-center justify-center gap-2.5 border-r border-b border-white/[0.13] text-white/85 transition-colors hover:text-white">
              <Icon aria-hidden="true" className="size-6" />
              <span className="text-[17px] font-semibold tracking-[-0.02em]">{name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-4 text-[14px]">
          <span aria-hidden="true" className="text-white/40">❝</span>
          <span>Your data already knows how to grow your business. We make it easy to read.</span>
          <span className="flex items-center gap-2 text-[#a1a1aa]">
            <span className="rounded-full border border-white/[0.13] px-2.5 py-0.5 text-[12px]">Our promise</span>
          </span>
        </div>
      </section>
      <Band />
    </>
  );
}

