import { CheckCircle2, Hammer, ListOrdered, Search } from "lucide-react";
import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";

const STEPS = [
  {
    icon: Search,
    label: "Audit",
    body: "Find where AI creates leverage in your business.",
  },
  {
    icon: ListOrdered,
    label: "Prioritize",
    body: "Pick the highest-value project — not the shiniest tool.",
  },
  {
    icon: Hammer,
    label: "Build",
    body: "Implement with a specialist helping you ship.",
  },
  {
    icon: CheckCircle2,
    label: "Operate",
    body: "Surrounded by operators building alongside you.",
  },
];

export default function FutureVision() {
  return (
    <section className="oc-section">
      <div className="oc-section-inner">
        <SectionHeader
          eyebrow="The outcome"
          title="Imagine 12 weeks from now"
          lede="You are no longer guessing where AI fits. You know exactly where it can create leverage — and you are shipping instead of watching."
          align="center"
        />

        <HormoziReveal delay={100}>
          <ol className="oc-timeline">
            {STEPS.map((step, i) => (
              <li key={step.label} className="oc-timeline-step oc-surface-card">
                <span className="oc-timeline-num">{String(i + 1).padStart(2, "0")}</span>
                <step.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <h3>{step.label}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </HormoziReveal>

        <HormoziReveal delay={160}>
          <p className="oc-outcome-kicker">
            That is the outcome. Not &ldquo;learn AI.&rdquo;{" "}
            <strong>Implement AI.</strong>
          </p>
        </HormoziReveal>
      </div>
    </section>
  );
}
