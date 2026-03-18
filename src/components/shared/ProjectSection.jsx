"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="Featured Projects" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
        >
          <motion.div variants={itemVariants}>
            <ProjectCard
              title="TheDoctorsApp"
              description="Developed and deployed a full-stack doctor appointment booking platform using Next.js, Node.js, and MongoDB, enabling patients to search doctors, book appointments, and manage schedules through a responsive and user-friendly web interface."
              techStack={["Next.js", "Node.js",  "MongoDB","JavaScript","Razorpay","Redux"]}
              liveUrl="https://thedoctorsapp.org/"
              repoUrl="https://github.com/kapil01234kapil/The-Doctors-App"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              title="Deshbhar Exam"
              description="Developed and deployed a scalable Next.js-based platform that aggregates information for major government exams, enabling users to access notifications, apply for forms, and view admit cards and results through a centralized interface."
              techStack={["Next.js", "Cron-Scheduler", "MongoDB", "Redux","JavaScript"]}
              liveUrl="https://deshbhar-exam-demo.vercel.app/"
              repoUrl="https://github.com/Dalakoti01/DeshbharExamDemo"
            />
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
}
