import { useEffect } from "react";
import OcHeroBackground from "../components/OcHeroBackground";
import HeroVideo from "../components/HeroVideo";
import TrustMarquee from "../components/TrustMarquee";
import { SplitLink } from "../components/SplitButton";

export default function HormoziHero() {
  useEffect(() => {
    const t = window.setTimeout(() => {
      document.querySelector(".oc-hero .t-stagger")?.classList.add("is-shown");
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <header id="top" className="oc-hero">
      <OcHeroBackground />

      <div className="oc-hero-stage">
        <div className="t-stagger oc-hero-copy">
          <h1 className="oc-hero-title t-stagger-line t-stagger-line--1">
            In 12 weeks, the right business owners will stop watching AI and start{" "}
            <span className="oc-hero-highlight">installing it.</span>
          </h1>
          <p className="oc-hero-sub t-stagger-line t-stagger-line--2">
            The AI Execution Accelerator helps established business owners identify,
            prioritize, and build practical AI systems — with a real implementation
            specialist helping you build.
          </p>

          <div className="oc-hero-cta-row t-stagger-line t-stagger-line--3">
            <a href="#build" className="oc-btn oc-btn-ghost oc-btn-shine">
              See what you could build
            </a>
            <SplitLink
              href="#waitlist"
              label="Notify Me When Doors Open"
              className="oc-split-btn--hero"
            />
          </div>

          <p className="oc-hero-micro t-stagger-line t-stagger-line--4">
            No commitment. Just a heads-up when we open, plus a few useful AI ideas
            while you wait.
          </p>
        </div>

        <HeroVideo />
      </div>

      <TrustMarquee className="oc-hero-marquee" />
    </header>
  );
}
