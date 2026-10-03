import { Benefits, Community, Compare, Faq, Pricing } from "@/components/cc/Bottom";
import { Clarity, Platform, Statements } from "@/components/cc/Middle";
import { Shell } from "@/components/cc/Page";
import { Services } from "@/components/cc/Services";
import { Hero, Logos } from "@/components/cc/Top";

/** Home: VexraLab, the data / CRM / ERP partner. Layout system modelled on commandcode.ai. */
export default function Home() {
  return (
    <Shell>
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
    </Shell>
  );
}
