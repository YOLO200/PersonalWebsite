"use client";

import { useEffect, useState } from "react";
import LiquidEther from "./LiquidEther";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
        <div className="space-y-4">
          <p
            className={`text-primary font-mono text-sm sm:text-base transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hi, my name is
          </p>
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-balance text-white transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Yashvi Jasani
          </h1>
        </div>
      </div>
    </section>
  );
}
