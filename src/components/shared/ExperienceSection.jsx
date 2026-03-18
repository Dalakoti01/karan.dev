"use client";

import React from "react";
import { motion } from "framer-motion";
import  SectionHeading  from "./SectionHeading";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "NextConnectHub",
    period: "July 2024 — Present",
    points: [
      "Designed and implemented a secure authentication and authorization system for a document printing vendingmachine platform, enabling users to upload documents for printing while ensuring protected routes, session management, and role-based access across the web application.",
      "Contributed to the development of a real estate rental marketplace platform using Next.js, implementing core business logic, reusable hooks, and dynamic features to support property listing, user interactions, and scalable frontend architecture.",
      "Developed RESTful APIs for a freelancer–client marketplace using the MERN stack and integrated them with the React frontend using custom hooks.",
    ],
  },
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="03" title="Experience" />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
        >
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border-subtle md:left-[15px]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-10 md:pl-12"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-base border-2 border-accent/40 flex items-center justify-center">
                  <BriefcaseIcon className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                </div>

                <div className="bg-surface-card border border-border-subtle rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <h3 className="font-mono text-lg font-semibold text-slate-100">
                      {exp.role}{" "}
                      <span className="text-accent">@ {exp.company}</span>
                    </h3>

                    <span className="font-mono text-sm text-slate-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                      >
                        <span className="text-accent mt-1.5 flex-shrink-0 text-xs">
                          ▹
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}