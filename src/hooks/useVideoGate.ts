import { useCallback, useEffect, useState } from "react";

const READY_TIMEOUT_MS = 12_000;
const EXIT_MS = 700;

export function useVideoGate() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  const markReady = useCallback(() => {
    setPhase((current) => (current === "loading" ? "exiting" : current));
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const timeout = window.setTimeout(markReady, READY_TIMEOUT_MS);
    return () => window.clearTimeout(timeout);
  }, [markReady]);

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
