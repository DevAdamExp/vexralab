import { Blob } from "@/components/ui/Blob";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";

const PROBLEMS = [
  { emoji: "🌙", tone: "sea", title: "A site you're embarrassed to send.", line: "So you send your Instagram instead." },
  { emoji: "📭", tone: "sail", title: "Enquiries that never arrive.", line: "Visitors look, shrug, and leave." },
  { emoji: "👻", tone: "red", title: "An agency that went quiet.", line: "“Two weeks” became March." },
] as const;

/**
 * Sound familiar? Three 2 AM problems, each with a liquid form poured in from
 * alternating edges. Then the turn, set large.
 */
export function Problems() {
  return (
    <section id="story" aria-labelledby="problems-title" className="relative overflow-hidden bg-paper py-28 text-ink md:py-40">
      <div className={CONTAINER}>
        <Seen className="flex items-center gap-4">
          <p className="label fade text-ink-muted">Sound familiar?</p>
          <span className="draw block h-px w-16" aria-hidden="true" />
        </Seen>
        <h2 id="problems-title" className="sr-only">
          Three problems founders bring us
        </h2>

        <div className="mt-20 flex flex-col gap-28 md:mt-28 md:gap-40">
          {PROBLEMS.map((p, k) => {
            const flip = k % 2 === 1;
            return (
              <Seen key={p.title} className="relative grid items-center gap-10 md:grid-cols-12">
                <div className={`rise relative z-10 md:col-span-7 ${flip ? "md:col-start-6" : ""}`}>
                  <span className="font-mono text-[28px] text-ink/25 md:text-[36px]">0{k + 1}</span>
                  <h3 className="mt-3 text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02]">{p.title}</h3>
                  <p className="mt-5 text-[18px] text-ink-muted md:text-[20px]">{p.line}</p>
                </div>
                <Blob
                  tone={p.tone}
                  side={flip ? "left" : "right"}
                  emoji={p.emoji}
                  className={`w-[78%] max-w-[560px] md:absolute md:top-1/2 md:w-[46%] md:-translate-y-1/2 ${flip ? "-ml-5 sm:-ml-8 md:ml-0 md:left-[calc(50%-50vw)]" : "ml-auto -mr-5 sm:-mr-8 md:mr-0 md:right-[calc(50%-50vw)]"}`}
                />
              </Seen>
            );
          })}
        </div>

        <Seen className="mt-36 md:mt-56">
          <p className="display fade text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.1] text-ink/40">
            <Mark gesture="strike" tone="red">Good enough</Mark>{" "}isn&rsquo;t enough.
          </p>
          <p className="display rise mt-3 text-[clamp(2.75rem,7.6vw,6.75rem)] leading-[1] tracking-[-0.02em]" style={i(1)}>
            It&rsquo;s not you. It&rsquo;s what you were <Mark tone="red">sold.</Mark>
          </p>
        </Seen>
      </div>
    </section>
  );
}
