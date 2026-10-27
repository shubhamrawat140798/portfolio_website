"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import navbar from "../json/navbar.json";
import site from "../json/site.json";
import HamburgerIcon from "./HamburgerIcon";

const SECTION_IDS = navbar.data.map((item) => item.href.replace("#", ""));

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  const linkClass = (href: string, base: string) => {
    const id = href.replace("#", "");
    const active = activeId === id;
    return `${base} ${
      active
        ? "text-blue-400"
        : "text-slate-300 hover:text-white"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-navy-900/90 backdrop-blur-md">
      <nav
        className="section-shell flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/#home"
          className="text-base font-semibold tracking-tight text-slate-100 transition-colors hover:text-blue-400"
          onClick={closeMenu}
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navbar.data.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={linkClass(
                  item.href,
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300"
                ) + (activeId === item.href.replace("#", "") ? " after:scale-x-100" : "")}
                aria-current={
                  activeId === item.href.replace("#", "") ? "true" : undefined
                }
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 transition-colors hover:border-slate-500 hover:text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-slate-800 bg-navy-900 md:hidden ${
          isOpen ? "animate-slide-down block" : "hidden"
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {navbar.data.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-slate-800/70 ${
                  activeId === item.href.replace("#", "")
                    ? "bg-slate-800/50 text-blue-400"
                    : "text-slate-200 hover:text-white"
                }`}
                aria-current={
                  activeId === item.href.replace("#", "") ? "true" : undefined
                }
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
