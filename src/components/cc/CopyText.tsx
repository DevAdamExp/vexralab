"use client";

import { useState } from "react";
import { PiCheck, PiCopy } from "react-icons/pi";

/** Text plus a copy icon; shows a tick for 1.6s after copying. */
export function CopyText({ text, className = "" }: { text: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      aria-label={`Copy ${text}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          /* clipboard blocked: the text is still visible to select */
        }
      }}
    >
      {text}
      {done ? <PiCheck aria-hidden="true" className="size-4 text-(--hi)" /> : <PiCopy aria-hidden="true" className="size-4" />}
    </button>
  );
}
