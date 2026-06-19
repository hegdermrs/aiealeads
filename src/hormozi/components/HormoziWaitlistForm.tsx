import { useEffect, useRef, useState, type FormEvent } from "react";
import { SplitButton } from "./SplitButton";

type Variant = "hero" | "inline" | "footer";

export default function HormoziWaitlistForm({
  idPrefix,
  variant = "hero",
}: {
  idPrefix: string;
  variant?: Variant;
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const checkRef = useRef<HTMLSpanElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;
    const el = checkRef.current;
    if (!el) return;
    el.setAttribute("data-state", "out");
    void el.offsetWidth;
    el.setAttribute("data-state", "in");
  }, [submitted]);

  if (submitted) {
    return (
      <div className="oc-form-success" role="status">
        <span className="oc-form-success-icon">
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
        <span>You&rsquo;re on the list. We&rsquo;ll email you the moment we open.</span>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="oc-footer-form">
        <label className="oc-footer-field">
          <span className="oc-footer-label">First name</span>
          <input
            id={`${idPrefix}-first`}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="|"
            className="oc-footer-input"
            autoComplete="given-name"
          />
        </label>
        <label className="oc-footer-field">
          <span className="oc-footer-label">Email</span>
          <input
            id={`${idPrefix}-email`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="|"
            className="oc-footer-input"
            autoComplete="email"
          />
        </label>
        <SplitButton label="Notify Me When Doors Open" type="submit" />
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={variant === "hero" ? "oc-hero-form" : "oc-inline-form"}>
      {variant === "hero" && (
        <input
          id={`${idPrefix}-first`}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          className="oc-input"
          autoComplete="given-name"
        />
      )}
      <input
        id={`${idPrefix}-email`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="oc-input"
        autoComplete="email"
      />
      <SplitButton label="Notify Me When Doors Open" type="submit" />
    </form>
  );
}
