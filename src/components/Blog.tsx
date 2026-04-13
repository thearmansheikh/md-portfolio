"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data";

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">06.</span>
            Writing
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-10" />
          <p className="text-muted max-w-2xl mb-10">
            Thoughts on building, designing, and shipping software. Case studies,
            technical deep-dives, and lessons from real projects.
          </p>

          <div className="space-y-4">
            {BLOG_POSTS.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#666]">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-0.5 text-cyan-400/60"
                          >
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-muted group-hover:text-cyan-400 group-hover:translate-x-1 transition-all self-center sm:self-start mt-1"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
