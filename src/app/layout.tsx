import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, JetBrains_Mono, Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

// The Remark Studio type family: Betha for poster words, Cranio for headings, Mifetro for reading.
const betha = localFont({ src: "./fonts/Betha/Betha-KVj87.otf", variable: "--font-betha", display: "swap" });
const cranio = localFont({
  src: [
    { path: "./fonts/Cranio/CranioRegular-WpD9n.otf", style: "normal" },
    { path: "./fonts/Cranio/CranioOblique-e97Pm.otf", style: "italic" },
  ],
  variable: "--font-cranio",
  display: "swap",
});
const mifetro = localFont({ src: "./fonts/Mifetro/MifetroRegular-rvOly.ttf", variable: "--font-mifetro", display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"] });
const mono = JetBrains_Mono({ variable: "--font-jbmono", subsets: ["latin"], weight: ["400", "500"] });

const DESCRIPTION = "VexraLab designs and builds brands, websites and software for founders. Calm process, clear work, real results.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vexralab.com"),
  title: { default: "VexraLab | Design & engineering studio", template: "%s | VexraLab" },
  description: DESCRIPTION,
  openGraph: { title: "VexraLab", description: DESCRIPTION, siteName: "VexraLab", type: "website", locale: "en_US", images: ["/img/desk-window.jpg"] },
  twitter: { card: "summary_large_image", title: "VexraLab", description: DESCRIPTION },
};

export const viewport: Viewport = { themeColor: "#151419" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${betha.variable} ${cranio.variable} ${mifetro.variable} ${manrope.variable} ${mono.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[90] focus-visible:rounded-full focus-visible:bg-sea focus-visible:px-5 focus-visible:py-2.5 focus-visible:font-ui focus-visible:text-sm focus-visible:text-fg"
        >
          Skip to main content
        </a>
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
      </body>
    </html>
  );
}
