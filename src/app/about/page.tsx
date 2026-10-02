import type { Metadata } from "next";
import { Beliefs, FindUs, Opening, People, Questions, StudioWeek, WhyWeExist } from "@/components/about/Sections";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Studio",
  description: "VexraLab is a small design and engineering studio by the window. How we think, how our week runs, and who sits at the desk.",
};

/** Studio. Registers: paper / night / sea / sail / paper / night / belle / Footer. */
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
        <FindUs />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
