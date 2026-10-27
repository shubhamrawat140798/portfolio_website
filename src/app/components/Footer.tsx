import React from "react";
import Link from "next/link";
import site from "../json/site.json";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">
          © {year} {site.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-white"
          >
            GitHub
          </Link>
          <Link
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-white"
          >
            LinkedIn
          </Link>
          <a
            href="#home"
            className="text-slate-400 transition-colors hover:text-white"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
