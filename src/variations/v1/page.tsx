import Hero from "../../components/Hero";
import ReplayHero from "../../components/ReplayHero";
import PageLoader from "../../components/PageLoader";
import Testimonial from "../../components/Testimonial";
import Divider from "../../components/Divider";
import { useVideoGate } from "../../hooks/useVideoGate";
import Gap from "../../sections/Gap";
import Pillars from "../../sections/Pillars";
import Audit from "../../sections/Audit";
import Build from "../../sections/Build";
import Founder from "../../sections/Founder";
import FitCheck from "../../sections/FitCheck";
import Footer from "../../sections/Footer";

export default function V1Page() {
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
        <Hero onVideoReady={markReady} muxPlaybackId="diMyChybhMk6W9kmbds6ouGBbkTcN6NVcV53xaL8RvU" />

        <main>
          <Gap />
          <Divider />

          <Testimonial
            headline="I'm saving tens of thousands of dollars in development time."
            quote="My old tech team would quote me 250 hours at $190/hour for features I can now build myself in two days using Codex. The mastermind pushed me to think more seriously about coding with AI, and it changed the economics of what I can build."
            name="Kalyan Ray-Mazumder"
            role="Founder of Prepmedians"
            image="/imgs/kalyan.jpg"
          />
          <Divider />

          <Pillars />
          <Divider />

          <Audit />
          <Divider />

          <Testimonial
            headline="The group helped me think bigger about where AI fits strategically."
            quote="I was already using AI before joining, but the group helped me identify higher-leverage applications I hadn't considered. The biggest shift was moving beyond day-to-day time-saving and learning how to unlock real revenue opportunities and build systems that scale."
            name="Melanie Mendelson"
            role="Founder of MelanieCooks"
            image="/imgs/melanie.jpg"
          />
          <Divider />

          <Build />
          <Divider />

          <Founder />
          <Divider />

          <Testimonial
            headline="It turned AI from something interesting into something operational."
            quote="The conversations pushed me to think more clearly, move faster, and apply AI in ways that actually matter inside a real business."
            name="Ben Wieder"
            role="Owner / President, Level 6 Marketing"
            image="/imgs/ben.jpg"
          />
          <Divider />

          <FitCheck />
          <Divider />

          <div id="stories" className="scroll-mt-20 pb-4 pt-4">
            <Testimonial
              headline="We're not technical people, and that's what made this so valuable."
              quote="Antonio and his team helped us think through the opportunity, validate it with our audience, and start building an AI-powered tool that fits our business instead of forcing us into some generic AI template."
              name="Anne & Leigh Walkup"
              role="Founders of The Southern Lady Cooks"
              image="/imgs/anneandleigh.jpg"
            />
          </div>
          <Divider />

          <ReplayHero muxPlaybackId="oa2Pk8H00BNkRwoUXDdOExUaNd9MkD6ue1bVzaaKo9Pc" />
        </main>

        <Footer />
      </div>
    </>
  );
}
