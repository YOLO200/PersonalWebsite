"use client";

import { useCallback, useSyncExternalStore } from "react";
import { isSeason, SEASON_STORAGE_KEY, type Season } from "./types";

/*
 * The source of truth is <html data-season>, set before first paint by the inline
 * script in app/layout.tsx (saved choice, else the current real-world season).
 *
 * useSyncExternalStore lets React hydrate with the same value the static HTML was
 * prerendered with ("autumn", see SERVER_SEASON) and then immediately switch to the
 * visitor's season — no hydration mismatch, and CSS-driven pieces (palette, hero
 * scenery) are already correct before React even loads.
 */

const SERVER_SEASON: Season = "autumn";
const listeners = new Set<() => void>();

function getSnapshot(): Season {
  const value = document.documentElement.getAttribute("data-season");
  return isSeason(value) ? value : SERVER_SEASON;
}

function getServerSnapshot(): Season {
  return SERVER_SEASON;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function applySeason(next: Season) {
  // Set the attribute first so anything reading CSS tokens (e.g. particle colors)
  // in effects triggered by this change sees the new palette.
  document.documentElement.setAttribute("data-season", next);
  try {
    localStorage.setItem(SEASON_STORAGE_KEY, next);
  } catch {
    // storage unavailable (private mode etc.) — theme still applies for this visit
  }
  listeners.forEach(listener => listener());
}

export function useSeason() {
  const season = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setSeason = useCallback((next: Season) => applySeason(next), []);
  return { season, setSeason };
}
