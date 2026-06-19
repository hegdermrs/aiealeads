/** Overcode-style 16:9 showreel frame — foreground video, not a chart mockup */
export default function HeroVideo() {
  return (
    <div className="oc-video-shell">
      <div className="oc-video-glow" aria-hidden="true" />
      <div className="oc-video-shine" aria-hidden="true" />
      <div className="oc-demo-frame">
        <div className="oc-demo-frame-pad">
          <div className="oc-demo-frame-inner">
            <div className="oc-video-aspect">
              <video
                className="oc-hero-video"
                src="/video.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/imgs/hero-yacht.png"
              >
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
