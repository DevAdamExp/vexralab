import Link from "next/link";
import { EMAIL, NAV, SERVICES, STUDIO_CITY } from "@/data/site";
import { Clock } from "./Clock";
import { CopyEmail } from "./CopyEmail";
import { Arrow, LiquidButton } from "./LiquidButton";
import { Logo } from "./Logo";
import { Mark } from "./Mark";
import { Seen, i } from "./Seen";
import { SocialIcons } from "./Social";
import { CONTAINER } from "./tokens";

/** Every page ends here: the invitation, the ways in, and the wordmark set huge. */
export function Footer({ invite = true }: { invite?: boolean }) {
  return (
    <footer className="relative overflow-hidden bg-void text-fg">
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 -left-40 size-[42rem] rounded-full bg-[radial-gradient(circle,rgb(7_80_86/0.55),transparent_68%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-20 -right-48 size-[34rem] rounded-full bg-[radial-gradient(circle,rgb(42_76_158/0.35),transparent_68%)]" />
      <div className={`${CONTAINER} relative pt-28 md:pt-40`}>
        {invite && (
          <Seen className="flex flex-col gap-12 border-b border-fg/12 pb-24 md:pb-32 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="label fade text-lamp">Got a project? ☕</p>
              <h2 className="rise mt-6 text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.95]" style={i(1)}>
                Pull up a <Mark>chair.</Mark>
              </h2>
            </div>
            <div className="rise flex flex-col items-start gap-6" style={i(2)}>
              <LiquidButton href="/contact" size="lg" variant="lamp">
                Start a project <Arrow />
              </LiquidButton>
              <CopyEmail email={EMAIL} />
            </div>
          </Seen>
        )}

        <div className="grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo className="self-start" />
            <p className="flex items-baseline gap-3 text-muted">
              <span className="display text-[34px] text-fg"><Clock /></span>
              <span>in {STUDIO_CITY} 🇵🇰</span>
            </p>
            <SocialIcons />
          </div>
          <FooterList title="Studio" className="lg:col-span-2 lg:col-start-7" items={[{ label: "Home", href: "/" }, ...NAV]} />
          <FooterList title="Services" className="lg:col-span-3" items={SERVICES.map((s) => ({ label: `${s.emoji}  ${s.name}`, href: `/services#${s.id}` }))} />
        </div>
      </div>

      <div aria-hidden="true" className="relative select-none overflow-hidden">
        <p className="hero-type translate-y-[18%] text-center text-[clamp(5rem,21vw,21rem)] tracking-[0.06em] text-fg/[0.06]">VEXRA</p>
      </div>
      <div className="relative border-t border-fg/10">
        <div className={`${CONTAINER} label flex flex-wrap items-center justify-between gap-4 py-6 text-[10px] text-muted`}>
          <span>© {new Date().getFullYear()} VexraLab</span>
          <span>Made with care and too much coffee ☕</span>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items, className = "" }: { title: string; items: { label: string; href: string }[]; className?: string }) {
  return (
    <nav aria-label={title} className={className}>
      <p className="label text-muted">{title}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((it) => (
          <li key={it.label}>
            <Link href={it.href} className="text-[16px] tracking-normal normal-case transition-colors hover:text-lamp">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
