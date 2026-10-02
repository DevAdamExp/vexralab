import { FeelingStrip } from "@/components/home/FeelingStrip";
import { Hero } from "@/components/home/Hero";
import { Morning } from "@/components/home/Morning";
import { Noise } from "@/components/home/Noise";
import { Process } from "@/components/home/Process";
import { ServiceIndex } from "@/components/home/ServiceIndex";
import { WorkPreview } from "@/components/home/WorkPreview";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

/**
 * Home: one founder's night, told in chapters.
 * night (2:14 AM) → night (the noise) → night→paper (sunrise) → night (what we make)
 * → sea (how we work) → paper (the work) → night (footer, lamp on).
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <FeelingStrip />
        <Noise />
        <Morning />
        <ServiceIndex />
        <Process />
        <WorkPreview />
      </main>
      <Footer />
    </>
  );
}
