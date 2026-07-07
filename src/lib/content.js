export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#demos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export const CARD_NAV_ITEMS = [
  {
    label: "Explore",
    bgColor: "#f1f5fd",
    textColor: "#0b1220",
    links: [
      { label: "Services", href: "#services", ariaLabel: "Go to Services" },
      { label: "Demos", href: "#demos", ariaLabel: "Go to Demos" },
      { label: "Portfolio", href: "#portfolio", ariaLabel: "Go to Portfolio" },
    ],
  },
  {
    label: "Company",
    bgColor: "#e7eefc",
    textColor: "#0b1220",
    links: [
      { label: "About", href: "#about", ariaLabel: "Go to About" },
      { label: "Contact", href: "#contact", ariaLabel: "Go to Contact" },
    ],
  },
  {
    label: "Get in Touch",
    bgColor: "#2563eb",
    textColor: "#ffffff",
    links: [
      { label: "Book a Meeting", href: "#booking", ariaLabel: "Book a meeting" },
      { label: "Email Us", href: "mailto:hello@creativebinary.org", ariaLabel: "Email Creative Binary" },
    ],
  },
];

export const SERVICES_SHOWCASE = [
  {
    serviceName: "Web Design & Development",
    description: "Websites built to turn visitors into booked clients.",
    features: [
      "Custom website design",
      "E-commerce & online booking",
      "Landing pages & funnels",
      "SEO & site speed",
      "Hosting, care & maintenance",
    ],
    buttonText: "Book a Free Consult",
  },
  {
    serviceName: "AI & Automation",
    description: "Systems that answer, follow up, and book — so you never miss a lead.",
    features: [
      "AI phone & chat agents",
      "Missed-call text back",
      "Lead follow-up sequences",
      "Appointment booking & reminders",
      "CRM & workflow integration",
    ],
    buttonText: "Book a Free Consult",
    isFeatured: true,
  },
  {
    serviceName: "Marketing & Branding",
    description: "The identity and campaigns that keep new customers coming in.",
    features: [
      "Brand & visual identity",
      "Google Business & review strategy",
      "Email & SMS campaigns",
      "Social media content",
      "Ad creative & landing pages",
    ],
    buttonText: "Book a Free Consult",
  },
];

export const SERVICE_DETAILS = [
  {
    id: "web",
    title: "Website Design & Development",
    intro:
      "Your website is your hardest-working employee. We design and build sites that load fast, look sharp on every device, and are engineered around one goal — turning visitors into booked clients.",
    visual: "web",
    items: [
      {
        label: "Custom Website Design",
        body: "Designed from scratch around your brand and your customers — no templates, no page builders, nothing recycled.",
      },
      {
        label: "E-Commerce & Online Booking",
        body: "Sell products or take appointments directly on your site, synced to your calendar and inventory.",
      },
      {
        label: "Landing Pages & Funnels",
        body: "Focused pages for ads and campaigns that move a visitor from click to booked call in one screen.",
      },
      {
        label: "SEO & Site Speed",
        body: "Technical SEO, local search optimization, and sub-second load times so you get found and stay found.",
      },
      {
        label: "Hosting, Care & Maintenance",
        body: "We keep your site online, updated, backed up, and secure — you never think about it again.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    intro:
      "Every missed call is a missed client. We build systems that answer instantly, follow up relentlessly, and book appointments while you work — without you touching a thing.",
    visual: "ai",
    items: [
      {
        label: "AI Phone & Chat Agents",
        body: "A trained agent that answers your calls and website chat 24/7, handles common questions, and books appointments into your calendar.",
      },
      {
        label: "Missed-Call Text Back",
        body: "When you can't pick up, the caller instantly gets a text that keeps the conversation — and the lead — alive.",
      },
      {
        label: "Lead Follow-Up Sequences",
        body: "Automatic email and SMS follow-up that nurtures every inquiry until they book, so no lead goes cold.",
      },
      {
        label: "Appointment Booking & Reminders",
        body: "Self-serve scheduling with automated confirmations and reminders that cut no-shows dramatically.",
      },
      {
        label: "CRM & Workflow Integration",
        body: "Your calls, forms, payments, and calendar all talking to each other — one clean system instead of ten disconnected apps.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Branding",
    intro:
      "A great website with no traffic is a billboard in the desert. We build the brand and run the channels that consistently put your business in front of the right people.",
    visual: "marketing",
    items: [
      {
        label: "Brand & Visual Identity",
        body: "Logo, colors, typography, and the design language that makes your business look established and trustworthy.",
      },
      {
        label: "Google Business & Reviews",
        body: "An optimized Google profile plus automated review requests that build the star rating customers check first.",
      },
      {
        label: "Email & SMS Campaigns",
        body: "Offers, updates, and win-back campaigns sent to the list you already own — the highest-ROI channel in marketing.",
      },
      {
        label: "Social Media Content",
        body: "A consistent, on-brand presence with content planned and scheduled — without you living on your phone.",
      },
      {
        label: "Ad Creative & Landing Pages",
        body: "Scroll-stopping creative paired with landing pages built to convert the clicks you pay for.",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They rebuilt my website and set up online booking in a week. My chair stays full and I'm not answering the phone mid-cut anymore.",
    name: "Kevin M.",
    role: "Barbershop Owner",
  },
  {
    quote:
      "The follow-up automation alone paid for itself the first month. Leads that used to slip through the cracks now get answered in seconds.",
    name: "Dana R.",
    role: "Mortgage Loan Officer",
  },
  {
    quote:
      "Fast, responsive, and they actually explain things in plain English. It feels like having a tech team on staff without the payroll.",
    name: "Luis T.",
    role: "Auto Dealer",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "We Audit",
    description:
      "We look at how your business currently operates and identify exactly what to automate.",
  },
  {
    number: "02",
    title: "We Build",
    description:
      "We design and build your system from scratch — no templates, no shortcuts.",
  },
  {
    number: "03",
    title: "You Grow",
    description:
      "Your business runs smoother, you miss fewer leads, and you get your time back.",
  },
];

export const PORTFOLIO = [
  {
    tag: "Web Design",
    title: "Upscale Cuts",
    description:
      "Professional barbershop website with online booking, service menu, and Google review integration.",
    link: "upscalecuts.vercel.app",
    href: "https://upscalecuts.vercel.app",
    status: "Live",
    visual: "barber",
  },
  {
    tag: "AI Automation System",
    title: "Kevin Nexus",
    description:
      "Personal operating system for a barbershop owner, mortgage loan officer, and car dealer. Calendar sync, AI phone system, VA dashboard, and mortgage workflow automation.",
    link: null,
    href: null,
    status: "In Progress",
    visual: "dashboard",
  },
];

export const WHY_US = [
  {
    title: "We build custom",
    description: "Nothing is templated or recycled — every system is built from zero for your business.",
  },
  {
    title: "We move fast",
    description: "Most projects delivered in one week, not one quarter.",
  },
  {
    title: "We stay local",
    description: "Roselle Park, NJ — available when you need us, not a call center overseas.",
  },
  {
    title: "We grow with you",
    description: "Every system is built to scale as your business does.",
  },
];

export const AUTOMATIONS = [
  "Missed-call text back",
  "Lead follow-up sequences",
  "Appointment booking & reminders",
  "Google review requests",
  "Invoice & payment chasing",
  "CRM data sync",
  "Social media scheduling",
  "AI phone answering",
];

export const CONTACT_NEEDS = [
  "Website",
  "Digital Marketing",
  "Automation System",
  "AI System",
  "Not sure yet",
];

export const BOOKING_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];
