import type { Metadata } from "next";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { Letter } from "@/components/contact/Letter";
import { Blob } from "@/components/ui/Blob";
import { Clock } from "@/components/ui/Clock";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { SocialIcons } from "@/components/ui/Social";
import { CONTAINER } from "@/components/ui/tokens";
import { EMAIL, STUDIO_CITY } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what's keeping you up. A real person at VexraLab replies within one working day.",
  alternates: { canonical: "/contact" },
};

// ponytail: placeholder until the owner supplies the studio's WhatsApp number.
const WHATSAPP = "https://wa.me/[number]";

const NEXT = [
  { emoji: "✉️", line: "You send the letter." },
  { emoji: "🌙", line: "We reply within a day." },
  { emoji: "☕", line: "A 30-minute call. No pitch deck." },
  { emoji: "📐", line: "A plan and a fixed quote." },
];

const PROMISES = [
  { emoji: "🤝", line: "No hard sell." },
  { emoji: "🔕", line: "No mailing list." },
  { emoji: "🔒", line: "NDA on request." },
];

/**
 * Contact. Registers: void (the letter on the desk), belle (what happens next),
 * sail (the promises), void footer.
 */
export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section aria-labelledby="contact-title" className="relative overflow-hidden bg-void pt-36 pb-28 text-fg md:pt-44 md:pb-40">
          <div className={`${CONTAINER} grid gap-20 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0`}>
            {/* The direct line: heading first, then the ways in (below the letter on phones). */}
            <div className="lg:col-span-5 lg:row-start-1">
              <p className="label load flex items-center gap-3 text-muted">
                <span className="lamp-dot" aria-hidden="true" /> Contact
              </p>
              <h1 id="contact-title" className="load mt-8 text-[clamp(3rem,6vw,5.75rem)] leading-[0.95]" style={i(1)}>
                Tell us what&rsquo;s keeping you{" "}
                <Mark gesture="underline" onLoad delay={900}>
                  up.
                </Mark>
              </h1>
              <p className="load mt-8 text-[18px] text-muted" style={i(2)}>
                A real person replies within a day.
              </p>
            </div>

            {/* The letter on the desk: a sea form poured in above it, the lamp glowing around it. */}
            <div className="load relative lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={i(2)}>
              <Blob
                tone="sea"
                side="right"
                emoji="💌"
                className="-mr-5 -mb-6 ml-auto w-[88%] max-w-[560px] sm:-mr-8 sm:-mb-10 lg:mr-[calc(-3rem_-_max(0px,(100vw_-_1320px)/2))] lg:-mb-20"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-10%] top-1/4 bottom-0 bg-[radial-gradient(closest-side,rgb(246_187_2/0.16),transparent)]" />
              <div className="relative">
                <Letter />
              </div>
            </div>

            <div className="lg:col-span-5 lg:row-start-2">
              <div className="load flex flex-wrap gap-3 lg:mt-12" style={i(3)}>
                <LiquidButton href={WHATSAPP} variant="sea" size="md">
                  <FaWhatsapp aria-hidden="true" className="size-[18px]" /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                </LiquidButton>
                <LiquidButton href={`mailto:${EMAIL}`} variant="ghost-night" size="md">
                  <FaEnvelope aria-hidden="true" className="size-4" /> Email
                </LiquidButton>
              </div>

              <dl className="load mt-14 grid gap-10" style={i(4)}>
                <div>
                  <dt className="label text-muted">Write directly</dt>
                  <dd className="mt-3">
                    <CopyEmail email={EMAIL} />
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Studio time</dt>
                  <dd className="mt-3 flex items-baseline gap-3">
                    <span aria-hidden="true" className="text-[26px] leading-none">
                      🇵🇰
                    </span>
                    <Clock className="display text-[44px] leading-none" />
                    <span className="text-[15px] text-muted">{STUDIO_CITY}</span>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Elsewhere</dt>
                  <dd className="mt-4">
                    <SocialIcons />
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </section>

        <section aria-labelledby="next-title" className="bg-paper-2 py-28 text-ink md:py-40">
          <div className={CONTAINER}>
            <Seen>
              <p className="label fade text-ink-muted">After you send it</p>
              <h2 id="next-title" className="rise mt-6 text-[clamp(2.5rem,5.4vw,5rem)] leading-[1]" style={i(1)}>
                What happens next
              </h2>
            </Seen>
            <Seen as="ol" className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
              {NEXT.map((s, k) => (
                <li key={s.line} className="rise draw pt-8" style={i(k)}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] tracking-[0.2em] text-red tabular">0{k + 1}</span>
                    <span aria-hidden="true" className="grid size-14 place-items-center rounded-full bg-lamp text-[26px]">
                      {s.emoji}
                    </span>
                  </div>
                  <p className="display mt-8 text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.15]">{s.line}</p>
                </li>
              ))}
            </Seen>
          </div>
        </section>

        <section aria-label="Our promises" className="bg-sail py-28 text-fg md:py-40">
          <Seen as="ul" className={`${CONTAINER} grid gap-12 sm:grid-cols-3`}>
            {PROMISES.map((p, k) => (
              <li key={p.line} className="rise flex items-center gap-5" style={i(k)}>
                <span aria-hidden="true" className="text-[2.5rem] leading-none">
                  {p.emoji}
                </span>
                <span className="display text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1.05]">{p.line}</span>
              </li>
            ))}
          </Seen>
        </section>
      </main>
      <Footer invite={false} />
    </>
  );
}
