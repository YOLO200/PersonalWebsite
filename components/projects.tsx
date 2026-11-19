"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown, ExternalLink, Folder } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 50, damping: 18 };

// "Read more" details: each line (intro paragraph, then each bullet) fades in top to
// bottom, and fades out bottom to top on "Show less". Opacity only — nothing slides.
const detailsList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
  exit: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};
const detailsLine: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.18, ease: "easeIn" } },
};

type Project = {
  title: string;
  /** One or two sentences shown on the collapsed card. */
  summary: string;
  /** Lead paragraph shown when the card is expanded. */
  description: string;
  /** Key details shown as a list under the description when expanded. */
  highlights: string[];
  tags: string[];
  github: string;
  live: string;
};

// Details below were taken from each project's GitHub repository (README, source and
// report). Sonic Evolution's repo is private; its details come from the README.
const projects: Project[] = [
  {
    title: "Pono Pono Peace Initiative — Capstone",
    summary:
      "Leading the accessibility-first redesign of a live nonprofit website for my ASU capstone.",
    description:
      "A modernized website for the Pono Pono Peace Initiative, a 501(c)(3) nonprofit registered in Hawaii. The redesign focuses on accessibility across devices, a refreshed visual style and less friction for visitors, while keeping the organization's message intact. Alongside the build, I produced a technical risk and ethics assessment aligned with real-world deployment.",
    highlights: [
      "Built with React and Vite as modular page components: home, about, blog, projects, contact, donations and the Student Peacebuilder Competition.",
      "Blog posts, projects and board-member profiles are stored in Supabase, so nonprofit staff can update content without touching code.",
      "Stripe handles donations and EmailJS powers the contact form.",
      "Wrote setup and maintenance guides for Supabase, donations, sponsors and the contact page so the organization can run the site after handoff.",
    ],
    tags: ["React", "Vite", "Supabase", "Stripe", "EmailJS", "Accessibility"],
    github: "https://github.com/skohli182/PonoPonoPeaceInitiative",
    live: "",
  },
  {
    title: "Dentosys — SaaS Platform for Dentists",
    summary:
      "A full-stack practice-management platform for dental clinics and multi-branch practices, with a live demo.",
    description:
      "Dentosys runs a dental clinic's day, from appointments and patient records to clinical visits, X-rays, follow-ups and reports. It is a React and TypeScript single-page app on Supabase, and access control is enforced in the database rather than the browser.",
    highlights: [
      "Patient profiles with notes, X-ray and document uploads (private storage, short-lived signed links), and clinical visits recording treatment plans, treatments done by FDI tooth number and prescriptions.",
      "Per-branch dashboard with KPIs, today's appointments and a six-month Practice Summary chart, plus a calendar by doctor and status.",
      "CRM with a Patient Tracker (prospect through to recall), enquiries with CSV upload and an opportunity pipeline.",
      "Row-level security on every table scopes each staff member to the branches they are assigned to. Accounts are invite-only.",
      "A public demo clinic rebuilds its sample data around today's date every day and is sandboxed in the database, away from real patient records.",
      "Vitest tests for the access rules and branch selection, CI running typecheck, lint and tests on every push, and privacy-conscious Sentry error reporting.",
    ],
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Sentry"],
    github: "",
    live: "https://city-dental-software.vercel.app/welcome",
  },
  {
    title: "Dental Tourism Website",
    summary:
      "A patient-facing website that helps international patients plan affordable dental treatment in India.",
    description:
      "A multi-page website for a dental tourism service that guides international patients from research to a treatment quote. It explains the process step by step and makes the cost case clearly.",
    highlights: [
      "Side-by-side cost comparison of common treatments in the USA, UK and Australia versus India.",
      "Pages for treatments, partner clinics (with accreditations such as JCI) and destination cities.",
      "A detailed quote-request form covering treatment type, dental needs, travel timeframe and preferred city.",
      "How-it-works walkthrough, testimonials, a trust bar and a blog section to build credibility.",
    ],
    tags: ["React", "TypeScript", "Vite", "React Router"],
    github: "https://github.com/YOLO200/Dentaltourism",
    live: "",
  },
  {
    title: "LLM Flame War Mediator",
    summary:
      "Can a small LLM calm a Reddit flame war? One model mediates, a second model judges how well it did.",
    description:
      "A research project with Ashwin Wandrekar asking whether LLMs can mediate hostile online arguments, and whether another LLM can reliably judge that mediation. We built a two-stage pipeline and ran it on real Reddit flame-war threads from six topic areas.",
    highlights: [
      "Mediator: Llama-3.2-3B-Instruct reads each thread, decides which participant is more reasonable (with a rationale) and writes a de-escalating message.",
      "Judge: Qwen3-4B scores the fairness of each judgment and the effectiveness of each steering message on a 1–5 scale, with JSON-constrained output.",
      "Compared three judging strategies. Few-shot examples made scores much more consistent, and a rubric (fairness, neutrality, empathy, clarity) gave the most detailed rationales.",
      "An aggression analysis (toxic terms, confrontational phrasing, all-caps and exclamation emphasis) found LLM mediation far less escalatory than human responses.",
      "Data prep included flattening threads into conversations and trimming them to fit the judge model's token budget. Runs end-to-end in Google Colab.",
    ],
    tags: ["Python", "LLMs", "NLP", "Llama", "Qwen", "LLM-as-a-Judge"],
    github: "https://github.com/YOLO200/Can-LLM-Serve-as-a-Mediator-in-Online-Flame-Wars-",
    live: "https://docs.google.com/document/d/1543RLKyHFjtsZl8sqWgqhDzkpSp82b17aPELRiWV_fg/edit?usp=sharing",
  },
  {
    title: "Sonic Evolution: How Music Has Changed Over Time",
    summary:
      "A scroll-driven story of how popular music changed from the 1960s to the 2010s, told through five D3.js visualizations.",
    description:
      "An interactive scrollytelling web app, built as a team of four, that tells the data story of how popular music changed in rhythm, energy, loudness, emotional tone and genre from the 1960s through the 2010s. Narrative text and five linked D3.js visualizations reveal the trends progressively as you scroll.",
    highlights: [
      "Five visualizations: popularity over time (line chart), genre share by decade (100% stacked bars), energy vs. danceability (scatterplot) and top artists per decade (force-directed bubble chart).",
      "The centerpiece is a custom radial sound spectrum: each decade is a ring, with radius showing energy, angle showing tempo, color showing emotional tone and line thickness showing loudness, so decades can be compared directly.",
      "A Python (Pandas) pipeline cleans the Million Song Dataset, maps its columns to a common schema, keeps 1960–2024 and aggregates about 4,600 valid songs across 30+ genres into decade-level JSON.",
      "Interactive throughout: hover tooltips, decade filters, a highlightable genre legend, and previous/next decade navigation on the radial view.",
      "Scroll-triggered transitions with Scrollama.js, plus a responsive layout for phone, tablet and desktop.",
    ],
    tags: ["D3.js", "JavaScript", "Scrollama.js", "Python", "Pandas", "Data Visualization"],
    github: "",
    live: "",
  },
  {
    title: "Crunch — Financial Wellness for Gig Workers (Hackathon)",
    summary:
      "A dashboard that turns gig workers' bank statements into a plain-English survival score and AI coaching.",
    description:
      "Built for InnovationHacks × State Farm 2026. Crunch is a financial resilience dashboard for rideshare drivers, delivery workers and freelancers, people with unpredictable income, quarterly self-employment taxes and no employer benefits. It turns uploaded bank statements into cash runway, risk level, tax exposure and a prioritized action plan.",
    highlights: [
      "Financial Survival Score (0–100) built from cash runway, income stability, savings cushion and insurance coverage, with a separate Critical / Caution / Stable verdict.",
      "AI financial coach on Google Gemini 2.5 Flash with streaming responses and a Groq (Llama 3.3 70B) fallback. It knows the user's savings, expenses and insurance status.",
      "Crisis Advisor generates a survival plan and timeline for scenarios like job loss, a medical emergency or a car breakdown.",
      "Read-aloud for every AI response via ElevenLabs, with a browser speech fallback.",
      "Full UI translation in 6 languages (English, Spanish, Chinese, Vietnamese, Arabic, French), and the coach replies in the chosen language.",
    ],
    tags: ["React", "TypeScript", "Gemini AI", "Groq", "ElevenLabs", "Tailwind CSS"],
    github: "https://github.com/YOLO200/InnovationHacks_Statefarm",
    live: "",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...spring, delay: index * 0.07 }}
      className="glass-card rounded-2xl p-8 group hover:border-primary/30 hover:-translate-y-0.5 transition-all flex flex-col"
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
      {/* mode="wait": the outgoing text finishes fading before the incoming text starts. */}
      <AnimatePresence mode="wait" initial={false}>
        {expanded ? (
          <motion.div key="details" id={detailsId} variants={detailsList} initial="hidden" animate="visible" exit="exit">
            <motion.p variants={detailsLine} className="text-secondary-foreground text-sm leading-relaxed">
              {project.description}
            </motion.p>
            {project.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {project.highlights.map((point) => (
                  <motion.li key={point} variants={detailsLine} className="flex gap-2.5 text-secondary-foreground text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        ) : (
          <motion.p
            key="summary"
            id={detailsId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="text-secondary-foreground text-sm leading-relaxed"
          >
            {project.summary}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        aria-controls={detailsId}
        className="mt-3 mb-6 self-start inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

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
  );
}

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
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
