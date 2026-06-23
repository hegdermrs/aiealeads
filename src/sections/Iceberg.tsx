import Reveal from "../components/Reveal";
import { useContentValue } from "../content/ContentProvider";
import { RenderHeading } from "../utils/headings";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Iceberg() {
  const heading = useContentValue("iceberg.heading");
  const body = useContentValue("iceberg.body");
  const body2 = useContentValue("iceberg.body2");
  return (
    <section className="scroll-mt-20 px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Image — left */}
        <Reveal className="flex justify-center">
          <div className="liquid-glass max-w-sm overflow-hidden rounded-[2rem]">
            <img
              src="/imgs/iceberg.png"
              alt="An iceberg — most of it lies beneath the surface."
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text — right */}
        <div>
          <Reveal as="h2">
            <span
              style={SERIF}
              className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <RenderHeading text={heading || "Most of what matters is beneath the surface."} />
            </span>
          </Reveal>
          <Reveal className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
            <p>{body || "Everyone talks about prompts and tools. But the real work happens where nobody sees it — data pipelines wired into your actual CRM, decision trees that handle real customer scenarios, staff who stop doing a task because the system does it better. That's the part you can't see from the outside."}</p>
            <p>{body2 || "We don't build demos. We build the infrastructure that replaces the spreadsheet someone updates at 11pm, the follow-up email that goes out late or never, the bottleneck where everything waits for one person's approval. That's where the money is."}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
