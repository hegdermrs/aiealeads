import { ChevronDown } from "lucide-react";
import MuxBackgroundVideo from "./MuxBackgroundVideo";
import Nav from "./Nav";
import WaitlistForm from "./WaitlistForm";
import { useContentValue } from "../content/ContentProvider";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

/** Split text at fullstops, break into lines, wrap last word of each in emerald. */
function renderStyledHeadline(text: string) {
  const sentences = text.split(".").filter(Boolean).map((s) => s.trim());
  return sentences.map((sentence, i) => {
    const words = sentence.split(/\s+/);
    const last = words.pop() || "";
    const period = i < sentences.length - 1 || text.endsWith(".") ? "." : "";
    return (
      <span key={i}>
        {words.join(" ")}{words.length > 0 ? " " : ""}
        <span className="hero-title-accent-shadow text-emerald-300/90">{last}{period}</span>
        {i < sentences.length - 1 && <><br className="hidden sm:block" />{" "}</>}
      </span>
    );
  });
}

type HeroProps = {
  onVideoReady?: () => void;
  muxPlaybackId?: string;
  headline?: React.ReactNode;
  subtext?: string;
};

export default function Hero({ onVideoReady, muxPlaybackId, headline, subtext }: HeroProps) {
  const savedHeadline = useContentValue("hero.headline");
  const savedSubtext = useContentValue("hero.subtext");
  const learnMore = useContentValue("hero.learnMore");
  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      <MuxBackgroundVideo playbackId={muxPlaybackId!} onReady={onVideoReady} />

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 8%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[24%] bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      <Nav />

      <div className="relative z-10 flex flex-1 translate-y-[8%] flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          style={SERIF}
          className="hero-title-shadow mb-6 max-w-4xl text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {headline ?? renderStyledHeadline(savedHeadline || "You already know AI matters. Time to take action.")}
        </h1>

        <p className="hero-lede-shadow mb-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {subtext ?? (savedSubtext || "Get on the list now, and you'll be the first to know the moment we open the next AI Execution Accelerator.")}
        </p>

        <div id="waitlist" className="w-full max-w-xl scroll-mt-24">
          <WaitlistForm variant="hero" idPrefix="hero" />
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-10 pt-2">
        <a
          href="#audit"
          className="liquid-glass rounded-full px-14 py-5 text-lg text-white transition-colors hover:bg-white/5"
          style={SERIF}
        >
          {learnMore || "What is AI Execution Accelerator?"}
        </a>
      </div>

      <div className="relative z-10 flex justify-center pb-6">
        <ChevronDown size={22} className="animate-bounce text-white/40" />
      </div>
    </div>
  );
}
