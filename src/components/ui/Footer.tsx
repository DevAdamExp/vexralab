import Link from "next/link";
import { EMAIL, NAV, SERVICES, SOCIALS, STUDIO_CITY } from "@/data/site";
import { Clock } from "./Clock";
import { CopyEmail } from "./CopyEmail";
import { Arrow, LiquidButton } from "./LiquidButton";
import { Mark } from "./Mark";
import { Seen, i } from "./Seen";
import { CONTAINER } from "./tokens";

/**
 * Every page ends here, at night, with the lamp on. The invitation, the ways in,
 * and the wordmark resting on the horizon like the ridge outside the window.
 */
export function Footer({ invite = true }: { invite?: boolean }) {
  return (
    <footer className="relative overflow-hidden bg-night text-fg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_78%_18%,rgb(246_187_2/0.10),transparent_70%)]" />
      <div className={`${CONTAINER} pt-24 md:pt-36`}>
        {invite && (
          <Seen className="grid gap-12 border-b border-fg/12 pb-20 md:pb-28 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label fade flex items-center gap-3 text-muted">
                <span className="lamp-dot" aria-hidden="true" /> It&rsquo;s late. The lamp&rsquo;s still on.
              </p>
              <h2 className="rise mt-6 text-[clamp(3.25rem,8.4vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]" style={i(1)}>
                Pull up a <Mark gesture="underline">chair.</Mark>
              </h2>
            </div>
            <div className="rise flex flex-col items-start gap-6 lg:col-span-4" style={i(2)}>
              <p className="max-w-[36ch] text-[18px] leading-relaxed text-muted">
                Tell us what&rsquo;s keeping you up. A real person replies within one working day, with honest next steps, even if that&rsquo;s &ldquo;you don&rsquo;t need us yet.&rdquo;
              </p>
              <LiquidButton href="/contact" size="lg">
                Start a project <Arrow />
              </LiquidButton>
              <CopyEmail email={EMAIL} />
            </div>
          </Seen>
        )}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label text-muted">Studio time</p>
            <p className="mt-3 text-[40px] font-semibold tracking-[-0.03em]">
              <Clock /> <span className="text-[15px] font-normal tracking-normal text-muted">in {STUDIO_CITY}</span>
            </p>
            <p className="mt-2 max-w-[30ch] text-[15px] text-muted">We work with founders across time zones. Friday demos land in your morning.</p>
          </div>
          <FooterList title="Pages" className="lg:col-span-2 lg:col-start-6" items={[{ label: "Home", href: "/" }, ...NAV]} />
          <FooterList title="Services" className="lg:col-span-3" items={SERVICES.map((s) => ({ label: s.name, href: `/services#${s.id}` }))} />
          <FooterList title="Elsewhere" className="lg:col-span-2" items={SOCIALS} external />
        </div>
      </div>

      <div aria-hidden="true" className="relative select-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[55%] w-full">
          <path d="M0 120V70l160-40 140 30 200-55 170 50 150-25 210 45 170-35 240 30V120Z" fill="var(--color-sea)" opacity=".5" />
        </svg>
        <p className="relative text-center text-[clamp(4.5rem,21vw,22rem)] leading-[0.78] font-bold tracking-[-0.06em] text-fg/[0.07]">VexraLab</p>
      </div>
      <div className="relative bg-sea/50">
        <div className={`${CONTAINER} flex flex-wrap items-center justify-between gap-4 py-5 text-[13px] text-fg/80`}>
          <span>© {new Date().getFullYear()} VexraLab. Design and engineering studio.</span>
          <span className="label text-[11px]">Built slowly, on purpose.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items, className = "", external = false }: { title: string; items: { label: string; href: string }[]; className?: string; external?: boolean }) {
  return (
    <nav aria-label={title} className={className}>
      <p className="label text-muted">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((it) => (
          <li key={it.label}>
            {external ? (
              <a href={it.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[16px] transition-colors hover:text-lamp">
                {it.label} <span aria-hidden="true" className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lamp">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link href={it.href} className="text-[16px] transition-colors hover:text-lamp">
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
