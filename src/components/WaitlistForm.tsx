import { useState, useEffect, useRef, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "hero" | "block";

/**
 * Reusable email opt-in. The only call to action on the page.
 * On submit it shows a short confirmation and (in a real build) would
 * POST the address to the AIEA waitlist.
 */
export default function WaitlistForm({
  variant = "hero",
  idPrefix,
}: {
  variant?: Variant;
  idPrefix: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const checkRef = useRef<HTMLSpanElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Real implementation would add the address to the AIEA waitlist here.
    setSubmitted(true);
  };

  // Drive the transitions.dev success-check once the confirmation mounts.
  useEffect(() => {
    if (!submitted) return;
    const el = checkRef.current;
    if (!el) return;
    el.setAttribute("data-state", "out");
    void el.offsetWidth; // force reflow so the keyframes restart from 0
    el.setAttribute("data-state", "in");
  }, [submitted]);

  if (submitted) {
    return (
      <div
        className={`liquid-glass flex items-center justify-center gap-3 rounded-full px-6 ${
          variant === "hero" ? "py-4" : "py-5"
        } text-white`}
        role="status"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black">
          <span ref={checkRef} className="t-success-check" data-state="out" aria-hidden="true">
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
        <span className="text-sm leading-relaxed sm:text-base">
          You&rsquo;re on the list. We&rsquo;ll email you the moment the doors
          open.
        </span>
      </div>
    );
  }

  const inputId = `${idPrefix}-email`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`liquid-glass flex items-center gap-3 rounded-full pl-6 pr-2 ${
        variant === "hero" ? "py-2" : "py-2.5"
      }`}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
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
        <span className="hidden sm:inline">Get Early Access</span>
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}
