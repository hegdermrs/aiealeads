import "./v3.css";
import Hero from "./Hero";
import PageLoader from "../../components/PageLoader";
import { useVideoGate } from "../../hooks/useVideoGate";
import {
  Divider,
  Marquee,
  Gap,
  Pillars,
  Audit,
  Build,
  Founder,
  FitCheck,
  CtaBlock,
  Stories,
  Footer,
} from "./sections";

export default function V3Page() {
  const { markReady, showLoader, loaderExiting, contentHidden } = useVideoGate();

  return (
    <>
      <PageLoader visible={showLoader} exiting={loaderExiting} />

      <div
        className={`min-h-screen bg-black text-white antialiased transition-opacity duration-700 ease-out ${
          contentHidden ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={contentHidden}
      >
        <Hero onVideoReady={markReady} muxPlaybackId="oa2Pk8H00BNkRwoUXDdOExUaNd9MkD6ue1bVzaaKo9Pc" />

        <main>
          <Marquee />
          <Divider />

          <Gap />
          <Divider />

          <Pillars />
          <Divider />

          <Audit />
          <Divider />

          <Build />
          <Divider />

          <CtaBlock
            id="join"
            idPrefix="mid"
            eyebrow="Want in when we open?"
            heading="Get on the list."
            body="We open a small number of seats at a time, and we notify this list first. There's nothing to buy today — just tell us where to reach you, and you'll be the first to know when the next cohort opens."
            image="/imgs/business-core.png"
            imageAlt="A surgical theatre of AI tools operating on a glowing business core."
          />
          <Divider />

          <Founder />
          <Divider />

          <FitCheck />
          <Divider />

          <Stories />
          <Divider />

          <CtaBlock
            idPrefix="final"
            eyebrow="The doors are going to open"
            heading="Make sure you're on the list."
            body="You already know AI matters. You already know waiting is not a strategy. When we open the next AI Execution Accelerator, seats are limited and this list gets first access."
            microcopy="For established business owners who want to stop learning about AI and start executing with it."
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
