import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["italic"], weight: ["300", "400"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const DESCRIPTION =
  "VexraLab is a small design and engineering studio for founders. Brand, websites, web apps and automation that make your business easy to understand and easy to trust.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vexralab.com"),
  title: { default: "VexraLab | Design & engineering studio for founders", template: "%s | VexraLab" },
  description: DESCRIPTION,
  openGraph: { title: "VexraLab", description: DESCRIPTION, siteName: "VexraLab", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "VexraLab", description: DESCRIPTION },
};

export const viewport: Viewport = { themeColor: "#151419" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${schibsted.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[90] focus-visible:rounded-full focus-visible:bg-lamp focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-ink"
        >
          Skip to main content
        </a>
        {/* Shared goo filter for the droplet nav. */}
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <filter id="vx-goo" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <SmoothScroll />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
