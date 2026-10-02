import { FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BELIEFS, PAIRS, PEOPLE, QUESTIONS, WEEK } from "@/data/about";
import { STUDIO_CITY } from "@/data/site";
import { Blob } from "@/components/ui/Blob";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Clock } from "@/components/ui/Clock";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { SocialIcons } from "@/components/ui/Social";
import { CONTAINER, DISPLAY, REGISTER, SECTION } from "@/components/ui/tokens";
import { Desk } from "./Desk";

/** Paper. One headline, one line, then the real desk. */
export function Opening() {
  return (
    <section aria-labelledby="studio-title" className={`${REGISTER.paper} pt-32 pb-20 md:pt-44 md:pb-28`}>
      <div className={`${CONTAINER} grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8`}>
        <div className="lg:col-span-8">
          <p className="label load flex items-center gap-3 text-ink-muted" style={i(0)}>
            <span className="inline-grid h-7 place-items-center rounded-full bg-red px-3 tracking-[0.08em] text-fg">Studio</span>
            Est. [year] 🇵🇰
          </p>
          <h1 id="studio-title" className={`load mt-6 max-w-[13ch] ${DISPLAY}`} style={i(1)}>
            A small studio with a big{" "}
            <Mark tone="red" onLoad delay={1100}>
              window.
            </Mark>
          </h1>
        </div>
        <p className="load max-w-[30ch] text-[18px] leading-relaxed text-ink-muted lg:col-span-4" style={i(2)}>
          We help founders stop apologising for their website.
        </p>
      </div>
      <div className="load mx-auto mt-14 w-full max-w-[1600px] px-3 sm:px-5 md:mt-20" style={i(4)}>
        <Desk />
      </div>
    </section>
  );
}

