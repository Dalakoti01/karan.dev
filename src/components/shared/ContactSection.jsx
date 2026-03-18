"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading  from "./SectionHeading";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const fadeUp = {
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading number="04" title="Get In Touch" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
        >
          <motion.h3
            className="font-mono text-3xl md:text-4xl font-bold text-slate-100 mb-6"
            variants={fadeUp}
          >
            {"Let's Build Something Together"}
          </motion.h3>

          <motion.p
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            variants={fadeUp}
          >
            I'm currently open to new opportunities and always interested in
            hearing about exciting projects. Whether you have a question, a
            project idea, or just want to say hi — my inbox is always open.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
  href="https://wa.me/919027226881"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-surface-base font-mono font-semibold text-base rounded hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
>
  <MailIcon className="w-5 h-5" />
  Say Hello
</a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 mt-12"
            variants={fadeUp}
          >
            <a
            target="_blank"
              href="https://github.com/Dalakoti01"
              className="text-slate-500 hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/dalakotikaran/"
              className="text-slate-500 hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
             target="_blank"
              href="mailto:dalakotikaran11@gmail.com"
              className="text-slate-500 hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}