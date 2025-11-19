"use client";

import { Card } from "@/components/ui/card";
import { WaveBackground } from "./WaveBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Wave Background */}
      <WaveBackground />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Hi! I am Yashvi Jasani, an AI Engineer and Software Developer who
              loves turning ideas into intelligent, human-centered digital
              experiences. I enjoy building things that combine creativity and
              logic—from crafting responsive front-ends with React and Next.js
              to designing AI-driven systems using OpenAI, Supabase, and AWS.
            </p>
            <p
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              I am currently pursuing my Computer Science degree at Arizona
              State University, where I explore everything from machine learning
              to distributed systems. My focus is on creating scalable,
              meaningful products that make technology feel effortless.
            </p>
          </div>

          <Card
            className={`p-6 space-y-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="font-semibold text-lg">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>
                  Honors Bachelor's in Computer Science @ ASU (Graduating May
                  2026)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>GPA: 3.52/4.0</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>Dean's List (2023, 2024) </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>NAmU Scholarship - $11,500 per year</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
