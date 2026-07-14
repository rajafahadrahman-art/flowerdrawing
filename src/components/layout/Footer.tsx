import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-main section-space grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
          </Link>
          <p className="max-w-md text-muted">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="heading-card mb-4">Explore</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-black/85 hover:underline"
                >
                  {link.label === "Contact" ? siteConfig.email : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-main flex flex-col gap-2 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>
            Contact:{" "}
            <a className="underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
