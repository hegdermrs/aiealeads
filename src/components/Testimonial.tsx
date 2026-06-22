import { useState } from "react";
import Reveal from "./Reveal";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

function getInitials(name: string) {
  const parts = name.replace(/[&]/g, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Testimonial({
  headline,
  quote,
  name,
  role,
  image,
}: {
  headline: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const showAvatar = image && !imgError;

  return (
    <Reveal className="mx-auto w-full max-w-3xl px-6">
      <figure className="liquid-glass rounded-3xl p-8 md:p-12">
        <blockquote>
          <p
            style={SERIF}
            className="text-2xl leading-snug text-white md:text-3xl"
          >
            &ldquo;{headline}&rdquo;
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/70">
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
      </figure>
    </Reveal>
  );
}
