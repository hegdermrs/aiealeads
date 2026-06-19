import { ArrowDownRight, PlayCircle } from "lucide-react";
import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";

export default function ExecutionProblem() {
  return (
    <section id="problem" className="oc-section scroll-mt-24">
      <div className="oc-section-inner oc-section-stack">
        <SectionHeader
          eyebrow="The real bottleneck"
          title="You do not have an information problem. You have an execution problem."
        />

        <div className="oc-split oc-split--media-end">
          <div className="oc-split-main oc-stack-tight">
            <HormoziReveal delay={80}>
              <div className="oc-contrast-row">
                <article className="oc-surface-card oc-contrast-card oc-contrast-dim">
                  <PlayCircle size={22} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3>Watching &amp; learning</h3>
                    <p>Videos saved. Tools bookmarked. Progress feels busy.</p>
                  </div>
                </article>
                <article className="oc-surface-card oc-contrast-card oc-contrast-bright">
                  <ArrowDownRight size={22} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3>Installing systems</h3>
                    <p>Audited, prioritized, built — with help shipping.</p>
                  </div>
                </article>
              </div>
            </HormoziReveal>

            <HormoziReveal delay={140}>
              <div className="oc-prose-stack">
                <p>
                  You know AI matters. You have tested ChatGPT, saved tools, watched the
                  videos, and told yourself you are &ldquo;getting up to speed.&rdquo; But if
                  you are honest, your business still runs mostly the way it did before AI.
                </p>
                <blockquote className="oc-pull-quote">
                  Information is everywhere. Knowing about AI does not create leverage.
                  Installing it does.
                </blockquote>
                <p>
                  Every month you wait, the gap gets wider — because your competitor does
                  not have to be smarter than you. They just have to be faster.
                </p>
              </div>
            </HormoziReveal>
          </div>

          <figure className="oc-split-media oc-section-media oc-section-media--portrait">
            <img
              src="/imgs/before-after.png"
              alt="Contrast between a stalled business owner surrounded by dashboards and one shipping with AI systems."
              loading="lazy"
              className="oc-section-media-crop-left"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
