"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">03.</span>
            Experience & Education
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-10" />

          {/* Experience */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2 mb-8">
              <Briefcase size={18} />
              Experience
            </h3>

            <div className="relative border-l border-[var(--card-border)] ml-2 space-y-10">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500/50 border-2 border-[var(--background)] group-hover:bg-cyan-400 transition-colors" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-base font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-muted text-sm">·</span>
                    <span className="text-muted text-sm flex items-center gap-1">
                      <Building2 size={12} />
                      {exp.company}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-cyan-400/70 flex items-center gap-1 mb-3">
                    <Calendar size={12} />
                    {exp.period}
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-[#999] flex items-start gap-2">
                        <span className="text-cyan-400 mt-1 text-xs">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2 mb-8">
              <GraduationCap size={18} />
              Education
            </h3>

            <div className="relative border-l border-[var(--card-border)] ml-2 space-y-8">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500/50 border-2 border-[var(--background)] group-hover:bg-cyan-400 transition-colors" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-base font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-muted text-sm">·</span>
                    <span className="text-muted text-sm">{edu.institution}</span>
                  </div>

                  <div className="text-xs font-mono text-cyan-400/70 flex items-center gap-1 mb-3">
                    <Calendar size={12} />
                    {edu.period}
                  </div>

                  <p className="text-muted text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
