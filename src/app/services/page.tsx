import type { Metadata } from "next";
import { SERVICES } from "@/data/site";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import type { Register } from "@/components/ui/tokens";
import { Engagements } from "@/components/services/Engagements";
import { Faq } from "@/components/services/Faq";
import { ServiceChapter } from "@/components/services/ServiceChapter";
import { ServicesOpening } from "@/components/services/ServicesOpening";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand and messaging, websites, web apps, automation and ongoing care for founders. Each service starts with how it should feel, and shows exactly what you get.",
  alternates: { canonical: "/services" },
};

/**
 * A catalogue of mornings. Registers never repeat between neighbours:
 * paper (opening), night, paper, sea, belle, night (services), sea (engagements),
 * paper (questions), night (footer).
 */
const REGISTERS: Register[] = ["night", "paper", "sea", "belle", "night"];

export default function ServicesPage() {
  return (
    <>
      <Header tone="paper" />
      <main id="main-content" className="flex-1">
        <ServicesOpening />
        {SERVICES.map((s, k) => (
          <ServiceChapter key={s.id} service={s} register={REGISTERS[k]} flip={k % 2 === 1} />
        ))}
        <Engagements />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
