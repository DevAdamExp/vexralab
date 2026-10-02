import type { Metadata } from "next";
import { Letter } from "@/components/contact/Letter";
import { Clock } from "@/components/ui/Clock";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, LEDE } from "@/components/ui/tokens";
import { EMAIL, STUDIO_CITY, STUDIO_TZ } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what's keeping you up. A real person at VexraLab replies within one working day, with honest next steps.",
  alternates: { canonical: "/contact" },
};

const OFFSET = new Intl.DateTimeFormat("en-US", { timeZone: STUDIO_TZ, timeZoneName: "shortOffset" }).formatToParts(new Date()).find((p) => p.type === "timeZoneName")?.value;

const NEXT = [
  { title: "You send this.", line: "A few minutes, in your own words." },
  { title: "We reply within a day.", line: "Honest next steps, even if that's “not yet.”" },
  { title: "A 30-minute call.", line: "We ask, we listen. No pitch deck." },
  { title: "A written plan and fixed quote.", line: "What we'd do, in what order, for a set price." },
];

const NOT = [
  { title: "No hard sell.", line: "If we're not the right fit, we'll say so." },
  { title: "No spam.", line: "Your email is for replying to you. It doesn't go on a list." },
  { title: "NDA on request.", line: "Ask before you share the details, and we'll sign one first." },
];

/**
 * Contact: a letter under the lamp. Night, one warm pool of light, and the brief as a
 * sheet of paper on the desk. Registers: night (letter), paper (reassurance), night (footer).
 */
export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section aria-labelledby="contact-title" className="relative overflow-hidden bg-night pt-32 pb-24 text-fg md:pt-40 md:pb-32">
          {/* The lamp: one warm pool, falling on the desk where the letter lies. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_72%_38%,rgb(246_187_2/0.13),transparent_65%)]" />

          <div className={`${CONTAINER} grid gap-16 lg:grid-cols-12 lg:gap-10`}>
            <div className="lg:col-span-5">
              <p className="label load flex items-center gap-3 text-muted">
                <span className="lamp-dot" aria-hidden="true" /> Contact
              </p>
              <h1 id="contact-title" className="load mt-6 text-[clamp(2.75rem,5.4vw,5rem)] leading-[0.96] font-semibold tracking-[-0.035em]" style={i(1)}>
                Tell us what&rsquo;s keeping you{" "}
                <Mark gesture="underline" onLoad delay={900}>
                  up.
                </Mark>
              </h1>
              <p className={`${LEDE} load mt-7 text-muted`} style={i(2)}>
                Write it the way you&rsquo;d say it. A real person reads every letter and replies within one working day, with honest next steps. Even if that&rsquo;s &ldquo;you don&rsquo;t need us yet.&rdquo;
              </p>

              <dl className="load mt-12 grid gap-6 border-t border-fg/15 pt-8 sm:grid-cols-2" style={i(3)}>
                <div className="sm:col-span-2">
                  <dt className="label text-muted">Write directly</dt>
                  <dd className="mt-2">
                    <CopyEmail email={EMAIL} />
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Studio time</dt>
                  <dd className="mt-2 text-[17px]">
                    <Clock className="text-[28px] font-semibold tracking-[-0.02em]" /> <span className="text-muted">in {STUDIO_CITY}{OFFSET && `, ${OFFSET}`}</span>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Typical reply</dt>
                  <dd className="mt-2 text-[17px] leading-snug">Within one working day</dd>
                </div>
              </dl>

              <Seen className="mt-14">
                <h2 className="label fade text-muted">What happens next</h2>
                <ol className="mt-5">
                  {NEXT.map((s, k) => (
                    <li key={s.title} className="rise draw grid grid-cols-[2.5rem_1fr] py-4" style={i(k + 1)}>
                      <span className="label pt-1 text-lamp tabular" aria-hidden="true">
                        0{k + 1}
                      </span>
                      <span>
                        <span className="block text-[17px] font-medium">{s.title}</span>
                        <span className="mt-1 block text-[15px] text-muted">{s.line}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Seen>
            </div>

            <div className="load lg:col-span-7 xl:col-span-6 xl:col-start-7" style={i(2)}>
              <Letter />
            </div>
          </div>
        </section>

        <section aria-labelledby="before-title" className="bg-paper py-20 text-ink md:py-28">
          <Seen className={`${CONTAINER} grid gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <p className="label fade text-ink-muted">Before you write</p>
              <h2 id="before-title" className="rise mt-4 text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.02] font-semibold tracking-[-0.025em]" style={i(1)}>
                Write freely.
              </h2>
            </div>
            <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
              {NOT.map((n, k) => (
                <li key={n.title} className="rise draw pt-5" style={i(k + 2)}>
                  <p className="text-[19px] font-semibold">{n.title}</p>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink-muted">{n.line}</p>
                </li>
              ))}
            </ul>
          </Seen>
        </section>
      </main>
      <Footer invite={false} />
    </>
  );
}
