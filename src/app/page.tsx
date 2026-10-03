import { Benefits, Community, Compare, Faq, Pricing } from "@/components/cc/Bottom";
import { Converge } from "@/components/cc/Converge";
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
      <Converge />
      <Compare />
      <Pricing />
      <Community />
      <Benefits />
      <Faq />
    </Shell>
  );
}
