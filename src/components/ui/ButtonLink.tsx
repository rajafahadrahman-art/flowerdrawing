import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "sage" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  newTab?: boolean;
  className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  sage: "btn-sage",
  ghost: "btn-ghost",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download = false,
  newTab = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `btn ${variantClass[variant]} ${className}`.trim();
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isFile = href.endsWith(".pdf") || href.endsWith(".webp");

  if (isExternal || isFile || download || newTab) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
