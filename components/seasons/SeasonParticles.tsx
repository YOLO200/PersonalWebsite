"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useSeason } from "./season-context";
import type { Season } from "./types";
import { advanceLeafY, advanceSummerY, leafX, leafScreenY } from "./leafMotion";

const SPRITES: Partial<Record<Season, string>> = {
  autumn: "/seasons/autumn-maple-leaf.png",
  winter: "/seasons/winter-snowflake.png",
  spring: "/seasons/spring-cherry-petal.png",
};

const SPRITE_SIZE = 128;

/**
 * Downsizes a sprite onto an offscreen canvas and keys out its flat background
 * (white behind the leaf, green behind the petal, black behind the snowflake).
 * Pixels that are already transparent stay transparent.
 */
function keySprite(image: HTMLImageElement, season: Season): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = SPRITE_SIZE;
  canvas.height = SPRITE_SIZE;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return canvas;
  context.drawImage(image, 0, 0, SPRITE_SIZE, SPRITE_SIZE);
  const pixels = context.getImageData(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  const data = pixels.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    let keep = 1;
    if (season === "autumn") {
      // near-white background → transparent, soft edge between 215 and 245
      const low = Math.min(r, g, b);
      keep = Math.min(1, Math.max(0, (245 - low) / 30));
    } else if (season === "spring") {
      // green-screen: how much green dominates red/blue
      const dominance = g - Math.max(r, b);
      keep = Math.min(1, Math.max(0, (60 - dominance) / 40));
    } else if (season === "winter") {
      // black background: brightness becomes opacity
      keep = Math.min(1, Math.max(r, g, b) / 200);
      keep *= keep;
    }
    data[i + 3] = Math.round(data[i + 3] * keep);
  }
  context.putImageData(pixels, 0, 0);
  return canvas;
}

export default function SeasonParticles({ pageWide = false }: { pageWide?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const { season } = useSeason();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    // During hydration React renders once with the prerendered season before switching
    // to the visitor's; skip that pass so we don't start (and download) the wrong sprite.
    if (canvas && document.documentElement.getAttribute("data-season") !== season) return;
    if (!canvas || !context || reducedMotion) {
      context?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
      return;
    }
    let width = 0;
    let height = 0;
    let fallingHeight = 0;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    const styles = getComputedStyle(canvas);
    const tones = ["--particle", "--particle-secondary"].map(token => styles.getPropertyValue(token).trim());
    // Summer motes: pre-render one soft glow per tone, then just stamp it each frame.
    const glows = new Map<string, HTMLCanvasElement>();
    if (season === "summer") {
      for (const tone of tones) {
        const glowCanvas = document.createElement("canvas");
        glowCanvas.width = glowCanvas.height = 64;
        const glowContext = glowCanvas.getContext("2d");
        if (!glowContext) continue;
        const gradient = glowContext.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, `hsl(${tone} / 0.9)`);
        gradient.addColorStop(0.3, `hsl(${tone} / 0.6)`);
        gradient.addColorStop(1, `hsl(${tone} / 0)`);
        glowContext.fillStyle = gradient;
        glowContext.fillRect(0, 0, 64, 64);
        glows.set(tone, glowCanvas);
      }
    }
    const usesSprite = season !== "summer";
    let sprite: HTMLCanvasElement | null = null;
    const spriteSrc = SPRITES[season];
    const particleImage = new Image();
    if (spriteSrc) {
      particleImage.onload = () => { sprite = keySprite(particleImage, season); };
      particleImage.src = spriteSrc;
    }
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      fallingHeight = pageWide ? canvas.parentElement?.scrollHeight ?? height : height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    if (pageWide && canvas.parentElement) observer.observe(canvas.parentElement);
    // Count per 900px of height at desktop width, scaled by screen width so the
    // density per area stays similar: a 390px phone gets ~1/3 of desktop's count.
    const perScreen = season === "winter" ? 48 : season === "summer" ? 40 : 24;
    const widthScale = Math.min(1, Math.max(0.3, width / 1280));
    const count = Math.ceil(perScreen * widthScale * (pageWide ? fallingHeight / 900 : 1));
    const particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width, y: Math.random() * fallingHeight,
      size: season === "autumn" ? 14 + Math.random() * 22 : season === "winter" ? (index % 3 === 0 ? 12 + Math.random() * 12 : 2 + Math.random() * 5) : season === "spring" ? 7 + Math.random() * 10 : index % 4 === 0 ? 10 + Math.random() * 6 : 3 + Math.random() * 3,
      speed: 12 + Math.random() * 24, phase: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2, tone: tones[index % tones.length],
    }));
    let fieldWidth = width;
    let fieldHeight = fallingHeight;
    const render = (time: number) => {
      if (pageWide && (fieldWidth !== width || fieldHeight !== fallingHeight)) {
        for (const particle of particles) {
          particle.x *= width / Math.max(fieldWidth, 1);
          particle.y *= fallingHeight / Math.max(fieldHeight, 1);
        }
        fieldWidth = width;
        fieldHeight = fallingHeight;
      }
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      elapsed += delta;
      context.clearRect(0, 0, width, height);
      const scrollY = pageWide ? window.scrollY : 0;
      for (const particle of particles) {
        const margin = particle.size * 2;
        particle.y = usesSprite
          ? advanceLeafY(particle.y, particle.speed, delta, fallingHeight, margin)
          : advanceSummerY(particle.y, particle.speed, delta, fallingHeight, margin);
        const screenY = pageWide ? leafScreenY(particle.y, scrollY) : particle.y;
        if (screenY < -margin || screenY > height + margin) continue;
        context.save();
        context.translate(leafX(particle.x, elapsed, particle.phase), screenY);
        context.rotate(particle.rotation + elapsed / (season === "winter" ? 9 : 2.4));
        if (usesSprite) {
          context.globalAlpha = season === "winter" ? 0.8 : 0.9;
          if (season === "autumn" || season === "spring") context.scale(0.45 + Math.abs(Math.cos(elapsed / 1.8 + particle.phase)) * 0.55, 1);
          if (sprite) context.drawImage(sprite, -particle.size, -particle.size, particle.size * 2, particle.size * 2);
          context.restore();
          continue;
        }
        const glow = glows.get(particle.tone);
        context.globalAlpha = 0.55 + Math.sin(elapsed * 0.8 + particle.phase) * 0.15;
        if (glow) context.drawImage(glow, -particle.size, -particle.size, particle.size * 2, particle.size * 2);
        context.restore();
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      particleImage.onload = null;
    };
  }, [season, reducedMotion, pageWide]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`season-particles ${pageWide ? "fixed" : "absolute"} inset-0 w-full h-full pointer-events-none`} />;
}
