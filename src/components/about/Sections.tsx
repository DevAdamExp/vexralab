import type { CSSProperties } from "react";
import Link from "next/link";
import { ALWAYS, BELIEFS, PAIRS, PEOPLE, QUESTIONS, WEEK, type Ritual } from "@/data/about";
import { STUDIO_CITY, STUDIO_TZ } from "@/data/site";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Clock } from "@/components/ui/Clock";
import { Arrow } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, DISPLAY, H3, LEDE, REGISTER, SECTION } from "@/components/ui/tokens";
import { Room } from "./Room";

/** Paper. The one orchestrated moment on load: label, headline, lede, then the room. */
export function Opening() {
  return (
    <section aria-labelledby="studio-title" className={`${REGISTER.paper} pt-32 pb-20 md:pt-44 md:pb-28`}>
      <div className={`${CONTAINER} grid gap-y-8 lg:grid-cols-12 lg:gap-x-8`}>
        <div className="lg:col-span-8">
          <p className="label load text-ink-muted" style={i(0)}>
            Studio
          </p>
          <h1 id="studio-title" className={`load mt-6 max-w-[13ch] ${DISPLAY}`} style={i(1)}>
            A small studio with a big{" "}
            <Mark gesture="highlight" onLoad delay={1100}>
              window.
            </Mark>
          </h1>
        </div>
        <p className={`load ${LEDE} text-ink-muted lg:col-span-4 lg:self-end`} style={i(2)}>
          VexraLab exists for one job: helping founders stop apologising for their website. We design and build the site you&rsquo;d be proud to send, then stay to keep it that way.
        </p>
      </div>
      <div className={`${CONTAINER} mt-14 md:mt-20`}>
        <Room className="load" style={i(4)} />
      </div>
    </section>
  );
}

