import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";

/**
 * Same desk, morning light. The hero's photo again, ungraded this time, beside a
 * short promise. Curved edges pour the section in and out of the paper around it.
 */
export function Morning() {
  return (
    <section aria-labelledby="morning-title" className="relative flex min-h-[640px] items-stretch overflow-hidden bg-void text-fg lg:min-h-[820px]">
      <Curve where="top" />
      <div className="grid w-full lg:grid-cols-12">
        <div className="relative h-[460px] overflow-hidden sm:h-[560px] lg:col-span-7 lg:h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/desk-window.jpg" alt="The same desk by the window in calm morning light." loading="lazy" className="absolute inset-0 size-full scale-105 object-cover object-[45%_50%] saturate-[1.05]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,transparent_55%,#151419_100%)] max-lg:bg-[linear-gradient(180deg,transparent_55%,#151419_100%)]" />
          <span className="label absolute bottom-10 left-6 rounded-full bg-void/70 px-4 py-2 text-fg backdrop-blur-md md:left-10">☀️ 07:40 AM</span>
        </div>
        <Seen className="flex flex-col justify-center gap-8 px-6 py-20 sm:px-12 lg:col-span-5 lg:px-16 lg:py-32">
          <p className="label fade text-lamp">The morning after</p>
          <h2 id="morning-title" className="rise text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[1.04]" style={i(1)}>
            Same desk. A site you&rsquo;re <Mark>proud</Mark> to send.
          </h2>
          <p className="rise max-w-[36ch] text-[18px] leading-relaxed text-muted" style={i(2)}>
            People get what you do in one read. Enquiries arrive while you sleep.
          </p>
          <div className="rise" style={i(3)}>
            <LiquidButton href="/work" variant="sea">
              See the story <Arrow />
            </LiquidButton>
          </div>
        </Seen>
      </div>
      <Curve where="bottom" />
    </section>
  );
}

function Curve({ where }: { where: "top" | "bottom" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className={`absolute inset-x-0 z-10 h-10 w-full text-paper sm:h-16 lg:h-20 ${where === "top" ? "top-0 rotate-180" : "bottom-0"}`}>
      <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="currentColor" />
    </svg>
  );
}
