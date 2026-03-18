"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CodeIcon, ServerIcon, CloudIcon } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: <CodeIcon className="w-5 h-5" />,
    skills: [
      "React",
      "Next.js",
      "Redux",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    icon: <ServerIcon className="w-5 h-5" />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <CloudIcon className="w-5 h-5" />,
    skills: ["Docker", "Git", "GitHub Actions", "Vercel", "AWS", "Linux"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const pillVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="Skills & Technologies" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="bg-surface-card border border-border-subtle rounded-lg p-6"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-accent">{cat.icon}</div>
                <h3 className="font-mono text-lg font-semibold text-slate-200">
                  {cat.title}
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-slate-300 bg-slate-800/60 border border-border-subtle rounded hover:border-accent/30 hover:text-accent hover:bg-accent-dim transition-all duration-200 cursor-default"
                    variants={pillVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}