import { Instagram, Twitter, Globe } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";
import Nav from "./Nav";
import WaitlistForm from "./WaitlistForm";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Hero() {
  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      {/* Background video */}
      <BackgroundVideo />

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
        <div
          className="reveal is-visible mb-5 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 liquid-glass"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          AI Execution Accelerator · Next Cohort
        </div>

        <h1
          style={SERIF}
          className="mb-6 max-w-4xl text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          You already know{" "}
          <span className="text-emerald-300/90">AI matters.</span>
          <br className="hidden sm:block" /> The next cohort opens soon.
        </h1>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          Get on the list now, and you&rsquo;ll be the first to know the moment
          we open the next AI Execution Accelerator.
        </p>

        {/* Waitlist form #1 (hero) */}
        <div id="waitlist" className="w-full max-w-xl space-y-4 scroll-mt-24">
          <WaitlistForm variant="hero" idPrefix="hero" />
          <p className="px-4 text-sm leading-relaxed text-white/65">
            No selling. Just a heads-up when we open, plus a few genuinely
            useful AI ideas while you wait.
          </p>
          <div className="flex justify-center pt-1">
            <a
              href="#manifesto"
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Why this exists
            </a>
          </div>
        </div>
      </div>

      {/* Social footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="#"
          aria-label="AIEA on Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          aria-label="AIEA on Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          aria-label="AIEA website"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <Globe size={20} />
        </a>
      </div>
    </div>
  );
}
