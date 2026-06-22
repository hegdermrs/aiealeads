import { Globe, Instagram, Twitter } from "lucide-react";

const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AIEA logo" className="h-32 w-32" />
          <div className="flex flex-col">
            <span style={SERIF} className="text-8xl text-emerald-300/90">AIEA</span>
            <span style={SERIF} className="text-2xl text-white">AI Execution Accelerator</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="AIEA on Instagram"
            className="liquid-glass rounded-full p-3 text-white/70 transition-all hover:text-white"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            aria-label="AIEA on Twitter"
            className="liquid-glass rounded-full p-3 text-white/70 transition-all hover:text-white"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            aria-label="AIEA website"
            className="liquid-glass rounded-full p-3 text-white/70 transition-all hover:text-white"
          >
            <Globe size={18} />
          </a>
        </div>

        <p className="text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} AI Execution Accelerator. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
