import { Bot, Calendar, Check, Phone, Scissors, Star, TrendingUp } from "lucide-react";

function BrowserFrame({ children, url = "yourbusiness.com", dark = false }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-[0_24px_60px_-25px_rgba(15,23,42,0.25)] ${
        dark ? "border-slate-700 bg-slate-900" : "border-brand-border bg-white"
      }`}
    >
      <div
        className={`flex items-center gap-3 border-b px-4 py-2.5 ${
          dark ? "border-slate-700 bg-slate-800" : "border-brand-border bg-brand-bg"
        }`}
      >
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div
          className={`flex-1 rounded-md px-3 py-1 text-[11px] ${
            dark ? "bg-slate-700 text-slate-400" : "bg-white text-brand-muted border border-brand-border"
          }`}
        >
          {url}
        </div>
      </div>
      <div className="aspect-[4/3] p-5">{children}</div>
    </div>
  );
}

export function WebVisual() {
  return (
    <BrowserFrame url="yourbusiness.com">
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand-blue" />
            <span className="h-2 w-14 rounded bg-slate-300" />
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-8 rounded bg-slate-200" />
            <span className="h-2 w-8 rounded bg-slate-200" />
            <span className="h-6 w-16 rounded-full bg-brand-blue" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-blue-50 to-white">
          <span className="h-3.5 w-3/5 rounded bg-slate-800" />
          <span className="h-3.5 w-2/5 rounded bg-slate-800" />
          <span className="h-2 w-1/2 rounded bg-slate-300" />
          <span className="mt-1 h-7 w-24 rounded-full bg-brand-blue" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5 rounded-lg border border-brand-border p-2.5">
              <span className="block h-5 w-5 rounded bg-blue-100" />
              <span className="block h-2 w-4/5 rounded bg-slate-300" />
              <span className="block h-2 w-3/5 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiVisual() {
  return (
    <BrowserFrame url="AI agent · live conversation">
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <Bot size={14} />
          </span>
          <div className="rounded-2xl rounded-tl-md bg-brand-bg px-3.5 py-2 text-[12px] text-brand-ink">
            Thanks for calling! I can get you booked — what day works?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-md bg-brand-blue px-3.5 py-2 text-[12px] text-white">
            Friday afternoon?
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <Bot size={14} />
          </span>
          <div className="rounded-2xl rounded-tl-md bg-brand-bg px-3.5 py-2 text-[12px] text-brand-ink">
            Done — Friday 2:30 PM. Confirmation text on the way.
          </div>
        </div>
        <div className="mx-auto mt-2 flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-medium text-emerald-700">
          <Calendar size={13} />
          Appointment booked — added to your calendar
        </div>
        <div className="mx-auto flex items-center gap-2 text-[11px] text-brand-muted">
          <Phone size={12} className="text-brand-blue" />
          Answered in 1 ring · 11:42 PM
        </div>
      </div>
    </BrowserFrame>
  );
}

export function MarketingVisual() {
  const bars = [34, 48, 42, 62, 70, 88];
  return (
    <BrowserFrame url="Campaign performance · last 6 months">
      <div className="flex h-full flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "New leads", value: "+164%" },
            { label: "Bookings", value: "+87%" },
            { label: "Reviews", value: "4.9★" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-brand-border p-2.5">
              <p className="text-[10px] text-brand-muted">{s.label}</p>
              <p className="mt-0.5 text-sm font-bold text-brand-ink">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end justify-between gap-2 rounded-xl border border-brand-border p-4">
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`w-full rounded-t ${i === bars.length - 1 ? "bg-brand-blue" : "bg-blue-200"}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] text-brand-muted">
          <span className="flex items-center gap-1.5">
            <TrendingUp size={13} className="text-emerald-600" />
            Growth trend
          </span>
          <span className="flex items-center gap-0.5 text-amber-500">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={11} fill="currentColor" />
            ))}
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BarberVisual() {
  return (
    <BrowserFrame url="upscalecuts.vercel.app" dark>
      <div className="flex h-full flex-col gap-3">
        <div className="flex flex-1 flex-col items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
            <Scissors size={16} />
          </span>
          <span className="h-3 w-2/5 rounded bg-slate-200" />
          <span className="h-2 w-1/2 rounded bg-slate-600" />
          <span className="mt-1 h-7 w-24 rounded-full bg-amber-400" />
        </div>
        {[
          { name: "Signature Cut", time: "45 min" },
          { name: "Cut + Beard Sculpt", time: "60 min" },
        ].map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between rounded-lg border border-slate-700 px-3 py-2"
          >
            <span className="text-[12px] font-medium text-slate-200">{s.name}</span>
            <span className="flex items-center gap-2 text-[11px] text-slate-400">
              {s.time}
              <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-semibold text-slate-900">
                Book
              </span>
            </span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function DashboardVisual() {
  return (
    <BrowserFrame url="nexus.dashboard · operator view">
      <div className="flex h-full gap-3">
        <div className="flex w-12 flex-col items-center gap-2 rounded-lg bg-brand-bg py-3">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-6 w-6 rounded-md ${i === 0 ? "bg-brand-blue" : "bg-slate-200"}`}
            />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Calls handled", value: "128" },
              { label: "Bookings today", value: "9" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-brand-border p-2.5">
                <p className="text-[10px] text-brand-muted">{s.label}</p>
                <p className="mt-0.5 text-sm font-bold text-brand-ink">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="relative flex-1 rounded-lg border border-brand-border p-3">
            <svg viewBox="0 0 200 80" className="h-full w-full" preserveAspectRatio="none">
              <polyline
                points="0,70 30,62 60,64 90,48 120,42 150,28 180,22 200,12"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <polyline
                points="0,70 30,62 60,64 90,48 120,42 150,28 180,22 200,12 200,80 0,80"
                fill="rgba(37,99,235,0.08)"
                stroke="none"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700">
            <Check size={12} />
            3 workflows ran while you slept
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const VISUALS = {
  web: WebVisual,
  ai: AiVisual,
  marketing: MarketingVisual,
  barber: BarberVisual,
  dashboard: DashboardVisual,
};

export default function Visual({ name }) {
  const Component = VISUALS[name];
  return Component ? <Component /> : null;
}
