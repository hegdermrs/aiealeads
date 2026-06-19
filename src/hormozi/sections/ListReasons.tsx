import HormoziReveal from "../components/HormoziReveal";
import { SplitLink } from "../components/SplitButton";

export default function ListReasons() {
  return (
    <section className="oc-section">
      <div className="oc-section-inner">
        <HormoziReveal>
          <div className="oc-urgency-band oc-surface-card">
            <div className="oc-urgency-band-glow" aria-hidden="true" />
            <span className="oc-eyebrow">Limited seats</span>
            <h2 className="oc-section-title">Why get on the list now</h2>
            <p className="oc-section-lede">
              We open a small number of seats at a time. The room is part of the
              product — we keep it small and we open it rarely. People on this list
              hear first and get the chance to move before seats are gone.
            </p>
            <SplitLink href="#waitlist" label="Notify me when doors open" />
            <p className="oc-urgency-micro">
              There is nothing to buy today. Just tell us where to reach you.
            </p>
          </div>
        </HormoziReveal>
      </div>
    </section>
  );
}
