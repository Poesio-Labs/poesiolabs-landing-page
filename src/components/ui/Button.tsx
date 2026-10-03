import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("ui-button", {
  variants: {
    variant: {
      default: "ui-button--default",
      secondary: "ui-button--secondary",
      ghost: "ui-button--ghost",
    },
    size: {
      md: "ui-button--md",
      sm: "ui-button--sm",
      lg: "ui-button--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type SharedButtonProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  children: ReactNode;
  showIcon?: boolean;
};

type ButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
  };

export function Button({
  asChild = false,
  children,
  className,
  href,
  showIcon = true,
  size,
  variant,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : href ? "a" : "button";

  return (
    <Comp href={href} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <span className="ui-button__label">{children}</span>
      {showIcon && (
        <span className="ui-button__icon" aria-hidden="true">
          <ArrowUpRight size={size === "sm" ? 14 : 18} />
          <ArrowUpRight size={size === "sm" ? 14 : 18} />
        </span>
      )}
    </Comp>
  );
}
