import type { Metadata } from "next";
import { Beliefs, Opening, People, Questions, StudioWeek, WhyWeExist } from "@/components/about/Sections";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Studio",
  description: "VexraLab is a small design and engineering studio that helps founders stop apologising for their website. How we think, how our week runs, and who sits at the desk.",
};

/** Studio: the desk by the window. Registers: paper / night / sea / belle / paper / night / Footer. */
export default function AboutPage() {
  return (
    <>
      <Header tone="paper" />
      <main id="main-content" className="flex-1">
        <Opening />
        <WhyWeExist />
        <Beliefs />
        <StudioWeek />
        <People />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
