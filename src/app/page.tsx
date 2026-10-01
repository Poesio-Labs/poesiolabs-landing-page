import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Navbar } from "@/components/sections/Navbar";
import { ServiceMarquee } from "@/components/sections/ServiceMarquee";
import { TechStack } from "@/components/sections/TechStack";
import { Backdrop } from "@/components/ui/Backdrop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceMarquee />
        <Backdrop>
          <TechStack />
          <About />
        </Backdrop>
        <Approach />
        <Industries />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
