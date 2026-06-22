import Reveal from "../components/Reveal";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

const ETHOS = ["Honor", "Courage", "Commitment"];

export default function Founder() {
  return (
    <section id="manifesto" className="scroll-mt-20 px-6 py-28 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Visual */}
        <Reveal className="order-last flex justify-center lg:order-first">
          <div className="liquid-glass max-w-sm overflow-hidden rounded-[2rem]">
            <img
              src="/imgs/aoc.webp"
              alt="Antonio Centeno, founder of the AI Execution Accelerator, in a blue suit and green tie."
              className="aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal as="h2">
            <span
              style={SERIF}
              className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              I&rsquo;m Antonio Centeno.
            </span>
          </Reveal>

          <Reveal className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
            <p>
              For 18 years I&rsquo;ve built businesses online: Real Men Real
              Style, Mission Fragrances, communities, courses, products, and
              content channels with millions of subscribers and hundreds of
              millions of views.
            </p>
            <p>
              Seven kids. Multiple businesses. Constant decisions. And now AI. I
              didn&rsquo;t build this to sell another course &mdash; I built it
              because I saw the gap: smart owners know AI matters, but most
              don&rsquo;t have the time, clarity, or technical help to turn that
              into working systems.
            </p>
            <p
              style={SERIF}
              className="border-l-2 border-emerald-400/70 pl-5 text-2xl leading-snug text-white md:text-3xl"
            >
              Ideas are cheap.{" "}
              <span className="text-emerald-300/90">
                Execution is what counts.
              </span>
            </p>
          </Reveal>

          <Reveal className="mt-8 flex flex-nowrap items-center gap-3">
            <span className="shrink-0 text-sm text-white/50">
              My Marine officer background sets the standard:
            </span>
            {ETHOS.map((word) => (
              <span
                key={word}
                className="liquid-glass shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-white"
              >
                {word}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
