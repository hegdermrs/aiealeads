import { Clock, ShieldCheck, Target, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";

const VALUE_ITEMS: {
  icon: LucideIcon;
  title: string;
  body: string;
  span?: string;
}[] = [
  {
    icon: Target,
    title: "Bigger outcome",
    body: "A more leveraged business, not just prompt skills.",
    span: "oc-bento-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Higher odds of success",
    body: "Audit, process, serious room, accountability, and implementation support — so you actually move.",
  },
  {
    icon: Clock,
    title: "Shorter time",
    body: "No six months wandering through tools. Audit, prioritize, build, test, move.",
  },
  {
    icon: Zap,
    title: "Less effort",
    body: "You bring the business problem. We help identify the opportunity and build it.",
    span: "oc-bento-span-2",
  },
];

export default function ValueEquation() {
  return (
    <section id="value" className="oc-section scroll-mt-24">
      <div className="oc-section-inner">
        <SectionHeader
          eyebrow="Why this works"
          title="The value equation"
          lede="A great program increases your dream outcome, raises the odds you succeed, shortens the timeline, and reduces the effort required from you."
        />

        <div className="oc-bento">
          {VALUE_ITEMS.map((item, i) => (
            <HormoziReveal key={item.title} delay={i * 70}>
              <article className={`oc-surface-card oc-bento-cell ${item.span ?? ""}`}>
                <div className="oc-bento-icon">
                  <item.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </HormoziReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
