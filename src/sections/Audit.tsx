import Reveal from "../components/Reveal";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Audit() {
  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-6xl">
        <div className="liquid-glass relative overflow-hidden rounded-[2rem]">
          <img
            src="/imgs/audit-scanner.png"
            alt="The Execution Accelerator AI Audit Scanner inspecting every business process for bottlenecks, delays and underused AI."
            className="h-[26rem] w-full object-cover md:h-[34rem]"
            loading="lazy"
          />
          {/* darken for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8 md:px-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Before anything gets built
              </span>
              <h2
                style={SERIF}
                className="mt-4 text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
              >
                We scan your business for the most expensive problems.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                We map your processes and surface the bottlenecks and
                highest-leverage AI opportunities &mdash; the ones tied to
                revenue, cost, time, or better decisions. You stop chasing
                random tools and start solving problems that matter.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
