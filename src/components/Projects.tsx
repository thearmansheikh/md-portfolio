"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data";

const GitHubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.978 1.059.865-.24 1.79-.362 2.714-.366.923.004 1.849.126 2.714.366 1.97-1.381 2.978-1.059 2.978-1.059.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">02.</span>
            Projects
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-10" />
          <p className="text-muted max-w-2xl mb-12">
            A selection of things I&apos;ve built — from full-stack web apps to
            design-focused front-end experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300 glow-box flex flex-col"
              >
                {/* Project Image with hover overlay */}
                <div className="relative aspect-video bg-gradient-to-br from-[var(--card)] to-[var(--section-alt)] border-b border-[var(--card-border)] overflow-hidden">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 text-black rounded-lg text-sm font-medium flex items-center gap-1.5 hover:bg-cyan-400 transition-colors"
                    >
                      Live Demo
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium flex items-center gap-1.5 hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <GitHubIcon size={14} />
                      Code
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-cyan-400/70 bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-1 rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
