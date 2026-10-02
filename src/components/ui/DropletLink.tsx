"use client";

import Link from "next/link";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { edgeOf, offEdge } from "./edge";

const REST = [
  { left: "30%", top: "50%", size: 26 },
  { left: "55%", top: "50%", size: 38 },
  { left: "76%", top: "45%", size: 22 },
  { left: "18%", top: "60%", size: 18 },
];

/** Nav link: four lamp drops roll in from the pointer's edge and merge through the shared goo filter. */
export function DropletLink({ href, children, className = "", current = false }: { href: string; children: ReactNode; className?: string; current?: boolean }) {
  const drops = useRef<(HTMLSpanElement | null)[]>([]);

  const move = (e: PointerEvent<HTMLAnchorElement>, entering: boolean) => {
    if (e.pointerType === "touch") return;
    const [top, left] = offEdge(edgeOf(e.currentTarget, e), 20);
    drops.current.forEach((d, i) => {
      if (!d) return;
      if (entering) {
        d.style.transition = "none";
        d.style.top = top;
        d.style.left = left;
        d.style.transform = "translate(-50%,-50%) scale(0)";
        void d.offsetWidth;
      }
      d.style.transition = `all ${(entering ? 600 : 500) + i * (entering ? 150 : 100)}ms var(--ease-drop)`;
      d.style.top = entering ? REST[i].top : top;
      d.style.left = entering ? REST[i].left : left;
      d.style.transform = `translate(-50%,-50%) scale(${entering ? 1 : 0})`;
    });
  };

  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      onPointerEnter={(e) => move(e, true)}
      onPointerLeave={(e) => move(e, false)}
      className={`group relative isolate overflow-hidden rounded-full px-4 py-2.5 font-ui text-[14px] font-medium transition-colors duration-300 hover:text-ink ${className}`}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ filter: "url(#vx-goo)" }}>
        {REST.map((r, i) => (
          <span
            key={i}
            ref={(el) => {
              drops.current[i] = el;
            }}
            className="absolute block rounded-full bg-lamp"
            style={{ width: r.size, height: r.size, top: "130%", left: "50%", transform: "translate(-50%,-50%) scale(0)" }}
          />
        ))}
      </span>
      {children}
      {current && <span aria-hidden="true" className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-lamp group-hover:opacity-0" />}
    </Link>
  );
}
