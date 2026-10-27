"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import site from "../json/site.json";
import HeroBackdrop from "./HeroBackdrop";
import DevTerminal from "./DevTerminal";
import WordReveal from "./motion/WordReveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const HomeSection = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <HeroBackdrop />

      <div className="section-shell relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-24">
        <div className="order-2 lg:order-1">
          <p
            className={`section-eyebrow mb-3 font-mono text-sm text-blue-400 ${
              reduced ? "" : "hero-entrance"
            }`}
          >
            <span className="section-eyebrow-text">{site.name}</span>
          </p>

          <WordReveal
            id="hero-heading"
            text={site.headline}
            className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
            startDelayMs={140}
          />

          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${
              reduced ? "" : "hero-entrance hero-entrance-delay-2"
            }`}
          >
            {site.intro}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-3 ${
              reduced ? "" : "hero-entrance hero-entrance-delay-3"
            }`}
          >
            <a href="#projects" className="btn-primary btn-shine">
              View Projects
            </a>
            <a
              href={site.resumePath}
              className="btn-secondary btn-shine"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <Link
              href={site.links.github}
              className="btn-secondary btn-shine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </Link>
            <Link
              href={site.links.linkedin}
              className="btn-secondary btn-shine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </Link>
            <a href="#contact" className="btn-secondary btn-shine">
              Contact Me
            </a>
          </div>

          <DevTerminal />
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div
            className={`relative ${
              reduced ? "" : "hero-entrance hero-entrance-delay-4 hero-float"
            }`}
          >
            <div aria-hidden="true" className="portrait-ring" />
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[1.35rem] bg-blue-500/20 blur-2xl"
            />
            <div className="portrait-frame relative">
              <Image
                alt={`${site.name} — profile photo`}
                src={site.profileImage}
                width={480}
                height={480}
                priority
                className="relative h-72 w-72 rounded-2xl border border-slate-600/80 object-cover shadow-xl sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
