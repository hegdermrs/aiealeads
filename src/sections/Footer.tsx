import { Link } from "react-router-dom";
import { Globe, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <Globe size={20} className="text-white" />
          <span className="font-semibold text-white">AIEA</span>
          <span className="ml-2 text-sm text-white/45">
            AI Execution Accelerator
          </span>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-white/45">
          For established business owners who want to stop learning about AI and
          start executing with it.
        </p>

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
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-white/30 sm:text-left">
        &copy; {new Date().getFullYear()} AI Execution Accelerator. No price, no
        pitch — just a heads-up when the doors open.{" "}
        <Link to="/hormozi" className="underline decoration-white/20 hover:text-white/50">
          Hormozi variation
        </Link>
        {" · "}
        <Link to="/maxwell" className="underline decoration-white/20 hover:text-white/50">
          Maxwell variation
        </Link>
      </p>
    </footer>
  );
}
