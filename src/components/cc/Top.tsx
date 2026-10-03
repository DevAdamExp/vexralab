import Link from "next/link";
import { PiCalendarCheck, PiCaretDown, PiKey, PiReceipt, PiShieldCheck } from "react-icons/pi";
import { SiGooglebigquery, SiHubspot, SiLooker, SiOdoo, SiPostgresql, SiQuickbooks, SiSap, SiShopify, SiSnowflake, SiStripe, SiXero, SiZoho } from "react-icons/si";
import { CopyText } from "./CopyText";
import { DataFlow } from "./DataFlow";
import { Logo, Mark } from "./Logo";
import { Band, Tiles } from "./parts";
import s from "./cc.module.css";

import { EMAIL, NAV } from "@/data/vx";

export { EMAIL };

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.13] bg-black/85 backdrop-blur-md">
      <span aria-hidden="true" className={s.progress} />
      <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between px-6">
        <Link href="/" aria-label="VexraLab home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={s.navLink}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className={s.navLink}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" data-magnet className="inline-flex h-9 items-center rounded-full bg-(--fg) px-5 text-[14px] font-medium text-black transition-colors hover:bg-white">
            Book a call
          </Link>
          {/* Phone menu: native disclosure, no script needed. */}
          <details className="group relative lg:hidden">
            <summary aria-label="Menu" className="grid size-9 cursor-pointer list-none place-items-center rounded-full border border-white/[0.13] [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="flex w-4 flex-col gap-1">
                <i className="h-px bg-white transition-transform group-open:translate-y-[2.5px] group-open:rotate-45" />
                <i className="h-px bg-white transition-transform group-open:-translate-y-[2.5px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav aria-label="Mobile" className="absolute top-12 right-0 flex w-56 flex-col border border-white/[0.13] bg-black p-2">
              {[...NAV, { label: "Contact", href: "/contact" }].map((n) => (
                <Link key={n.href} href={n.href} className="px-3 py-3 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">
                  {n.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
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
        <Link href="/contact" className="flex items-center gap-2.5 underline decoration-white/30 underline-offset-4 hover:decoration-white">
          <span aria-hidden="true" className={s.live} />
          Free 30-minute data audit. A written plan in 5 days.
        </Link>
        <span className="hidden items-center gap-5 text-[12px] text-white/70 md:flex">
          <span><b className="font-semibold text-white">Fixed price</b> agreed up front</span>
          <span><b className="font-semibold text-white">Demo</b> every Friday</span>
          <span><b className="font-semibold text-(--hi)">You own</b> everything</span>
        </span>
      </div>

      <div data-spot className={`${s.heroGlow} relative lg:h-[600px]`}>
        <Tiles cols={10} rows={8} rowH={75} tiles={HERO_TILES} className="pointer-events-none absolute inset-0 hidden lg:grid" />
        <DataFlow className="hidden lg:block" />

        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-6 lg:absolute lg:top-[75px] lg:left-0 lg:h-[450px] lg:w-[54%] lg:border-y lg:border-r lg:border-white/[0.13] lg:bg-black lg:py-0">
          <div>
            <h1 id="hero-title" className={`${s.h1} ${s.rise} max-w-[520px]`}>
              Run your business on data you can <span className={s.sheen}>trust</span>.
              <span className="block text-white/55">VexraLab.</span>
            </h1>

            <div className={`${s.rise} mt-7 flex flex-wrap items-center gap-2.5`} style={{ animationDelay: "120ms" }}>
              <div className={s.pill}>
                <Link href="/contact" data-magnet className={s.pillBtn}>
                  Book a call <PiCaretDown aria-hidden="true" className="size-3.5 -rotate-90" />
                </Link>
                <CopyText text={EMAIL} className={`${s.mono} flex h-[34px] items-center gap-2 px-3 text-[14px] text-(--muted) hover:text-white`} />
              </div>
              <a href="#platform" className="inline-flex h-11 items-center gap-2.5 rounded-full border border-white/[0.13] px-4 text-[14px] font-medium transition-colors hover:border-white/35">
                <span aria-hidden="true" className="size-2 rounded-full bg-(--hi)" />
                See a sample dashboard
              </a>
            </div>

            <p className={`${s.rise} mt-9 text-[18px] leading-7 text-(--muted)`} style={{ animationDelay: "200ms" }}>
              CRM, ERP and reporting, <span className="text-white">set up around how your team already works</span>.
            </p>
            <p className={`${s.rise} mt-2 text-[14px] leading-5 text-white/55`} style={{ animationDelay: "240ms" }}>
              Start with a <a href="/contact" className="font-semibold text-(--hi)">free audit</a>. No long contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  { Icon: SiHubspot, name: "HubSpot", brand: "#ff7a59" },
  { Icon: SiZoho, name: "Zoho", brand: "#ff5a5f" },
  { Icon: SiOdoo, name: "Odoo", brand: "#c39bbd" },
  { Icon: SiSap, name: "SAP", brand: "#36b8ff" },
  { Icon: SiShopify, name: "Shopify", brand: "#95bf47" },
  { Icon: SiStripe, name: "Stripe", brand: "#8f88ff" },
  { Icon: SiQuickbooks, name: "QuickBooks", brand: "#3fbf2c" },
  { Icon: SiXero, name: "Xero", brand: "#13b5ea" },
  { Icon: SiPostgresql, name: "PostgreSQL", brand: "#6b8cff" },
  { Icon: SiSnowflake, name: "Snowflake", brand: "#29b5e8" },
  { Icon: SiGooglebigquery, name: "BigQuery", brand: "#669df6" },
  { Icon: SiLooker, name: "Looker", brand: "#4285f4" },
];

const GROUPS: [string, string][] = [
  ["CRM", "HubSpot, Zoho"],
  ["ERP", "Odoo, SAP"],
  ["Commerce", "Shopify, Stripe"],
  ["Finance", "QuickBooks, Xero"],
  ["Data", "Postgres, Snowflake, BigQuery, Looker"],
];

const PROMISES = [
  { Icon: PiReceipt, title: "Fixed price.", text: "Agreed in writing before we start." },
  { Icon: PiCalendarCheck, title: "A demo every Friday.", text: "You always see where it's at." },
  { Icon: PiKey, title: "You own everything.", text: "Accounts, data and config, in your name." },
  { Icon: PiShieldCheck, title: "Your data stays safe.", text: "NDA and data agreement on request." },
];

export function Logos() {
  return (
    <>
      <Band />
      <section className={s.col} aria-label="Integrations and commitments">
        <div className="grid border-b border-white/[0.13] lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col justify-center gap-6 px-6 py-14 lg:border-r lg:border-white/[0.13] lg:px-12">
            <p className={s.kicker}>Integrations</p>
            <h2 className="text-[clamp(30px,3.2vw,40px)] leading-[1.08] font-semibold tracking-[-0.035em]">
              Works with the tools <span className="text-white/55">you already run.</span>
            </h2>
            <p className="max-w-[40ch] text-[17px] leading-7 text-(--muted)">No rip and replace. We connect what you have, then add only what&rsquo;s missing.</p>
            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-white/[0.1] pt-6 text-[14px]">
              {GROUPS.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className={`${s.mono} text-[12px] text-white/45`}>{k}</dt>
                  <dd className="text-white/80">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative grid place-items-center overflow-hidden px-4 py-10">
            {/* Desktop: the hub. Each logo is wired to the centre by a line carrying data inwards. */}
            <div className={`${s.hub} max-lg:hidden`} aria-hidden="true">
              {LOGOS.map(({ Icon, name, brand }, k) => {
                const a = ((k * 30 - 90) * Math.PI) / 180;
                const x = 300 + Math.cos(a) * 236;
                const y = 230 + Math.sin(a) * 178;
                const len = Math.hypot(300 - x, 230 - y) - 46;
                const ang = (Math.atan2(230 - y, 300 - x) * 180) / Math.PI;
                return (
                  <div key={name} className={s.hubItem} style={{ left: x, top: y, "--brand": brand, "--k": k } as React.CSSProperties}>
                    <span className={s.hubLine} style={{ width: len, transform: `rotate(${ang}deg)` }} />
                    <span className={s.hubChip}>
                      <Icon className="size-4" />
                      {name}
                    </span>
                  </div>
                );
              })}
              <div className={s.hubCore}>
                <Mark size={22} />
              </div>
            </div>
            {/* Phones: the same platforms as a tidy grid. */}
            <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
              {LOGOS.map(({ Icon, name, brand }) => (
                <li key={name} className="flex items-center gap-2.5 rounded-lg border border-white/[0.1] px-3 py-3 text-[14px]">
                  <Icon aria-hidden="true" className="size-4" style={{ color: brand }} />
                  {name}
                </li>
              ))}
            </ul>
            <p className="sr-only">Platforms: {LOGOS.map((l) => l.name).join(", ")}.</p>
          </div>
        </div>
        <ul aria-label="What we commit to" className="grid sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map(({ Icon, title, text }) => (
            <li key={title} data-spot className="flex gap-4 border-r border-b border-white/[0.13] px-6 py-7 last:border-r-0 lg:border-b-0">
              <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-(--hi)" />
              <p className="text-[14px] leading-5">
                <span className="block font-semibold text-white">{title}</span>
                <span className="text-(--muted)">{text}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <Band />
    </>
  );
}

