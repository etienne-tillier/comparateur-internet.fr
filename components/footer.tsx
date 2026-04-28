import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Comparateur<span className="text-[#0ea5e9]">Internet</span>.fr
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Le comparateur indépendant des offres internet et mobile en France.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Informations légales
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-400">
              Contact :{" "}
              <a
                href="mailto:contact@comparateur-internet.fr"
                className="text-[#0ea5e9] hover:underline"
              >
                contact@comparateur-internet.fr
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} ComparateurInternet.fr — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
