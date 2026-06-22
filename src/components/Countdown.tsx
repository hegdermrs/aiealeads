import { useEffect, useState } from "react";

function calcRemaining(target: number) {
  const diff = target - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
    done: false,
  };
}

export default function Countdown({ target }: { target: number }) {
  const [rem, setRem] = useState(() => calcRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRem(calcRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (rem.done) return <span>Now open</span>;

  const pts: { v: number; l: string }[] = [];
  if (rem.d > 0) pts.push({ v: rem.d, l: "d" });
  if (rem.h > 0 || pts.length) pts.push({ v: rem.h, l: "h" });
  if (rem.m > 0 || pts.length) pts.push({ v: rem.m, l: "m" });
  if (!pts.length || rem.s > 0) pts.push({ v: rem.s, l: "s" });

  return (
    <span>
      Opens in{" "}
      {pts.map((p, i) => (
        <span key={p.l}>
          {p.v}
          <span className="text-white/50">{p.l}</span>
          {i < pts.length - 1 && <span className="text-white/30"> </span>}
        </span>
      ))}
    </span>
  );
}
