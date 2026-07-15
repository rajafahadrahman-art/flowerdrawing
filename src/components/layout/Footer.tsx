import Image from "next/image";
import Link from "next/link";
import { FlowerDoodle } from "@/components/decorations/FlowerDoodle";
import { PaintDots } from "@/components/decorations/PaintDots";
import { BrandMark } from "@/components/ui/BrandMark";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell relative overflow-hidden">
      <div className="decoration-hide-mobile pointer-events-none absolute right-6 top-10 opacity-40">
        <FlowerDoodle />
      </div>
      <div className="decoration-hide-mobile pointer-events-none absolute bottom-8 left-8 opacity-50">
        <PaintDots />
      </div>

      <div className="container-main section-space grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex rounded-2xl bg-white p-1.5 shadow-[var(--shadow-button)]">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </span>
            <BrandMark size="md" inverted />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-white/75">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-base font-semibold text-white">Explore</h2>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-white/85 transition hover:text-yellow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-2 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="text-sky">Made for kids, parents, and teachers</p>
        </div>
      </div>
    </footer>
  );
}
