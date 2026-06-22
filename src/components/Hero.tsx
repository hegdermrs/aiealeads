import { ChevronDown } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";
import Countdown from "./Countdown";
import Nav from "./Nav";
import WaitlistForm from "./WaitlistForm";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

type HeroProps = {
  onVideoReady?: () => void;
  videoSrc?: string;
  playbackRate?: number;
  headline?: React.ReactNode;
  subtext?: string;
};

export default function Hero({ onVideoReady, videoSrc, playbackRate, headline, subtext }: HeroProps) {
  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      {/* Background video */}
      <BackgroundVideo onReady={onVideoReady} videoSrc={videoSrc} playbackRate={playbackRate} />

      {/* Cinematic legibility overlay (sits above video, below content) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 8%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      {/* Bottom fade — dissolves the foot of the video smoothly into black. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[38%] bg-gradient-to-t from-black via-black/75 to-transparent" />

      {/* Navigation */}
      <Nav />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 translate-y-[8%] flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          style={SERIF}
          className="hero-title-shadow mb-6 max-w-4xl text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {headline ?? (
            <>
              You already know{" "}
              <span className="hero-title-accent-shadow text-emerald-300/90">AI matters.</span>
              <br className="hidden sm:block" /> Time to{" "}
              <span className="hero-title-accent-shadow text-emerald-300/90">take action.</span>
            </>
          )}
        </h1>

        <p className="hero-lede-shadow mb-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {subtext ??
            "Get on the list now, and you'll be the first to know the moment we open the next AI Execution Accelerator."}
        </p>

        {/* Waitlist form #1 (hero) */}
        <div id="waitlist" className="w-full max-w-xl space-y-4 scroll-mt-24">
          <WaitlistForm variant="hero" idPrefix="hero" />
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 liquid-glass">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
              <Countdown target={Date.now() + 30 * 86400000} />
            </div>
          </div>
        </div>
      </div>

      {/* Learn more — centered between form and social icons */}
      <div className="relative z-10 flex justify-center pb-10 pt-2">
        <a
          href="#build"
          className="liquid-glass rounded-full px-14 py-5 text-lg text-white transition-colors hover:bg-white/5"
          style={SERIF}
        >
          What is AI Execution Accelerator?
        </a>
      </div>

      {/* Scroll-down indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <ChevronDown
          size={22}
          className="animate-bounce text-white/40"
        />
      </div>

    </div>
  );
}
