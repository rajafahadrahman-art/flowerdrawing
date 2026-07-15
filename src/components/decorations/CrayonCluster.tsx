type DecorationProps = {
  className?: string;
};

export function CrayonCluster({ className = "" }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="88"
      height="42"
      viewBox="0 0 88 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="6" y="10" width="18" height="24" rx="4" fill="#F5CF58" transform="rotate(-12 15 22)" />
      <rect x="28" y="8" width="18" height="26" rx="4" fill="#75C9F5" transform="rotate(4 37 21)" />
      <rect x="50" y="10" width="18" height="24" rx="4" fill="#B9A7EA" transform="rotate(14 59 22)" />
      <rect x="68" y="14" width="14" height="18" rx="3" fill="#F38C7A" transform="rotate(-8 75 23)" />
      <path d="M10 34c8 4 18 4 26 0" stroke="#8B6812" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
