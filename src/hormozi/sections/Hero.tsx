import { useEffect } from "react";
import OcHeroBackground from "../components/OcHeroBackground";
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
          <h1 className="oc-hero-title">
            <span className="oc-hero-title-line t-stagger-line t-stagger-line--1">
              In 12 weeks,
            </span>
            <span className="oc-hero-title-line t-stagger-line t-stagger-line--2">
              the right business owners will stop watching AI
            </span>
            <span className="oc-hero-title-line t-stagger-line t-stagger-line--3">
              and start <span className="oc-hero-highlight">installing it.</span>
            </span>
          </h1>

          <p className="oc-hero-sub t-stagger-line t-stagger-line--4">
            Identify, prioritize, and build practical AI systems — with a real
            implementation specialist helping you ship.
          </p>

          <div className="oc-hero-cta-row">
            <a
              href="#build"
              className="oc-btn oc-btn-ghost oc-btn-shine oc-hero-btn t-stagger-line t-stagger-line--5"
            >
              See what you could build
            </a>
            <SplitLink
              href="#waitlist"
              label="Notify Me When Doors Open"
              className="oc-split-btn--hero oc-hero-btn t-stagger-line t-stagger-line--6"
            />
          </div>
        </div>
      </div>

      <TrustMarquee className="oc-hero-marquee" />
    </header>
  );
}
