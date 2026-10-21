import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12051f",
        }}
      >
        <svg width="104" height="122" viewBox="240 300 335 395">
          <defs>
            <linearGradient id="r" x1="0" y1="0" x2="1" y2="0.35">
              <stop offset="0" stopColor="#8b3df5" />
              <stop offset="0.55" stopColor="#6a28c9" />
              <stop offset="1" stopColor="#3a1470" />
            </linearGradient>
            <linearGradient id="s" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#8b3df5" />
              <stop offset="0.4" stopColor="#2f0f55" />
              <stop offset="1" stopColor="#2a0e4a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#r)"
            d="M245 392c0-52 46-92 102-82l166 54c32 11 55 42 55 77v56c0 36-22 66-54 76l-134 43V513l80-26c9-3 9-15 0-18l-170-55c-26-9-45-14-45-22Z"
          />
          <path fill="url(#s)" d="M245 398l135 44v248l-88-30c-28-10-47-36-47-66V398Z" />
        </svg>
      </div>
    ),
    size,
  );
}
