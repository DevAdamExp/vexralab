import type { Metadata } from "next";
import { ChapterHead } from "@/components/ui/ChapterHead";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, DISPLAY, H2, LEDE, MUTED, RULE, SECTION } from "@/components/ui/tokens";
import { Compare } from "@/components/work/Compare";
import { Browser, Plate } from "@/components/work/Frames";
import { AdminDay, BookingFlow, NotesCard, ReminderThread } from "@/components/work/Screens";
import { NewSite, OldSite } from "@/components/work/Sites";
import s from "@/components/work/work.module.css";
import { BUILT, FACTS, FIGURES, FINDINGS, FOUNDER, OLD_PROBLEMS, OUTCOMES, QUOTE, SAMPLE, WORRIES } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A sample case study, told in chapters: how we would take a small clinic from a ringing phone and a template website to online booking, automatic reminders and a calm morning.",
};

/** How far the opening's homepage hangs over into chapter 01. */
const HANG = "-mb-[clamp(3rem,15vw,13rem)]";
const UNDER_HANG = "pt-[calc(clamp(3rem,15vw,13rem)+2.5rem)]";

/** The diary entries sit loose on the page, like a night of thoughts. */
const INDENT = ["md:ml-0", "md:ml-[18%]", "md:ml-[6%]", "md:ml-[32%]", "md:ml-[12%]"];

