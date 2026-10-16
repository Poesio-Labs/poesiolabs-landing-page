import { ImageResponse } from "next/og";

export const alt = "Poesio Labs — Engineering the digital future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 80,
          color: "#ffffff",
          background:
            "radial-gradient(60% 55% at 50% 100%, rgba(138, 56, 245, 0.75), transparent 70%), linear-gradient(180deg, #12051f 0%, #1c0636 55%, #2a0a55 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#d4c1ff", textTransform: "uppercase" }}>
          Poesio Labs
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>
          Engineering the digital future
        </div>
        <div style={{ display: "flex", marginTop: 28, maxWidth: 900, fontSize: 30, textAlign: "center", color: "rgba(255,255,255,0.82)" }}>
          We build better systems, and experiences that solve real problems and move technology forward.
        </div>
      </div>
    ),
    size,
  );
}
