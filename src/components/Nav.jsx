import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-lg border-b border-brand-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 h-18 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight shrink-0">
          <span className="text-brand-blue">Creative</span>{" "}
          <span className="text-brand-silver">Binary</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-white/70 hover:text-brand-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-bg hover:bg-brand-blue/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(75,163,227,0.35)]"
          >
            Get a Free Audit
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-brand-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-brand-bg border-b border-brand-border"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-brand-white/80 hover:text-brand-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-brand-bg"
              >
                Get a Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
