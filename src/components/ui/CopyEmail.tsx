"use client";

import { useRef, useState } from "react";

/** The address as selectable text plus a copy button (mailto is unreliable in many setups). */
export function CopyEmail({ email, tone = "night" }: { email: string; tone?: "night" | "paper" }) {
  const [state, setState] = useState<"idle" | "done" | "select">("idle");
  const text = useRef<HTMLAnchorElement>(null);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("done");
    } catch {
      if (text.current) getSelection()?.selectAllChildren(text.current);
      setState("select");
    }
    setTimeout(() => setState("idle"), 2200);
  };
  const border = tone === "night" ? "border-fg/20 hover:border-fg" : "border-ink/20 hover:border-ink";
  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <a ref={text} href={`mailto:${email}`} className="text-[17px] underline decoration-1 underline-offset-[6px] decoration-current/30 hover:decoration-lamp select-all">
        {email}
      </a>
      <button type="button" onClick={copy} className={`min-h-11 rounded-full border px-4 text-[13px] font-medium transition-colors ${border}`}>
        <span aria-live="polite">{state === "done" ? "Copied" : state === "select" ? "Press ⌘C to copy" : "Copy"}</span>
      </button>
    </span>
  );
}
