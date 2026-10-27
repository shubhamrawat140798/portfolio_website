"use client";

import React from "react";
import skills from "../json/skills.json";
import Reveal from "./motion/Reveal";
import SectionEyebrow from "./SectionEyebrow";

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-slate-800/80 py-16 sm:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionEyebrow>Technical Skills</SectionEyebrow>
          <h2 id="skills-heading" className="section-heading heading-accent">
            Technologies I use in production and delivery
          </h2>
          <p className="section-subheading">
            Categorized by how I apply them day to day—languages, frameworks,
            data stores, infrastructure, and engineering practices.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, index) => (
            <Reveal key={category.title} delayMs={index * 70}>
              <article className="card-surface card-interactive card-glow h-full p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      style={{ transitionDelay: `${skillIndex * 30}ms` }}
                    >
                      <span className="skill-badge skill-badge-lux">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
