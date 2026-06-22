import { useState, useEffect, useRef, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useContentValue } from "../content/ContentProvider";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

type Variant = "hero" | "block";
type Phase = "idle" | "loading" | "success";

export default function WaitlistForm({
  variant = "hero",
  idPrefix,
}: {
  variant?: Variant;
  idPrefix: string;
}) {
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const checkRef = useRef<HTMLSpanElement>(null);
  const buttonText = useContentValue("hero.formButton");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setPhase("loading");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "waitlist",
          email: email,
          "bot-field": "",
        }).toString(),
      });
    } catch {
      // Still show success — we don't want to block the UX on network errors.
    }

    setPhase("success");
  };

  useEffect(() => {
    if (phase !== "success") return;
    const el = checkRef.current;
    if (!el) return;
    el.setAttribute("data-state", "out");
    void el.offsetWidth;
    el.setAttribute("data-state", "in");
  }, [phase]);

  const inputId = `${idPrefix}-email`;

  return (
    <div
      className={`liquid-glass flex items-center justify-center rounded-full transition-all duration-500 ease-out ${
        phase === "idle" ? "w-full" : "mx-auto w-fit"
      }`}
    >
      {phase === "idle" && (
        <form
          onSubmit={handleSubmit}
          name="waitlist"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={`state-fade-in flex w-full items-center gap-3 pl-6 pr-2 ${
            variant === "hero" ? "py-2" : "py-2.5"
          }`}
        >
          <input type="hidden" name="form-name" value="waitlist" />
          <input
            type="text"
            name="bot-field"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/40"
          />
          <button
            type="submit"
            aria-label="Get early access"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-white py-3 pl-5 pr-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            <span className="hidden sm:inline">{buttonText || "Get Early Access"}</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </form>
      )}

      {phase === "loading" && (
        <div className="state-fade-in flex items-center justify-center px-10 py-4">
          <Loader2 size={24} className="animate-spin text-white/80" />
        </div>
      )}

      {phase === "success" && (
        <div
          className="state-fade-in flex items-center justify-center gap-3 px-6 py-4 text-white"
          role="status"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black">
            <span
              ref={checkRef}
              className="t-success-check"
              data-state="out"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12.5 10 17.5 19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
          <span style={SERIF} className="text-base sm:text-lg">
            Thanks, we&rsquo;ll be in touch.
          </span>
        </div>
      )}
    </div>
  );
}
