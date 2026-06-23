import Reveal from "../components/Reveal";
import { useContentValue } from "../content/ContentProvider";
import { RenderHeading, RenderQuote } from "../utils/headings";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Founder() {
  const eyebrow = useContentValue("founder.eyebrow");
  const heading = useContentValue("founder.heading");
  const p1 = useContentValue("founder.paragraph1");
  const p2 = useContentValue("founder.paragraph2");
  const p3 = useContentValue("founder.paragraph3");
  const quote = useContentValue("founder.quote");
  return (
    <section id="manifesto" className="scroll-mt-20 px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-widest text-emerald-300/80">
              {eyebrow || "Who's running this"}
            </span>
          </Reveal>
          <Reveal as="h2" className="mt-3">
            <span
              style={SERIF}
              className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <RenderHeading text={heading || "I'm Antonio Centeno."} />
            </span>
          </Reveal>

          <Reveal className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
            <p>{p1 || "For 18 years I've built businesses online: Real Men Real Style, Mission Fragrances, communities, courses, products, and content channels with millions of subscribers and hundreds of millions of views."}</p>
            <p>{p2 || "Seven kids. Multiple businesses. Constant decisions. And now AI. I didn't build this to sell another course — I built it because I saw the gap: smart owners know AI matters, but most don't have the time, clarity, or technical help to turn that into working systems."}</p>
            <p>{p3 || "My Marine officer background sets the standard: Honor, Courage, Commitment."}</p>
            <p
              style={SERIF}
              className="border-l-2 border-emerald-400/70 pl-5 text-2xl leading-snug text-white md:text-3xl"
            >
              <RenderQuote text={quote || "Ideas are cheap. Execution is what counts."} />
            </p>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal className="flex justify-center">
          <div className="liquid-glass max-w-sm overflow-hidden rounded-[2rem]">
            <img
              src="/imgs/antonio.png"
              alt="Antonio Centeno, founder of the AI Execution Accelerator, in a blue suit and green tie."
              className="aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
