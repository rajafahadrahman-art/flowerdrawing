import {
  DRAW_ALONG_AUDIO_STORAGE_KEY,
} from "@/lib/draw-along/types";

export type DrawAlongAudioPrefs = {
  volume: number;
  muted: boolean;
};

const DEFAULT_PREFS: DrawAlongAudioPrefs = {
  volume: 0.25,
  muted: false,
};

function clampVolume(value: number): number {
  if (!Number.isFinite(value)) return DEFAULT_PREFS.volume;
  return Math.min(1, Math.max(0, value));
}

export function readAudioPrefs(): DrawAlongAudioPrefs {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return { ...DEFAULT_PREFS };
    }
    const raw = window.localStorage.getItem(DRAW_ALONG_AUDIO_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    const parsed = JSON.parse(raw) as Partial<DrawAlongAudioPrefs>;
    return {
      volume: clampVolume(
        typeof parsed.volume === "number" ? parsed.volume : DEFAULT_PREFS.volume,
      ),
      muted: typeof parsed.muted === "boolean" ? parsed.muted : DEFAULT_PREFS.muted,
    };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export function writeAudioPrefs(prefs: DrawAlongAudioPrefs): void {
  try {
    if (typeof window === "undefined" || !window.localStorage) return;
    window.localStorage.setItem(
      DRAW_ALONG_AUDIO_STORAGE_KEY,
      JSON.stringify({
        volume: clampVolume(prefs.volume),
        muted: Boolean(prefs.muted),
      }),
    );
  } catch {
    // localStorage may be blocked; ignore safely
  }
}
