import { useEffect, useRef } from "react";

/**
 * Full-screen, muted, autoplaying background video that loops by
 * cross-fading back to its own first frame — never through black.
 *
 * Two stacked copies of the clip share the frame. While the active copy
 * nears its end, the idle copy is rewound to t=0, played, and the two are
 * cross-faded in opposite directions (active 1→0, incoming 0→1) over a
 * single requestAnimationFrame pass. Because both are visible during the
 * hand-off, the screen is always covered, so the loop reads as a soft fade
 * to the opening frame rather than a flash of black. The just-finished copy
 * is paused and becomes the next idle layer.
 *
 * On first paint the active copy fades up from black once (expected) before
 * the seamless loop takes over.
 */

const FADE_MS = 600; // cross-fade / initial fade-in duration
const CROSSFADE_LEAD = 0.7; // seconds before the end to begin the cross-fade
const DEFAULT_VIDEO_SRC = "/video.mp4";

const VIDEO_CLASS =
  "pointer-events-none absolute inset-0 h-full w-full object-cover";

type BackgroundVideoProps = {
  onReady?: () => void;
  videoSrc?: string;
  playbackRate?: number;
};

export default function BackgroundVideo({ onReady, videoSrc = DEFAULT_VIDEO_SRC, playbackRate = 1 }: BackgroundVideoProps) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const activeRef = useRef<HTMLVideoElement | null>(null);
  const transitioningRef = useRef(false);
  const readyNotifiedRef = useRef(false);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;
    activeRef.current = a;

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
      v.playbackRate = playbackRate;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const preloadIdleCopy = () => {
      if (b.preload === "none") {
        b.preload = "auto";
        b.load();
      }
    };

    // Fade `outgoing` to 0 and `incoming` to 1 at the same time — the sum
    // keeps the viewport covered, so no black shows through.
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
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          onDone?.();
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    // Single fade-up for first paint.
    const fadeIn = (v: HTMLVideoElement) => {
      cancelAnim();
      const from = parseFloat(v.style.opacity || "0") || 0;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / FADE_MS, 1);
        v.style.opacity = String(from + (1 - from) * t);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const handleTimeUpdate = (e: Event) => {
      const v = e.target as HTMLVideoElement;
      // Only the visible copy drives the hand-off, and only once per loop.
      if (v !== activeRef.current || transitioningRef.current) return;
      if (!v.duration) return;
      if (v.duration - v.currentTime <= CROSSFADE_LEAD) {
        transitioningRef.current = true;
        const outgoing = v;
        const incoming = v === a ? b : a;
        incoming.currentTime = 0;
        play(incoming);
        activeRef.current = incoming;
        crossfade(outgoing, incoming, () => {
          outgoing.pause(); // park the finished copy as the next idle layer
          transitioningRef.current = false;
        });
      }
    };

    // Kick off the active copy once it can play. Idempotent and fired from
    // several events so a cached clip, a slow buffer, a backgrounded tab that
    // later foregrounds, or React StrictMode's double-mount all converge on a
    // single clean start rather than racing a lone `loadeddata`.
    let started = false;
    const handleReady = () => {
      notifyReady();

      if (started) {
        play(a); // tab returned to foreground — make sure it's running
        return;
      }
      started = true;
      a.currentTime = 0;
      play(a);
      fadeIn(a);
      preloadIdleCopy();
    };

    a.addEventListener("timeupdate", handleTimeUpdate);
    b.addEventListener("timeupdate", handleTimeUpdate);
    a.addEventListener("loadeddata", handleReady);
    a.addEventListener("canplay", handleReady);
    a.addEventListener("playing", handleReady);

    // If the data is already buffered (cached / fast connection), start now.
    if (a.readyState >= 2) handleReady();

    return () => {
      cancelAnim();
      a.removeEventListener("timeupdate", handleTimeUpdate);
      b.removeEventListener("timeupdate", handleTimeUpdate);
      a.removeEventListener("loadeddata", handleReady);
      a.removeEventListener("canplay", handleReady);
      a.removeEventListener("playing", handleReady);
    };
  }, [onReady, playbackRate]);

  return (
    <>
      <video
        ref={aRef}
        className={VIDEO_CLASS}
        style={{ opacity: 0 }}
        src={videoSrc}
        muted
        autoPlay
        playsInline
        preload="auto"
      />
      <video
        ref={bRef}
        className={VIDEO_CLASS}
        style={{ opacity: 0 }}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
      />
    </>
  );
}

