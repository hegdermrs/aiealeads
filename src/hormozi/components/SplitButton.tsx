import { ArrowUpRight } from "lucide-react";

type SplitControlProps = {
  label: string;
  className?: string;
};

/** Overcode-style split pill — label + arrow segment */
export function SplitButton({
  label,
  type = "button",
  className = "",
}: SplitControlProps & {
  type?: "button" | "submit";
}) {
  return (
    <button type={type} className={`oc-split-btn ${className}`.trim()}>
      <span className="oc-split-btn-label">{label}</span>
      <span className="oc-split-btn-icon" aria-hidden="true">
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </span>
    </button>
  );
}

export default SplitButton;

export function SplitLink({
  href,
  label,
  className = "",
}: SplitControlProps & { href: string }) {
  return (
    <a href={href} className={`oc-split-btn oc-split-link ${className}`.trim()}>
      <span className="oc-split-btn-label">{label}</span>
      <span className="oc-split-btn-icon" aria-hidden="true">
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </span>
    </a>
  );
}
