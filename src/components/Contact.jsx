import { useState } from "react";
import { Check, MessageSquare } from "lucide-react";
import { CONTACT_NEEDS } from "../lib/content";

const inputClasses =
  "w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/50 outline-none transition-colors duration-200 focus:border-brand-blue";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact"
      className="flex h-full flex-col rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)]"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <MessageSquare size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-ink">Send a Message</h3>
          <p className="text-xs text-brand-muted">Prefer email? Tell us what you need.</p>
        </div>
      </div>

      {submitted ? (
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <Check size={20} />
          </div>
          <h4 className="mt-4 text-base font-semibold text-brand-ink">Message received</h4>
          <p className="mt-1.5 text-sm text-brand-muted">We respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-brand-muted">
                Name
              </label>
              <input id="name" name="name" type="text" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="business" className="mb-1.5 block text-xs font-medium text-brand-muted">
                Business name
              </label>
              <input id="business" name="business" type="text" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-brand-muted">
                Email
              </label>
              <input id="email" name="email" type="email" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-brand-muted">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={inputClasses} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="need" className="mb-1.5 block text-xs font-medium text-brand-muted">
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
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-brand-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className={`${inputClasses} resize-none`}
              />
            </div>
          </div>

          <div className="mt-auto pt-6">
            <button
              type="submit"
              className="w-full rounded-full bg-brand-blue py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue-deep hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
            >
              Submit
            </button>
            <p className="mt-3 text-center text-xs text-brand-muted">
              We respond within 24 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
