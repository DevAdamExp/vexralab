import type { Metadata } from "next";
import { SERVICES } from "@/data/site";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Engagements } from "@/components/services/Engagements";
import { Faq } from "@/components/services/Faq";
import { ServiceChapter } from "@/components/services/ServiceChapter";
import { ServicesOpening } from "@/components/services/ServicesOpening";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand, websites, web apps, automation and ongoing care for founders. Each starts with how it should feel.",
  alternates: { canonical: "/services" },
};

/**
 * Registers never repeat between neighbours: paper (opening), night, sea, belle,
 * lamp, night (services), paper (engagements), sail (questions), night (footer).
 */
export default function ServicesPage() {
  return (
    <>
      <Header tone="paper" />
      <main id="main-content" className="flex-1">
        <ServicesOpening />
        {SERVICES.map((s, k) => (
          <ServiceChapter key={s.id} service={s} index={k} />
        ))}
        <Engagements />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
