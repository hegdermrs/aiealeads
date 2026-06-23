/* Hallmark · component: testimonial-marquee · genre: atmospheric · theme: existing (dark)
 * states: default · hover (pause scroll + card lift with bouncy return)
 */

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { useContentValue } from "../content/ContentProvider";
import { RenderHeading } from "../utils/headings";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

function getInitials(name: string) {
  const parts = name.replace(/[&]/g, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type TestimonialData = {
  headline: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
};

export default function TestimonialsMarquee({ items }: { items: TestimonialData[] }) {
  const storiesHeading = useContentValue("stories.heading");
  const doubled = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);

  const setShifts = (activeIdx: number | null) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLDivElement>(".t-avatar");
    const tf = activeIdx == null
      ? "cubic-bezier(0.34, 3.85, 0.64, 1)"
      : "cubic-bezier(0.22, 1, 0.36, 1)";

    cards.forEach((el, i) => {
      el.style.transitionTimingFunction = tf;
      if (activeIdx == null) {
        el.style.removeProperty("--shift");
        el.style.removeProperty("--scale-active");
        return;
      }
      el.style.setProperty("--shift", i === activeIdx ? "-6px" : "0px");
      el.style.setProperty("--scale-active", i === activeIdx ? "1.02" : "1");
    });
  };

  return (
    <section id="stories" className="scroll-mt-20 overflow-hidden px-6 py-10 md:py-14">
      <Reveal className="mx-auto mb-14 max-w-3xl text-center">
        <h2
          style={SERIF}
          className="hero-title-shadow text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
        >
          <RenderHeading text={storiesHeading || "What founders are saying."} />
        </h2>
      </Reveal>

      <div className="group relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-black to-transparent md:w-96" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-black to-transparent md:w-96" />

        <div
          ref={trackRef}
          className="marquee-track flex gap-12"
          onMouseLeave={() => setShifts(null)}
        >
          {doubled.map((t, i) => (
            <Card key={`${t.name}-${i}`} index={i} onHover={setShifts} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  headline, quote, name, role, image,
  index, onHover,
}: TestimonialData & { index: number; onHover: (i: number | null) => void }) {
  const [imgError, setImgError] = useState(false);
  const showAvatar = image && !imgError;

  return (
    <div
      className="t-avatar liquid-glass flex w-[52rem] shrink-0 flex-col justify-between rounded-3xl p-14 md:w-[56rem]"
      onMouseEnter={() => onHover(index)}
    >
      <blockquote>
        <p
          style={SERIF}
          className="hero-title-shadow text-3xl leading-snug text-white md:text-4xl"
        >
          &ldquo;{headline}&rdquo;
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4 text-base">
        {showAvatar ? (
          <img
            src={image}
            alt={name}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-white/20"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-base font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            {getInitials(name)}
          </span>
        )}
        <span className="font-medium text-white text-lg">{name}</span>
        <span className="text-white/50 text-lg">{role}</span>
      </figcaption>
    </div>
  );
}
