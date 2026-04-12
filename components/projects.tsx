"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 50, damping: 18 };

const projects = [
  {
    title: "Pono Pono Peace Initiative — Capstone",
    description:
      "Leading the redesign of a production nonprofit website with a focus on accessibility, responsive design, and ethical engineering practices. Designed and implemented modular frontend components with improved navigation and performance. Produced a technical risk and ethics assessment aligned with real-world deployment considerations.",
    tags: ["Next.js", "TypeScript", "Accessibility", "Responsive Design"],
    github: "https://github.com/skohli182/PonoPonoPeaceInitiative",
    live: "",
  },
  {
    title: "SaaS Platform for Dentists",
    description:
      "A full-stack SaaS platform built for dental practices to manage patient records, appointments, treatment plans, and billing. Features role-based access, real-time updates, and an intuitive dashboard designed around clinical workflows.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
    github: "https://github.com/YOLO200/CityDentalSoftware",
    live: "",
  },
  {
    title: "Dental Tourism Website",
    description:
      "A marketing and booking website for a dental tourism company connecting international patients with dental clinics. Includes service listings, before/after galleries, cost comparison tools, and a lead capture system.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/YOLO200/Dentaltourism",
    live: "",
  },
  {
    title: "LLM Flame War Mediator",
    description:
      "A two-stage NLP pipeline that uses LLMs to automatically mediate hostile Reddit flame wars. A Llama-3.2-3B mediator generates judgment and de-escalation messages, while a Qwen3-4B judge evaluates output quality using baseline, rule-augmented, and few-shot prompting strategies. Includes a linguistic aggression analysis comparing LLM mediation against human moderators and toxic continuations.",
    tags: ["Python", "LLMs", "NLP", "Llama", "Qwen", "LLM-as-a-Judge"],
    github: "https://github.com/YOLO200/Can-LLM-Serve-as-a-Mediator-in-Online-Flame-Wars-",
    live: "https://docs.google.com/document/d/1543RLKyHFjtsZl8sqWgqhDzkpSp82b17aPELRiWV_fg/edit?usp=sharing",
  },
  {
    title: "Sonic Evolution: How Music Has Changed Over Time",
    description:
      "An interactive scrollytelling web app that visualizes the evolution of popular music from the 1960s to today using D3.js and Spotify/Million Song datasets. Features 5 visualization techniques — line chart, stacked bar, scatterplot, bubble chart, and an innovative radial sound spectrum encoding energy, tempo, valence, and loudness — with scroll-triggered animations and decade-level filtering.",
    tags: ["D3.js", "JavaScript", "Scrollama.js", "Python", "Data Visualization"],
    github: "https://github.com/asu-cse478-f2025/Ashmit-Nathan-Sarjan-Yashvi",
    live: "",
  },
  {
    title: "Crunch — Financial Wellness for Gig Workers",
    description:
      "A financial resilience dashboard for gig economy workers that turns bank statement data into plain-English survival intelligence. Features a Financial Survival Score, AI-powered cash runway and tax exposure analysis, a Gemini-powered conversational coach, ElevenLabs text-to-speech, and full UI translation across 6 languages.",
    tags: ["React", "TypeScript", "Gemini AI", "Groq", "ElevenLabs", "Tailwind CSS"],
    github: "https://github.com/YOLO200/InnovationHacks_Statefarm",
    live: "",
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
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
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
