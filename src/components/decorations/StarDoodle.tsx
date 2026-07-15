type DecorationProps = {
  className?: string;
};

export function StarDoodle({ className = "" }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M14 3l2.4 7.2H24l-6 4.4 2.3 7.1L14 17.8 7.7 21.7 10 14.6 4 10.2h7.6L14 3z"
        fill="#F5CF58"
        stroke="#8B6812"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
