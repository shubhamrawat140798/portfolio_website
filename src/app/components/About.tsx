"use client";

import React from "react";
import site from "../json/site.json";
import Reveal from "./motion/Reveal";
import SectionEyebrow from "./SectionEyebrow";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-800/80 py-16 sm:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionEyebrow>About</SectionEyebrow>
          <h2 id="about-heading" className="section-heading heading-accent">
            Software engineer focused on reliable full-stack systems
          </h2>
        </Reveal>
        <Reveal delayMs={100} className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          <p>{site.about}</p>
          <p className="text-slate-400">
            Strengths include API design, microservices, production debugging,
            cross-functional collaboration, and shipping maintainable features
            across the stack—without overselling experimental work as core
            expertise.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
