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
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <Reveal as="h2">
          <span
            style={SERIF}
            className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
          >
            <RenderHeading text={heading || "You're not new to AI. You just haven't installed it yet."} />
          </span>
        </Reveal>
      </div>

      {/* Full-width image */}
      <Reveal className="mx-auto mt-10 max-w-6xl">
        <div className="liquid-glass overflow-hidden rounded-3xl">
          <img
            src="/imgs/problem.png"
            alt="A visual of the gap between knowing AI matters and actually putting it to work."
            className="aspect-[5/2] w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Copy */}
      <div className="mx-auto mt-10 max-w-4xl text-center">
        <Reveal className="space-y-5 text-lg leading-relaxed text-white/70">
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

        <div className="mx-auto my-10 h-0.5 max-w-lg bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Feeling behind — heading, image, then text */}
      <div className="mx-auto mt-10 max-w-4xl text-center">
        <Reveal as="h2">
          <span
            style={SERIF}
            className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
          >
            <RenderHeading text={behindHeading || "You're not alone in feeling behind."} />
          </span>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-10 max-w-6xl">
        <div className="liquid-glass overflow-hidden rounded-3xl">
          <img
            src="/imgs/behind.png"
            alt="A person feeling left behind while everyone else moves ahead with AI."
            className="aspect-[5/2] w-full object-cover"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-4xl text-center">
        <Reveal className="text-lg leading-relaxed text-white/70">
          <p>{behindCaption || "Every founder I talk to feels the same way — like everyone else already figured out AI and you're the only one still trying to catch up. You're not. The people actually building with AI are rare. That's not bad news. It means the opportunity is still wide open."}</p>
        </Reveal>

        <div className="mx-auto mt-10 h-0.5 max-w-lg bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
    </section>
  );
}
