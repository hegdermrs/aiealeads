import Reveal from "../components/Reveal";
import { useContentValue } from "../content/ContentProvider";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Gap() {
  const p1 = useContentValue("gap.paragraph1");
  const p2 = useContentValue("gap.paragraph2");
  const quote = useContentValue("gap.quote");
  return (
    <section
      id="the-gap"
      className="relative scroll-mt-20 px-6 py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal as="h2">
            <span
              style={SERIF}
              className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              You&rsquo;re not new to AI.
              <br />
              You just haven&rsquo;t{" "}
              <span className="text-emerald-300/90">installed</span> it yet.
            </span>
          </Reveal>

          <Reveal className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
            <p>{p1 || "You've used ChatGPT. Watched the videos. Heard the podcasts. Tested a few tools. And deep down, you know this technology is going to change your business."}</p>
            <p>{p2 || "But here's the honest truth: you still haven't installed AI into the way your business actually runs. Not because you're lazy — because you're busy running a real business with customers, payroll, a team, and a family. So AI keeps getting pushed to later."}</p>
          </Reveal>

          <Reveal className="mt-8">
            <p
              style={SERIF}
              className="border-l-2 border-emerald-400/70 pl-5 text-2xl leading-snug text-white md:text-3xl"
            >
              {quote || "That's the gap. Not knowledge."}{" "}
              <span className="text-emerald-300/90">Execution.</span>
            </p>
          </Reveal>
        </div>

        {/* Imagery — show only the left ("before") scene of the source image */}
        <Reveal>
          <div className="liquid-glass overflow-hidden rounded-3xl">
            <img
              src="/imgs/before-after.png"
              alt="A business owner sitting with declining quarterly results in a dim office."
              className="aspect-[3/4] w-full object-cover object-left"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
