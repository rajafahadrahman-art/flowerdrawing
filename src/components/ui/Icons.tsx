type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 8h9M8 3.5 12.5 8 8 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownloadIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 2.5v8M4.5 8 8 11.5 11.5 8M3 13.5h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrintIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4.5 5V2.5h7V5M4.5 11.5H3A1.5 1.5 0 0 1 1.5 10V7A1.5 1.5 0 0 1 3 5.5h10A1.5 1.5 0 0 1 14.5 7v3A1.5 1.5 0 0 1 13 11.5h-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4.5"
        y="9.5"
        width="7"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

type ShapeIconProps = IconProps & {
  name: "shape" | "proportion" | "overlap" | "line" | "texture" | "shadow";
};

const shapePaths: Record<ShapeIconProps["name"], string> = {
  shape: "M8 2.5 13.5 8 8 13.5 2.5 8 8 2.5Z",
  proportion: "M3 13V3h4v10H3Zm6 0V7h4v6H9Z",
  overlap: "M6 4.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm4 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z",
  line: "M3 12.5 13 3.5M5 13.5h6",
  texture: "M3 4h.01M6 4h.01M9 4h.01M12 4h.01M4.5 7h.01M7.5 7h.01M10.5 7h.01M3 10h.01M6 10h.01M9 10h.01M12 10h.01M4.5 13h.01M7.5 13h.01M10.5 13h.01",
  shadow: "M8 2.5a5.5 5.5 0 1 1 0 11V2.5Z",
};

export function ShapeConceptIcon({ name, className = "" }: ShapeIconProps) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={shapePaths[name]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
