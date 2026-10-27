"use client";

import React, { type ElementType, type ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: ElementType;
};

const Reveal = ({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLElement>();
  const reduced = usePrefersReducedMotion();
  const visible = reduced || inView;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={
        reduced
          ? undefined
          : ({ "--reveal-delay": `${delayMs}ms` } as React.CSSProperties)
      }
    >
      {children}
    </Tag>
  );
};

export default Reveal;
