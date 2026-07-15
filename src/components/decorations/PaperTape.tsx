type DecorationProps = {
  className?: string;
  rotate?: number;
};

export function PaperTape({ className = "", rotate = -8 }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="72"
      height="28"
      viewBox="0 0 72 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <rect
        x="2"
        y="4"
        width="68"
        height="20"
        rx="2"
        fill="#FFF5C7"
        stroke="#F5CF58"
        strokeWidth="1.5"
        opacity="0.95"
      />
      <path d="M8 8h56M8 20h56" stroke="#F2B278" strokeWidth="1" opacity="0.45" />
    </svg>
  );
}
