import { motion } from "framer-motion";
import { WHY_US } from "../lib/content";
import Reveal from "./Reveal";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyUs() {
  return (
    <section id="about" className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-white sm:text-5xl">
            Why Creative Binary
          </h2>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-brand-border bg-brand-border sm:grid-cols-2"
        >
          {WHY_US.map((point, i) => (
            <motion.div
              key={point.title}
              variants={item}
              className="bg-brand-surface p-10"
            >
              <span className="text-xs font-semibold text-brand-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-silver">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
