"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.978 1.059.865-.24 1.79-.362 2.714-.366.923.004 1.849.126 2.714.366 1.97-1.381 2.978-1.059 2.978-1.059.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "Figma",
  "Docker",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative px-6 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[120px]"
        />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto w-full pt-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400">
                  Available for projects
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-cyan-400 font-mono text-sm mb-3 tracking-wider"
              >
                Hi, my name is
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3 glow-text"
              >
                <span className="gradient-text">Arman</span>{" "}
                <span className="text-foreground">Sheikh.</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted mb-6 tracking-tight"
              >
                Full-Stack Developer & SaaS Founder.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-8"
              >
                I build exceptional digital experiences — from AI-powered tools
                to e-commerce platforms. Based in Aldershot, UK.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center gap-3 mb-8"
              >
                <a
                  href="#projects"
                  className="group px-5 py-2.5 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-all font-medium text-sm flex items-center gap-2"
                >
                  View My Work
                  <ArrowDown
                    size={14}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all font-medium text-sm"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-muted hover:text-foreground transition-colors font-medium text-sm flex items-center gap-1.5 border border-[var(--card-border)] rounded-lg hover:border-[var(--muted)]"
                >
                  Resume
                  <Download size={14} />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs font-mono text-muted">
                  Find me on
                </span>
                <div className="h-px w-8 bg-[var(--card-border)]" />
                <a
                  href="https://github.com/thearmansheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/thearmansheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:thearmansheikh.co@gmail.com"
                  className="text-muted hover:text-cyan-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Tech Stack Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer ring */}
            <div className="absolute w-80 h-80 rounded-full border border-[var(--card-border)]/50" />
            {/* Inner ring */}
            <div className="absolute w-56 h-56 rounded-full border border-[var(--card-border)]/30" />

            {/* Center avatar */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-[var(--card-border)] flex items-center justify-center text-2xl font-bold text-cyan-400">
              AS
            </div>

            {/* Floating tech badges */}
            {techStack.map((tech, i) => {
              const angle = (i / techStack.length) * 360;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + i * 0.08,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    x,
                    y,
                  }}
                  className="px-2.5 py-1 bg-[var(--card)] border border-[var(--card-border)] rounded-full text-xs font-mono text-muted whitespace-nowrap hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
                >
                  {tech}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted">Scroll</span>
        <ArrowDown className="text-muted animate-bounce" size={16} />
      </motion.div>
    </section>
  );
}
