import { useMemo, useState } from "react";
import { CalendarCheck, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { BOOKING_SLOTS } from "../lib/content";
import Reveal from "./Reveal";

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export default function Booking() {
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
    <section id="booking" className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            Book a Meeting
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Pick a day and time that works for you — a free 15-minute intro call, no strings attached.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-6 overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] lg:grid-cols-2">
            {/* Calendar */}
            <div className="border-b border-brand-border p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-brand-ink">
                  {MONTH_NAMES[month]} {year}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous month"
                    disabled={monthOffset === 0}
                    onClick={() => setMonthOffset((v) => Math.max(0, v - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-ink transition-colors duration-200 hover:bg-brand-bg disabled:opacity-30"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    disabled={monthOffset === 2}
                    onClick={() => setMonthOffset((v) => Math.min(2, v + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-ink transition-colors duration-200 hover:bg-brand-bg disabled:opacity-30"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-1 text-center">
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

              <p className="mt-5 text-xs text-brand-muted">
                Available Monday–Saturday. Times shown in Eastern Time.
              </p>
            </div>

            {/* Slots + details */}
            <div className="p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Check size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-brand-ink">
                    Request received
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-brand-muted">
                    {formattedDate} at {selectedSlot}. We&apos;ll confirm your meeting by
                    email within 24 hours.
                  </p>
                </div>
              ) : !selectedDate ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <CalendarCheck size={22} />
                  </div>
                  <p className="mt-5 max-w-xs text-sm text-brand-muted">
                    Select a date on the calendar to see available times.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand-ink">
                    <Clock size={15} className="text-brand-blue" />
                    {formattedDate}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {BOOKING_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
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
                    <div className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="booking-name" className="mb-2 block text-xs font-medium text-brand-muted">
                          Name
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-ink outline-none transition-colors duration-200 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-email" className="mb-2 block text-xs font-medium text-brand-muted">
                          Email
                        </label>
                        <input
                          id="booking-email"
                          type="email"
                          required
                          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-ink outline-none transition-colors duration-200 focus:border-brand-blue"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-full bg-brand-blue py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue-deep hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
                      >
                        Request Meeting
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
