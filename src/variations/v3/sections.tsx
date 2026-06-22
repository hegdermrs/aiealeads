import { useState } from "react";
import {
  Compass,
  Users,
  BookOpen,
  ScanSearch,
  Wrench,
  TrendingUp,
  Scissors,
  Clock,
  LineChart,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../../components/Reveal";
import WaitlistForm from "../../components/WaitlistForm";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

/* ===== Divider ===== */
export function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-2" aria-hidden="true">
      <div className="v3-line" />
    </div>
  );
}

/* ===== Marquee trust bar ===== */
const MARQUEE_ITEMS = [
  "Audit first",
  "Pick the highest-leverage build",
  "Implementation specialist",
  "Ship a real system",
  "12-week accelerator",
  "Stop watching AI",
  "Start installing it",
];

export function Marquee() {
  return (
    <div className="v3-marquee-track border-y border-white/5 py-5">
      <div className="v3-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-6">
            <span style={SERIF} className="text-2xl text-white/40">{item}</span>
            <span className="text-emerald-400/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Gap — full-bleed image with overlay ===== */
export function Gap() {
  return (
    <section id="the-gap" className="relative scroll-mt-20 px-6 py-28 md:py-36">
      <div className="v3-orb v3-orb-1" style={{ width: "400px", height: "400px", background: "rgba(52, 211, 153, 0.06)", top: "20%", right: "-15%" }} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">The problem</span>
        </Reveal>
        <Reveal as="h2" className="mt-4">
          <span style={SERIF} className="block max-w-3xl text-4xl leading-[1.08] tracking-tight text-white md:text-6xl">
            You&rsquo;re not new to AI. You just haven&rsquo;t{" "}
            <span className="v3-glow-text text-emerald-300/90">installed</span> it yet.
          </span>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="v3-card overflow-hidden rounded-3xl">
              <img src="/imgs/before-after.png" alt="A business owner sitting with declining quarterly results in a dim office." className="aspect-[16/10] w-full object-cover object-left" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={100} className="flex flex-col justify-center space-y-5">
            <p className="text-lg leading-relaxed text-white/70">
              You&rsquo;ve used ChatGPT. Watched the videos. Heard the podcasts.
              Tested a few tools. And deep down, you know this technology is
              going to change your business.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              But you still haven&rsquo;t installed AI into the way your business
              actually runs. Not because you&rsquo;re lazy &mdash; because
              you&rsquo;re busy running a real business.
            </p>
            <p style={SERIF} className="border-l-2 border-emerald-400/70 pl-5 text-2xl leading-snug text-white md:text-3xl">
              That&rsquo;s the gap. Not knowledge.{" "}
              <span className="v3-glow-text text-emerald-300/90">Execution.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===== Pillars — bento grid ===== */
const PILLARS: { icon: LucideIcon; title: string; body: string; span?: string }[] = [
  { icon: Compass, title: "You stop feeling left behind", body: "Get clear on what AI can do for your business — what matters, what doesn't, and where to focus first.", span: "lg:col-span-2" },
  { icon: Users, title: "A room of serious operators", body: "Surrounded by established owners who are building, testing, and automating. Not surface-level talk." },
  { icon: BookOpen, title: "The course as a safety net", body: "AI foundations and training so you understand the moving pieces without becoming a researcher." },
  { icon: ScanSearch, title: "An AI business audit", body: "Before anything gets built, we find the bottlenecks and highest-leverage AI opportunities — tied to revenue, cost, time, or better decisions." },
  { icon: Wrench, title: "An implementer who helps you build", body: "This is the difference. You're not left alone with homework. An implementation specialist helps move your project from idea to a working system. That's what makes it an accelerator.", span: "lg:col-span-2" },
];

export function Pillars() {
  return (
    <section id="what-you-get" className="relative scroll-mt-20 px-6 py-28 md:py-32">
      <img src="/logo.png" alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[80vw] max-h-[40rem] w-auto -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">What you get</span>
        </Reveal>
        <Reveal as="h2" className="mt-4 mb-16">
          <span style={SERIF} className="block max-w-3xl text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">
            The five things a serious owner actually needs.
          </span>
        </Reveal>
        <Reveal as="div" className="grid gap-5 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className={pillar.span ?? ""}>
                <div className="v3-card group h-full rounded-3xl p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="v3-icon flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                      <Icon size={20} />
                    </span>
                    <span className="v3-num flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-emerald-300">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/65">{pillar.body}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* ===== Audit — sticky text + image ===== */
export function Audit() {
  return (
    <section className="relative px-6 py-28 md:py-32">
      <div className="v3-orb v3-orb-2" style={{ width: "350px", height: "350px", background: "rgba(52, 211, 153, 0.08)", top: "30%", left: "-10%" }} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Before anything gets built</span>
            <h2 style={SERIF} className="mt-4 text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">
              We scan your business for the most expensive problems.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              We map your processes and surface the bottlenecks and
              highest-leverage AI opportunities &mdash; the ones tied to
              revenue, cost, time, or better decisions. You stop chasing
              random tools and start solving problems that matter.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="v3-card overflow-hidden rounded-[2rem]">
              <img src="/imgs/audit-scanner.png" alt="The Execution Accelerator AI Audit Scanner inspecting every business process for bottlenecks, delays and underused AI." className="h-[30rem] w-full object-cover md:h-[40rem]" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===== Build — tabbed interface ===== */
const CATEGORIES: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: TrendingUp, title: "Grow revenue", items: ["Speed-to-lead agents", "Email follow-up sequences", "Lead finders & qualifiers", "Quizzes that qualify before they book"] },
  { icon: Scissors, title: "Cut costs", items: ["Customer support chatbots", "Knowledge-base agents", "Expense trackers that find waste", "Churn-risk trackers"] },
  { icon: Clock, title: "Save time", items: ["An email manager that tames the inbox", "Content pipeline dashboards", "A blog updater that refreshes old posts", "Calendar agents that protect deep work"] },
  { icon: LineChart, title: "Better decisions", items: ["Revenue dashboards that flag dips early", "Staff-performance dashboards", "A YouTube audit agent for hidden growth", "Numbers you can actually trust"] },
];

export function Build() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const Icon = cat.icon;

  return (
    <section id="build" className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">What we build</span>
        </Reveal>
        <Reveal as="h2" className="mt-4 mb-4">
          <span style={SERIF} className="block max-w-3xl text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">
            Where AI fits in a real business.
          </span>
        </Reveal>
        <Reveal className="mb-12 max-w-2xl text-lg leading-relaxed text-white/70">
          The goal isn&rsquo;t AI for its own sake. It&rsquo;s systems that make
          your business faster, leaner, and less dependent on you. We find your
          highest-leverage build &mdash; then make it real.
        </Reveal>

        {/* Tabs */}
        <Reveal as="div" className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c, i) => {
            const TabIcon = c.icon;
            return (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  i === active
                    ? "v3-card bg-emerald-400/10 text-emerald-300"
                    : "text-white/50 hover:text-white"
                }`}
              >
                <TabIcon size={16} />
                {c.title}
              </button>
            );
          })}
        </Reveal>

        {/* Active category content */}
        <div key={active} className="v3-rise grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="v3-card rounded-3xl p-8">
            <span className="v3-icon mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
              <Icon size={28} />
            </span>
            <h3 style={SERIF} className="text-3xl text-white">{cat.title}</h3>
          </div>
          <div className="v3-card rounded-3xl p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pit crew image */}
        <Reveal delay={80} className="mt-8">
          <div className="v3-card overflow-hidden rounded-[2rem]">
            <img src="/imgs/pit-crew.png" alt="An F1 pit crew of AI tools servicing a race car labelled YOUR BUSINESS." className="h-72 w-full object-cover md:h-96" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===== CTA Block ===== */
export function CtaBlock({
  id,
  idPrefix,
  eyebrow,
  heading,
  body,
  microcopy,
  image,
  imageAlt,
}: {
  id?: string;
  idPrefix: string;
  eyebrow: string;
  heading: string;
  body: string;
  microcopy?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-20">
      <Reveal className="mx-auto max-w-4xl">
        <div className="v3-card v3-pulse relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 md:py-20">
          {image && (
            <>
              <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
            </>
          )}
          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</span>
            <h2 style={SERIF} className="mt-4 text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">{heading}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{body}</p>
            <div className="mx-auto mt-8 max-w-lg space-y-4">
              <WaitlistForm variant="block" idPrefix={idPrefix} />
              {microcopy && <p className="text-sm leading-relaxed text-white/55">{microcopy}</p>}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ===== Founder — full-bleed with image ===== */
const ETHOS = ["Honor", "Courage", "Commitment"];

export function Founder() {
  return (
    <section id="manifesto" className="relative scroll-mt-20 px-6 py-28 md:py-32">
      <div className="v3-orb v3-orb-2" style={{ width: "400px", height: "400px", background: "rgba(52, 211, 153, 0.06)", top: "10%", left: "30%" }} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="v3-card overflow-hidden rounded-[2rem]">
              <img src="/imgs/aoc.webp" alt="Antonio Centeno, founder of the AI Execution Accelerator." className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">The founder</span>
            </Reveal>
            <Reveal as="h2" className="mt-4">
              <span style={SERIF} className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">
                I&rsquo;m Antonio Centeno.
              </span>
            </Reveal>
            <Reveal className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                For 18 years I&rsquo;ve built businesses online: Real Men Real
                Style, Mission Fragrances, communities, courses, products, and
                content channels with millions of subscribers and hundreds of
                millions of views.
              </p>
              <p>
                Seven kids. Multiple businesses. Constant decisions. And now AI.
                I didn&rsquo;t build this to sell another course &mdash; I built
                it because I saw the gap: smart owners know AI matters, but most
                don&rsquo;t have the time, clarity, or technical help to turn
                that into working systems.
              </p>
            </Reveal>
            <Reveal className="mt-6">
              <p style={SERIF} className="border-l-2 border-emerald-400/70 pl-5 text-2xl leading-snug text-white md:text-3xl">
                Ideas are cheap.{" "}
                <span className="v3-glow-text text-emerald-300/90">Execution is what counts.</span>
              </p>
            </Reveal>
            <Reveal className="mt-8 flex flex-nowrap items-center gap-3">
              <span className="shrink-0 text-sm text-white/50">My Marine officer background sets the standard:</span>
              {ETHOS.map((word) => (
                <span key={word} className="v3-card shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-white">{word}</span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== FitCheck — single column with inline check/x ===== */
const FOR_YOU = [
  "You own an established business with real customers and revenue.",
  "You know AI matters but haven't implemented it deeply.",
  "You're tired of dabbling and want help implementing, not just learning.",
  "You value being in a room with serious operators.",
  "You want AI tied to revenue, cost savings, time, or better decisions.",
];
const NOT_FOR_YOU = [
  "You're still figuring out what business to start.",
  "You want a cheap prompt pack or passive learning.",
  "You want to collect ideas but avoid execution.",
  "You want someone to magically fix your business while you stay uninvolved.",
];

export function FitCheck() {
  return (
    <section className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal as="h2" className="mb-14 text-center">
          <span style={SERIF} className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">
            Let&rsquo;s make sure this is actually for you.
          </span>
        </Reveal>
        <div className="space-y-3">
          {FOR_YOU.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="v3-card flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed text-white/80">{item}</span>
              </div>
            </Reveal>
          ))}
          <div className="my-6 flex items-center gap-4">
            <div className="v3-line flex-1" />
            <span className="text-xs uppercase tracking-widest text-white/30">Not for you if</span>
            <div className="v3-line flex-1" />
          </div>
          {NOT_FOR_YOU.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-2xl p-5 opacity-60">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/40">
                  <X size={16} strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed text-white/50">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Testimonial card ===== */
export function TestimonialCard({
  headline,
  quote,
  name,
  role,
  image,
}: {
  headline: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
}) {
  return (
    <div className="v3-card flex w-[85vw] max-w-md flex-col rounded-3xl p-8 md:w-[28rem]">
      <p style={SERIF} className="text-2xl leading-snug text-white">&ldquo;{headline}&rdquo;</p>
      <p className="mt-4 text-[15px] leading-relaxed text-white/65">{quote}</p>
      <div className="mt-auto flex items-center gap-3 pt-6">
        {image ? (
          <img src={image} alt={name} className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-emerald-400/20" loading="lazy" />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            {name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          </span>
        )}
        <div>
          <div className="text-sm font-medium text-white">{name}</div>
          <div className="text-xs text-white/50">{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ===== Stories — horizontal scroll ===== */
export function Stories() {
  return (
    <section id="stories" className="scroll-mt-20 py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Stories</span>
        </Reveal>
        <Reveal as="h2" className="mt-4 mb-12">
          <span style={SERIF} className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl">
            What members are saying.
          </span>
        </Reveal>
      </div>
      <div className="v3-hscroll px-6">
        <TestimonialCard
          headline="I'm saving tens of thousands of dollars in development time."
          quote="My old tech team would quote me 250 hours at $190/hour for features I can now build myself in two days using Codex. The mastermind pushed me to think more seriously about coding with AI, and it changed the economics of what I can build."
          name="Kalyan Ray-Mazumder"
          role="Founder of Prepmedians"
          image="/imgs/kalyan.jpg"
        />
        <TestimonialCard
          headline="The group helped me think bigger about where AI fits strategically."
          quote="I was already using AI before joining, but the group helped me identify higher-leverage applications I hadn't considered. The biggest shift was moving beyond day-to-day time-saving and learning how to unlock real revenue opportunities."
          name="Melanie Mendelson"
          role="Founder of MelanieCooks"
          image="/imgs/melanie.jpg"
        />
        <TestimonialCard
          headline="It turned AI from something interesting into something operational."
          quote="The conversations pushed me to think more clearly, move faster, and apply AI in ways that actually matter inside a real business."
          name="Ben Wieder"
          role="Owner / President, Level 6 Marketing"
          image="/imgs/ben.jpg"
        />
        <TestimonialCard
          headline="We're not technical people, and that's what made this so valuable."
          quote="Antonio and his team helped us think through the opportunity, validate it with our audience, and start building an AI-powered tool that fits our business instead of forcing us into some generic AI template."
          name="Anne & Leigh Walkup"
          role="Founders of The Southern Lady Cooks"
          image="/imgs/anneandleigh.jpg"
        />
      </div>
    </section>
  );
}

/* ===== Footer ===== */
export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="v3-orb v3-orb-1" style={{ width: "300px", height: "300px", background: "rgba(52, 211, 153, 0.05)", bottom: "-20%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AIEA logo" className="h-32 w-32" />
          <div className="flex flex-col">
            <span style={SERIF} className="v3-glow-text text-8xl text-emerald-300/90">AIEA</span>
            <span style={SERIF} className="text-2xl text-white">AI Execution Accelerator</span>
          </div>
        </div>
        <p className="text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} AI Execution Accelerator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