/** Headline beside a lede: the opening most chapters share. */
const HEAD_ROW = "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8";
const SIDE = "lg:col-span-5 lg:col-start-8 lg:pt-20";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Opening: the clinic, named and shown. */}
        <section aria-labelledby="work-title" className="relative z-10 bg-night text-fg">
          <div aria-hidden="true" className={`${s.pour} absolute right-0 bottom-0 h-[30%] w-[78%] bg-sea md:h-[36%] md:w-[56%]`} />
          <div className={`${CONTAINER} pt-32 md:pt-44`}>
            <p className="label load text-muted">Case study · Sample</p>
            <h1 id="work-title" className={`load mt-6 max-w-[15ch] ${DISPLAY}`} style={i(1)}>
              A clinic that stopped losing patients to a ringing{" "}
              <Mark gesture="underline" onLoad delay={1100}>
                phone.
              </Mark>
            </h1>
            <p className="load mt-8 inline-flex max-w-full items-start gap-3 rounded-2xl border border-fg/20 px-4 py-2.5 text-[14px] leading-snug text-fg md:rounded-full" style={i(2)}>
              <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-fg/70" />
              {SAMPLE}.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              <p className={`load ${LEDE} text-muted lg:col-span-6`} style={i(3)}>
                Harbour Physio is a small sports clinic. Its founder, {FOUNDER.name}, was losing new patients to a phone she couldn&rsquo;t answer mid-session.
                This is how we would fix that, chapter by chapter: what we heard, what we made, and the morning after.
              </p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 text-[15px] lg:col-span-5 lg:col-start-8">
                {FACTS.map(([k, v], n) => (
                  <div key={k} className="load" style={i(n + 4)}>
                    <dt className="label text-muted">{k}</dt>
                    <dd className="mt-2 leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div aria-hidden="true" className={`relative mt-14 md:mt-20 ${HANG} ${s.settle}`}>
              <Browser url="harbourphysio.example">
                <NewSite />
              </Browser>
            </div>
          </div>
        </section>

        {/* 01 The night before */}
        <section id="night-before" aria-labelledby="night-before-title" className="scroll-mt-24 bg-paper text-ink">
          <div className={`${CONTAINER} ${UNDER_HANG} pb-24 md:pb-36`}>
            <p className="max-w-[70ch] text-[14px] leading-relaxed text-ink-muted">
              Above: the new Harbour Physio homepage, drawn in code. <span className="label mt-1.5 block text-[11px] tracking-[0.16em]">{SAMPLE}</span>
            </p>
            <div className={`mt-20 md:mt-28 ${HEAD_ROW}`}>
              <ChapterHead id="night-before" num="01" label="The night before" register="paper" className="lg:col-span-7">
                It&rsquo;s 2 AM, and the clinic is still <Mark gesture="highlight">open.</Mark>
              </ChapterHead>
              <p className={`${LEDE} text-ink-muted ${SIDE}`}>
                {FOUNDER.name} is good at her job. Her patients get better. But every evening ends the same way: on the phone, in the inbox, and worrying about a
                website she&rsquo;d rather nobody saw.
              </p>
            </div>

            <Seen as="ol" aria-label="Amina's diary, the night before (sample)" className="mt-16 flex flex-col gap-9 md:mt-24 md:gap-12" threshold={0.15}>
              {WORRIES.map((w, k) => (
                <li key={w.time} className={`rise flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8 ${INDENT[k]}`} style={i(k)}>
                  <span className="label shrink-0 text-ink-muted md:w-24">{w.time}</span>
                  <p className="voice max-w-[24ch] text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.1]">&ldquo;{w.text}&rdquo;</p>
                </li>
              ))}
            </Seen>
            <p className="label mt-10 text-[11px] text-ink-muted">Sample diary · written for this case study</p>

            <div className="mt-24 grid grid-cols-1 gap-12 md:mt-32 lg:grid-cols-12 lg:gap-8">
              <Seen className="lg:col-span-8">
                <Plate
                  className="rise"
                  caption="Before: the old Harbour Physio homepage. A template with a welcome headline, five competing buttons, and a phone number as the only way to book."
                >
                  <Browser url="harbourphysio.example">
                    <OldSite pins />
                  </Browser>
                </Plate>
              </Seen>
              <div className="lg:col-span-4 lg:pt-4">
                <h3 className="label text-ink-muted">What the old site said</h3>
                <Seen as="ol" className="mt-6 flex flex-col">
                  {OLD_PROBLEMS.map((p, k) => (
                    <li key={p} className={`rise flex gap-4 border-t py-5 text-[17px] leading-snug ${RULE.paper}`} style={i(k)}>
                      <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-lamp text-[13px] font-bold text-ink">
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
        <section id="heard" aria-labelledby="heard-title" className={`scroll-mt-24 bg-night text-fg ${SECTION}`}>
          <div className={`${CONTAINER} grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-7">
              <ChapterHead id="heard" num="02" label="What we heard" register="night">
                A week of listening before a single pixel.
              </ChapterHead>
              <p className={`${LEDE} mt-8 text-muted`}>
                Every project starts with a Listen week. Five days of calls with {FOUNDER.name}, her front desk and six of her patients. No designs yet. Just questions.
              </p>
              <Seen as="ol" aria-label="What the Listen week found" className="mt-12 flex flex-col">
                {FINDINGS.map((f, k) => (
                  <li key={f} className={`rise grid grid-cols-[2.75rem_1fr] gap-4 border-t py-6 md:grid-cols-[4rem_1fr] ${RULE.night}`} style={i(k)}>
                    <span className="label pt-1.5 text-muted">0{k + 1}</span>
                    <span className="text-[clamp(1.2rem,1.9vw,1.5rem)] leading-snug tracking-[-0.01em]">{f}</span>
                  </li>
                ))}
              </Seen>
            </div>
            <Seen className="lg:col-span-5 lg:pt-32">
              <figure className="rise m-0 mx-auto max-w-[460px] px-2" style={i(1)}>
                <NotesCard />
                <figcaption className="mt-8 text-[14px] leading-relaxed text-muted">
                  Notes from an interview with the founder, day two of the Listen week.
                  <span className="label mt-1.5 block text-[11px] tracking-[0.16em]">{SAMPLE}</span>
                </figcaption>
              </figure>
            </Seen>
          </div>
        </section>

        {/* 03 What we made: the index */}
        <section id="made" aria-labelledby="made-title" className={`scroll-mt-24 bg-sea text-fg ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="made" num="03" label="What we made" register="sea" className="lg:col-span-7">
                Four pieces, each one giving an evening back.
              </ChapterHead>
              <p className={`${LEDE} ${MUTED.sea} ${SIDE}`}>Everything here came out of the Listen week. Each piece takes away a job {FOUNDER.name} was doing by hand.</p>
            </div>
            <Seen as="ol" className="mt-14 md:mt-20" threshold={0.2}>
              {BUILT.map((b, k) => (
                <li key={b.id} className={`rise border-t last:border-b ${RULE.sea}`} style={i(k)}>
                  <a
                    href={`#${b.id}`}
                    className="group grid min-h-11 grid-cols-[3.75rem_1fr_auto] items-center gap-x-4 gap-y-1 py-5 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-8 md:py-7"
                  >
                    <span className="label text-fg/80">{b.num}</span>
                    <span className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.025em] transition-transform duration-500 ease-water group-hover:translate-x-2">
                      {b.name}
                    </span>
                    <span className="col-start-2 text-[15px] leading-relaxed text-fg/80 md:col-start-auto md:text-[16px]">{b.line}</span>
                    <span
                      aria-hidden="true"
                      className="col-start-3 row-span-2 row-start-1 grid size-11 place-items-center rounded-full border border-fg/30 transition-colors duration-300 group-hover:border-lamp group-hover:bg-lamp group-hover:text-ink md:col-start-auto md:row-span-1 md:row-start-auto"
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
              <ChapterHead id="booking" num="03.1" label="Online booking" register="paper" className="lg:col-span-7">
                Booked in under a <Mark gesture="highlight">minute.</Mark>
              </ChapterHead>
              <p className={`${LEDE} text-ink-muted ${SIDE}`}>
                Three screens, one thumb. Patients see the price up front and only the slots that are really free. No call, and no waiting for a reply.
              </p>
            </div>
            <div className="mt-16 md:mt-24">
              <BookingFlow />
            </div>
            <p className="label mt-12 text-[11px] tracking-[0.16em] text-ink-muted">{SAMPLE}</p>
          </div>
        </section>

        {/* 03.2 Automatic reminders */}
        <section id="reminders" aria-labelledby="reminders-title" className={`scroll-mt-24 overflow-hidden bg-night text-fg ${SECTION}`}>
          <div className={`${CONTAINER} grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-5">
              <ChapterHead id="reminders" num="03.2" label="Automatic reminders" register="night">
                The day before, the clinic texts first.
              </ChapterHead>
              <p className={`${LEDE} mt-8 text-muted`}>
                A WhatsApp or SMS goes out at ten in the morning. Patients reply with one number to confirm or move. A freed slot goes straight to the waiting list.
              </p>
              <Seen as="ul" className="mt-10 flex flex-col text-[16px]">
                {["Sent the day before, at 10 AM", "Reply 1 or 2. Nothing to install", "Moved slots offered to the waiting list"].map((f, k) => (
                  <li key={f} className={`rise border-t py-4 ${RULE.night}`} style={i(k)}>
                    {f}
                  </li>
                ))}
              </Seen>
            </div>
            <div className="relative lg:col-span-6 lg:col-start-7">
              <div aria-hidden="true" className="absolute inset-x-[8%] top-[14%] bottom-[18%] rounded-[44%_56%_48%_52%] bg-sea md:inset-x-[14%]" />
              <Seen className="relative">
                <Plate
                  className="rise mx-auto max-w-[340px]"
                  tone="text-muted"
                  caption="A reminder thread: Sam moves a Thursday follow-up to Friday in two replies, and the old slot goes to the waiting list."
                >
                  <ReminderThread />
                </Plate>
              </Seen>
            </div>
          </div>
        </section>

        {/* 03.3 Admin view */}
        <section id="admin" aria-labelledby="admin-title" className={`scroll-mt-24 bg-belle text-ink ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="admin" num="03.3" label="A simple admin view" register="belle" className="lg:col-span-7">
                One screen for the whole day.
              </ChapterHead>
              <p className={`${LEDE} text-ink-muted ${SIDE}`}>
                {FOUNDER.name} opens one page in the morning. Who&rsquo;s coming, who confirmed, and which gaps are already being filled. Status, not spreadsheets.
              </p>
            </div>
            <Seen className="mt-14 md:mt-20">
              <Plate
                className="rise"
                caption="The admin day view for one Thursday: seven slots, each with a status. Confirmed, waiting for a reply, moved by the patient, booked online, or open and offered to the waiting list."
              >
                <AdminDay />
              </Plate>
            </Seen>
          </div>
        </section>

        {/* 04 The morning after */}
        <section id="morning" aria-labelledby="morning-title" className={`scroll-mt-24 bg-paper text-ink ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="morning" num="04" label="The morning after" register="paper" className="lg:col-span-7">
                A quiet phone, and a full <Mark gesture="highlight">diary.</Mark>
              </ChapterHead>
              <p className={`${LEDE} text-ink-muted ${SIDE}`}>Nothing dramatic changed. The clinic just stopped leaking. Here is how the mornings feel now.</p>
            </div>
            <Seen as="ul" className="mt-14 md:mt-20" threshold={0.2}>
              {OUTCOMES.map((o, k) => (
                <li key={o} className={`rise border-t py-6 text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.15] font-semibold tracking-[-0.02em] last:border-b ${RULE.paper}`} style={i(k)}>
                  {o}
                </li>
              ))}
            </Seen>

            <div className="mt-24 md:mt-32">
              <h3 className="label text-ink-muted">Sample figures</h3>
              <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-ink-muted">Invented to show the shape of a result. Not a real client, and not a real outcome.</p>
              <Seen as="dl" className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
                {FIGURES.map((f, k) => (
                  <div key={f.label} className="rise flex flex-col-reverse gap-3" style={i(k)}>
                    <dt className="max-w-[24ch] text-[16px] leading-snug text-ink-muted">{f.label}</dt>
                    <dd className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.04em]">{f.value}</dd>
                  </div>
                ))}
              </Seen>
            </div>

            <Seen as="figure" className="m-0 mt-24 md:mt-36 lg:ml-[16.66%]">
              <blockquote className="rise voice max-w-[28ch] text-[clamp(2rem,4.4vw,4rem)] leading-[1.08]">&ldquo;{QUOTE}&rdquo;</blockquote>
              <figcaption className="fade mt-8 text-[15px] text-ink-muted" style={i(2)}>
                {FOUNDER.name}, {FOUNDER.role} (fictional)
                <span className="label mt-1.5 block text-[11px] tracking-[0.16em]">Sample quote</span>
              </figcaption>
            </Seen>
          </div>
        </section>

        {/* 05 Before and after */}
        <section id="before-after" aria-labelledby="before-after-title" className={`scroll-mt-24 bg-night text-fg ${SECTION}`}>
          <div className={CONTAINER}>
            <div className={HEAD_ROW}>
              <ChapterHead id="before-after" num="05" label="Before and after" register="night" className="lg:col-span-7">
                Same clinic. A different first impression.
              </ChapterHead>
              <p className={`${LEDE} text-muted ${SIDE}`}>One homepage made people call. The other lets them book. Drag between the two.</p>
            </div>
            <figure className="m-0 mt-14 md:mt-20">
              <Compare />
              <figcaption className="mt-6 max-w-[70ch] text-[14px] leading-relaxed text-muted">
                Left of the handle, the old template homepage. Right of it, the new one. Drag, or focus the slider and use the arrow keys.
                <span className="label mt-1.5 block text-[11px] tracking-[0.16em]">{SAMPLE}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Closing */}
        <section aria-labelledby="next-title" className={`bg-belle text-ink ${SECTION}`}>
          <Seen className={CONTAINER}>
            <p className="label fade text-ink-muted">What&rsquo;s next</p>
            <h2 id="next-title" className={`rise mt-6 max-w-[16ch] ${H2}`} style={i(1)}>
              Your story could be the next <Mark gesture="underline" tone="sea">chapter.</Mark>
            </h2>
            <p className={`rise mt-8 ${LEDE} text-ink-muted`} style={i(2)}>
              This page is a sample. The next one could be real: your 2 AM, your business, and the morning after.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-4" style={i(3)}>
              <LiquidButton href="/contact" variant="ink" size="lg">
                Start a project <Arrow />
              </LiquidButton>
              <LiquidButton href="/services" variant="ghost-paper" size="lg">
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
