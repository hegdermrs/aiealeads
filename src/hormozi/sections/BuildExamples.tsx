import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Scissors,
  Timer,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HormoziReveal from "../components/HormoziReveal";
import SectionHeader from "../components/SectionHeader";
import CtaPanel from "../components/CtaPanel";

type Category = "revenue" | "cost" | "time" | "decision";

const CATEGORIES: { id: Category; label: string; icon: LucideIcon }[] = [
  { id: "revenue", label: "Revenue", icon: TrendingUp },
  { id: "cost", label: "Cost-cutting", icon: Scissors },
  { id: "time", label: "Time-saving", icon: Timer },
  { id: "decision", label: "Decision", icon: BarChart3 },
];

const EXAMPLES: Record<Category, string[]> = {
  revenue: [
    "Speed-to-lead agent that books prospects faster",
    "Lead finder and qualifier",
    "Email sequence agent that recovers lost sales",
    "AI IQ quiz that qualifies prospects",
    "Video title optimizer that revives buried content",
  ],
  cost: [
    "Custom support chatbot",
    "Knowledge-base agent that cuts onboarding time",
    "Expense-tracking agent that finds wasted subscriptions",
    "Community health tracker that flags churn before it happens",
  ],
  time: [
    "Email manager agent that tames the inbox",
    "Content pipeline dashboard",
    "WordPress blog updater that refreshes old posts in batches",
    "Calendar agent that protects deep work",
  ],
  decision: [
    "Business performance dashboard",
    "Revenue-metrics agent that catches dips early",
    "Staff-performance dashboard",
    "YouTube channel audit agent",
  ],
};

export default function BuildExamples() {
  const [active, setActive] = useState<Category>("revenue");
  const tabsRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  const movePill = useCallback((tabEl: HTMLButtonElement | null, animate = true) => {
    const pill = pillRef.current;
    const bar = tabsRef.current;
    if (!pill || !bar || !tabEl) return;

    if (!animate) pill.style.transition = "none";
    pill.style.width = `${tabEl.offsetWidth}px`;
    pill.style.transform = `translateX(${tabEl.offsetLeft}px)`;
    if (!animate) {
      void pill.offsetWidth;
      pill.style.transition = "";
    }
  }, []);

  useEffect(() => {
    const bar = tabsRef.current;
    if (!bar) return;

    const sync = (animate = false) => {
      const current = bar.querySelector<HTMLButtonElement>('[aria-selected="true"]');
      movePill(current, animate);
    };

    requestAnimationFrame(() => sync(false));

    const onResize = () => sync(false);
    window.addEventListener("resize", onResize);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => sync(false)) : null;
    ro?.observe(bar);

    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [active, movePill]);

  const handleTab = (id: Category, el: HTMLButtonElement) => {
    setActive(id);
    movePill(el, true);
  };

  const ActiveIcon = CATEGORIES.find((c) => c.id === active)!.icon;

  return (
    <section id="build" className="oc-section scroll-mt-24">
      <div className="oc-section-inner oc-section-stack">
        <SectionHeader
          eyebrow="What to build first"
          title="What could AI actually build inside your business?"
          lede="Most owners get stuck here. They know AI is powerful — they just do not know what to build first."
        />

        <figure className="oc-section-media oc-section-media--cinema">
          <img
            src="/imgs/pit-crew.png"
            alt="AI tools servicing a business like a pit crew — revenue, profit, costs, and time on the board."
            loading="lazy"
          />
        </figure>

        <HormoziReveal delay={80}>
          <div className="oc-build-panel oc-surface-card">
            <div
              ref={tabsRef}
              className="oc-tabs"
              role="tablist"
              aria-label="AI system categories"
            >
              <span ref={pillRef} className="oc-tabs-pill" aria-hidden="true" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active === cat.id}
                  className="oc-tab"
                  onClick={(e) => handleTab(cat.id, e.currentTarget)}
                >
                  <cat.icon size={16} aria-hidden="true" />
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="oc-build-panel-head" role="tabpanel">
              <ActiveIcon size={20} aria-hidden="true" />
              <span>Example systems in this category</span>
            </div>

            <ul className="oc-chip-grid">
              {EXAMPLES[active].map((item) => (
                <li key={item}>
                  <span className="oc-chip">
                    {item}
                    <ArrowUpRight size={16} className="oc-chip-arrow" aria-hidden="true" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </HormoziReveal>

        <p className="oc-section-note oc-section-note--center">
          The point is not to build AI because it is exciting. It is to build systems
          that make the business more profitable, faster, and less dependent on you.
        </p>

        <CtaPanel
          id="waitlist"
          idPrefix="mid"
          title="Get on the list before the next cohort opens"
          body="We open a small number of seats at a time. This list hears first."
          microcopy="No pitch. Just a heads-up when we open."
          image="/imgs/business-core.png"
          imageAlt="AI tools operating on the core of a business."
        />
      </div>
    </section>
  );
}
