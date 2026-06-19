import { Globe } from "lucide-react";

const LINKS = [
  { label: "The Gap", href: "#the-gap" },
  { label: "What You Get", href: "#what-you-get" },
  { label: "Stories", href: "#stories" },
];

export default function Nav() {
  return (
    <nav className="relative z-20 px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
        {/* Left: logo + links */}
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2">
            <Globe size={24} className="text-white" />
            <span className="text-lg font-semibold text-white">AIEA</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: secondary + primary CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#manifesto"
            className="hidden text-sm font-medium text-white transition-colors hover:text-white/70 sm:inline"
          >
            Manifesto
          </a>
          <a
            href="#waitlist"
            className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
