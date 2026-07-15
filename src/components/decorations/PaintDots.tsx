type DecorationProps = {
  className?: string;
};

export function PaintDots({ className = "" }: DecorationProps) {
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
    >
      <circle cx="8" cy="14" r="5" fill="#75C9F5" opacity="0.9" />
      <circle cx="26" cy="10" r="4" fill="#F5CF58" opacity="0.9" />
      <circle cx="42" cy="16" r="4.5" fill="#F38C7A" opacity="0.9" />
      <circle cx="58" cy="11" r="3.5" fill="#8CCFA0" opacity="0.9" />
      <circle cx="68" cy="18" r="2.5" fill="#B9A7EA" opacity="0.9" />
    </svg>
  );
}
