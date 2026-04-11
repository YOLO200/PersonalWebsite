"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 50, damping: 18 };

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions, forecasts, and historical data with beautiful visualizations.",
    tags: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Social Media Analytics",
    description:
      "A data visualization tool that analyzes social media metrics and provides insights through interactive charts and graphs.",
    tags: ["Python", "Flask", "D3.js", "PostgreSQL"],
    github: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
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
            03 — Projects
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
          Things I&apos;ve{" "}
          <span className="text-gradient">built</span>
        </motion.h2>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
      </div>
    </section>
  );
}
