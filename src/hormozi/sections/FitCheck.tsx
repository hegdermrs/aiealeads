import { Check, X } from "lucide-react";
import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";

const FOR_YOU = [
  "You own an established business with real customers and revenue.",
  "You know AI matters but have only used it at the surface.",
  "You want help implementing, not just more theory.",
  "You value a room of serious operators.",
  "You want AI tied to revenue, cost, time, or better decisions.",
];

const NOT_FOR_YOU = [
  "You are still figuring out what business to start.",
  "You want a cheap prompt pack or passive learning.",
  "You want to collect ideas and avoid execution.",
  "You want a magic wand while you stay uninvolved.",
];

export default function HormoziFitCheck() {
  return (
    <section id="fit" className="oc-section scroll-mt-24">
      <div className="oc-section-inner oc-section-inner--wide">
        <SectionHeader title="Is this for you?" align="center" />

        <div className="oc-fit-grid">
          <HormoziReveal>
            <article className="oc-surface-card oc-fit-card oc-fit-yes">
              <header>
                <span className="oc-fit-badge oc-fit-badge--yes">
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <h3>This is for you if&hellip;</h3>
              </header>
              <ul>
                {FOR_YOU.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </HormoziReveal>

          <HormoziReveal delay={80}>
            <article className="oc-surface-card oc-fit-card oc-fit-no">
              <header>
                <span className="oc-fit-badge oc-fit-badge--no">
                  <X size={16} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <h3>This is not for you if&hellip;</h3>
              </header>
              <ul>
                {NOT_FOR_YOU.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </HormoziReveal>
        </div>
      </div>
    </section>
  );
}
