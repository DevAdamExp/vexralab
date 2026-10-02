import Link from "next/link";
import { SERVICES } from "@/data/site";

/**
 * The thin strip along the bottom of the hero. Each item is a quiet uppercase
 * label; hover it and a panel opens behind it with the feeling it's for.
 */
export function ServiceStrip() {
  const loop = [...SERVICES, ...SERVICES, ...SERVICES];
  return (
    <nav aria-label="What we make" className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pb-4">
      <ul className="flex w-max animate-[marquee-third_54s_linear_infinite] items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((s, k) => {
          const dup = k >= SERVICES.length;
          return (
            <li key={`${s.id}-${k}`} aria-hidden={dup || undefined}>
              <Link href={`/services#${s.id}`} tabIndex={dup ? -1 : undefined} className="group/s relative flex h-24 items-center px-8 md:h-28 md:px-12">
                <span aria-hidden="true" className="absolute inset-x-1 inset-y-3 -z-10 scale-90 rounded-2xl bg-void/90 opacity-0 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.8)] transition-[transform,opacity] duration-700 ease-drop group-hover/s:scale-100 group-hover/s:opacity-100 group-focus-visible/s:scale-100 group-focus-visible/s:opacity-100" />
                <span className="flex flex-col items-center gap-1.5">
                  <span className="ui flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] whitespace-nowrap text-fg/75 uppercase transition-colors duration-500 group-hover/s:text-fg md:text-[12px]">
                    <span aria-hidden="true" className="text-[15px]">{s.emoji}</span>
                    {s.name}
                  </span>
                  <span className="voice max-h-0 overflow-hidden text-[15px] whitespace-nowrap text-lamp opacity-0 transition-[max-height,opacity] duration-700 ease-water group-hover/s:max-h-8 group-hover/s:opacity-100 group-focus-visible/s:max-h-8 group-focus-visible/s:opacity-100">
                    &ldquo;{s.feeling}&rdquo;
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
