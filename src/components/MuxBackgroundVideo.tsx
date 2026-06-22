import { useEffect, useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";

const FADE_MS = 600;
const CROSSFADE_LEAD = 0.7;

type MuxBackgroundVideoProps = {
  onReady?: () => void;
  playbackId: string;
};

export default function MuxBackgroundVideo({ onReady, playbackId }: MuxBackgroundVideoProps) {
  const aRef = useRef<any>(null);
  const bRef = useRef<any>(null);
  const activeRef = useRef<any>(null);
  const transitioningRef = useRef(false);
  const readyNotifiedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    // Access the underlying <video> element
    const getVideo = (el: any) =>
      el.querySelector?.("video") ?? el;

    const aVideo = getVideo(a);
    const bVideo = getVideo(b);
    if (!aVideo || !bVideo) return;

    activeRef.current = aVideo;

    const notifyReady = () => {
      if (readyNotifiedRef.current) return;
      readyNotifiedRef.current = true;
      onReady?.();
    };

    const cancelAnim = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const play = (v: HTMLVideoElement) => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const crossfade = (
      outgoing: HTMLVideoElement,
      incoming: HTMLVideoElement,
      onDone?: () => void,
    ) => {
      cancelAnim();
      const oFrom = parseFloat(outgoing.style.opacity || "1") || 1;
      const iFrom = parseFloat(incoming.style.opacity || "0") || 0;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / FADE_MS, 1);
        outgoing.style.opacity = String(oFrom + (0 - oFrom) * t);
        incoming.style.opacity = String(iFrom + (1 - iFrom) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
        else { rafRef.current = null; onDone?.(); }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const fadeIn = (v: HTMLVideoElement) => {
      cancelAnim();
      const from = parseFloat(v.style.opacity || "0") || 0;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / FADE_MS, 1);
        v.style.opacity = String(from + (1 - from) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
        else rafRef.current = null;
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const handleTimeUpdate = (e: Event) => {
      const v = e.target as HTMLVideoElement;
      if (v !== activeRef.current || transitioningRef.current) return;
      if (!v.duration) return;
      if (v.duration - v.currentTime <= CROSSFADE_LEAD) {
        transitioningRef.current = true;
        const outgoing = v;
        const incoming = v === aVideo ? bVideo : aVideo;
        incoming.currentTime = 0;
        play(incoming);
        activeRef.current = incoming;
        crossfade(outgoing, incoming, () => {
          outgoing.pause();
          transitioningRef.current = false;
        });
      }
    };

    let started = false;
    const handleReady = () => {
      notifyReady();
      if (started) { play(aVideo); return; }
      started = true;
      aVideo.currentTime = 0;
      play(aVideo);
      fadeIn(aVideo);
    };

    aVideo.addEventListener("timeupdate", handleTimeUpdate);
    bVideo.addEventListener("timeupdate", handleTimeUpdate);
    aVideo.addEventListener("loadeddata", handleReady);
    aVideo.addEventListener("canplay", handleReady);
    aVideo.addEventListener("playing", handleReady);
    if (aVideo.readyState >= 2) handleReady();

    return () => {
      cancelAnim();
      aVideo.removeEventListener("timeupdate", handleTimeUpdate);
      bVideo.removeEventListener("timeupdate", handleTimeUpdate);
      aVideo.removeEventListener("loadeddata", handleReady);
      aVideo.removeEventListener("canplay", handleReady);
      aVideo.removeEventListener("playing", handleReady);
    };
  }, [onReady, playbackId]);

  const playerProps = {
    playbackId,
    streamType: "on-demand" as const,
    muted: true,
    autoPlay: true,
    playsInline: true,
    loop: false,
    preload: "auto" as const,
    style: { opacity: 0, position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const },
    className: "pointer-events-none",
  };

  return (
    <>
      <MuxPlayer ref={aRef} {...playerProps} />
      <MuxPlayer ref={bRef} {...playerProps} />
    </>
  );
}
