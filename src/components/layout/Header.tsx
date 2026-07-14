"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="container-main flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="text-[0.95rem] font-semibold tracking-tight sm:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-black/85 transition hover:bg-surface"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#worksheets" className="btn btn-sage ml-2">
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

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-border bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-main flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-xl px-3 text-base font-medium hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#worksheets"
            className="btn btn-sage mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Worksheets
          </Link>
        </nav>
      </div>
    </header>
  );
}
