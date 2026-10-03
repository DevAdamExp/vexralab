import type { Metadata } from "next";
import { PiCalendarCheck, PiChatCircle, PiEnvelopeSimple, PiGithubLogo, PiLightning, PiLinkedinLogo, PiNotepad } from "react-icons/pi";
import { Clock } from "@/components/cc/Clock";
import { PageHead, Shell } from "@/components/cc/Page";
import { Band, Slash } from "@/components/cc/parts";
import s from "@/components/cc/cc.module.css";

export const metadata: Metadata = {
  title: "Studio",
  description: "VexraLab is a small team of data, CRM and ERP specialists. How we work, what we believe and who you'll work with.",
};

const BELIEFS = [
  ["Process first, tools second.", "We map how your business runs before we pick a platform."],
  ["Boring is good.", "Reliable systems your team uses every day beat clever ones nobody opens."],
  ["Show, don't tell.", "A live demo every Friday. Progress you can click."],
  ["You own it.", "Every account, every credential, every line of config, in your name."],
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
            A small team that makes data <span className="text-[#7c97f0]">simple</span>.
          </>
        }
        grey="Est. [year]."
        lede="We help growing businesses replace spreadsheets and disconnected tools with systems their teams actually trust."
      />

      <section className={s.col} aria-labelledby="believe-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="believe-title">what we believe.</span>
          </Slash>
        </div>
        <ul className="grid lg:grid-cols-2">
          {BELIEFS.map(([b, t], k) => (
            <li key={b} className={`flex gap-5 border-b border-white/[0.13] px-6 py-10 lg:px-10 ${k % 2 === 0 ? "lg:border-r" : ""} ${k > 1 ? "lg:border-b-0" : ""}`}>
              <span className={`${s.mono} pt-1.5 text-[12px] text-[#7c97f0]`}>0{k + 1}</span>
              <p className="text-[22px] leading-[30px] text-[#a1a1aa]">
                <b className="font-semibold text-white">{b}</b> {t}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <Band />

      <section className={s.col} aria-labelledby="week-title">
        <div className="flex flex-col gap-4 border-b border-white/[0.13] px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <Slash>
            <span id="week-title">a week with us.</span>
          </Slash>
          <p className={`${s.mono} text-[13px] text-white/55`}>
            Studio time <span className="text-white"><Clock /></span> · Pakistan, working worldwide
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
          {WEEK.map(({ day, Icon, name, text }) => (
            <li key={name} className="flex flex-col gap-4 border-r border-b border-white/[0.13] px-6 py-9 lg:border-b-0 lg:last:border-r-0">
              <span className={`${s.mono} text-[12px] text-white/45`}>{day}</span>
              <Icon aria-hidden="true" className="size-6 text-[#7c97f0]" />
              <p className="text-[20px] font-semibold tracking-[-0.01em]">{name}</p>
              <p className="text-[15px] leading-6 text-white/70">{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <Band />

      <section className={s.col} aria-labelledby="team-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="team-title">who you’ll work with.</span>
          </Slash>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p, k) => (
            <li key={k} className="flex flex-col gap-5 border-r border-b border-white/[0.13] px-6 py-9 lg:border-b-0 lg:last:border-r-0">
              <span aria-hidden="true" className={`grid size-16 place-items-center text-[24px] font-semibold ${k === 0 ? "bg-[#2a4c9e]" : "border border-white/[0.13] bg-white/[0.04]"}`}>
                {p.initials}
              </span>
              <div>
                <p className="text-[18px] font-semibold">{p.name}</p>
                <p className="text-[14px] text-[#a1a1aa]">{p.role}</p>
              </div>
              <div className="mt-auto flex gap-2">
                <a href="#" aria-label={`${p.name} on LinkedIn`} className="grid size-9 place-items-center rounded-full border border-white/[0.13] text-white/70 hover:text-white">
                  <PiLinkedinLogo aria-hidden="true" />
                </a>
                <a href="#" aria-label={`${p.name} on GitHub`} className="grid size-9 place-items-center rounded-full border border-white/[0.13] text-white/70 hover:text-white">
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
