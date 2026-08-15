import Image from "next/image";
import Link from "next/link";
import { FlowerDoodle } from "@/components/decorations/FlowerDoodle";
import { PaintDots } from "@/components/decorations/PaintDots";
import { BrandMark } from "@/components/ui/BrandMark";
import { footerLegalLinks, navLinks, siteConfig } from "@/lib/site";

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

      <div className="container-main section-space grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
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
          <a
            href={siteConfig.pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Flower Drawing Guides on Pinterest"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm text-white/85 transition hover:text-yellow"
          >
            <svg
              className="h-4 w-4 shrink-0"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.012-4.869-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
            Follow us on Pinterest
          </a>
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

        <div>
          <h2 className="mb-4 text-base font-semibold text-white">Important</h2>
          <ul className="space-y-1">
            {footerLegalLinks.map((link) => (
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
