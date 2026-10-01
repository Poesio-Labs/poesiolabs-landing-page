import type { ReactNode } from "react";

export function Backdrop({ children }: { children: ReactNode }) {
  return (
    <div className="backdrop">
      <div className="backdrop__curtains" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      {children}
    </div>
  );
}
