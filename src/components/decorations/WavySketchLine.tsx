type DecorationProps = {
  className?: string;
  color?: string;
};

export function WavySketchLine({ className = "", color = "#B9A7EA" }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="180"
      height="24"
      viewBox="0 0 180 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 12c14-8 28 8 42 0s28 8 42 0 28 8 42 0 28 8 42 0"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
