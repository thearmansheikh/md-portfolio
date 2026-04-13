"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }

    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-cyan-400 font-mono text-lg mr-2">07.</span>
            Get In Touch
          </h2>
          <div className="w-20 h-px bg-cyan-500/30 mb-6" />
          <p className="text-muted mb-8">
            Have a project, idea, or just want to say hi? Drop me a message and
            I&apos;ll get back to you as soon as I can.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-muted mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[var(--card)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-[var(--muted)] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-muted mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[var(--card)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-[var(--muted)] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-mono text-muted mb-1.5"
              >
                Subject <span className="text-[#555]">(optional)</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-[var(--card)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-[var(--muted)] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono text-muted mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-[var(--card)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-[var(--muted)] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                placeholder="Tell me about your project, idea, or just say hello..."
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "loading"}
              type="submit"
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                status === "success"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : status === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
              }`}
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "success" && <CheckCircle size={16} />}
              {status === "error" && <AlertCircle size={16} />}
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message sent!"
                  : status === "error"
                    ? errorMessage
                    : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
