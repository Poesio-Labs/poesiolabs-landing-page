import { useId } from "react";

type Stop = [offset: number, color: string, opacity?: number];

const tones: Record<"brand" | "mono", { ribbon: Stop[]; stem: Stop[]; stemAngle: [number, number, number, number] }> = {
  brand: {
    ribbon: [[0, "#8b3df5"], [0.55, "#6a28c9"], [1, "#3a1470"]],
    stem: [[0, "#8b3df5"], [0.4, "#2f0f55"], [1, "#2a0e4a"]],
    stemAngle: [0, 1, 1, 0],
  },
  mono: {
    ribbon: [[0, "#ffffff"], [0.6, "#d8c4ff", 0.6], [1, "#a06bff", 0.1]],
    stem: [[0, "#e9dcff", 0.85], [1, "#a06bff", 0]],
    stemAngle: [0, 0, 0, 1],
  },
};

const renderStops = (stops: Stop[]) =>
  stops.map(([offset, color, opacity = 1]) => (
    <stop key={offset} offset={offset} stopColor={color} stopOpacity={opacity} />
  ));

export function LogoMark({ className, tone = "brand" }: { className?: string; tone?: "brand" | "mono" }) {
  const id = useId();
  const ribbon = `${id}-ribbon`;
  const stem = `${id}-stem`;
  const palette = tones[tone];
  const [x1, y1, x2, y2] = palette.stemAngle;

  return (
    <svg className={className} viewBox="240 300 335 395" aria-hidden="true">
      <defs>
        <linearGradient id={ribbon} x1="0" y1="0" x2={tone === "brand" ? 1 : 0} y2={tone === "brand" ? 0.35 : 1}>
          {renderStops(palette.ribbon)}
        </linearGradient>
        <linearGradient id={stem} x1={x1} y1={y1} x2={x2} y2={y2}>
          {renderStops(palette.stem)}
        </linearGradient>
      </defs>
      <path
        fill={`url(#${ribbon})`}
        d="M245 392c0-52 46-92 102-82l166 54c32 11 55 42 55 77v56c0 36-22 66-54 76l-134 43V513l80-26c9-3 9-15 0-18l-170-55c-26-9-45-14-45-22Z"
      />
      <path fill={`url(#${stem})`} d="M245 398l135 44v248l-88-30c-28-10-47-36-47-66V398Z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="Poesio Labs home">
      <LogoMark className="logo__mark" />
      <span className="logo__word">
        Poes<span className="logo__i">ı</span>o<span className="logo__labs">Labs</span>
      </span>
    </a>
  );
}
