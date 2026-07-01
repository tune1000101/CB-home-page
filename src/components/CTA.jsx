import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal
          className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface px-8 py-20 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />

          <h2 className="relative text-4xl font-bold tracking-tight text-brand-white sm:text-5xl">
            Ready to automate your business?
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-lg text-brand-silver">
            Book a free 15 minute audit and see exactly what we&apos;d build for you.
          </p>
          <a
            href="#contact"
            className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-brand-bg transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-[0_0_32px_rgba(75,163,227,0.4)]"
          >
            Book a Free Audit
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
