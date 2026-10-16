import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  heading: string;
  lead: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, heading, lead, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__glow" aria-hidden="true" />
      <div className="container page-header__inner">
        <Reveal>
          <p className="page-header__eyebrow">{eyebrow}</p>
          <h1 className="page-header__title">{heading}</h1>
          <p className="page-header__lead">{lead}</p>
          {children && <div className="page-header__actions">{children}</div>}
        </Reveal>
      </div>
    </header>
  );
}
