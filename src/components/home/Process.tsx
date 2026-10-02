import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";

const STEPS = [
  { emoji: "👂", name: "Listen", when: "Week 1" },
  { emoji: "✏️", name: "Shape", when: "Weeks 2–3" },
  { emoji: "🛠️", name: "Build", when: "Weeks 4–7" },
  { emoji: "🤝", name: "Stay", when: "After launch" },
];

/** How we work, on Blue Sail: four steps, a demo every Friday, nothing more to read. */
export function Process() {
  return (
    <section aria-labelledby="process-title" className="relative overflow-hidden bg-sail text-fg">
      <div aria-hidden="true" className="absolute -top-40 -right-40 size-[34rem] rounded-full bg-[radial-gradient(circle,#3a5fb8,transparent_70%)] opacity-70" />
      <div className={`${CONTAINER} py-28 md:py-40`}>
        <Seen className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label fade text-fg/80">How we work</p>
            <h2 id="process-title" className="rise mt-6 text-[clamp(2.75rem,6.4vw,6rem)] leading-[0.98]" style={i(1)}>
              No ghosting. <Mark>Ever.</Mark>
            </h2>
          </div>
          <p className="rise text-[18px] text-fg/85 lg:col-span-4" style={i(2)}>
            A fixed price up front. A demo every Friday. 📅
          </p>
        </Seen>

        <Seen as="ol" className="mt-20 grid gap-px overflow-hidden rounded-[22px] bg-fg/15 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {STEPS.map((s, k) => (
            <li key={s.name} className="rise flex min-h-[260px] flex-col justify-between bg-sail p-8 transition-colors duration-500 hover:bg-[#2f55ad]" style={i(k)}>
              <div className="flex items-start justify-between">
                <span className="font-mono text-[13px] tracking-[0.2em] text-lamp">0{k + 1}</span>
                <span aria-hidden="true" className="text-[2.25rem] leading-none">{s.emoji}</span>
              </div>
              <div>
                <h3 className="text-[clamp(2.25rem,3.4vw,3rem)] leading-none">{s.name}</h3>
                <p className="label mt-4 text-fg/75">{s.when}</p>
              </div>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}
