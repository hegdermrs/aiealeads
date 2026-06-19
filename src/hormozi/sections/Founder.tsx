import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";
import { SplitLink } from "../components/SplitButton";

export default function HormoziFounder() {
  return (
    <section id="founder" className="oc-section scroll-mt-24">
      <div className="oc-section-inner">
        <SectionHeader
          eyebrow="Who runs this"
          title="Built by a business owner, not an AI theorist"
        />

        <HormoziReveal delay={100}>
          <div className="oc-founder-panel">
            <div className="oc-founder-media oc-surface-card">
              <img
                src="/imgs/antonio.jpg"
                alt="Antonio Centeno"
                width={320}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="oc-founder-copy">
              <p>
                I&rsquo;m Antonio Centeno. For 18 years I have built real businesses:
                Real Men Real Style, Mission Fragrances, communities, courses, content
                channels, and masterminds.
              </p>
              <blockquote className="oc-pull-quote oc-pull-quote--sm">
                Ideas do not matter until they survive contact with reality. In
                business, that means execution.
              </blockquote>
              <p>
                I am not coming at this as a theorist. I am coming at it as an owner
                who knows what it feels like to have too many decisions, too many tools,
                and not enough focused execution.
              </p>
              <SplitLink href="#waitlist" label="Join the waitlist" />
            </div>
          </div>
        </HormoziReveal>
      </div>
    </section>
  );
}
