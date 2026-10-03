import { Benefits, Community, Compare, Faq, FinalCta, Footer, Pricing } from "@/components/cc/Bottom";
import { Clarity, Platform, Statements } from "@/components/cc/Middle";
import { Services } from "@/components/cc/Services";
import { Hero, Logos, Nav } from "@/components/cc/Top";
import s from "@/components/cc/cc.module.css";

/** Home: VexraLab, the data / CRM / ERP partner. Layout system modelled on commandcode.ai. */
export default function Home() {
  return (
    <div className={s.page}>
      <Nav />
      <main id="main-content">
        <Hero />
        <Logos />
        <Services />
        <Platform />
        <Statements />
        <Clarity />
        <Compare />
        <Pricing />
        <Community />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
