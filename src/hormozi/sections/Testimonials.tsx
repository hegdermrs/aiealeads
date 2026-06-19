import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";

const TESTIMONIALS = [
  {
    headline: "I'm saving tens of thousands of dollars in development time.",
    quote:
      "My old tech team would quote me 250 hours at $190/hour for features I can now build myself in two days using Codex. The mastermind pushed me to think more seriously about coding with AI, and it changed the economics of what I can build.",
    name: "Kalyan Ray-Mazumder",
    role: "Founder of Prepmedians",
    featured: true,
  },
  {
    headline: "The mastermind turned a vague problem into specific action.",
    quote:
      "I knew I needed to get out of the editing and grunt work, but I kept carrying it because it felt easier than handing it off. In the group, I committed to finding an editor, got connected with someone, and within a week he had already edited one of my YouTube videos.",
    name: "Arica Angelo",
    role: "Dating / Relationship Expert",
    featured: false,
  },
  {
    headline: "These are not surface-level conversations.",
    quote:
      "We talked through real business problems, positioning, sales, ads, pricing, fulfillment, hiring, and execution, with people who understand what it takes to grow.",
    name: "Manoj Somasundaram",
    role: "YouTube Growth Expert",
    featured: false,
  },
];

export default function HormoziTestimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured)!;
  const rest = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section id="stories" className="oc-section scroll-mt-24">
      <div className="oc-section-inner oc-section-inner--wide">
        <SectionHeader
          eyebrow="Proof"
          title="What members are already saying"
          align="center"
        />

        <HormoziReveal delay={80}>
          <article className="oc-surface-card oc-testimonial-featured">
            <p className="oc-testimonial-quote">&ldquo;{featured.headline}&rdquo;</p>
            <blockquote>{featured.quote}</blockquote>
            <footer>
              <strong>{featured.name}</strong>
              <span>{featured.role}</span>
            </footer>
          </article>
        </HormoziReveal>

        <div className="oc-testimonial-row">
          {rest.map((t, i) => (
            <HormoziReveal key={t.name} delay={120 + i * 60}>
              <article className="oc-surface-card oc-testimonial-card">
                <p className="oc-testimonial-headline">&ldquo;{t.headline}&rdquo;</p>
                <blockquote>{t.quote}</blockquote>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </article>
            </HormoziReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
