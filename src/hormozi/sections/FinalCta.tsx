import HormoziReveal from "../components/HormoziReveal";
import HormoziWaitlistForm from "../components/HormoziWaitlistForm";

export default function FinalCta() {
  return (
    <section className="oc-purple-cta">
      <img
        className="oc-purple-cta-bg"
        src="/imgs/hero-yacht.png"
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
      <div className="oc-purple-cta-scrim" aria-hidden="true" />

      <div className="oc-purple-cta-inner">
        <HormoziReveal>
          <h2 className="oc-purple-cta-title">
            The next cohort is coming. Be first to know.
          </h2>
          <p className="oc-purple-cta-lede">
            You already know AI matters. You already know waiting is not a strategy.
            When we open the next AI Execution Accelerator, seats are limited and this
            list gets first access.
          </p>
        </HormoziReveal>

        <HormoziReveal delay={80}>
          <div className="oc-purple-cta-form">
            <HormoziWaitlistForm idPrefix="final" variant="footer" />
            <p className="oc-purple-cta-micro">
              For established business owners ready to stop learning about AI and start
              building with it.
            </p>
          </div>
        </HormoziReveal>
      </div>
    </section>
  );
}
