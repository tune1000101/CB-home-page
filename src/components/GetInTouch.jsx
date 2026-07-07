import BookingPanel from "./Booking";
import ContactPanel from "./Contact";
import Reveal from "./Reveal";

export default function GetInTouch() {
  return (
    <section id="booking" className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            Let&apos;s Talk
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Grab a time on the calendar, or drop us a message — whichever is easier.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <BookingPanel />
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <ContactPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
