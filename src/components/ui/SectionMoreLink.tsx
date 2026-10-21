import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export type MoreLink = { label: string; href: string };

export function SectionMoreLink({ link }: { link?: MoreLink }) {
  if (!link) return null;

  return (
    <p className="section-more">
      <Link href={link.href} className="section-more__link">
        {link.label}
        <Icon name="arrowUpRight" size={18} aria-hidden="true" />
      </Link>
    </p>
  );
}
