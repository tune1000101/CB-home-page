import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "../lib/content";
import Reveal from "./Reveal";
import Visual from "./Visuals";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const entry = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            Our Featured Work
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            A curated selection of projects where strategy met design — and delivered.
          </p>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-12 md:grid-cols-2"
        >
          {PORTFOLIO.map((project) => {
            const inner = (
              <>
                <div className="relative transition-transform duration-300 group-hover:-translate-y-1">
                  <Visual name={project.visual} />
                  <span
                    className={`absolute right-4 top-14 flex items-center gap-1.5 rounded-full border border-brand-border bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur ${
                      project.status === "Live" ? "text-brand-blue" : "text-brand-muted"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === "Live" ? "bg-brand-blue" : "bg-brand-muted"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-muted">
                      {project.tag}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold text-brand-ink">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {project.description}
                    </p>
                  </div>
                  {project.href && (
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-brand-blue transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </div>
              </>
            );

            return (
              <motion.div key={project.title} variants={entry}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="group block">
                    {inner}
                  </a>
                ) : (
                  <div className="group">{inner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
