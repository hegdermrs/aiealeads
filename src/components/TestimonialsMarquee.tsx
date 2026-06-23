import { useState } from "react";
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

  return (
    <section id="stories" className="scroll-mt-20 px-6 py-10 md:py-14">
      <Reveal className="mx-auto mb-14 max-w-3xl text-center">
        <h2
          style={SERIF}
          className="hero-title-shadow text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
        >
          <RenderHeading text={storiesHeading || "What founders are saying."} />
        </h2>
      </Reveal>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ headline, quote, name, role, image }: TestimonialData) {
  const [imgError, setImgError] = useState(false);
  const showAvatar = image && !imgError;

  return (
    <div className="liquid-glass flex flex-col justify-between rounded-3xl p-7">
      <blockquote>
        <p
          style={SERIF}
          className="hero-title-shadow text-xl leading-snug text-white md:text-2xl"
        >
          &ldquo;{headline}&rdquo;
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 text-sm">
        {showAvatar ? (
          <img
            src={image}
            alt={name}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/20"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            {getInitials(name)}
          </span>
        )}
        <span className="font-medium text-white">{name}</span>
        <span className="text-white/50">{role}</span>
      </figcaption>
    </div>
  );
}
