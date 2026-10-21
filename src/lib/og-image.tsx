import { ImageResponse } from "next/og";
import { ogImageSize } from "@/lib/seo";

type OgImageContent = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function renderOgImage({ eyebrow, title, lead }: OgImageContent) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          color: "#ffffff",
          background:
            "radial-gradient(60% 55% at 50% 100%, rgba(138, 56, 245, 0.75), transparent 70%), linear-gradient(180deg, #12051f 0%, #1c0636 55%, #2a0a55 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="44" height="52" viewBox="240 300 335 395">
            <defs>
              <linearGradient id="r" x1="0" y1="0" x2="1" y2="0.35">
                <stop offset="0" stopColor="#8b3df5" />
                <stop offset="0.55" stopColor="#6a28c9" />
                <stop offset="1" stopColor="#3a1470" />
              </linearGradient>
            </defs>
            <path
              fill="url(#r)"
              d="M245 392c0-52 46-92 102-82l166 54c32 11 55 42 55 77v56c0 36-22 66-54 76l-134 43V513l80-26c9-3 9-15 0-18l-170-55c-26-9-45-14-45-22Z"
            />
            <path fill="#2f0f55" d="M245 398l135 44v248l-88-30c-28-10-47-36-47-66V398Z" />
          </svg>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 600 }}>Poesio Labs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#d4c1ff", textTransform: "uppercase" }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", marginTop: 20, maxWidth: 1000, fontSize: 72, lineHeight: 1.05, letterSpacing: -2 }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 24, maxWidth: 940, fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.8)" }}>
            {lead}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.6)" }}>poesiolabs.com</div>
      </div>
    ),
    ogImageSize,
  );
}
