import { Monitor, Zap, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "../lib/content";
import Reveal from "./Reveal";

const ICONS = { Monitor, Zap, Brain };

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            What We Build
          </h2>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={card}
                className="group rounded-2xl border border-brand-border bg-brand-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-200 group-hover:bg-brand-blue/15">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {service.description}
                </p>
                <div className="mt-6 border-t border-brand-border pt-5 text-sm font-semibold text-brand-blue">
                  {service.price}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
