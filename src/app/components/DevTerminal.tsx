"use client";

import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; tone?: "muted" | "success" | "info" };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "./build.sh --profile production" },
  { kind: "out", text: "Compiling modules…", tone: "muted" },
  { kind: "out", text: "Running unit tests…", tone: "muted" },
  { kind: "out", text: "BUILD SUCCESS", tone: "success" },
  { kind: "cmd", text: "git status -sb" },
  { kind: "out", text: "## main…origin/main", tone: "info" },
  { kind: "out", text: "ready to ship ✓", tone: "success" },
];

const DevTerminal = () => {
  const reduced = usePrefersReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduced ? SCRIPT.length : 0);

  useEffect(() => {
    if (reduced) {
      setVisibleCount(SCRIPT.length);
      return;
    }

    setVisibleCount(0);
    let index = 0;
    const timers: number[] = [];

    const tick = () => {
      index += 1;
      setVisibleCount(index);
      if (index < SCRIPT.length) {
        const delay = SCRIPT[index - 1].kind === "cmd" ? 700 : 420;
        timers.push(window.setTimeout(tick, delay));
      }
    };

    timers.push(window.setTimeout(tick, 500));
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [reduced]);

  return (
    <div
      className="hero-entrance hero-entrance-delay-5 terminal-glow mt-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/80 shadow-xl shadow-blue-950/20"
      aria-label="Sample developer terminal animation"
    >
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
        <p className="ml-2 font-mono text-xs text-slate-500">
          sample-session — illustrative only
        </p>
      </div>
      <div
        className="min-h-[168px] space-y-1.5 px-4 py-3 font-mono text-[12px] leading-relaxed sm:text-[13px]"
        aria-live="polite"
      >
        {SCRIPT.slice(0, visibleCount).map((line, index) => {
          if (line.kind === "cmd") {
            return (
              <p key={`cmd-${index}`} className="text-slate-200">
                <span className="text-blue-400">~/portfolio</span>
                <span className="text-slate-500"> $ </span>
                {line.text}
              </p>
            );
          }

          const toneClass =
            line.tone === "success"
              ? "text-emerald-400"
              : line.tone === "info"
                ? "text-sky-300"
                : "text-slate-500";

          return (
            <p key={`out-${index}`} className={toneClass}>
              {line.text}
            </p>
          );
        })}
        {!reduced && visibleCount < SCRIPT.length ? (
          <span className="inline-block h-4 w-2 animate-pulse bg-blue-400/80 align-middle" />
        ) : null}
      </div>
    </div>
  );
};

export default DevTerminal;
