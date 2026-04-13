"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data";

const categoryIcons: Record<string, string> = {
  frontend: "🎨",
  backend: "⚙️",
  design: "🖌️",
  tools: "🛠️",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[var(--card)] border border-[var(--card-border)] rounded-xl hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{categoryIcons[category]}</span>
                  <h3 className="text-lg font-semibold capitalize">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted bg-[var(--code-bg)] border border-[var(--card-border)] px-3 py-1.5 rounded-md hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
