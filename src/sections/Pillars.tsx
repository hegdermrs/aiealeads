import {
  Compass,
  Users,
  BookOpen,
  ScanSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { useContentValue, useContent } from "../content/ContentProvider";
import { RenderHeading } from "../utils/headings";
import defaultContent from "../content";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

const ICONS: LucideIcon[] = [Compass, Users, BookOpen, ScanSearch, Wrench];
const HIGHLIGHTS = [false, false, false, false, true];

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  highlight?: boolean;
};

export default function Pillars() {
  const heading = useContentValue("pillars.heading");
  const body = useContentValue("pillars.body");
  const c = useContent();
  const pillarItems = c.pillars?.items?.length ? c.pillars.items : defaultContent.pillars.items;
  const PILLARS: Pillar[] = pillarItems.map((item, i) => ({
    icon: ICONS[i] ?? Compass,
    title: item.title,
    body: item.body,
    highlight: HIGHLIGHTS[i] ?? false,
  }));
  return (
    <section id="what-you-get" className="relative scroll-mt-20 px-6 py-10 md:py-14">
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
              <RenderHeading text={heading || "The five things a serious owner actually needs."} />
            </span>
          </Reveal>
          <Reveal className="mt-5 text-lg leading-relaxed text-white/70">
            {body || "When the doors open, you're not joining a mastermind. You're getting the five things that actually help you move fast with AI."}
          </Reveal>
        </div>

        <Reveal as="div" className="mt-16 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
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
