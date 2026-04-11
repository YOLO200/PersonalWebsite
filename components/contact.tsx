"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Link2, UserRound } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 50, damping: 18 };

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
            04 — Contact
          </span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
          >
            <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Let&apos;s build
              <br />
              <span className="text-gradient">something great</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              I&apos;m always open to new opportunities, collaborations, or just
              a good conversation about tech. Don&apos;t hesitate to reach out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.08 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "yjasani@asu.edu",
                href: "mailto:yjasani@asu.edu",
              },
              {
                icon: Link2,
                label: "GitHub",
                value: "github.com/yashvijasani",
                href: "https://github.com/yashvijasani",
              },
              {
                icon: UserRound,
                label: "LinkedIn",
                value: "linkedin.com/in/yashvi-jasani",
                href: "https://www.linkedin.com/in/yashvi-jasani-26614723a",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 flex items-center justify-between group hover:border-primary/30 hover:glow-primary transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                      {label}
                    </p>
                    <p className="text-foreground font-display font-semibold text-sm">
                      {value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="font-display font-bold text-sm text-foreground">
            YJ<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-xs font-mono tracking-wider">
            © {new Date().getFullYear()} Yashvi Jasani · Designed & built with love
          </p>
        </motion.div>
      </div>
    </section>
  );
}
