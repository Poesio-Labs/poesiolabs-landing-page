import type { Metadata, Viewport } from "next";
import { DM_Sans, Lexend } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
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
  title: "Poesio Labs — Technology should move things forward",
  description:
    "Poesio Labs combines research, design, engineering, and technology to turn complex problems into useful digital products and systems.",
};

export const viewport: Viewport = {
  themeColor: "#12051f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lexend.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
