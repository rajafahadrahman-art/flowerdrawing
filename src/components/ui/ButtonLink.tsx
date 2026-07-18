import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, DownloadIcon, PrintIcon } from "@/components/ui/Icons";

type ButtonVariant = "primary" | "download" | "print" | "coral" | "sky" | "sage" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  newTab?: boolean;
  className?: string;
  icon?: "arrow" | "download" | "print" | "none";
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  download: "btn-download",
  print: "btn-print",
  coral: "btn-coral",
  sky: "btn-sky",
  sage: "btn-sage",
  ghost: "btn-ghost",
};

const defaultIcon: Partial<Record<ButtonVariant, ButtonLinkProps["icon"]>> = {
  primary: "arrow",
  download: "download",
  print: "print",
  coral: "arrow",
  sky: "arrow",
  sage: "download",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download = false,
  newTab = false,
  className = "",
  icon,
}: ButtonLinkProps) {
  const resolvedIcon = icon ?? defaultIcon[variant] ?? "none";
  const classes = `btn ${variantClass[variant]} ${className}`.trim();
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isFile =
    href.endsWith(".pdf") ||
    href.endsWith(".webp") ||
    href.startsWith("/api/worksheets/");

  const content = (
    <>
      {resolvedIcon === "download" ? <DownloadIcon /> : null}
      {resolvedIcon === "print" ? <PrintIcon /> : null}
      <span>{children}</span>
      {resolvedIcon === "arrow" ? <ArrowIcon /> : null}
    </>
  );

  if (isExternal || isFile || download || newTab) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
