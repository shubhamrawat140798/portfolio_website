"use client";

import React from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type WordRevealProps = {
  text: string;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "p";
  startDelayMs?: number;
};

const WordReveal = ({
  text,
  className = "",
  id,
  as: Tag = "h1",
  startDelayMs = 120,
}: WordRevealProps) => {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={`${className} word-reveal`} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="word-reveal-item"
          style={{ animationDelay: `${startDelayMs + index * 70}ms` }}
          aria-hidden="true"
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
};

export default WordReveal;
