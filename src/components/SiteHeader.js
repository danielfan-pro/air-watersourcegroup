"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[10000] border-b border-white/65 bg-[rgba(247,250,255,0.82)] backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-6 py-4 lg:px-10"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={siteConfig.name}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative h-10 w-28 sm:h-12 sm:w-36">
              <Image
                src="/logo-transparent.png"
                alt="Air & Water Source Group logo"
                fill
                className="object-contain object-left"
                priority
                sizes="144px"
              />
            </div>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-[var(--color-brand)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={siteConfig.shopifyUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary nav-shop-button"
            >
              Shop Online
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="mobile-menu-button lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              <span className={isMenuOpen ? "mobile-menu-line line-open-top" : "mobile-menu-line"} />
              <span className={isMenuOpen ? "mobile-menu-line line-open-middle" : "mobile-menu-line"} />
              <span className={isMenuOpen ? "mobile-menu-line line-open-bottom" : "mobile-menu-line"} />
            </button>
          </div>
        </nav>
      </header>

      <div className="h-[73px] sm:h-[81px]" aria-hidden="true" />

      {isMenuOpen ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu overlay"
            className="fixed inset-0 z-[9998] bg-slate-950/45 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[73px] z-[9999] border-b border-slate-200 bg-[rgba(247,250,255,0.98)] px-6 py-5 shadow-[0_24px_70px_rgba(16,32,51,0.18)] backdrop-blur lg:hidden sm:top-[81px]"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-4 text-base font-semibold text-slate-800 transition hover:bg-white/80 hover:text-[var(--color-brand)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
