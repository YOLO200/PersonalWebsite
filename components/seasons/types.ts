export type Season = "spring" | "summer" | "autumn" | "winter";

export const SEASONS: Season[] = ["spring", "summer", "autumn", "winter"];

export const SEASON_STORAGE_KEY = "season";

export function isSeason(value: unknown): value is Season {
  return typeof value === "string" && (SEASONS as string[]).includes(value);
}

/** Northern-hemisphere meteorological seasons. */
export function seasonFromDate(date: Date): Season {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
}

/**
 * Inline script run before paint so the saved/current season palette
 * is applied immediately (no flash of the wrong theme).
 */
export const seasonInitScript = `(function(){try{var s=null;try{s=localStorage.getItem("${SEASON_STORAGE_KEY}")}catch(e){}if(["spring","summer","autumn","winter"].indexOf(s)<0){var m=new Date().getMonth();s=m>=2&&m<=4?"spring":m>=5&&m<=7?"summer":m>=8&&m<=10?"autumn":"winter"}document.documentElement.setAttribute("data-season",s)}catch(e){}})();`;
