"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import SeasonPicker from "@/components/seasons/SeasonPicker";
import { SEASONS } from "@/components/seasons/types";

/** After the page has loaded, let the browser fetch the other seasons' scenery. */
function usePreloadOtherScenery() {
  useEffect(() => {
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const markReady = () => document.documentElement.classList.add("seasons-ready");
    const schedule = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(markReady, { timeout: 4000 });
      else timeoutId = setTimeout(markReady, 1500);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);
}

const firstName = "Yashvi";
const lastName = "Jasani";

const charVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.04,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  usePreloadOtherScenery();
  return (
    <section className="season-hero relative flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Seasonal scenery: which layer shows (and which photo downloads) is decided
          by CSS from <html data-season>, so it is correct before React hydrates. */}
      {SEASONS.map((name) => (
        <div key={name} aria-hidden="true" data-scenery={name} className="season-landscape absolute inset-0" />
      ))}
      <div className="season-veil absolute inset-0" />

      <div className="relative z-10 text-center max-w-5xl pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">
            ASU Class of 2026
          </span>
        </motion.div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-4">
          <span className="block overflow-hidden">
            {firstName.split("").map((char, i) => (
              <motion.span
                key={`f-${i}`}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="hero-surname block overflow-hidden text-gradient">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={`l-${i}`}
                custom={i + firstName.length}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-secondary-foreground text-base md:text-lg max-w-xl mx-auto mb-10 font-body leading-relaxed"
        >
          Building intelligent, human-centered digital experiences with clean code and bold ideas.
          AI Engineer & Software Developer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#experience"
            className="group relative bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_var(--color-primary)]"
          >
            <span className="relative z-10">Explore My Work</span>
          </a>
          <a
            href="#contact"
            className="glass-card px-8 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide text-foreground hover:border-primary/40 transition-colors"
          >
            Say Hello →
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-16 z-10 max-w-[calc(100%-2rem)]">
        <SeasonPicker />
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-foreground/70 hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
