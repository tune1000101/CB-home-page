import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "../lib/content";
import Reveal from "./Reveal";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            Our Work
          </h2>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {PORTFOLIO.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              className="group rounded-2xl border border-brand-border bg-brand-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-brand-border px-3 py-1 text-xs font-medium text-brand-muted">
                  {project.tag}
                </span>
                <span
                  className={`flex items-center gap-1.5 text-xs font-medium ${
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

              <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {project.description}
              </p>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 border-t border-brand-border pt-5 text-sm font-semibold text-brand-blue transition-colors duration-200 hover:text-brand-blue/80"
                >
                  {project.link}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : (
                <div className="mt-6 border-t border-brand-border pt-5 text-sm text-brand-muted/60">
                  Details coming soon
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
