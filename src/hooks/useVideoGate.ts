import { useCallback, useEffect, useState } from "react";

const READY_TIMEOUT_MS = 12_000;
const EXIT_MS = 700;

export function useVideoGate() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const [videoReady, setVideoReady] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const markReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  // Track full page load (images, assets, etc.)
  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Reveal only when both video and page are ready
  useEffect(() => {
    if (videoReady && pageLoaded) {
      setPhase((current) => (current === "loading" ? "exiting" : current));
    }
  }, [videoReady, pageLoaded]);

  // Timeout fallback — don't trap users forever
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const timeout = window.setTimeout(() => {
      setPhase((current) => (current === "loading" ? "exiting" : current));
    }, READY_TIMEOUT_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (phase !== "exiting") return;
    const timer = window.setTimeout(() => setPhase("done"), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return {
    markReady,
    showLoader: phase !== "done",
    loaderExiting: phase === "exiting",
    contentHidden: phase === "loading",
  };
}
