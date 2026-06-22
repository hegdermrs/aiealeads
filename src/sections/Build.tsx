import { TrendingUp, Scissors, Clock, LineChart, type LucideIcon } from "lucide-react";
import Reveal from "../components/Reveal";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

type Category = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const CATEGORIES: Category[] = [
  {
    icon: TrendingUp,
    title: "Grow revenue",
    items: [
      "Speed-to-lead agents",
      "Email follow-up sequences",
      "Lead finders & qualifiers",
      "Quizzes that qualify before they book",
    ],
  },
  {
    icon: Scissors,
    title: "Cut costs",
    items: [
      "Customer support chatbots",
      "Knowledge-base agents",
      "Expense trackers that find waste",
      "Churn-risk trackers",
    ],
  },
  {
    icon: Clock,
    title: "Save time",
    items: [
      "An email manager that tames the inbox",
      "Content pipeline dashboards",
      "A blog updater that refreshes old posts",
      "Calendar agents that protect deep work",
    ],
  },
  {
    icon: LineChart,
    title: "Better decisions",
    items: [
      "Revenue dashboards that flag dips early",
      "Staff-performance dashboards",
      "A YouTube audit agent for hidden growth",
      "Numbers you can actually trust",
    ],
  },
];

export default function Build() {
  return (
    <section className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <Reveal as="h2">
              <span
                style={SERIF}
                className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
              >
                Where AI fits in a real business.
              </span>
            </Reveal>
          </div>
          <Reveal className="text-lg leading-relaxed text-white/70">
            The goal isn&rsquo;t AI for its own sake. It&rsquo;s systems that
            make your business faster, leaner, and less dependent on you. We
            find your highest-leverage build &mdash; then make it real.
          </Reveal>
        </div>

        {/* Hero image */}
        <Reveal delay={80} className="mt-12">
          <div className="liquid-glass overflow-hidden rounded-[2rem]">
            <img
              src="/imgs/pit-crew.png"
              alt="An F1 pit crew of AI tools — Claude, ChatGPT, n8n — servicing a race car labelled YOUR BUSINESS while a board tracks sales, profit, costs and time."
              className="h-72 w-full object-cover md:h-96"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Categories */}
        <Reveal as="div" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title}>
                <div className="liquid-glass h-full rounded-3xl p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-emerald-300 ring-1 ring-white/10">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-white/65"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
