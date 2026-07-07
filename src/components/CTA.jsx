import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 px-8 py-20 text-center shadow-[0_30px_80px_-30px_rgba(37,99,235,0.5)] sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-indigo-300/25 blur-[90px]" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s Create Something Amazing Together!
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-blue-100">
              Book a free 15 minute call and see exactly what we&apos;d build for your business.
            </p>
            <a
              href="#booking"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-blue transition-all duration-200 hover:bg-blue-50 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
            >
              Book a Free Call
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
