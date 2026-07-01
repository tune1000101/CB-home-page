import { useState } from "react";
import { Check } from "lucide-react";
import { CONTACT_NEEDS } from "../lib/content";
import Reveal from "./Reveal";

const inputClasses =
  "w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-white placeholder:text-brand-silver/50 outline-none transition-colors duration-200 focus:border-brand-blue";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-brand-border px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-white sm:text-5xl">
            Let&apos;s talk
          </h2>
          <p className="mt-4 text-lg text-brand-silver">
            Tell us a bit about your business and what you need.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-border bg-brand-surface px-8 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Check size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-white">
                Message received
              </h3>
              <p className="mt-2 text-sm text-brand-silver">
                We respond within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-brand-border bg-brand-surface p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium text-brand-silver">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="business" className="mb-2 block text-xs font-medium text-brand-silver">
                    Business name
                  </label>
                  <input id="business" name="business" type="text" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-brand-silver">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-medium text-brand-silver">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClasses} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="need" className="mb-2 block text-xs font-medium text-brand-silver">
                    What do you need
                  </label>
                  <select id="need" name="need" defaultValue="" required className={inputClasses}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {CONTACT_NEEDS.map((need) => (
                      <option key={need} value={need}>
                        {need}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-brand-silver">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-brand-blue py-3.5 text-sm font-semibold text-brand-bg transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-[0_0_28px_rgba(75,163,227,0.35)]"
              >
                Submit
              </button>
              <p className="mt-4 text-center text-xs text-brand-silver">
                We respond within 24 hours.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
