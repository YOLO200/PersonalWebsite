"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Award } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, stiffness: 50, damping: 18, delay },
});

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <motion.div {...fadeUp()} className="flex items-center gap-4 mb-20">
          <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
            01 — About
          </span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        {/* Big statement */}
        <motion.h2
          {...fadeUp(0.05)}
          className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-16 max-w-4xl"
        >
          I turn complex problems into{" "}
          <span className="text-gradient">elegant solutions</span> through code
          & creativity.
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Text column */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-3 space-y-6">
            <p className="text-secondary-foreground leading-relaxed text-lg">
              Hi! I'm Yashvi Jasani, an AI Engineer and Software Developer who
              loves turning ideas into intelligent, human-centered digital
              experiences. I enjoy building things that combine creativity and
              logic — from crafting responsive front-ends with React and Next.js
              to designing AI-driven systems using OpenAI, Supabase, and AWS.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I recently graduated from Arizona State University with my
              Computer Science degree and am now interning at M S International
              (MSI), where I'm building AI-driven tools that make enterprise
              data easier to work with. My focus is on creating scalable,
              meaningful products that make technology feel effortless.
            </p>

            {/* Quick info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-xl p-5 group hover:border-primary/30 transition-colors">
                <GraduationCap className="w-5 h-5 text-primary mb-3" />
                <p className="font-display font-bold text-sm text-foreground">
                  Arizona State University
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  B.S. Computer Science (Honors) · May 2026
                </p>
              </div>
              <div className="glass-card rounded-xl p-5 group hover:border-primary/30 transition-colors">
                <MapPin className="w-5 h-5 text-primary mb-3" />
                <p className="font-display font-bold text-sm text-foreground">
                  Orange County, California
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Open to relocation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats column */}
          <div className="md:col-span-2 h-full flex flex-col justify-between gap-6">
            {[
              {
                icon: Code2,
                value: "10+",
                label: "Projects Built",
                color: "text-primary",
              },
              {
                icon: GraduationCap,
                value: "3.58",
                label: "GPA / 4.0",
                color: "text-primary",
              },
              {
                icon: Award,
                value: "4×",
                label: "Dean's List",
                color: "text-accent",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 18,
                  delay: 0.1 + i * 0.08,
                }}
                className="glass-card rounded-xl p-6 flex items-center gap-5 group hover:border-primary/30 hover:glow-primary transition-all"
              >
                <stat.icon className={`w-6 h-6 ${stat.color} shrink-0`} />
                <div>
                  <p className="font-display text-3xl font-extrabold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
