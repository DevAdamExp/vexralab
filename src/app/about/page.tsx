import type { Metadata } from "next";
import { PiCalendarCheck, PiChatCircle, PiEnvelopeSimple, PiGithubLogo, PiLightning, PiLinkedinLogo, PiNotepad } from "react-icons/pi";
import { Clock } from "@/components/cc/Clock";
import { Mark } from "@/components/cc/Logo";
import { PageHead, Shell } from "@/components/cc/Page";
import { Band, Slash } from "@/components/cc/parts";
import s from "@/components/cc/cc.module.css";

export const metadata: Metadata = {
  title: "Studio",
  description: "VexraLab is a small team of data, CRM and ERP specialists. How we work, what we believe and who you'll work with.",
};

// [text, highlighted]: the four beliefs read as one sentence-led paragraph.
const MANIFESTO: [string, boolean][] = [
  ["We believe", false],
  ["process comes before tools.", true],
  ["We map how your business runs before we pick a platform.", false],
  ["Boring is good:", true],
  ["reliable systems your team uses every day beat clever ones nobody opens. We", false],
  ["show, not tell,", true],
  ["with a live demo every Friday. And", false],
  ["you own it,", true],
  ["every account, credential and line of config, in your name.", false],
];

const WEEK = [
  { day: "Mon", Icon: PiNotepad, name: "Plan", text: "What ships this week, in writing." },
  { day: "Tue-Thu", Icon: PiLightning, name: "Build", text: "Heads-down work on your system." },
  { day: "Fri", Icon: PiCalendarCheck, name: "Demo", text: "A live walkthrough on your data." },
  { day: "Fri", Icon: PiEnvelopeSimple, name: "Update", text: "A short written summary and next steps." },
  { day: "Daily", Icon: PiChatCircle, name: "Reply", text: "One shared channel, same-day answers." },
];

// PLACEHOLDER team: replace names, roles and links with the real people.
const TEAM = [
  { initials: "F", name: "[Founder name]", role: "Founder · Solutions lead" },
  { initials: "C", name: "[Team member]", role: "CRM specialist" },
  { initials: "E", name: "[Team member]", role: "ERP consultant" },
  { initials: "D", name: "[Team member]", role: "Data engineer" },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHead
        kicker="Studio"
        title={
          <>
            A small team that makes data <span className="text-(--hi)">simple</span>.
          </>
        }
        grey="Est. [year]."
        lede="We help growing businesses replace spreadsheets and disconnected tools with systems their teams actually trust."
        art={<Mark size={110} className="drop-shadow-[0_0_40px_rgb(111_211_199/0.25)]" />}
      />

      {/* Manifesto: one paragraph that lights up line by line as you read it. */}
      <section className={s.col} aria-labelledby="believe-title">
        <div className="border-b border-(--line) px-6 py-12 lg:px-12">
          <Slash>
            <span id="believe-title">what we believe.</span>
          </Slash>
        </div>
        <p className={`${s.manifesto} px-6 py-20 lg:px-12 lg:py-28`}>
          {MANIFESTO.flatMap(([text, hi], i) =>
            text.split(" ").map((w, j) => (
              <span key={`${i}-${j}`} className={`${s.word} ${hi ? s.wordHi : ""}`}>
                {w}{" "}
              </span>
            ))
          )}
        </p>
      </section>
      <Band />

      <section className={s.col} aria-labelledby="week-title">
        <div className="flex flex-col gap-4 border-b border-(--line) px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <Slash>
            <span id="week-title">a week with us.</span>
          </Slash>
          <p className={`${s.mono} text-[13px] text-white/55`}>
            Studio time <span className="text-white"><Clock /></span> · Pakistan, working worldwide
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
          {WEEK.map(({ day, Icon, name, text }) => (
            <li key={name} data-spot className="flex flex-col gap-4 border-r border-b border-(--line) px-6 py-9 lg:border-b-0 lg:last:border-r-0">
              <span className={`${s.mono} text-[12px] text-white/60`}>{day}</span>
              <Icon aria-hidden="true" className="size-6 text-(--hi)" />
              <p className="text-[20px] font-semibold tracking-[-0.01em]">{name}</p>
              <p className="text-[15px] leading-6 text-white/70">{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <Band />

      <section className={s.col} aria-labelledby="team-title">
        <div className="border-b border-(--line) px-6 py-12 lg:px-12">
          <Slash>
            <span id="team-title">who you’ll work with.</span>
          </Slash>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p, k) => (
            <li key={k} data-spot className="flex flex-col gap-5 border-r border-b border-(--line) px-6 py-9 lg:border-b-0 lg:last:border-r-0">
              <span aria-hidden="true" className={`grid size-16 place-items-center text-[24px] font-semibold ${k === 0 ? "bg-(--accent)" : "border border-(--line) bg-white/[0.04]"}`}>
                {p.initials}
              </span>
              <div>
                <p className="text-[18px] font-semibold">{p.name}</p>
                <p className="text-[14px] text-(--muted)">{p.role}</p>
              </div>
              <div className="mt-auto flex gap-2">
                <a href="#" aria-label={`${p.name} on LinkedIn`} className="grid size-9 place-items-center rounded-full border border-(--line) text-white/70 hover:text-white">
                  <PiLinkedinLogo aria-hidden="true" />
                </a>
                <a href="#" aria-label={`${p.name} on GitHub`} className="grid size-9 place-items-center rounded-full border border-(--line) text-white/70 hover:text-white">
                  <PiGithubLogo aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Band />
    </Shell>
  );
}
