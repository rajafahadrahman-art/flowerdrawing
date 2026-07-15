type DecorationProps = {
  className?: string;
  color?: string;
};

export function PencilStroke({ className = "", color = "#F38C7A" }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="140"
      height="14"
      viewBox="0 0 140 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 9c18-6 34 4 52-1 16-4 28 5 46 0 12-3 24-2 38 2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M8 11c20-3 36 2 54-1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
