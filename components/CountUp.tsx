"use client";

import { useEffect, useRef } from "react";

const format = (v: number, prefix: string) => prefix + Math.round(v).toLocaleString("en-CA");

/** Number that counts up from zero the first time it scrolls into view. */
export default function CountUp({ value, prefix = "" }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    el.textContent = format(0, prefix);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / 1200, 1);
            el.textContent = format(value * (1 - Math.pow(1 - p, 3)), prefix);
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }),
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = format(value, prefix);
    };
  }, [value, prefix]);

  return <span ref={ref}>{format(value, prefix)}</span>;
}
