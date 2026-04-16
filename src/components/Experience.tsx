"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--section-alt)]">
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

            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-cyan-500/60 border-2 border-[var(--card)] group-hover:bg-cyan-400 transition-colors" />
                      {i < EXPERIENCE.length - 1 && (
                        <div className="w-px h-full min-h-[40px] bg-[var(--card-border)]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
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

                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm text-muted flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1 text-xs flex-shrink-0">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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

            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-violet-500/60 border-2 border-[var(--card)] group-hover:bg-violet-400 transition-colors" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-muted text-sm">·</span>
                        <span className="text-muted text-sm">
                          {edu.institution}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-cyan-400/70 flex items-center gap-1 mb-3">
                        <Calendar size={12} />
                        {edu.period}
                      </div>

                      <p className="text-muted text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
