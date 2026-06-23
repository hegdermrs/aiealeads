import Hero from "../../components/Hero";
import ReplayHero from "../../components/ReplayHero";
import PageLoader from "../../components/PageLoader";
import TestimonialsMarquee from "../../components/TestimonialsMarquee";
import Divider from "../../components/Divider";
import { useVideoGate } from "../../hooks/useVideoGate";
import { ContentProvider } from "../../content/ContentProvider";
import Gap from "../../sections/Gap";
import Iceberg from "../../sections/Iceberg";
import Pillars from "../../sections/Pillars";
import Audit from "../../sections/Audit";
import Build from "../../sections/Build";
import Founder from "../../sections/Founder";
import FitCheck from "../../sections/FitCheck";
import Footer from "../../sections/Footer";

export default function V1Page() {
  const { markReady, showLoader, loaderExiting, contentHidden } = useVideoGate();

  return (
    <ContentProvider>
      <PageLoader visible={showLoader} exiting={loaderExiting} />

      <div
        className={`min-h-screen bg-black text-white antialiased transition-opacity duration-700 ease-out ${
          contentHidden ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={contentHidden}
      >
        <Hero onVideoReady={markReady} muxPlaybackId="rHIKSFzXu2II7lA8FhIEgpcmAX00ksw6lIs0102icBaaws" />

        <main>
          <Gap />

          <Iceberg />
          <Divider />

          <Pillars />

          <Audit />

          <Build />
          <Divider />

          <FitCheck />
          <Divider />

          <TestimonialsMarquee
            items={[
              {
                headline: "I'm saving tens of thousands of dollars in development time.",
                quote: "Before AIEA, I was outsourcing everything. Now I have agents handling lead qualification, follow-ups, and even content updates \u2014 things that used to cost me a fortune each month. The savings alone have already paid for the program multiple times over.",
                name: "Kalyan Ray-Mazumder",
                role: "Founder of Prepmedians",
                image: "/imgs/kalyan.jpg",
              },
              {
                headline: "The group helped me think bigger about where AI fits strategically.",
                quote: "I came in thinking AI was just about automating a few tasks. The room of operators showed me it's about rethinking how the whole business runs. The conversations with other founders were worth the price of admission alone.",
                name: "Melanie Mendelson",
                role: "Founder of MelanieCooks",
                image: "/imgs/melanie.jpg",
              },
              {
                headline: "It turned AI from something interesting into something operational.",
                quote: "I'd been following AI for years but never got past the tinkering phase. This program gave me the clarity and the implementer support to actually build systems into the business. Now AI isn't a side project \u2014 it's woven into how we operate.",
                name: "Ben Wieder",
                role: "Owner / President, Level 6 Marketing",
                image: "/imgs/ben.jpg",
              },
              {
                headline: "We're not technical people, and that's what made this so valuable.",
                quote: "We run a recipe site, not a tech company. The idea of building AI into our workflow felt overwhelming. Having an implementer who understood our business and could translate the technical side made all the difference. We actually shipped something.",
                name: "Anne & Leigh Walkup",
                role: "Founders of The Southern Lady Cooks",
                image: "/imgs/anneandleigh.jpg",
              },
            ]}
          />

          <ReplayHero muxPlaybackId="oa2Pk8H00BNkRwoUXDdOExUaNd9MkD6ue1bVzaaKo9Pc" />

          <Founder />
        </main>

        <Footer />
      </div>
    </ContentProvider>
  );
}
