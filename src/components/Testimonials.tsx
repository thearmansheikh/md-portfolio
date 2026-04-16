"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">04.</span>
            Testimonials
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-10" />
          <p className="text-muted max-w-2xl mb-10">
            What people I&apos;ve worked with have to say about collaborating with me.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                <Quote
                  size={20}
                  className="text-cyan-500/20 mb-3 group-hover:text-cyan-500/40 transition-colors flex-shrink-0"
                />

                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--card-border)]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/20 flex items-center justify-center text-cyan-400 font-semibold text-sm flex-shrink-0">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">{t.role}</p>
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
