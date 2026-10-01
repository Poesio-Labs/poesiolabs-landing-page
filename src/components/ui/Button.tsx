import type { ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  size?: "md" | "sm";
  className?: string;
};

export function Button({ href, children, size = "md", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`btn btn--${size} ${className}`}>
      <span className="btn__label">{children}</span>
      <span className="btn__icon" aria-hidden="true">
        <Icon name="arrowUpRight" size={size === "sm" ? 14 : 18} />
        <Icon name="arrowUpRight" size={size === "sm" ? 14 : 18} />
      </span>
    </a>
  );
}
