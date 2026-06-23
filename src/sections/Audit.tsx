import Reveal from "../components/Reveal";
import MuxPlayer from "@mux/mux-player-react";
import { useContentValue } from "../content/ContentProvider";
import { RenderHeading } from "../utils/headings";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Audit() {
  const eyebrow = useContentValue("audit.eyebrow");
  const heading = useContentValue("audit.heading");
  const body = useContentValue("audit.body");
  return (
    <section id="audit" className="px-6 pt-10 pb-4 md:pt-14 md:pb-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="liquid-glass relative overflow-hidden rounded-[2rem]">
          <MuxPlayer
            playbackId="a1HlcfvNAyZSghFHzsOsu1t2sAcAbNVGUJA9HZ1ONB4"
            streamType="on-demand"
            muted
            autoPlay
            playsInline
            loop
            preload="auto"
            className="pointer-events-none h-[26rem] w-full object-cover md:h-[34rem] [--controls:none]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8 md:px-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                {eyebrow || "Before anything gets built"}
              </span>
              <h2
                style={SERIF}
                className="mt-4 text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
              >
                <RenderHeading text={heading || "We scan your business for the most expensive problems."} />
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                {body || "We map your processes and surface the bottlenecks and highest-leverage AI opportunities \u2014 the ones tied to revenue, cost, time, or better decisions. You stop chasing random tools and start solving problems that matter."}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
