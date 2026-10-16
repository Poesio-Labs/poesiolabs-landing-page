import type { Metadata, Viewport } from "next";
import { DM_Sans, Lexend } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { homePage } from "@/content/pages";
import { brand } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: { default: homePage.title, template: `%s | ${brand.name}` },
  description: homePage.description,
  applicationName: brand.name,
  openGraph: {
    type: "website",
    siteName: brand.name,
    locale: "en_US",
    url: "/",
    title: homePage.title,
    description: homePage.description,
  },
  twitter: {
    card: "summary_large_image",
    title: homePage.title,
    description: homePage.description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${brand.url}/#organization`,
      name: brand.name,
      url: brand.url,
      logo: `${brand.url}/brand/poesio-labs-logo.png`,
      email: brand.email,
      description: homePage.description,
      contactPoint: [
        { "@type": "ContactPoint", contactType: "customer service", email: brand.email },
        { "@type": "ContactPoint", contactType: "partnerships", email: brand.partnershipEmail },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${brand.url}/#website`,
      name: brand.name,
      url: brand.url,
      publisher: { "@id": `${brand.url}/#organization` },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#12051f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lexend.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
