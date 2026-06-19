import { useEffect, useRef, type ReactNode } from "react";

export default function HormoziReveal({
  children,
  className = "",
  delay = 0,
  gridChild = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Use when this reveal is a direct child of a CSS grid (bento, fit, testimonials). */
  gridChild?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`hormozi-reveal${gridChild ? " hormozi-reveal--grid-child" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
