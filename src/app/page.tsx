import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { ServiceMarquee } from "@/components/sections/ServiceMarquee";
import { TechStack } from "@/components/sections/TechStack";
import { Backdrop } from "@/components/ui/Backdrop";
import { homePage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...homePage, path: "/", absoluteTitle: true });

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceMarquee />
      <Backdrop>
        <TechStack />
        <About />
      </Backdrop>
      <Approach />
      <Industries />
      <Faq />
    </>
  );
}
