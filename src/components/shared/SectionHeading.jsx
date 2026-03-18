"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ number, title, id }) {
  return (
    <motion.div
      id={id}
      className="flex items-center gap-4 mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <h2 className="font-mono text-2xl md:text-3xl font-semibold text-slate-100 whitespace-nowrap">
        <span className="text-accent">{number}.</span>
        <span className="text-slate-500 mx-2">{"//"}</span>
        {title}
      </h2>

      <div className="h-px flex-1 bg-gradient-to-r from-border-subtle to-transparent max-w-xs" />
    </motion.div>
  );
}