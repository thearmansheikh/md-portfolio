"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Code } from "lucide-react";

const details = [
  { icon: User, label: "Name", value: "Arman Sheikh" },
  { icon: MapPin, label: "Location", value: "Aldershot, UK" },
  { icon: GraduationCap, label: "Education", value: "B.Tech in Computer Science" },
  { icon: Code, label: "Focus", value: "Full-Stack Development & UI/UX Design" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">01.</span>
            About Me
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Hello! I&apos;m <span className="text-foreground font-medium">Arman Sheikh</span>, a self-taught
                developer who enjoys turning complex problems into simple, elegant
                solutions. My interest in web development started when I decided to
                try building my first website — and I&apos;ve been hooked ever since.
              </p>
              <p>
                I specialise in building full-stack applications with modern
                technologies like <span className="text-cyan-400">React</span>,{" "}
                <span className="text-cyan-400">Next.js</span>,{" "}
                <span className="text-cyan-400">TypeScript</span>, and{" "}
                <span className="text-cyan-400">Node.js</span>. I also have a strong
                eye for design and enjoy crafting intuitive user interfaces using{" "}
                <span className="text-cyan-400">Figma</span> and{" "}
                <span className="text-cyan-400">Tailwind CSS</span>.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge on YouTube.
              </p>
            </div>

            {/* Detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 bg-[var(--card)] border border-[var(--card-border)] rounded-lg hover:border-cyan-500/30 transition-colors group"
                >
                  <item.icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    {item.value}
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
