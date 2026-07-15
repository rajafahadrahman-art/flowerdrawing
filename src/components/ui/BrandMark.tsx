type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showUnderline?: boolean;
  inverted?: boolean;
};

const sizeClass = {
  sm: "text-[0.95rem] sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
} as const;

export function BrandMark({
  className = "",
  size = "md",
  showUnderline = true,
  inverted = false,
}: BrandMarkProps) {
  return (
    <span className={`brand-mark inline-flex flex-col ${sizeClass[size]} ${className}`.trim()}>
      <span>
        <span className={inverted ? "text-paper" : "brand-mark__flower"}>Flower</span>
        <span className={inverted ? "text-coral" : "brand-mark__drawings"}>Drawings</span>
        <span className={inverted ? "text-mint" : "brand-mark__tld"}>.org</span>
      </span>
      {showUnderline ? (
        <svg
          className="decoration-layer mt-0.5 w-[7.5rem]"
          width="120"
          height="8"
          viewBox="0 0 120 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M2 5c18-3 34 2 50-1 16-3 28 3 44 0 8-1 16-1 22 1"
            stroke={inverted ? "#8CCFA0" : "#75C9F5"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M10 6.5c22-2 40 1 58-1"
            stroke={inverted ? "#F5CF58" : "#F38C7A"}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      ) : null}
    </span>
  );
}
