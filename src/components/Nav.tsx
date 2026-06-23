import { Globe, Instagram, Twitter } from "lucide-react";
import { useContentValue } from "../content/ContentProvider";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Nav() {
  const gapLabel = useContentValue("nav.gapLabel");
  const whatYouGetLabel = useContentValue("nav.whatYouGetLabel");
  const storiesLabel = useContentValue("nav.storiesLabel");
  const ctaLabel = useContentValue("nav.ctaLabel");

  const LINKS = [
    { label: gapLabel || "The Gap", href: "#the-gap" },
    { label: whatYouGetLabel || "What You Get", href: "#what-you-get" },
    { label: storiesLabel || "Stories", href: "#stories" },
  ];

  return (
    <nav className="relative z-20 px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
        {/* Left: logo + links */}
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2">
            <img src="/logo.png" alt="AIEA logo" className="h-16 w-16" />
            <span style={SERIF} className="text-4xl text-white">AIEA</span>
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

        {/* Right: social icons + CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="#"
              aria-label="AIEA on Instagram"
              className="liquid-glass rounded-full p-2.5 text-white/70 transition-all hover:text-white"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="AIEA on Twitter"
              className="liquid-glass rounded-full p-2.5 text-white/70 transition-all hover:text-white"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              aria-label="AIEA website"
              className="liquid-glass rounded-full p-2.5 text-white/70 transition-all hover:text-white"
            >
              <Globe size={16} />
            </a>
          </div>
          <a
            href="#waitlist"
            className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            {ctaLabel || "Get Early Access"}
          </a>
        </div>
      </div>
    </nav>
  );
}
