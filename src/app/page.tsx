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

export const metadata = pageMetadata({
  title: homePage.seoTitle,
  description: homePage.description,
  path: "/",
  imageAlt: `Poesio Labs — ${homePage.ogTitle}`,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceMarquee />
      <Backdrop>
        <TechStack />
        <About moreLink={{ label: "More about Poesio Labs", href: "/about" }} />
      </Backdrop>
      <Approach moreLink={{ label: "Explore our services", href: "/services" }} />
      <Industries moreLink={{ label: "See all industries we serve", href: "/industries" }} />
      <Faq moreLink={{ label: "Still have a question? Contact us", href: "/contact" }} />
    </>
  );
}
