import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../lib/content";
import Reveal from "./Reveal";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
  return (
    <section className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-white sm:text-5xl">
            Simple Process. Real Results.
          </h2>
        </Reveal>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-20 grid gap-12 sm:grid-cols-3 sm:gap-8"
        >
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-border to-transparent sm:block" />

          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.number} variants={stepVariant} className="relative text-center sm:text-left">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-bg text-sm font-semibold text-brand-blue sm:mx-0">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-brand-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-silver">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
