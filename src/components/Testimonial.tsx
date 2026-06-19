import Reveal from "./Reveal";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Testimonial({
  headline,
  quote,
  name,
  role,
}: {
  headline: string;
  quote: string;
  name: string;
  role: string;
}) {
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
          <span className="h-px w-8 bg-emerald-400/70" />
          <span className="font-medium text-white">{name}</span>
          <span className="text-white/50">{role}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