/** Night. The founder's worry in their own voice, answered plainly. */
export function WhyWeExist() {
  return (
    <section aria-labelledby="why-title" className={`${REGISTER.night} ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          <ChapterHead id="why" label="Why we exist" register="night" className="lg:col-span-8">
            Every rule here started as a <Mark>worry.</Mark>
          </ChapterHead>
          <p className={`${LEDE} text-muted lg:col-span-4 lg:self-end`}>
            On the left, what founders carry into a new project. On the right, how the studio answers it.
          </p>
        </div>

        <div aria-hidden="true" className="label mt-16 hidden text-muted md:mt-24 md:grid md:grid-cols-12 md:gap-x-8">
          <span className="md:col-span-6">What you&rsquo;re thinking</span>
          <span className="md:col-span-5 md:col-start-8">What we do about it</span>
        </div>
        <ol className="mt-12 border-b border-fg/15 md:mt-6">
          {PAIRS.map((p) => (
            <Seen as="li" key={p.thought} threshold={0.4} className="draw grid gap-y-4 py-9 md:grid-cols-12 md:gap-x-8 md:py-12">
              <p className="voice rise text-[clamp(1.75rem,3.4vw,2.875rem)] leading-[1.08] text-fg/85 md:col-span-6">&ldquo;{p.thought}&rdquo;</p>
              <p className="rise flex gap-3 text-[clamp(1.125rem,1.6vw,1.5rem)] leading-snug font-medium md:col-span-5 md:col-start-8 md:self-center" style={i(2)}>
                <span aria-hidden="true" className="text-muted">
                  →
                </span>
                <span>{p.answer}</span>
              </p>
            </Seen>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Sea. Principles as a big type list; hover slides the line over a lamp stroke. */
export function Beliefs() {
  return (
    <section aria-labelledby="believe-title" className={`${REGISTER.sea} ${SECTION}`}>
      <div className={CONTAINER}>
        <ChapterHead id="believe" label="What we believe" register="sea">
          Six things we{" "}
          <Mark gesture="circle">won&rsquo;t</Mark> trade.
        </ChapterHead>
        <Seen as="ul" className="mt-16 border-t border-fg/20 md:mt-24">
          {BELIEFS.map((b, k) => (
            <li key={b.name} className="rise group grid gap-y-3 border-b border-fg/20 py-7 md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-9" style={i(k)}>
              <h3 className={`relative transition-transform duration-700 ease-water group-hover:translate-x-[1.1em] md:col-span-7 ${H3}`}>
                <span aria-hidden="true" className="absolute top-[0.52em] right-full mr-[0.3em] h-[0.08em] w-[0.8em] origin-right scale-x-0 bg-lamp transition-transform duration-700 ease-water group-hover:scale-x-100" />
                {b.name}
              </h3>
              <p className="max-w-[40ch] text-[17px] leading-relaxed text-fg/80 transition-colors duration-500 group-hover:text-fg md:col-span-4 md:col-start-9">{b.note}</p>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}

/** Belle. The studio week drawn as a strip: rituals sit on their days, the daily ones run across. */
export function StudioWeek() {
  const offset = new Intl.DateTimeFormat("en-GB", { timeZone: STUDIO_TZ, timeZoneName: "shortOffset" }).formatToParts(new Date()).find((p) => p.type === "timeZoneName")?.value;
  return (
    <section aria-labelledby="week-title" className={`${REGISTER.belle} ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <ChapterHead id="week" label="How the studio works" register="belle">
              The same week,{" "}
              <Mark gesture="highlight">every</Mark> week.
            </ChapterHead>
            <p className={`${LEDE} mt-8 text-ink-muted`}>A rhythm you can plan around. You always know when you&rsquo;ll see progress and when we need you.</p>
          </div>
          <div className="rounded-[20px] border border-ink/15 p-6 lg:col-span-4 lg:self-end">
            <p className="label flex items-center gap-2.5 text-ink-muted">
              <span className="lamp-dot" aria-hidden="true" /> Studio time
            </p>
            <p className="mt-3 text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-semibold tracking-[-0.03em]">
              <Clock />
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              {STUDIO_CITY}, {offset}. Studio hours are [09:00 to 18:00], Monday to Friday. We book Friday demos for your morning.
            </p>
          </div>
        </div>

        <Seen threshold={0.2} className="relative mt-16 md:mt-24">
          {/* The drawn strip: five column rules that wipe in. */}
          <div aria-hidden="true" className="absolute inset-0 hidden grid-cols-5 md:grid">
            {WEEK.map((d, k) => (
              <span key={d.day} className="wipe border-l border-ink/15 last:border-r" style={i(k)} />
            ))}
          </div>
          <ol className="relative grid md:grid-cols-5">
            {WEEK.map((d, k) => (
              <li key={d.day} className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-t border-ink/15 py-5 md:block md:border-t-0 md:px-3 md:py-0">
                <p className="label pt-1 text-ink-muted md:border-b md:border-ink/15 md:pt-0 md:pb-4">{d.day}</p>
                <div className="flex flex-col gap-3 md:min-h-[260px] md:py-4">
                  {d.rituals.length ? (
                    d.rituals.map((r, n) => <RitualCard key={r.name} r={r} style={i(k + n + 2)} />)
                  ) : (
                    <p className="fade pt-1 text-[14px] text-ink-muted md:pt-2" style={i(k + 2)}>
                      Heads down, building.
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <ul className="relative mt-2 grid gap-3 md:mx-3">
            {ALWAYS.map((r, k) => (
              <li key={r.name} className="rise flex flex-col gap-1 rounded-[16px] bg-ink px-5 py-4 text-fg md:flex-row md:items-baseline md:justify-between md:gap-8 md:rounded-full md:px-7" style={i(k + 6)}>
                <span className="flex items-baseline gap-3">
                  <span className="label text-[11px] text-muted">Mon to Fri</span>
                  <span className="text-[17px] font-semibold">{r.name}</span>
                </span>
                <span className="text-[15px] text-muted">{r.text}</span>
              </li>
            ))}
          </ul>
        </Seen>
      </div>
    </section>
  );
}

function RitualCard({ r, style }: { r: Ritual; style: CSSProperties }) {
  return (
    <article className="rise rounded-[16px] border border-ink/10 bg-paper p-4 md:p-5" style={style}>
      <p className="label text-[11px] text-ink-muted">{r.kind}</p>
      <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.01em]">{r.name}</h3>
      <p className="mt-1.5 text-[15px] leading-snug text-ink-muted">{r.text}</p>
    </article>
  );
}

const AVATAR = {
  sea: "bg-sea text-fg",
  ink: "bg-ink text-fg",
  lamp: "bg-lamp text-ink",
  belle: "bg-belle text-ink",
} as const;

/** Paper. PLACEHOLDER team (see PEOPLE in src/data/about.ts). Monograms drawn in CSS, no photos. */
export function People() {
  return (
    <section aria-labelledby="people-title" className={`${REGISTER.paper} ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          <ChapterHead id="people" label="The people" register="paper" className="lg:col-span-8">
            The hands on your <Mark gesture="highlight">project.</Mark>
          </ChapterHead>
          <p className={`${LEDE} text-ink-muted lg:col-span-4 lg:self-end`}>The people below are the people who do the work. You&rsquo;ll talk to them directly from the first call.</p>
        </div>
        <Seen as="ul" className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {PEOPLE.map((p, k) => (
            <li key={p.role} className="rise group" style={i(k)}>
              <div aria-hidden="true" className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[24px] ${AVATAR[p.tone]}`}>
                <span className="absolute size-[74%] rounded-full border border-current opacity-20 transition-transform duration-700 ease-water group-hover:scale-110" />
                <span className="absolute size-[52%] rounded-full border border-current opacity-15" />
                <span className="absolute inset-x-0 bottom-[16%] h-px bg-current opacity-20" />
                <span className="relative text-[clamp(4rem,9vw,6.5rem)] leading-none font-semibold tracking-[-0.05em]">{p.initials}</span>
              </div>
              <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.02em]">{p.name}</h3>
              <p className="label mt-1.5 text-[11px] text-ink-muted">{p.role}</p>
              <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-ink-muted">
                <span className="font-medium text-ink">At the desk: </span>
                {p.desk}
              </p>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}

/** Night. Native disclosure widgets: keyboard and no-JS friendly. */
export function Questions() {
  return (
    <section aria-labelledby="faq-title" className={`${REGISTER.belle} ${SECTION}`}>
      <div className={`${CONTAINER} grid gap-y-12 lg:grid-cols-12 lg:gap-x-8`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <ChapterHead id="faq" label="Questions" register="belle" h2ClassName="max-w-[11ch]">
              What founders ask <Mark>about us.</Mark>
            </ChapterHead>
            <p className={`${LEDE} mt-8 max-w-[36ch] text-ink-muted`}>
              Something else on your mind?{" "}
              <Link href="/contact" className="text-ink underline decoration-ink/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-sea">
                Ask us directly
              </Link>
              . A person replies.
            </p>
          </div>
        </div>
        <Seen className="border-b border-ink/15 lg:col-span-7">
          {QUESTIONS.map((item, k) => (
            <details key={item.q} className="draw group" style={i(k)}>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 md:py-7 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[clamp(1.25rem,2vw,1.625rem)] leading-tight font-medium tracking-[-0.015em]">{item.q}</h3>
                <span aria-hidden="true" className="relative grid size-10 shrink-0 place-items-center rounded-full border border-ink/25 transition-[transform,border-color] duration-500 ease-water group-open:rotate-45 group-hover:border-ink">
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-px bg-current" />
                </span>
              </summary>
              <div className="max-w-[58ch] pr-12 pb-8 text-[17px] leading-[1.65] text-ink-muted">
                <p>{item.a}</p>
                {item.link && (
                  <Link href={item.link.href} className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-ink transition-colors hover:text-sea">
                    {item.link.label} <Arrow />
                  </Link>
                )}
              </div>
            </details>
          ))}
        </Seen>
      </div>
    </section>
  );
}
