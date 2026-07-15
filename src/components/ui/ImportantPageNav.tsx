import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ImportantPageNavProps = {
  includeContact?: boolean;
  children?: ReactNode;
};

export function ImportantPageNav({
  includeContact = true,
  children,
}: ImportantPageNavProps) {
  return (
    <div className="surface-card surface-card--mint mt-10 p-5">
      <p className="text-sm font-semibold text-mint-dark">Continue exploring</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="sky">
          Homepage
        </ButtonLink>
        <ButtonLink href="/flower-drawing/" variant="coral">
          Drawing Tutorials
        </ButtonLink>
        {includeContact ? (
          <ButtonLink href="/contact/" variant="ghost" icon="none">
            Contact
          </ButtonLink>
        ) : null}
        {children}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
        <li>
          <Link href="/about/" className="underline-offset-2 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy/" className="underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/disclaimer/" className="underline-offset-2 hover:underline">
            Disclaimer
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions/" className="underline-offset-2 hover:underline">
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
}
