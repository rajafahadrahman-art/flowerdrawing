type DecorationProps = {
  className?: string;
};

export function FlowerDoodle({ className = "" }: DecorationProps) {
  return (
    <svg
      className={`decoration-layer ${className}`.trim()}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="6" fill="#F5CF58" stroke="#8B6812" strokeWidth="1.5" />
      <path
        d="M32 12c6 6 6 14 0 20-6-6-6-14 0-20z"
        fill="#FFE3DD"
        stroke="#A94D40"
        strokeWidth="1.4"
      />
      <path
        d="M52 32c-6 6-14 6-20 0 6-6 14-6 20 0z"
        fill="#E5F4FF"
        stroke="#247EAA"
        strokeWidth="1.4"
      />
      <path
        d="M32 52c-6-6-6-14 0-20 6 6 6 14 0 20z"
        fill="#E3F5E8"
        stroke="#356F46"
        strokeWidth="1.4"
      />
      <path
        d="M12 32c6-6 14-6 20 0-6 6-14 6-20 0z"
        fill="#EEE8FF"
        stroke="#625095"
        strokeWidth="1.4"
      />
    </svg>
  );
}
