import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/content";
import Reveal from "./Reveal";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section className="border-t border-brand-border bg-brand-surface/50 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure key={t.name} variants={item} className="flex flex-col">
              <Quote size={26} className="text-brand-blue/40" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-brand-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-brand-border pt-4">
                <p className="text-sm font-semibold text-brand-ink">{t.name}</p>
                <p className="mt-0.5 text-xs text-brand-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
