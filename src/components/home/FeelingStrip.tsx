import Link from "next/link";
import { SERVICES } from "@/data/site";

/**
 * A slow strip of what we make, sitting on the hero's horizon. Hover an item and
 * its panel opens to show the feeling it's for. Pauses on hover; static for reduced motion.
 */
export function FeelingStrip() {
  const loop = [...SERVICES, ...SERVICES];
  return (
    <section aria-label="What we make" className="relative z-10 overflow-hidden border-y border-fg/10 bg-night text-fg">
      <div className="flex w-max animate-[marquee_48s_linear_infinite] items-stretch hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((s, k) => (
          <Link
            key={`${s.id}-${k}`}
            href={`/services#${s.id}`}
            tabIndex={k >= SERVICES.length ? -1 : undefined}
            aria-hidden={k >= SERVICES.length ? true : undefined}
            className="group/item relative flex h-28 items-center gap-6 px-10 md:h-36 md:px-14"
          >
            <span aria-hidden="true" className="absolute inset-y-3 inset-x-2 -z-10 origin-bottom scale-y-0 rounded-2xl bg-sea transition-transform duration-700 ease-water group-hover/item:scale-y-100 group-focus-visible/item:scale-y-100" />
            <span className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold tracking-[-0.03em] whitespace-nowrap">{s.name}</span>
            <span className="voice grid max-w-0 overflow-hidden text-[clamp(1.25rem,2vw,1.75rem)] whitespace-nowrap text-lamp opacity-0 transition-[max-width,opacity] duration-700 ease-water group-hover/item:max-w-[22rem] group-hover/item:opacity-100 group-focus-visible/item:max-w-[22rem] group-focus-visible/item:opacity-100">
              &ldquo;{s.feeling}&rdquo;
            </span>
            <svg aria-hidden="true" width="14" height="18" viewBox="0 0 30 36" className="ml-4 shrink-0 opacity-60">
              <path d="M15 2C15 2 3 16 3 23a12 12 0 0 0 24 0C27 16 15 2 15 2Z" fill="var(--color-lamp)" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
