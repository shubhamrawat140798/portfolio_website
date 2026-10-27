"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const { once = true, rootMargin = "0px 0px -8% 0px", threshold = 0.15 } =
    options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}
