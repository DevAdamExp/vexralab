import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa6";
import { Blob } from "@/components/ui/Blob";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, DISPLAY, H2, MUTED, RULE, SECTION } from "@/components/ui/tokens";
import { Compare } from "@/components/work/Compare";
import { Browser, Plate } from "@/components/work/Frames";
import { AdminDay, BookingFlow, ReminderThread } from "@/components/work/Screens";
import { NewSite, OldSite } from "@/components/work/Sites";
import s from "@/components/work/work.module.css";
import { BUILT, FACTS, FIGURES, FINDINGS, FOUNDER, OLD_PROBLEMS, QUOTE, SAMPLE, WORRIES } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description: "A sample case study: how we would take a small clinic from a ringing phone to online booking, WhatsApp reminders and a calm morning.",
};

/** How far the opening's homepage hangs over into chapter 01. */
const HANG = "-mb-[clamp(3rem,15vw,13rem)]";
const UNDER_HANG = "pt-[calc(clamp(3rem,15vw,13rem)+2.5rem)]";

/** The diary entries sit loose on the page, like a night of thoughts. */
const INDENT = ["md:ml-0", "md:ml-[22%]", "md:ml-[10%]"];

/** Headline beside one short line: the opening every chapter shares. */
const HEAD_ROW = "grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-8";
const SIDE = "max-w-[32ch] text-[18px] leading-relaxed lg:col-span-4 lg:col-start-9 lg:pb-3";

/**
 * Registers, top to bottom: night → paper → sail → red → paper → night → sea → belle → night → sail → footer.
 * No two neighbours match, and every brand colour gets a chapter.
 */
