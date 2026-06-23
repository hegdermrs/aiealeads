import MuxBackgroundVideo from "./MuxBackgroundVideo";
import WaitlistForm from "./WaitlistForm";
import Reveal from "./Reveal";
import { useContentValue } from "../content/ContentProvider";
import { RenderHeading } from "../utils/headings";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

type ReplayHeroProps = {
  muxPlaybackId?: string;
};

export default function ReplayHero({ muxPlaybackId }: ReplayHeroProps) {
  const eyebrow = useContentValue("replay.eyebrow");
  const heading = useContentValue("replay.heading");
  const body = useContentValue("replay.body");
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black px-6 py-20">
      {muxPlaybackId && <MuxBackgroundVideo playbackId={muxPlaybackId} />}

      <div className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 8%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[24%] bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            {eyebrow || "Want in when we open?"}
          </span>
          <h1
            style={SERIF}
            className="hero-title-shadow mt-4 mb-6 text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <RenderHeading text={heading || "Get on the list."} />
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="hero-lede-shadow mb-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {body || "We open a small number of seats at a time, and we notify this list first. There's nothing to buy today — just tell us where to reach you, and you'll be the first to know when the next cohort opens."}
          </p>
        </Reveal>

        <Reveal delay={200} className="w-full max-w-xl">
          <WaitlistForm variant="hero" idPrefix="replay" />
        </Reveal>
      </div>
    </section>
  );
}
