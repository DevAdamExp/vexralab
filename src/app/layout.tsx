import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["400", "500", "600"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"] });

const DESCRIPTION = "VexraLab builds the CRMs, ERPs, data pipelines and dashboards that help growing businesses run on data they can trust.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vexralab.com"),
  title: { default: "VexraLab | Data, CRM and ERP partner", template: "%s | VexraLab" },
  description: DESCRIPTION,
  openGraph: { title: "VexraLab", description: DESCRIPTION, siteName: "VexraLab", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "VexraLab", description: DESCRIPTION },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <a href="#main-content" className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-white focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:text-black">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
