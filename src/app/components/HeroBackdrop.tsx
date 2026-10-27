"use client";

import React, { useMemo } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const HeroBackdrop = () => {
  const reduced = usePrefersReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${6 + ((index * 17) % 88)}%`,
        top: `${10 + ((index * 23) % 75)}%`,
        size: 2 + (index % 3),
        delay: `${(index % 7) * 0.45}s`,
        duration: `${5 + (index % 4)}s`,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 opacity-[0.22]" />
      <div className="hero-aurora absolute inset-0" />
      <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[320px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute left-[-5%] top-[40%] h-[240px] w-[240px] rounded-full bg-indigo-500/10 blur-3xl" />

      {!reduced && (
        <div className="absolute inset-0 hidden sm:block">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="hero-particle absolute rounded-full bg-blue-300/40"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroBackdrop;
