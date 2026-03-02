"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export default function FadeIn({ children, className, delayMs = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className ?? "",
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

