"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 50, damping: 18 };

const experiences = [
  {
    title: "AI / Software Engineering Intern",
    company: "Unison",
    period: "Summer 2025",
    description:
      "Built AI-driven features and full-stack web applications. Collaborated with cross-functional teams to ship production features impacting users at scale.",
    tags: ["React", "Node.js", "OpenAI", "AWS"],
  },
  {
    title: "Software Engineering Intern",
    company: "Digimarc",
    period: "Summer 2024",
    description:
      "Developed responsive interfaces and integrated REST APIs. Improved application performance through code optimization and modern front-end practices.",
    tags: ["TypeScript", "REST APIs", "Performance"],
  },
  {
    title: "Teaching Assistant",
    company: "Arizona State University",
    period: "Fall 2024 – Present",
    description:
      "Mentored students in introductory CS and data structures courses. Led review sessions and created supplementary learning materials.",
    tags: ["Python", "Mentoring", "Curriculum"],
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Python", "Java", "C++", "SQL",
  "Node.js", "Express", "Django", "Flask",
  "PostgreSQL", "MongoDB", "Redis", "Git",
  "Docker", "AWS", "Vercel", "Tailwind CSS",
  "OpenAI", "Supabase", "Vue.js", "Figma",
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
            02 — Experience & Skills
          </span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-16 max-w-3xl"
        >
          Crafting experience,{" "}
          <span className="text-gradient">one role at a time</span>
        </motion.h2>

        {/* Experience cards */}
        <div className="space-y-6 mb-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-wider text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed ml-14 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 ml-14">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-secondary px-3 py-1 rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
        >
          <h3 className="font-display text-2xl font-extrabold mb-8">
            Technical <span className="text-gradient">Arsenal</span>
          </h3>

          <div className="relative overflow-hidden rounded-2xl glass-card py-6">
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10"
              style={{ background: "linear-gradient(to right, var(--color-card), transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10"
              style={{ background: "linear-gradient(to left, var(--color-card), transparent)" }}
            />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="mx-4 text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
