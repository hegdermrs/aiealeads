import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const LINKS = [
  { label: "The problem", href: "#problem" },
  { label: "Why it works", href: "#value" },
  { label: "What to build", href: "#build" },
  { label: "Proof", href: "#stories" },
];

export default function HormoziNav() {
  return (
    <div className="oc-nav-shell">
      <nav className="oc-nav" aria-label="Primary">
        <a href="#top" className="oc-nav-logo" aria-label="AIEA home">
          <svg viewBox="0 0 25 24" fill="currentColor" aria-hidden="true">
            <path d="m13.966 13.053 9.246-2.598-1.517-4.142-8.768 3.905z" />
            <path d="M11.06 13.053-9.326-2.598 1.53-4.142 8.844 3.905z" />
            <path d="m14.08 10.97.782-9.518-4.435-.035.617 9.53z" />
          </svg>
        </a>

        <ul className="oc-nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="oc-nav-link">
                {link.label}
                <ChevronDown size={14} className="oc-nav-chevron" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#waitlist" className="oc-btn oc-btn-white oc-nav-cta">
          Join waitlist
          <ArrowIcon />
        </a>
      </nav>

      <p className="sr-only">
        <Link to="/maxwell">Switch to Maxwell variation</Link>
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
