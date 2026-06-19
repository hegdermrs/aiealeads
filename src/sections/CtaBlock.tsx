import Reveal from "../components/Reveal";
import WaitlistForm from "../components/WaitlistForm";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function CtaBlock({
  id,
  idPrefix,
  eyebrow,
  heading,
  body,
  microcopy,
  image,
  imageAlt,
}: {
  id?: string;
  idPrefix: string;
  eyebrow: string;
  heading: string;
  body: string;
  microcopy: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-20">
      <Reveal className="mx-auto max-w-4xl">
        <div className="liquid-glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 md:py-20">
          {image && (
            <>
              <img
                src={image}
                alt={imageAlt ?? ""}
                className="absolute inset-0 h-full w-full object-cover opacity-30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
            </>
          )}

          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              {eyebrow}
            </span>
            <h2
              style={SERIF}
              className="mt-4 text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {body}
            </p>

            <div className="mx-auto mt-8 max-w-lg space-y-4">
              <WaitlistForm variant="block" idPrefix={idPrefix} />
              <p className="text-sm leading-relaxed text-white/55">
                {microcopy}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
