"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ChevronDownIcon,
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "MERN Stack Engineer",
];

function useTypingAnimation(
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));

        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const typedRole = useTypingAnimation(roles);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)]" />

      <motion.div
        className="relative max-w-3xl w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-mono text-accent text-sm md:text-base mb-5 tracking-wide"
          variants={fadeUp}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-4 leading-tight"
          variants={fadeUp}
        >
          Karan Dalakoti.
        </motion.h1>

        <motion.div className="flex items-center gap-2 mb-8" variants={fadeUp}>
          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-slate-400">
            {"I'm a "}
          </span>

          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-accent">
            {typedRole}
            <span className="cursor-blink text-accent">|</span>
          </span>
        </motion.div>

        <motion.p
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          variants={fadeUp}
        >
          Full Stack Developer with 2+ years of experience building scalable web
          applications using the MERN stack and Next.js. Experienced in
          developing component-driven React applications, RESTful APIs, and
          full-stack platforms with modern JavaScript (ES6+) and Redux state
          management using modular UI architecture. Skilled in Dockerized
          deployments, Git workflows, and building production-ready applications
          with focus on performance optimization and scalable system design.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4 mb-12"
          variants={fadeUp}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface-base font-mono font-semibold text-sm rounded hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
          >
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-mono font-semibold text-sm rounded hover:bg-accent-dim transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div className="flex items-center gap-5" variants={fadeUp}>
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

          <div className="h-px w-24 bg-slate-700 ml-2" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDownIcon className="w-5 h-5 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}