import { useEffect, useRef, useState } from "react";
import { Bot, Check, Globe, Send, Workflow, ArrowUpRight } from "lucide-react";
import { AUTOMATIONS } from "../lib/content";
import Reveal from "./Reveal";

const AGENT_REPLIES = [
  "Hi! I'm the Creative Binary demo agent. I can answer questions, book appointments, and follow up with your customers 24/7. What kind of business do you run?",
  "Nice — we work with businesses like yours all the time. I can handle your incoming calls and texts, answer common questions, and book appointments straight into your calendar.",
  "If a customer calls after hours, I pick up, answer their questions, and get them booked — you just see the appointment appear on your schedule.",
  "Want to see this running on your own business? Book a free meeting below and we'll build you a live preview.",
];

function ChatDemo() {
  const [messages, setMessages] = useState([
    { from: "agent", text: AGENT_REPLIES[0] },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const replyIndex = useRef(1);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    const reply = AGENT_REPLIES[Math.min(replyIndex.current, AGENT_REPLIES.length - 1)];
    replyIndex.current += 1;
    setTimeout(() => {
      setMessages((m) => [...m, { from: "agent", text: reply }]);
      setTyping(false);
    }, 900);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-brand-surface shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
      <div className="flex items-center gap-3 border-b border-brand-border px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
          <Bot size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-ink">AI Customer Service Agent</p>
          <p className="flex items-center gap-1.5 text-xs text-brand-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online — demo preview
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-6 py-5" style={{ minHeight: 260, maxHeight: 320 }}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "user"
                  ? "rounded-br-md bg-brand-blue text-white"
                  : "rounded-bl-md bg-brand-bg text-brand-ink"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-brand-bg px-4 py-2.5 text-sm text-brand-muted">
              typing…
            </div>
          </div>
        )}
      </div>

      <form onSubmit={send} className="flex items-center gap-2 border-t border-brand-border p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the agent anything…"
          aria-label="Message the demo agent"
          className="w-full rounded-full border border-brand-border bg-brand-bg px-4 py-2.5 text-sm text-brand-ink placeholder:text-brand-muted/60 outline-none transition-colors duration-200 focus:border-brand-blue"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition-all duration-200 hover:bg-brand-blue-deep"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default function Demos() {
  return (
    <section id="demos" className="border-t border-brand-border bg-brand-bg px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Try a live preview of what we build — no signup, no sales call.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <ChatDemo />
            <p className="mt-3 text-center text-xs text-brand-muted">
              Scripted preview — book a meeting to talk to a live AI agent trained on a real business.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Workflow size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-ink">
                  Automations We Provide
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {AUTOMATIONS.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-brand-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Globe size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-ink">
                  Websites That Convert
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Fast, mobile-ready sites with booking, reviews, and marketing built in.
                  See a live one we shipped:
                </p>
                <a
                  href="https://upscalecuts.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors duration-200 hover:text-brand-blue-deep"
                >
                  upscalecuts.vercel.app
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
