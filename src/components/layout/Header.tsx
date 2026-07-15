"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header-shell sticky top-0 z-50 ${scrolled ? "header-shell--scrolled" : ""}`}>
      <div className="container-main flex items-center justify-between gap-4 py-2.5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-xl bg-white sm:h-11 sm:w-11"
            priority
          />
          <BrandMark size="sm" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-flex min-h-11 items-center px-3 text-sm font-medium text-ink/85 transition hover:text-ink"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-3 bottom-2 h-0.5 origin-left scale-x-0 rounded-full bg-sky transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}
          <Link href="/#worksheets" className="btn btn-download ml-2 !min-h-10 !px-4 !text-sm">
            Worksheets
          </Link>
        </nav>

        <button
          type="button"
          className="btn btn-ghost lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id={menuId} hidden={!open} className="lg:hidden">
        <div className="container-main pb-4">
          <nav
            aria-label="Mobile"
            className="feature-frame flex flex-col gap-1 border border-border bg-white p-3 shadow-[var(--shadow-feature)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-xl px-3 text-base font-medium hover:bg-sky-light"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#worksheets"
              className="btn btn-download mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Worksheets
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
