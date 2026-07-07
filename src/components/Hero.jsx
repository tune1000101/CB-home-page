import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  CalendarCheck,
  Cloud,
  Database,
  Headphones,
  Megaphone,
  Monitor,
  Share2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

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

// Hub-and-spoke tile positions as percentages of the graphic canvas
const TILES = [
  { icon: Monitor, x: 8, y: 16 },
  { icon: Megaphone, x: 13, y: 48 },
  { icon: Share2, x: 9, y: 80 },
  { icon: Headphones, x: 92, y: 16 },
  { icon: Cloud, x: 87, y: 48 },
  { icon: ShieldCheck, x: 91, y: 80 },
  { icon: Bot, x: 30, y: 94 },
  { icon: Database, x: 50, y: 100 },
  { icon: CalendarCheck, x: 70, y: 94 },
  { icon: Brain, x: 30, y: 2 },
  { icon: Zap, x: 70, y: 2 },
];

// SVG connector paths in a 1000x420 viewBox (center hub at 500,190)
const PATHS = [
  "M500 190 C 360 190, 260 67, 80 67",
  "M500 190 C 380 202, 300 202, 130 202",
  "M500 190 C 360 190, 260 336, 90 336",
  "M500 190 C 640 190, 740 67, 920 67",
  "M500 190 C 620 202, 700 202, 870 202",
  "M500 190 C 640 190, 740 336, 910 336",
  "M500 190 C 500 300, 400 395, 300 395",
  "M500 190 L 500 420",
  "M500 190 C 500 300, 600 395, 700 395",
  "M500 190 C 500 100, 400 8, 300 8",
  "M500 190 C 500 100, 600 8, 700 8",
];

function HubGraphic() {
  return (
    <div className="relative mx-auto mt-16 hidden h-[400px] w-full max-w-5xl md:block">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 420"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#c9dafb"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.75"
          />
        ))}
      </svg>

      {TILES.map(({ icon: Icon, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <div className="relative">
            <div className="absolute inset-x-1 -bottom-1.5 h-full rounded-2xl bg-slate-200/80" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-white text-brand-blue shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
              <Icon size={26} strokeWidth={1.75} />
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="absolute inset-x-2 -bottom-2 h-full rounded-3xl bg-blue-200/70" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_24px_50px_rgba(37,99,235,0.35)]">
            <Sparkles size={38} strokeWidth={1.75} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MobileTiles() {
  const icons = [Monitor, Bot, Zap, Brain, Megaphone, CalendarCheck];
  return (
    <div className="mx-auto mt-12 grid max-w-xs grid-cols-3 gap-4 md:hidden">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
          className="relative"
        >
          <div className="absolute inset-x-1 -bottom-1 h-full rounded-2xl bg-slate-200/80" />
          <div className="relative flex h-20 items-center justify-center rounded-2xl border border-brand-border bg-white text-brand-blue shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
            <Icon size={26} strokeWidth={1.75} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#f7f8fb_85%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-1.5 text-xs font-medium text-brand-muted shadow-sm"
        >
          AI Partners · Digital Marketing · Roselle Park, NJ
        </motion.div>

        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl"
        >
          <span className="block">
            Your All-in-One <span className="whitespace-nowrap text-brand-blue">AI Partner</span>
          </span>
          <span className="block">for Growing Business</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg"
        >
          No downtime. No confusion. AI systems, digital marketing, and business
          solutions that keep everything running behind the scenes.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#demos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-border bg-white px-7 py-3.5 text-sm font-semibold text-brand-ink shadow-sm transition-all duration-200 hover:border-brand-ink/25 hover:bg-brand-blue/5 sm:w-auto"
          >
            Try Our Demos
          </a>
          <a
            href="#booking"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue-deep hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)] sm:w-auto"
          >
            Book a Meeting
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <HubGraphic />
        <MobileTiles />
      </motion.div>
    </section>
  );
}
