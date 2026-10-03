import type { Metadata } from "next";
import { PiEnvelopeSimple, PiLinkedinLogo, PiWhatsappLogo, PiXLogo } from "react-icons/pi";
import { Clock } from "@/components/cc/Clock";
import { ContactForm } from "@/components/cc/ContactForm";
import { CopyText } from "@/components/cc/CopyText";
import { Shell } from "@/components/cc/Page";
import { Band } from "@/components/cc/parts";
import s from "@/components/cc/cc.module.css";
import { EMAIL } from "@/data/vx";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute data audit with VexraLab. Tell us what's slowing your business down and get a written plan in 5 days.",
};

const NEXT = [
  ["You send this", "Two minutes, no commitment."],
  ["We reply in a day", "With a few questions and call times."],
  ["30-minute audit call", "We look at your tools and data together."],
  ["Written plan in 5 days", "Scope, timeline and a fixed price."],
];

// ponytail: placeholder number and profiles until the studio's real ones exist.
const DIRECT = [
  { Icon: PiWhatsappLogo, label: "WhatsApp", href: "https://wa.me/[number]" },
  { Icon: PiLinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { Icon: PiXLogo, label: "X", href: "https://x.com/" },
];

export default function ContactPage() {
  return (
    <Shell cta={false}>
      <section className={s.col} aria-labelledby="contact-title">
        <div className="grid lg:grid-cols-[5fr_7fr]">
          <div className="border-b border-white/[0.13] lg:border-r lg:border-b-0">
            <div className="flex flex-col lg:sticky lg:top-[85px]">
            <div className="px-6 py-14 lg:px-10">
              <p className={s.kicker}>
Free data audit
              </p>
              <h1 id="contact-title" className={`${s.h1} ${s.rise} mt-5`}>
                Let&rsquo;s look at your data <span className="text-(--hi)">together</span>.
              </h1>
              <p className="mt-6 max-w-[40ch] text-[18px] leading-7 text-(--muted)">Tell us what&rsquo;s slowing you down. You&rsquo;ll get a written plan in 5 days, whether you hire us or not.</p>
            </div>

            <ol className="border-t border-white/[0.13]">
              {NEXT.map(([t, d], k) => (
                <li key={t} className="flex gap-5 border-b border-white/[0.13] px-6 py-5 lg:px-10">
                  <span className={`${s.mono} pt-0.5 text-[12px] text-(--hi)`}>0{k + 1}</span>
                  <p className="text-[15px] leading-6">
                    <span className="block text-white">{t}</span>
                    <span className="text-(--muted)">{d}</span>
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-5 px-6 py-8 lg:px-10">
              <div className="flex items-center gap-3">
                <PiEnvelopeSimple aria-hidden="true" className="size-5 text-white/60" />
                <CopyText text={EMAIL} className={`${s.mono} flex items-center gap-2 text-[15px] text-white hover:text-(--hi)`} />
              </div>
              <p className={`${s.mono} text-[13px] text-white/55`}>
                Studio time <span className="text-white"><Clock /></span> · replies Mon-Fri
              </p>
              <ul className="flex gap-2">
                {DIRECT.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="grid size-11 place-items-center rounded-full border border-white/[0.13] text-white/75 transition-colors hover:border-white/35 hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
      <Band />
    </Shell>
  );
}
