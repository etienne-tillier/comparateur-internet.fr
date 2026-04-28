"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-[#0f172a]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Comparateur<span className="text-[#0ea5e9]">Internet</span>.fr
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#0f172a] transition-colors hover:text-[#0ea5e9]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:contact@comparateur-internet.fr"
            className="rounded-lg bg-[#0ea5e9] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0284c7]"
          >
            Nous contacter
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e2e8f0] bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#0f172a] hover:text-[#0ea5e9]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:contact@comparateur-internet.fr"
              className="rounded-lg bg-[#0ea5e9] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#0284c7]"
            >
              Nous contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
