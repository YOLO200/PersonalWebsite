"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-1/2 h-full line-pattern opacity-20" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full blur-[100px]"
        style={{ backgroundColor: "color-mix(in oklch, var(--color-primary) 5%, transparent)" }}
        animate={{ y: [-10, 20, -10], x: [-5, 10, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: "color-mix(in oklch, var(--color-accent) 5%, transparent)" }}
        animate={{ y: [10, -20, 10], x: [5, -10, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-xl" />

      <div className="relative z-10 text-center max-w-5xl">
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

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-4">
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
          <span className="block overflow-hidden text-gradient">
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
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 font-body leading-relaxed"
        >
          Building intelligent, human-centered digital experiences with clean code and bold ideas.
          AI Engineer & Software Developer @ M S International (MSI).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex gap-4 justify-center"
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

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
