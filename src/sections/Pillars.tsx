import {
  Compass,
  Users,
  BookOpen,
  ScanSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { useContentValue } from "../content/ContentProvider";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  highlight?: boolean;
};

const PILLARS: Pillar[] = [
  {
    icon: Compass,
    title: "You stop feeling left behind",
    body: "Get clear on what AI can do for your business — what matters, what doesn't, and where to focus first. No more guessing. No more pretending another saved video is progress.",
  },
  {
    icon: Users,
    title: "A room of serious operators",
    body: "You're surrounded by established owners who are building, testing, hiring, and automating. Not surface-level talk. A room where you don't have to explain yourself.",
  },
  {
    icon: BookOpen,
    title: "The course as a safety net",
    body: "AI foundations and training so you understand the moving pieces without becoming a full-time researcher. The course supports the work. It is not the main event.",
  },
  {
    icon: ScanSearch,
    title: "An AI business audit",
    body: "Before anything gets built, we find the bottlenecks and highest-leverage AI opportunities — tied to revenue, cost, time, or better decisions. Stop chasing random tools.",
  },
  {
    icon: Wrench,
    title: "An implementer who helps you build",
    body: "This is the difference. You're not left alone with a list of homework. An implementation specialist helps move your project from idea to a working system. That's what makes it an accelerator.",
    highlight: true,
  },
];

export default function Pillars() {
  const heading = useContentValue("pillars.heading");
  const body = useContentValue("pillars.body");
  return (
    <section id="what-you-get" className="relative scroll-mt-20 px-6 py-28 md:py-32">
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[80vw] max-h-[40rem] w-auto -translate-x-1/2 -translate-y-1/2 opacity-10"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="h2">
            <span
              style={SERIF}
              className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              {heading || "The five things a serious owner actually needs."}
            </span>
          </Reveal>
          <Reveal className="mt-5 text-lg leading-relaxed text-white/70">
            {body || "When the doors open, you're not joining a mastermind. You're getting the five things that actually help you move fast with AI."}
          </Reveal>
        </div>

        <Reveal as="div" className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={
                  pillar.highlight
                    ? "md:col-span-2 lg:col-span-1 lg:row-span-1"
                    : ""
                }
              >
                <div
                  className={`liquid-glass group h-full rounded-3xl p-7 transition-colors hover:bg-white/[0.04] ${
                    pillar.highlight ? "ring-1 ring-emerald-400/30" : ""
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-emerald-300 ring-1 ring-white/10">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/65">
                    {pillar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
