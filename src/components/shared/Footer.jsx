"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-8 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs text-slate-600">
          Designed & Built by{" "}
          <span className="text-slate-400">Karan Dalakoti</span> © {year}
        </p>
      </div>
    </footer>
  );
}