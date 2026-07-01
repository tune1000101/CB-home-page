import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/70 blur-[70px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_65%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/60 px-4 py-1.5 text-xs font-medium text-brand-silver"
        >
          Web Design &amp; AI Automation · Roselle Park, NJ
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-brand-white sm:text-6xl md:text-6xl lg:text-7xl"
        >
          <span className="block sm:whitespace-nowrap">We Build. We Automate.</span>
          <span className="block">We Deliver.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-silver sm:text-xl"
        >
          Web design and AI automation for local businesses ready to grow.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-border px-7 py-3.5 text-sm font-semibold text-brand-white transition-all duration-200 hover:border-brand-white/40 hover:bg-white/5 sm:w-auto"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-brand-bg transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-[0_0_28px_rgba(75,163,227,0.4)] sm:w-auto"
          >
            Get a Free Audit
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
