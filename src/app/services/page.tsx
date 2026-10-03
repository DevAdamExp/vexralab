import type { Metadata } from "next";
import Link from "next/link";
import { PiCaretRight, PiCheck } from "react-icons/pi";
import { Faq } from "@/components/cc/Bottom";
import { PageHead, Shell } from "@/components/cc/Page";
import { Glyph } from "@/components/cc/Glyph";
import { Band, Slash } from "@/components/cc/parts";
import s from "@/components/cc/cc.module.css";
import { SERVICES } from "@/data/vx";

export const metadata: Metadata = {
  title: "Services",
  description: "CRM implementation, ERP setup, data pipelines, dashboards, automation, migration and ongoing care from VexraLab.",
};

const MODELS = [
  { name: "Project", fit: "One clear goal, like a CRM rollout or a new dashboard.", terms: "Fixed price, paid in milestones.", accent: true },
  { name: "Partnership", fit: "A roadmap of improvements across your systems.", terms: "Monthly, cancel with [30] days notice." },
  { name: "Sprint", fit: "A focused fix: a broken sync, a report, a migration.", terms: "[1-2] weeks, one price." },
];

export default function ServicesPage() {
  return (
    <Shell>
      <PageHead
        kicker="Services"
        title={
          <>
            Seven ways we make your data <span className="text-(--hi)">work</span>.
          </>
        }
        grey="One partner, base to end."
        lede="From the first lead in your CRM to the last line of your accounts. Pick one service or let us run the whole stack."
        action={{ label: "Book a call", href: "/contact" }}
      />

      {/* Index */}
      <section className={s.col} aria-labelledby="index-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="index-title">what we do.</span>
          </Slash>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((x, k) => (
            <li key={x.id} data-spot className="border-r border-b border-white/[0.13]">
              <a href={`#${x.id}`} data-glyph-host className="group flex h-full flex-col gap-7 px-6 py-8 transition-colors hover:bg-white/[0.03]">
                <span className="flex items-start justify-between">
                  <span className={s.rowNum}>0{k + 1}</span>
                  <Glyph id={x.id} size={6} />
                </span>
                <span>
                  <span className="block text-[18px] text-white">{x.name}</span>
                  <span className={`${s.mono} mt-1 block text-[13px] text-white/60`}>{x.tag}</span>
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] text-(--muted) group-hover:text-white">
                  Details <PiCaretRight aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
          <li className="flex flex-col justify-between gap-6 border-b border-white/[0.13] bg-(--accent) px-6 py-7">
            <span className="text-[18px] leading-6 text-white">Not sure where to start?</span>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white underline underline-offset-4">
              Get a free audit <PiCaretRight aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </section>
      <Band />

      {/* One block per service */}
      {SERVICES.map((x, k) => (
        <div key={x.id}>
          <section id={x.id} className={`${s.col} scroll-mt-24`} aria-labelledby={`${x.id}-title`}>
            <div className="grid lg:grid-cols-[5fr_7fr]">
              <div data-glyph-host className="flex flex-col gap-6 border-b border-white/[0.13] px-6 py-12 lg:border-r lg:border-b-0 lg:px-10">
                <span className="flex items-center justify-between">
                  <span className={s.rowNum}>0{k + 1} / 0{SERVICES.length}</span>
                  <Glyph id={x.id} size={8} label={`${x.name} icon`} />
                </span>
                <h2 id={`${x.id}-title`} className={s.h2mid}>
                  {x.name}
                </h2>
                <p className="text-[20px] leading-7 text-(--muted)">
                  <b className="font-semibold text-white">{x.title}</b> {x.body}
                </p>
                <dl className={`${s.mono} mt-auto grid grid-cols-2 gap-4 border-t border-white/[0.13] pt-6 text-[13px]`}>
                  <div>
                    <dt className="text-white/60">Timeline</dt>
                    <dd className="mt-1 text-white">{x.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-white/60">Price</dt>
                    <dd className="mt-1 text-white">{x.price}</dd>
                  </div>
                </dl>
                <Link href="/contact" data-magnet className={`${s.btnWhite} self-start`}>
                  Talk about {x.name.split(" ")[0]} <PiCaretRight aria-hidden="true" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2">
                <div className="border-b border-white/[0.13] px-6 py-10 sm:border-r lg:px-8">
                  <p className={`${s.kicker} ${s.kickerCoral}`}>Before</p>
                  <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-6 text-white/55">
                    {x.before.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-white/[0.13] bg-(--accent)/12 px-6 py-10 lg:px-8">
                  <p className={`${s.kicker} !text-(--hi)`}>After</p>
                  <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-6 text-white">
                    {x.after.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-10 sm:col-span-2 lg:px-8">
                  <p className={s.kicker}>What you get</p>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 text-[15px] sm:grid-cols-2">
                    {x.deliverables.map((d) => (
                      <li key={d} data-spot className="flex gap-3">
                        <PiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-(--hi)" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Band />
        </div>
      ))}

      {/* Ways to work */}
      <section className={s.col} aria-labelledby="models-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="models-title">ways to work with us.</span>
          </Slash>
        </div>
        <ul className="grid lg:grid-cols-3">
          {MODELS.map((m) => (
            <li key={m.name} className={`flex flex-col gap-4 border-b border-white/[0.13] px-8 py-10 lg:border-r lg:border-b-0 lg:last:border-r-0 ${m.accent ? "bg-(--accent)" : ""}`}>
              <p className="text-[28px] font-semibold tracking-[-0.02em]">{m.name}</p>
              <p className="text-[16px] leading-6 text-white/80">{m.fit}</p>
              <p className={`${s.mono} mt-auto pt-6 text-[13px] text-white/60`}>{m.terms}</p>
            </li>
          ))}
        </ul>
      </section>
      <Band />

      <Faq />
    </Shell>
  );
}
