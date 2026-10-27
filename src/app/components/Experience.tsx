"use client";

import React from "react";
import experience from "../json/experience.json";
import Reveal from "./motion/Reveal";
import SectionEyebrow from "./SectionEyebrow";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-slate-800/80 py-16 sm:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionEyebrow>Experience</SectionEyebrow>
          <h2 id="experience-heading" className="section-heading heading-accent">
            Professional experience
          </h2>
          <p className="section-subheading">
            Enterprise engineering, teaching, and product delivery—with dates
            shown only where confirmed.
          </p>
        </Reveal>

        <ol className="timeline relative mt-12 space-y-6 border-l border-slate-700 pl-6 sm:pl-8">
          <span aria-hidden="true" className="timeline-progress" />
          {experience.data.map((role, index) => (
            <Reveal
              key={`${role.company}-${role.title}`}
              as="li"
              className="relative"
              delayMs={index * 90}
            >
              <span
                aria-hidden="true"
                className="timeline-dot absolute -left-[1.91rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-navy-900 sm:-left-[2.41rem]"
              />
              <article className="card-surface card-interactive card-glow p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {role.title}
                  </h3>
                  {role.period ? (
                    <p className="shrink-0 font-mono text-sm text-slate-400">
                      {role.period}
                    </p>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-blue-400">
                  {role.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
