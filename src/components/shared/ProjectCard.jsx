"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, FolderIcon } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
}) {
  return (
    <motion.article
      className="group relative bg-surface-card border border-border-subtle rounded-lg overflow-hidden flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <FolderIcon className="w-9 h-9 text-accent stroke-[1.2]" />

          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={repoUrl}
              className="text-slate-500 hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label={`${title} GitHub repository`}
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={liveUrl}
              className="text-slate-500 hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label={`${title} live demo`}
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Content */}
        <h3 className="font-mono text-xl font-semibold text-slate-100 mb-3 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {techStack.map((tech) => (
            <span key={tech} className="font-mono text-xs text-slate-500">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
