"use client";

import { Flower2, Sun, Leaf, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSeason } from "./season-context";

const seasons = [
  { value: "spring", label: "Spring", icon: Flower2 },
  { value: "summer", label: "Summer", icon: Sun },
  { value: "autumn", label: "Autumn", icon: Leaf },
  { value: "winter", label: "Winter", icon: Snowflake },
] as const;

export default function SeasonPicker({ compact = false }: { compact?: boolean }) {
  const { season, setSeason } = useSeason();
  return (
    <div
      className={`season-picker flex items-center justify-center gap-1 border border-border/60 bg-background/85 backdrop-blur-md rounded-lg ${compact ? "p-1" : "p-1.5"}`}
      role="group"
      aria-label="Seasonal theme"
    >
      {seasons.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          variant={season === value ? "default" : "ghost"}
          size={compact ? "icon" : "sm"}
          aria-pressed={season === value}
          aria-label={compact ? `${label} theme` : undefined}
          onClick={() => setSeason(value)}
          className={compact ? "size-8" : "gap-2 px-3"}
          title={`${label} theme`}
        >
          <Icon aria-hidden="true" />
          {!compact && <span className="text-xs">{label}</span>}
        </Button>
      ))}
    </div>
  );
}
