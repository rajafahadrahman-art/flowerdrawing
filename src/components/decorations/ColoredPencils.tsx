type DecorationProps = {
  className?: string;
};

export function ColoredPencils({ className = "" }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="96"
      height="56"
      viewBox="0 0 96 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="rotate(-18 24 28)">
        <rect x="8" y="18" width="40" height="10" rx="2" fill="#75C9F5" />
        <polygon points="48,18 60,23 48,28" fill="#202124" />
        <rect x="8" y="18" width="8" height="10" rx="1" fill="#FFF5C7" />
      </g>
      <g transform="rotate(8 48 30)">
        <rect x="28" y="24" width="42" height="10" rx="2" fill="#F38C7A" />
        <polygon points="70,24 82,29 70,34" fill="#202124" />
        <rect x="28" y="24" width="8" height="10" rx="1" fill="#FFE3DD" />
      </g>
      <g transform="rotate(22 62 34)">
        <rect x="36" y="30" width="38" height="9" rx="2" fill="#8CCFA0" />
        <polygon points="74,30 86,34.5 74,39" fill="#202124" />
        <rect x="36" y="30" width="7" height="9" rx="1" fill="#E3F5E8" />
      </g>
    </svg>
  );
}
