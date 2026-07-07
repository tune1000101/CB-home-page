import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SERVICE_DETAILS } from "../lib/content";
import Reveal from "./Reveal";
import Visual from "./Visuals";

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[15px] font-semibold text-brand-ink">{item.label}</span>
        <Plus
          size={18}
          className={`shrink-0 text-brand-blue transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm leading-relaxed text-brand-muted">{item.body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailBlock({ detail, flipped }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
        flipped ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal className="lg:sticky lg:top-28">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-brand-blue/5" />
          <div className="relative">
            <Visual name={detail.visual} />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
          {detail.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{detail.intro}</p>
        <div className="mt-6 border-t border-brand-border">
          {detail.items.map((item, i) => (
            <AccordionItem
              key={item.label}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default function ServiceDetails() {
  return (
    <section className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            What&apos;s Included
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Every engagement is custom — here&apos;s the full menu of what we can build for you.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {SERVICE_DETAILS.map((detail, i) => (
            <DetailBlock key={detail.id} detail={detail} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
