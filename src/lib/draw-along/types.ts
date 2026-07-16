export type DrawingStep = {
  id: number;
  title: string;
  instruction: string;
  image: string;
  alt: string;
  tip?: string;
  durationSeconds?: number;
};

export type DrawingTutorial = {
  slug: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  featuredImage: string;
  featuredImageAlt: string;
  articleUrl: string;
  worksheetUrl?: string;
  musicUrl?: string;
  steps: DrawingStep[];
};

export type AutoplaySpeed = "slow" | "normal" | "fast";

export type PlaybackMode = "manual" | "auto";

export const AUTOPLAY_SPEED_MULTIPLIER: Record<AutoplaySpeed, number> = {
  slow: 1.5,
  normal: 1,
  fast: 0.6,
};

export const DEFAULT_STEP_DURATION_SECONDS = 12;

export const DRAW_ALONG_MUSIC_PATH = "/audio/calm-drawing.mp3";

export const DRAW_ALONG_AUDIO_STORAGE_KEY = "flowerdrawings-draw-along-audio";
