import Reveal from "../components/Reveal";
import { useContentValue } from "../content/ContentProvider";
import { RenderHeading, RenderQuote } from "../utils/headings";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Gap() {
  const heading = useContentValue("gap.heading");
  const p1 = useContentValue("gap.paragraph1");
  const p2 = useContentValue("gap.paragraph2");
  const quote = useContentValue("gap.quote");
  const behindHeading = useContentValue("gapBehind.heading");
  const behindCaption = useContentValue("gapBehind.caption");
  return (
    <section
      id="the-gap"
      className="relative scroll-mt-20 px-6 py-10 md:py-14"
    >
      {/* Copy — constrained width centered */}
      <div className="mx-auto max-w-4xl text-center">
        <Reveal as="h2">
          <span
            style={SERIF}
            className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
          >
            <RenderHeading text={heading || "You're not new to AI. You just haven't installed it yet."} />
          </span>
        </Reveal>

        <Reveal className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
          <p>{p1 || "You've used ChatGPT. Watched the videos. Heard the podcasts. Tested a few tools. And deep down, you know this technology is going to change your business."}</p>
          <p>{p2 || "But here's the honest truth: you still haven't installed AI into the way your business actually runs. Not because you're lazy — because you're busy running a real business with customers, payroll, a team, and a family. So AI keeps getting pushed to later."}</p>
        </Reveal>

        <Reveal className="mt-8 inline-block text-left">
          <p
            style={SERIF}
            className="border-l-2 border-emerald-400/70 pl-5 text-2xl leading-snug text-white md:text-3xl"
          >
            <RenderQuote text={quote || "That's the gap. Not knowledge. Execution."} />
          </p>
        </Reveal>
      </div>

      {/* Side-by-side: problem + iceberg */}
      <Reveal className="mx-auto mt-16 max-w-6xl">
        <div className="grid grid-cols-[3.5fr_2fr] gap-3">
          <div className="liquid-glass overflow-hidden rounded-3xl">
            <img
              src="/imgs/problem.png"
              alt="A visual of the gap between knowing AI matters and actually putting it to work."
              className="aspect-[3.5/2.6] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="liquid-glass overflow-hidden rounded-3xl">
            <img
              src="/imgs/iceberg.png"
              alt="Like an iceberg, the gap between knowing AI and executing it is mostly beneath the surface."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Reveal>

      {/* Feeling behind — text */}
      <div className="mx-auto mt-24 max-w-4xl text-center">
        <Reveal as="h2">
          <span
            style={SERIF}
            className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
          >
            <RenderHeading text={behindHeading || "You're not alone in feeling behind."} />
          </span>
        </Reveal>

        <Reveal className="mt-7 text-lg leading-relaxed text-white/70">
          <p>{behindCaption || "Every founder I talk to feels the same way — like everyone else already figured out AI and you're the only one still trying to catch up. You're not. The people actually building with AI are rare. That's not bad news. It means the opportunity is still wide open."}</p>
        </Reveal>
      </div>

      {/* Feeling behind — image */}
      <Reveal className="mx-auto mt-16 max-w-6xl">
        <div className="liquid-glass overflow-hidden rounded-3xl">
          <img
            src="/imgs/behind.png"
            alt="A person feeling left behind while everyone else moves ahead with AI."
            className="aspect-[5/2] w-full object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}
