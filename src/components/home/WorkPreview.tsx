import Link from "next/link";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Arrow } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, SECTION } from "@/components/ui/tokens";

const CHAPTERS = ["Online booking", "WhatsApp reminders", "A new website"];

/**
 * Chapter five: the work. One case study as a large plate (a sample, labelled as
 * such), drawn in code: the clinic's new homepage, with its booking screen on a phone.
 */
export function WorkPreview() {
  return (
    <section aria-labelledby="work-title" className="bg-paper-2 text-ink">
      <div className={`${CONTAINER} ${SECTION}`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <ChapterHead id="work" label="Selected work" register="paper" className="lg:col-span-8">
            Work that tells a <Mark tone="red">story.</Mark>
          </ChapterHead>
          <Seen className="lg:col-span-4">
            <p className="rise max-w-[30ch] text-[18px] leading-relaxed text-ink-muted">
              From a ringing phone to a quiet Thursday night. 📞 → 🌙
            </p>
          </Seen>
        </div>

        <Seen as="article" className="group relative mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12" threshold={0.2}>
          {/* The plate */}
          <div className="rise relative mb-[10%] lg:col-span-8">
            <div aria-hidden="true" className="absolute top-[14%] -right-3 bottom-[-6%] left-[18%] rounded-[28px] bg-sea md:-right-8" />
            <figure className="relative">
              <BrowserShot />
              <PhoneShot />
              <figcaption className="sr-only">Sample: the redesigned Harbour Physio homepage and its mobile booking screen.</figcaption>
            </figure>
          </div>

          <div className="rise flex flex-col lg:col-span-4" style={i(1)}>
            <p className="label text-ink-muted">Sample case study · Harbour Physio</p>
            <h3 className="mt-4 text-[clamp(2rem,3.2vw,3rem)] leading-[1.02] ">
              <Link href="/work" className="outline-none after:absolute after:inset-0 after:rounded-[28px] after:content-[''] focus-visible:after:outline-2 focus-visible:after:outline-ink">
                A clinic that stopped losing patients to a ringing phone.
              </Link>
            </h3>
            <ol className="mt-8 border-t border-ink/15">
              {CHAPTERS.map((c, k) => (
                <li key={c} className="flex items-baseline gap-4 border-b border-ink/15 py-3 text-[15px]">
                  <span className="label w-6 text-[11px] text-ink-muted">0{k + 1}</span>
                  {c}
                </li>
              ))}
            </ol>
            <span aria-hidden="true" className="mt-8 inline-flex min-h-12 items-center gap-3 self-start rounded-full bg-ink px-7 font-ui text-[12px] font-semibold tracking-[0.16em] uppercase text-fg transition-colors duration-300 group-hover:bg-red">
              Read the story <Arrow />
            </span>
            <p className="mt-6 text-[13px] text-ink-subtle">Sample project, fictional clinic.</p>
          </div>
        </Seen>
      </div>
    </section>
  );
}

function BrowserShot() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden rounded-[18px] bg-[#f7f4ef] shadow-[0_50px_90px_-40px_rgb(21_20_25/0.55)] ring-1 ring-ink/10 transition-transform duration-[1200ms] ease-water motion-safe:group-hover:-translate-y-1.5">
      <div className="flex items-center gap-2 border-b border-ink/8 bg-[#ece7df] px-4 py-3">
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="ml-4 rounded-full bg-[#f7f4ef] px-4 py-1 font-mono text-[10px] text-ink-muted">harbourphysio.example</span>
      </div>
      <div className="flex items-center justify-between px-[5%] py-[3%] text-[clamp(8px,1vw,13px)] font-semibold">
        <span className="flex items-center gap-2"><span className="size-[1.2em] rounded-full bg-sea" />Harbour Physio</span>
        <span className="hidden gap-[2.4em] font-medium text-ink-muted sm:flex"><span>Treatments</span><span>Team</span><span>Prices</span></span>
        <span className="rounded-full bg-sea px-[1.2em] py-[.6em] text-fg">Book an assessment</span>
      </div>
      <div className="grid grid-cols-[1.15fr_1fr] items-end gap-[4%] px-[5%] pt-[2%] pb-[5%]">
        <div>
          <p className="font-mono text-[clamp(6px,0.75vw,10px)] tracking-[0.2em] text-sea uppercase">Sports physio · Harbour Bay</p>
          <p className="display mt-[0.4em] text-[clamp(18px,3.6vw,52px)] leading-[0.98]">Back on the trail in six weeks.</p>
          <p className="mt-[0.9em] max-w-[34ch] text-[clamp(7px,0.95vw,13px)] leading-relaxed text-ink-muted">Same-week appointments and a plan you can follow at home. Book online in under a minute.</p>
          <div className="mt-[1.2em] flex gap-[0.6em] text-[clamp(7px,0.9vw,12px)] font-semibold">
            <span className="rounded-full bg-ink px-[1.2em] py-[.7em] text-fg">See this week&rsquo;s times</span>
            <span className="rounded-full px-[1.2em] py-[.7em] ring-1 ring-ink/25">Treatments</span>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[clamp(8px,1.2vw,16px)] bg-sea">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/desk-window.jpg" alt="" loading="lazy" className="absolute inset-0 size-full object-cover object-[60%_55%]" />
          <span className="absolute bottom-[6%] left-[6%] rounded-full bg-lamp px-[0.9em] py-[0.45em] font-ui text-[clamp(6px,0.75vw,10px)] font-semibold">⭐ 4.9 · [reviews]</span>
        </div>
      </div>
    </div>
  );
}

function PhoneShot() {
  const times = ["09:00", "10:30", "13:15", "16:45"];
  return (
    <div aria-hidden="true" className="absolute right-[4%] -bottom-[10%] w-[30%] max-w-[230px] min-w-[120px] rounded-[clamp(18px,2.4vw,32px)] bg-ink p-[3%] shadow-[0_40px_70px_-30px_rgb(21_20_25/0.7)] transition-transform duration-[1200ms] ease-water motion-safe:group-hover:-translate-y-4">
      <div className="flex flex-col gap-[0.7em] rounded-[clamp(14px,2vw,26px)] bg-[#f7f4ef] p-[9%] text-[clamp(6px,0.8vw,11px)] text-ink">
        <p className="font-mono tracking-[0.18em] text-sea uppercase">Step 2 of 3</p>
        <p className="display text-[1.6em] leading-[1.05]">Pick a time on Thursday</p>
        <div className="grid grid-cols-2 gap-[0.5em]">
          {times.map((t, k) => (
            <span key={t} className={`rounded-[0.8em] py-[0.8em] text-center font-semibold tabular-nums ${k === 1 ? "bg-sea text-fg" : "bg-ink/6"}`}>{t}</span>
          ))}
        </div>
        <span className="mt-[0.4em] rounded-full bg-lamp py-[0.9em] text-center font-semibold">Confirm 10:30</span>
      </div>
    </div>
  );
}
