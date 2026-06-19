const ITEMS = [
  "Audit first",
  "Pick the highest-leverage build",
  "Implementation specialist",
  "Serious operators room",
  "Ship systems — not slides",
  "Limited seats per cohort",
];

export default function TrustMarquee({ className = "" }: { className?: string }) {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className={`oc-marquee ${className}`.trim()} aria-hidden="true">
      <div className="oc-marquee-track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="oc-marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
