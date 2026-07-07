import { useMemo, useState } from "react";
import { CalendarCheck, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { BOOKING_SLOTS } from "../lib/content";

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export default function BookingPanel() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const isDisabled = (d) => d < today || d.getDay() === 0;
  const isSelected = (d) =>
    selectedDate &&
    d.getFullYear() === selectedDate.getFullYear() &&
    d.getMonth() === selectedDate.getMonth() &&
    d.getDate() === selectedDate.getDate();

  const pickDate = (d) => {
    setSelectedDate(d);
    setSelectedSlot(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formattedDate = selectedDate
    ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : null;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)]">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <CalendarCheck size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-ink">Book a Meeting</h3>
          <p className="text-xs text-brand-muted">Free 15-minute intro call</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-brand-ink">
          {MONTH_NAMES[month]} {year}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous month"
            disabled={monthOffset === 0}
            onClick={() => setMonthOffset((v) => Math.max(0, v - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border text-brand-ink transition-colors duration-200 hover:bg-brand-bg disabled:opacity-30"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            aria-label="Next month"
            disabled={monthOffset === 2}
            onClick={() => setMonthOffset((v) => Math.min(2, v + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border text-brand-ink transition-colors duration-200 hover:bg-brand-bg disabled:opacity-30"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {DAY_LABELS.map((d) => (
          <div key={d} className="py-1 text-xs font-medium text-brand-muted">
            {d}
          </div>
        ))}
        {cells.map((d, i) =>
          d === null ? (
            <div key={`empty-${i}`} />
          ) : (
            <button
              key={d.toISOString()}
              type="button"
              disabled={isDisabled(d)}
              onClick={() => pickDate(d)}
              className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors duration-200 ${
                isSelected(d)
                  ? "bg-brand-blue font-semibold text-white"
                  : isDisabled(d)
                    ? "text-brand-muted/35"
                    : "text-brand-ink hover:bg-brand-blue/10"
              }`}
            >
              {d.getDate()}
            </button>
          )
        )}
      </div>

      <div className="mt-5 border-t border-brand-border pt-5">
        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <Check size={20} />
            </div>
            <h4 className="mt-4 text-base font-semibold text-brand-ink">Request received</h4>
            <p className="mt-1.5 max-w-xs text-sm text-brand-muted">
              {formattedDate} at {selectedSlot}. We&apos;ll confirm your meeting by email
              within 24 hours.
            </p>
          </div>
        ) : !selectedDate ? (
          <p className="py-4 text-center text-sm text-brand-muted">
            Select a date above to see available times.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-ink">
              <Clock size={14} className="text-brand-blue" />
              {formattedDate}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {BOOKING_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors duration-200 ${
                    selectedSlot === slot
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-brand-border text-brand-ink hover:border-brand-blue/50 hover:bg-brand-blue/5"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            {selectedSlot && (
              <div className="mt-4 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    aria-label="Name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-2.5 text-sm text-brand-ink placeholder:text-brand-muted/60 outline-none transition-colors duration-200 focus:border-brand-blue"
                  />
                  <input
                    aria-label="Email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-2.5 text-sm text-brand-ink placeholder:text-brand-muted/60 outline-none transition-colors duration-200 focus:border-brand-blue"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-blue py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue-deep hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
                >
                  Request Meeting
                </button>
              </div>
            )}
          </form>
        )}
      </div>

      <p className="mt-auto pt-4 text-center text-xs text-brand-muted">
        Available Monday–Saturday · Eastern Time
      </p>
    </div>
  );
}
