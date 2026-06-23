import { TrendingUp, Scissors, Clock, LineChart, type LucideIcon } from "lucide-react";
import Reveal from "../components/Reveal";
import { useContentValue, useContent } from "../content/ContentProvider";
import { RenderHeading } from "../utils/headings";
import defaultContent from "../content";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

const CATEGORY_ICONS: LucideIcon[] = [TrendingUp, Scissors, Clock, LineChart];

type Category = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export default function Build() {
  const heading = useContentValue("build.heading");
  const body = useContentValue("build.body");
  const c = useContent();
  const rawCategories = c.build?.categories?.length ? c.build.categories : defaultContent.build.categories;
  const CATEGORIES: Category[] = rawCategories.map((cat, i) => ({
    icon: CATEGORY_ICONS[i] ?? TrendingUp,
    title: cat.title,
    items: cat.items,
  }));
  return (
    <section id="build" className="scroll-mt-20 px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <Reveal as="h2">
              <span
                style={SERIF}
                className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
              >
                <RenderHeading text={heading || "Where AI fits in a real business."} />
              </span>
            </Reveal>
          </div>
          <Reveal className="text-lg leading-relaxed text-white/70">
            {body || "The goal isn't AI for its own sake. It's systems that make your business faster, leaner, and less dependent on you. We find your highest-leverage build — then make it real."}
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
