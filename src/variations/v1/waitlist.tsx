import Hero from "../../components/Hero";
import PageLoader from "../../components/PageLoader";
import { useVideoGate } from "../../hooks/useVideoGate";
import Footer from "../../sections/Footer";

export default function WaitlistPage() {
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
        <Hero
          onVideoReady={markReady}
          muxPlaybackId="oa2Pk8H00BNkRwoUXDdOExUaNd9MkD6ue1bVzaaKo9Pc"
        />
        <Footer />
      </div>
    </>
  );
}
