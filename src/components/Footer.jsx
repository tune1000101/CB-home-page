import { NAV_LINKS } from "../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <a href="#home" className="text-base font-semibold tracking-tight">
          <span className="text-brand-blue">Creative</span>{" "}
          <span className="text-brand-silver">Binary</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-brand-silver transition-colors duration-200 hover:text-brand-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@creativebinary.org"
          className="text-sm text-brand-silver transition-colors duration-200 hover:text-brand-white"
        >
          hello@creativebinary.org
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-brand-border pt-6 text-center">
        <p className="text-xs text-brand-silver/60">
          Creative Binary LLC 2026. All rights reserved. Roselle Park, New Jersey.
        </p>
      </div>
    </footer>
  );
}
