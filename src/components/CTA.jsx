import { ArrowRight } from "lucide-react";
import ColorBends from "./ColorBends";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-brand-dark px-8 py-20 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
            <ColorBends
              colors={["#2563eb", "#60a5fa", "#2563eb"]}
              rotation={90}
              speed={0.15}
              scale={1.1}
              frequency={1}
              warpStrength={0.9}
              mouseInfluence={0.4}
              noise={0.05}
              parallax={0.2}
              iterations={1}
              intensity={1.1}
              bandWidth={6}
              transparent
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to put AI to work?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-slate-300">
              Book a free 15 minute audit and see exactly what we&apos;d build for you.
            </p>
            <a
              href="#booking"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-blue-deep hover:shadow-[0_0_32px_rgba(37,99,235,0.5)]"
            >
              Book a Free Audit
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
