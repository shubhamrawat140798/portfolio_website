"use client";

import React from "react";
import Link from "next/link";
import projects from "../json/projects.json";
import Reveal from "./motion/Reveal";
import SectionEyebrow from "./SectionEyebrow";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-slate-800/80 py-16 sm:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionEyebrow>Projects</SectionEyebrow>
          <h2 id="projects-heading" className="section-heading heading-accent">
            Featured projects
          </h2>
          <p className="section-subheading">
            Selected work across full-stack systems, messaging services, and
            AI-assisted applications. Links appear only when a real destination
            is available.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.data.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 90}>
              <article className="project-card card-surface card-interactive card-glow group flex h-full flex-col overflow-hidden">
                <div className="project-media relative h-36 overflow-hidden border-b border-slate-800 bg-slate-950">
                  <div
                    aria-hidden="true"
                    className="project-media-layer absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.22),transparent_45%),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:100%_100%,18px_18px,18px_18px]"
                  />
                  <div
                    aria-hidden="true"
                    className="project-sheen absolute inset-0"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-300/90">
                      {project.technologies[0]}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-slate-400">
                    Problem
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {project.problem}
                  </p>
                  <p className="mt-4 text-sm font-medium text-slate-400">
                    Approach
                  </p>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="skill-badge">{tech}</span>
                      </li>
                    ))}
                  </ul>

                  {(project.github || project.demo) && (
                    <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-800 pt-4">
                      {project.github ? (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                        >
                          View on GitHub
                        </Link>
                      ) : null}
                      {project.demo ? (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                        >
                          Live demo
                        </Link>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
