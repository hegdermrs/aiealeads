import { ChevronDown } from "lucide-react";
import BackgroundVideo from "../../components/BackgroundVideo";
import Countdown from "../../components/Countdown";
import WaitlistForm from "../../components/WaitlistForm";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

type HeroProps = {
  onVideoReady?: () => void;
};

export default function Hero({ onVideoReady }: HeroProps) {
  return (
    <div id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <BackgroundVideo onReady={onVideoReady} />

      {/* Glow orbs */}
      <div className="v3-orb v3-orb-1" style={{ width: "500px", height: "500px", background: "rgba(52, 211, 153, 0.12)", top: "10%", left: "-10%" }} />
      <div className="v3-orb v3-orb-2" style={{ width: "400px", height: "400px", background: "rgba(16, 185, 129, 0.08)", bottom: "5%", right: "-5%" }} />

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(100% 80% at 30% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)" }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[38%] bg-gradient-to-t from-black via-black/75 to-transparent" />

      {/* Nav */}
      <nav className="relative z-20 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src="/logo.png" alt="AIEA logo" className="h-10 w-10" />
            <span style={SERIF} className="text-2xl text-white">AIEA</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#the-gap" className="text-sm text-white/60 transition-colors hover:text-emerald-300">The Gap</a>
            <a href="#what-you-get" className="text-sm text-white/60 transition-colors hover:text-emerald-300">What You Get</a>
            <a href="#build" className="text-sm text-white/60 transition-colors hover:text-emerald-300">What We Build</a>
            <a href="#stories" className="text-sm text-white/60 transition-colors hover:text-emerald-300">Stories</a>
          </div>
          <a href="#waitlist" className="v3-card rounded-full px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-400/10">
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero — asymmetric left-aligned */}
      <div className="relative z-10 flex flex-1 items-center px-6 py-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            {/* Left: copy + form */}
            <div>
              <div className="v3-rise mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 v3-card" style={{ animationDelay: "0.1s" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
                AI Execution Accelerator
              </div>

              <h1 style={{ ...SERIF, animationDelay: "0.2s" }} className="v3-rise hero-title-shadow mb-6 max-w-2xl text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                You already know{" "}
                <span className="v3-glow-text hero-title-accent-shadow text-emerald-300/90">AI matters.</span>
                <br /> Time to{" "}
                <span className="v3-glow-text hero-title-accent-shadow text-emerald-300/90">take action.</span>
              </h1>

              <p className="v3-rise hero-lede-shadow mb-8 max-w-lg text-base leading-relaxed text-white/75 md:text-lg" style={{ animationDelay: "0.4s" }}>
                Get on the list now, and you&rsquo;ll be the first to know the
                moment we open the next AI Execution Accelerator.
              </p>

              <div id="waitlist" className="v3-rise max-w-lg scroll-mt-24" style={{ animationDelay: "0.6s" }}>
                <WaitlistForm variant="hero" idPrefix="hero" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 v3-card">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
                    <Countdown target={Date.now() + 30 * 86400000} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: floating stats panel */}
            <div className="v3-rise hidden lg:block" style={{ animationDelay: "0.8s" }}>
              <div className="v3-card v3-pulse rounded-3xl p-8">
                <div className="space-y-6">
                  <Stat number="12" label="Weeks of guided implementation" />
                  <div className="v3-line" />
                  <Stat number="5" label="Pillars every owner needs" />
                  <div className="v3-line" />
                  <Stat number="1" label="Real build shipped end to end" />
                  <div className="v3-line" />
                  <Stat number="∞" label="Systems that run without you" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <ChevronDown size={22} className="v3-bounce text-emerald-400/60" />
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span style={SERIF} className="v3-glow-text text-5xl text-emerald-300/90">{number}</span>
      <span className="text-sm leading-snug text-white/60">{label}</span>
    </div>
  );
}
