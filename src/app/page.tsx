import { Hero } from "@/components/home/Hero";
import { Morning } from "@/components/home/Morning";
import { Problems } from "@/components/home/Problems";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { WorkPreview } from "@/components/home/WorkPreview";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

/**
 * Home. void (the desk at night) → belle (sound familiar?) → void (same desk,
 * morning) → belle (what we make) → sail (how we work) → belle tint (the work) → void.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Problems />
        <Morning />
        <Services />
        <Process />
        <WorkPreview />
      </main>
      <Footer />
    </>
  );
}
