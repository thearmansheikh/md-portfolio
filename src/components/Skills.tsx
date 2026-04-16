"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Palette, Wrench } from "lucide-react";
import { SKILLS } from "@/data";

const categoryConfig: Record<string, { icon: React.ElementType; label: string; color: string }> = {
  frontend: { icon: Code2, label: "Frontend", color: "cyan" },
  backend: { icon: Server, label: "Backend", color: "violet" },
  design: { icon: Palette, label: "Design", color: "amber" },
  tools: { icon: Wrench, label: "Tools", color: "emerald" },
};

const skillLevels: Record<string, number> = {
  // Frontend
  React: 90,
  "Next.js": 85,
  TypeScript: 85,
  "Tailwind CSS": 90,
  "HTML/CSS": 95,
  JavaScript: 90,
  // Backend
  "Node.js": 75,
  Express: 70,
  "REST APIs": 80,
  PostgreSQL: 65,
  MongoDB: 65,
  Prisma: 70,
  // Design
  Figma: 70,
  "UI/UX Design": 75,
  "Responsive Design": 90,
  Prototyping: 65,
  // Tools
  Git: 85,
  "VS Code": 95,
  Vercel: 80,
  Docker: 60,
  Linux: 70,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const skills = SKILLS[activeCategory as keyof typeof SKILLS] || [];

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--section-alt)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">05.</span>
            Skills & Technologies
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-10" />
          <p className="text-muted max-w-2xl mb-10">
            The tools and technologies I use to bring ideas to life — from
            front-end interfaces to back-end architecture.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(categoryConfig).map(([key, { icon: Icon, label }]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === key
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-muted border border-transparent hover:text-foreground hover:border-[var(--card-border)]"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {skills.map((skill, i) => {
                const level = skillLevels[skill] || 50;
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center gap-4 p-3 bg-[var(--card)] border border-[var(--card-border)] rounded-lg hover:border-cyan-500/20 transition-colors"
                  >
                    <span className="text-sm text-foreground flex-1 group-hover:text-cyan-400 transition-colors">
                      {skill}
                    </span>

                    {/* Progress bar */}
                    <div className="w-24 h-1.5 bg-[var(--code-bg)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                        className="h-full bg-cyan-500/60 rounded-full"
                      />
                    </div>

                    <span className="text-xs font-mono text-muted w-8 text-right">
                      {level}%
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
