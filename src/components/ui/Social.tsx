import { FaDribbble, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SOCIALS } from "@/data/site";

const ICON: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Dribbble: FaDribbble,
  GitHub: FaGithub,
  X: FaXTwitter,
  WhatsApp: FaWhatsapp,
};

/** Round icon buttons with each platform's own mark. */
export function SocialIcons({ tone = "night", className = "" }: { tone?: "night" | "paper"; className?: string }) {
  const ring = tone === "night" ? "border-fg/20 text-fg hover:border-lamp hover:bg-lamp hover:text-ink" : "border-ink/25 text-ink hover:border-sea hover:bg-sea hover:text-fg";
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = ICON[s.label];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              className={`grid size-12 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-water hover:-translate-y-0.5 ${ring}`}
            >
              {Icon ? <Icon aria-hidden="true" className="size-[18px]" /> : s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
