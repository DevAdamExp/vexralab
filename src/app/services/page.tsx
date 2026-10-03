import type { Metadata } from "next";
import Link from "next/link";
import { PiCaretRight } from "react-icons/pi";
import { Faq } from "@/components/cc/Bottom";
import { Shell } from "@/components/cc/Page";
import { ServicesHero } from "@/components/cc/ServicesHero";
import { Glyph } from "@/components/cc/Glyph";
import { Shelf } from "@/components/cc/Shelf";
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
      <ServicesHero />

      {/* Index */}
      <section className={s.col} aria-labelledby="index-title">
        <div className="border-b border-(--line) px-6 py-12 lg:px-12">
          <Slash>
            <span id="index-title">what we do.</span>
          </Slash>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((x, k) => (
            <li key={x.id} data-spot className="border-r border-b border-(--line)">
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
          <li className="flex flex-col justify-between gap-6 border-b border-(--line) bg-(--accent) px-6 py-7">
            <span className="text-[18px] leading-6 text-white">Not sure where to start?</span>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white underline underline-offset-4">
              Get a free audit <PiCaretRight aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </section>
      <Band />

      <Shelf />
      <Band />

      {/* Ways to work */}
      <section className={s.col} aria-labelledby="models-title">
        <div className="border-b border-(--line) px-6 py-12 lg:px-12">
          <Slash>
            <span id="models-title">ways to work with us.</span>
          </Slash>
        </div>
        <ul className="grid lg:grid-cols-3">
          {MODELS.map((m) => (
            <li key={m.name} className={`flex flex-col gap-4 border-b border-(--line) px-8 py-10 lg:border-r lg:border-b-0 lg:last:border-r-0 ${m.accent ? "bg-(--accent)" : ""}`}>
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
