import { Check, X } from "lucide-react";
import Reveal from "../components/Reveal";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

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

export default function FitCheck() {
  return (
    <section className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal as="h2" className="mx-auto mb-14 max-w-2xl text-center">
          <span
            style={SERIF}
            className="block text-4xl leading-[1.08] tracking-tight text-white md:text-5xl"
          >
            Let&rsquo;s make sure this is actually for you.
          </span>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="liquid-glass h-full rounded-3xl p-8">
              <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-black">
                  <Check size={16} strokeWidth={3} />
                </span>
                This is for you if&hellip;
              </h3>
              <ul className="space-y-4">
                {FOR_YOU.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-white/75"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="liquid-glass h-full rounded-3xl p-8">
              <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/60">
                  <X size={16} strokeWidth={3} />
                </span>
                This is not for you if&hellip;
              </h3>
              <ul className="space-y-4">
                {NOT_FOR_YOU.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-white/55"
                  >
                    <X size={18} className="mt-0.5 shrink-0 text-white/35" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