export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Opening: headline, facts, and the new homepage as the hero plate. */}
        <section aria-labelledby="work-title" className="relative z-10 bg-void text-fg">
          <div aria-hidden="true" className={`${s.pour} absolute right-0 bottom-0 h-[30%] w-[78%] bg-sea md:h-[38%] md:w-[58%]`} />
          <div className={`${CONTAINER} pt-32 md:pt-44`}>
            <p className="load flex flex-wrap items-center gap-3">
              <span className="label text-muted">Case study</span>
              <span className="label inline-flex items-center gap-2 rounded-full border border-lamp/50 px-3 py-1.5 text-lamp">
                <span aria-hidden="true" className="lamp-dot" /> Sample
              </span>
            </p>
            <h1 id="work-title" className={`load mt-8 max-w-[14ch] ${DISPLAY}`} style={i(1)}>
              A clinic that stopped losing patients to a ringing{" "}
              <Mark onLoad delay={1100}>
                phone.
              </Mark>
            </h1>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-fg/15 pt-8 md:mt-20 md:grid-cols-4">
              {FACTS.map(([e, k, v], n) => (
                <div key={k} className="load" style={i(n + 2)}>
                  <dt className="label text-muted">
                    <span aria-hidden="true" className="mr-2">
                      {e}
                    </span>
                    {k}
                  </dt>
                  <dd className="mt-2.5 text-[16px] leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
            <div aria-hidden="true" className={`relative mt-14 md:mt-20 ${HANG} ${s.settle}`}>
              <Browser url="harbourphysio.example">
                <NewSite />
              </Browser>
            </div>
          </div>
        </section>

        {/* 01 The night before */}
        <section id="night-before" aria-labelledby="night-before-title" className="scroll-mt-24 bg-paper text-ink">
          <div className={`${CONTAINER} ${UNDER_HANG} pb-28 md:pb-40`}>
            <p className="label text-ink-muted">Above: the new homepage · {SAMPLE}</p>
            <ChapterHead id="night-before" num="01" label="🌙 The night before" register="paper" className="mt-24 md:mt-32">
              It&rsquo;s 2 AM. The clinic is still{" "}
              <Mark tone="red">open.</Mark>
            </ChapterHead>

            <Seen as="ol" aria-label={`${FOUNDER.name}'s diary, the night before (sample)`} className="mt-16 flex flex-col gap-10 md:mt-24 md:gap-14" threshold={0.15}>
              {WORRIES.map((w, k) => (
                <li key={w.time} className={`rise flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8 ${INDENT[k]}`} style={i(k)}>
                  <span className="label shrink-0 text-red md:w-24">{w.time}</span>
                  <p className="voice max-w-[22ch] text-[clamp(1.85rem,3.8vw,3.5rem)] leading-[1.08]">&ldquo;{w.text}&rdquo;</p>
                </li>
              ))}
            </Seen>

            <div className="mt-28 grid grid-cols-1 gap-12 md:mt-40 lg:grid-cols-12 lg:gap-8">
              <Seen className="lg:col-span-8">
                <Plate className="rise" caption="Before: the old homepage.">
                  <Browser url="harbourphysio.example">
                    <OldSite pins />
                  </Browser>
                </Plate>
              </Seen>
              <div className="lg:col-span-4 lg:pt-2">
                <h3 className="label text-ink-muted">What the old site said</h3>
                <Seen as="ol" className="mt-6 flex flex-col">
                  {OLD_PROBLEMS.map((p, k) => (
                    <li key={p} className={`rise flex items-center gap-4 border-t py-5 text-[19px] leading-snug ${RULE.paper}`} style={i(k)}>
                      <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-red font-ui text-[13px] font-bold text-fg">
                        {k + 1}
                      </span>
                      {p}
                    </li>
                  ))}
                </Seen>
              </div>
            </div>
          </div>
        </section>

        {/* 02 What we heard */}
        <section id="heard" aria-labelledby="heard-title" className={`relative scroll-mt-24 overflow-hidden bg-sail text-fg ${SECTION}`}>
          <div className={`${CONTAINER} grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8`}>
            <div className="relative z-10 lg:col-span-7">
              <ChapterHead id="heard" num="02" label="👂 What we heard" register="sail">
                A week of listening before a single pixel.
              </ChapterHead>
              <p className={`mt-8 max-w-[34ch] text-[18px] leading-relaxed ${MUTED.sail}`}>Calls with {FOUNDER.name}, her front desk and six patients.</p>
              <Seen as="ul" aria-label="What the Listen week found" className="mt-14 flex flex-col">
                {FINDINGS.map(([e, f], k) => (
                  <li key={f} className={`rise flex items-center gap-5 border-t py-6 last:border-b md:gap-7 ${RULE.sail}`} style={i(k)}>
                    <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full bg-lamp text-[22px] md:size-14 md:text-[26px]">
                      {e}
                    </span>
                    <span className="display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.15]">{f}</span>
                  </li>
                ))}
              </Seen>
            </div>
            <Blob
              tone="lamp"
              side="right"
              emoji="👂"
              className="-mr-5 ml-auto w-[80%] max-w-[560px] sm:-mr-8 lg:absolute lg:top-1/2 lg:right-[calc(50%-50vw)] lg:mr-0 lg:w-[42%] lg:-translate-y-1/2"
            />
          </div>
        </section>

        {/* 03 What we made: the index */}
        <section id="made" aria-labelledby="made-title" className={`scroll-mt-24 bg-red text-fg ${SECTION}`}>
          <div className={CONTAINER}>
            <ChapterHead id="made" num="03" label="🛠️ What we made" register="red">
              Three tools and a new front door.
            </ChapterHead>
            <Seen as="ol" className="mt-14 md:mt-20" threshold={0.2}>
              {BUILT.map((b, k) => (
                <li key={b.id} className={`rise border-t last:border-b ${RULE.red}`} style={i(k)}>
                  <a
                    href={`#${b.id}`}
                    className="group grid min-h-11 grid-cols-[2.75rem_1fr_auto] items-center gap-x-4 gap-y-1 py-5 focus-visible:outline-fg md:grid-cols-[5rem_3rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-6 md:py-7"
                  >
                    <span className="label text-fg/90 max-md:hidden">{b.num}</span>
                    <span aria-hidden="true" className="text-[26px] md:text-[30px]">
                      {b.emoji}
                    </span>
                    <span className="display text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.05] transition-transform duration-500 ease-water group-hover:translate-x-2">{b.name}</span>
                    <span className="col-start-2 text-[16px] text-fg/90 md:col-start-auto">{b.line}</span>
                    <span
                      aria-hidden="true"
                      className="col-start-3 row-span-2 row-start-1 grid size-11 place-items-center rounded-full border border-fg/40 transition-colors duration-300 group-hover:border-lamp group-hover:bg-lamp group-hover:text-ink md:col-start-auto md:row-span-1 md:row-start-auto"
                    >
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </Seen>
          </div>
        </section>

        {/* 03.1 Online booking */}
        <section id="booking" aria-labelledby="booking-title" className={`scroll-mt-24 overflow-hidden bg-paper text-ink ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="booking" num="03.1" label="📅 Online booking" register="paper" className="lg:col-span-8">
                Booked in under a <Mark tone="red">minute.</Mark>
              </ChapterHead>
              <p className={`${SIDE} text-ink-muted`}>Three screens, one thumb. Prices up front.</p>
            </div>
            <div className="mt-16 md:mt-24">
              <BookingFlow />
            </div>
            <p className="label mt-14 text-ink-muted">{SAMPLE}</p>
          </div>
        </section>

        {/* 03.2 Automatic reminders */}
        <section id="reminders" aria-labelledby="reminders-title" className={`relative scroll-mt-24 overflow-hidden bg-void text-fg ${SECTION}`}>
          {/* Sea poured in from the right edge, behind the phone. */}
          <div className="absolute right-0 bottom-[22%] w-[90%] max-w-[760px] lg:top-1/2 lg:bottom-auto lg:w-[44%] lg:-translate-y-1/2">
            <Blob tone="sea" side="right" />
          </div>
          <div className={`${CONTAINER} grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8`}>
            <div className="relative lg:col-span-6">
              <ChapterHead id="reminders" num="03.2" label="💬 Automatic reminders" register="night">
                The day before, the clinic texts <Mark>first.</Mark>
              </ChapterHead>
              <p className="mt-10 flex max-w-[36ch] items-center gap-4 text-[18px] leading-relaxed text-muted">
                <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full bg-sea text-fg">
                  <FaWhatsapp className="size-6" />
                </span>
                On WhatsApp at 10 AM. Reply 1 or 2.
              </p>
            </div>
            <div className="relative lg:col-span-5 lg:col-start-8">
              <Seen className="relative">
                <Plate className="rise mx-auto max-w-[330px]" tone="text-muted" caption="Sam moves a Thursday slot to Friday in two replies.">
                  <ReminderThread />
                </Plate>
              </Seen>
            </div>
          </div>
        </section>

        {/* 03.3 Admin view */}
        <section id="admin" aria-labelledby="admin-title" className={`scroll-mt-24 bg-sea text-fg ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="admin" num="03.3" label="🗂️ A simple admin view" register="sea" className="lg:col-span-8">
                One screen for the whole <Mark>day.</Mark>
              </ChapterHead>
              <p className={`${SIDE} ${MUTED.sea}`}>Who&rsquo;s coming, who confirmed, which gaps are filling.</p>
            </div>
            <Seen className="mt-14 md:mt-20">
              <Plate className="rise" tone={MUTED.sea} caption="One Thursday, seven slots, each with a status.">
                <AdminDay />
              </Plate>
            </Seen>
          </div>
        </section>

        {/* 04 The morning after */}
        <section id="morning" aria-labelledby="morning-title" className={`relative scroll-mt-24 overflow-hidden bg-paper-2 text-ink ${SECTION}`}>
          <div className={CONTAINER}>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              <ChapterHead id="morning" num="04" label="☀️ The morning after" register="belle" className="lg:col-span-6">
                A quiet phone, and a full <Mark tone="red">diary.</Mark>
              </ChapterHead>
              <Seen className="lg:col-span-5 lg:col-start-8">
                <div className="wipe relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/4] lg:aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/img/desk-window.jpg" alt="A desk by a window in calm morning light." loading="lazy" className="absolute inset-0 size-full object-cover object-[45%_50%]" />
                  <span className="label absolute bottom-5 left-5 rounded-full bg-void/75 px-4 py-2 text-fg backdrop-blur-md">07:40 AM</span>
                </div>
              </Seen>
            </div>

            <div className="mt-24 md:mt-36">
              <p className="label text-ink-muted">Sample figures · invented to show the shape of a result</p>
              <Seen as="dl" className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
                {FIGURES.map((f, k) => (
                  <div key={f.label} className={`rise flex flex-col-reverse gap-4 border-t pt-6 ${RULE.belle}`} style={i(k)}>
                    <dt className="text-[17px] text-ink-muted">{f.label}</dt>
                    <dd className="flex items-center gap-5 sm:flex-col sm:items-start">
                      <span aria-hidden="true" className="grid size-14 place-items-center rounded-full bg-lamp text-[26px]">
                        {f.emoji}
                      </span>
                      <span className="display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] text-red">{f.value}</span>
                    </dd>
                  </div>
                ))}
              </Seen>
            </div>

            <div className="relative mt-28 md:mt-40">
              <Seen as="figure" className="relative z-10 m-0 lg:ml-[16.66%]">
                <blockquote className="rise voice max-w-[22ch] text-[clamp(2rem,4.4vw,4rem)] leading-[1.08]">&ldquo;{QUOTE}&rdquo;</blockquote>
                <figcaption className="fade label mt-8 text-ink-muted" style={i(2)}>
                  {FOUNDER.name}, {FOUNDER.role} · Sample quote
                </figcaption>
              </Seen>
              <Blob
                tone="red"
                side="right"
                emoji="☕"
                className="mt-12 -mr-5 ml-auto w-[70%] max-w-[420px] sm:-mr-8 lg:absolute lg:top-1/2 lg:right-[calc(50%-50vw)] lg:mt-0 lg:mr-0 lg:w-[30%] lg:-translate-y-1/2"
              />
            </div>
          </div>
        </section>

        {/* 05 Before and after */}
        <section id="before-after" aria-labelledby="before-after-title" className={`scroll-mt-24 bg-void text-fg ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="before-after" num="05" label="🔁 Before and after" register="night" className="lg:col-span-8">
                Same clinic. A different first impression.
              </ChapterHead>
              <p className={`${SIDE} text-muted`}>Drag between the two.</p>
            </div>
            <figure className="m-0 mt-14 md:mt-20">
              <Compare />
              <figcaption className="label mt-6 text-muted">Old homepage left · new homepage right · {SAMPLE}</figcaption>
            </figure>
          </div>
        </section>

        {/* Closing */}
        <section aria-labelledby="next-title" className={`relative overflow-hidden bg-sail text-fg ${SECTION}`}>
          <Blob
            tone="sea"
            side="right"
            emoji="👋"
            className="mb-16 ml-auto w-[70%] max-w-[480px] lg:absolute lg:top-1/2 lg:right-0 lg:mb-0 lg:w-[36%] lg:-translate-y-1/2"
          />
          <Seen className={`${CONTAINER} z-10`}>
            <p className={`label fade ${MUTED.sail}`}>What&rsquo;s next</p>
            <h2 id="next-title" className={`rise mt-6 max-w-[16ch] ${H2}`} style={i(1)}>
              Your story could be the next <Mark>chapter.</Mark>
            </h2>
            <p className={`rise mt-8 text-[18px] ${MUTED.sail}`} style={i(2)}>
              This one is a sample. Yours could be real.
            </p>
            <div className="rise mt-12 flex flex-wrap gap-4" style={i(3)}>
              <LiquidButton href="/contact" variant="lamp" size="lg">
                Start a project <Arrow />
              </LiquidButton>
              <LiquidButton href="/services" variant="ghost-night" size="lg">
                See our services
              </LiquidButton>
            </div>
          </Seen>
        </section>
      </main>
      <Footer invite={false} />
    </>
  );
}
