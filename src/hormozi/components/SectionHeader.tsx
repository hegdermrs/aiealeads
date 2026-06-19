import HormoziReveal from "./HormoziReveal";

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  delay = 0,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  delay?: number;
}) {
  return (
    <HormoziReveal delay={delay}>
      <header className={`oc-section-head oc-section-head--${align}`}>
        {eyebrow && <span className="oc-eyebrow">{eyebrow}</span>}
        <h2 className="oc-section-title">{title}</h2>
        {lede && <p className="oc-section-lede">{lede}</p>}
      </header>
    </HormoziReveal>
  );
}
