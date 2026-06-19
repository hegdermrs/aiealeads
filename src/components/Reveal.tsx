import type { ReactNode, CSSProperties, ElementType } from "react";
import { useReveal } from "./useReveal";

/** Wraps children in a scroll-revealed element. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useReveal<HTMLElement>();
  const style: CSSProperties = delay
    ? { transitionDelay: `${delay}ms` }
    : {};
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