/** Night. The founder's worry, answered in one line. */
export function WhyWeExist() {
  return (
    <section aria-labelledby="why-title" className={`${REGISTER.night} ${SECTION}`}>
      <div className={CONTAINER}>
        <ChapterHead id="why" num="01" label="Why we exist" register="night">
          Every rule started as a <Mark>worry.</Mark>
        </ChapterHead>
        <ol className="mt-16 border-b border-fg/15 md:mt-24">
          {PAIRS.map((p) => (
            <Seen as="li" key={p.thought} threshold={0.4} className="draw grid gap-y-3 border-t border-fg/15 py-9 md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-12">
              <p className="voice rise text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.1] text-fg/80 md:col-span-7">&ldquo;{p.thought}&rdquo;</p>
              <p className="rise flex gap-3 text-[clamp(1.125rem,1.6vw,1.375rem)] md:col-span-5" style={i(2)}>
                <span aria-hidden="true" className="text-lamp">
                  →
                </span>
                {p.answer}
              </p>
            </Seen>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Sea. Five beliefs, names only. */
export function Beliefs() {
  return (
    <section aria-labelledby="believe-title" className={`${REGISTER.sea} ${SECTION}`}>
      <div className={CONTAINER}>
        <ChapterHead id="believe" num="02" label="What we believe" register="sea">
          Five things we <Mark gesture="circle">won&rsquo;t</Mark> trade.
        </ChapterHead>
        <Seen as="ul" className="mt-16 border-t border-fg/20 md:mt-24">
          {BELIEFS.map((b, k) => (
            <li key={b.name} className="rise flex items-baseline gap-5 border-b border-fg/20 py-7 md:gap-10 md:py-9" style={i(k)}>
              <span className="label w-8 shrink-0 text-lamp">0{k + 1}</span>
              <span className="display flex-1 text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.05]">{b.name}</span>
              <span aria-hidden="true" className="text-[clamp(1.5rem,3vw,2.5rem)]">
                {b.emoji}
              </span>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}

/** Sail. The week as a clean five-column strip, with the studio clock. */
export function StudioWeek() {
  return (
    <section aria-labelledby="week-title" className={`${REGISTER.sail} ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <ChapterHead id="week" num="03" label="How the week runs" register="sail">
            The same week, <Mark>every</Mark> week.
          </ChapterHead>
          <p className="flex items-baseline gap-3">
            <span className="display text-[clamp(2.75rem,5vw,4rem)] leading-none">
              <Clock />
            </span>
            <span className="label text-fg/85">in {STUDIO_CITY} 🇵🇰</span>
          </p>
        </div>
        <Seen as="ol" className="mt-16 grid grid-cols-2 border-t border-fg/25 sm:grid-cols-3 md:mt-24 lg:grid-cols-5">
          {WEEK.map((w, k) => (
            <li key={w.name} className="rise flex flex-col gap-4 border-b border-fg/25 py-8 pr-4 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0" style={i(k)}>
              <span aria-hidden="true" className="text-[2.25rem] leading-none">
                {w.emoji}
              </span>
              <span className="label text-fg/85">{w.when}</span>
              <h3 className="text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.1]">{w.name}</h3>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}

const MONO = { sea: "bg-sea text-fg", sail: "bg-sail text-fg", red: "bg-red text-fg", lamp: "bg-lamp text-ink" } as const;
const LINKS = [
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
  { key: "github", label: "GitHub", Icon: FaGithub },
  { key: "dribbble", label: "Dribbble", Icon: FaDribbble },
] as const;

/** Paper. PLACEHOLDER team (see PEOPLE in src/data/about.ts). */
export function People() {
  return (
    <section aria-labelledby="people-title" className={`${REGISTER.paper} ${SECTION} relative overflow-hidden`}>
      <div className="absolute top-24 -right-4 w-[46vw] max-w-[520px] md:top-32 max-sm:hidden">
        <Blob tone="sail" side="right" emoji="👋" />
      </div>
      <div className={CONTAINER}>
        <ChapterHead id="people" num="04" label="The people" register="paper" h2ClassName="max-w-[11ch]">
          The hands on your <Mark tone="red">project.</Mark>
        </ChapterHead>
        <Seen as="ul" className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 md:mt-24 lg:grid-cols-4">
          {PEOPLE.map((p, k) => (
            <li key={p.role} className="rise rounded-[20px] bg-paper-2 p-3 pb-4 sm:rounded-[24px] sm:p-4 sm:pb-5" style={i(k)}>
              <div aria-hidden="true" className={`grid aspect-square place-items-center rounded-[18px] ${MONO[p.tone]}`}>
                <span className="display text-[clamp(3rem,8vw,6rem)] leading-none">{p.initials}</span>
              </div>
              <h3 className="mt-4 px-1 text-[20px] leading-tight sm:mt-5 sm:text-[24px]">{p.name}</h3>
              <p className="label mt-2 px-1 text-ink-muted">{p.role}</p>
              <ul className="mt-3 -ml-1.5 flex flex-wrap">
                {LINKS.map(({ key, label, Icon }) => (
                  <li key={key}>
                    <a
                      href={p.links[key]}
                      aria-label={`${p.name} on ${label}`}
                      className="grid size-11 place-items-center rounded-full text-ink transition-colors duration-500 hover:bg-sea hover:text-fg"
                    >
                      <Icon aria-hidden="true" className="size-[17px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}

/** Night strip. Every platform with its own logo. */
export function FindUs() {
  return (
    <section aria-labelledby="find-title" className={`${REGISTER.night} py-28 md:py-40`}>
      <Seen className={`${CONTAINER} flex flex-col gap-10 md:flex-row md:items-end md:justify-between`}>
        <div>
          <p className="label fade text-lamp">Find us 📍</p>
          <h2 id="find-title" className="rise mt-5 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]" style={i(1)}>
            Say hello <Mark>anywhere.</Mark>
          </h2>
        </div>
        <div className="rise" style={i(2)}>
          <SocialIcons tone="night" />
        </div>
      </Seen>
    </section>
  );
}

/** Belle. Native disclosure widgets: keyboard and no-JS friendly. */
export function Questions() {
  return (
    <section aria-labelledby="faq-title" className={`${REGISTER.belle} ${SECTION} relative overflow-hidden`}>
      <div className="absolute bottom-16 -left-4 w-[40vw] max-w-[440px] max-lg:hidden">
        <Blob tone="red" side="left" emoji="💬" />
      </div>
      <div className={`${CONTAINER} grid gap-y-12 lg:grid-cols-12 lg:gap-x-8`}>
        <div className="flex flex-col items-start gap-10 lg:col-span-5">
          <ChapterHead id="faq" num="05" label="Questions" register="belle" h2ClassName="max-w-[10ch]">
            What founders <Mark tone="red">ask.</Mark>
          </ChapterHead>
          <LiquidButton href="/contact" variant="lamp">
            Ask us directly <Arrow />
          </LiquidButton>
        </div>
        <Seen className="border-b border-ink/15 lg:col-span-7">
          {QUESTIONS.map((item, k) => (
            <details key={item.q} className="draw group border-t border-ink/15" style={i(k)}>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 md:py-7 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight">{item.q}</h3>
                <span aria-hidden="true" className="relative grid size-11 shrink-0 place-items-center rounded-full border border-ink/25 transition-[transform,border-color,background-color] duration-500 ease-water group-open:rotate-45 group-open:border-red group-open:bg-red group-open:text-fg group-hover:border-ink">
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-px bg-current" />
                </span>
              </summary>
              <p className="max-w-[48ch] pr-12 pb-8 text-[17px] leading-[1.65] text-ink-muted">{item.a}</p>
            </details>
          ))}
        </Seen>
      </div>
    </section>
  );
}
