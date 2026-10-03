"use client";

import { useEffect, useState } from "react";
import { STUDIO_TZ } from "@/data/vx";

/** The studio's local time, ticking. Renders a stable placeholder until mounted (no hydration mismatch). */
export function Clock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: STUDIO_TZ });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return <time className={`tabular ${className}`}>{now ?? "--:--"}</time>;
}
