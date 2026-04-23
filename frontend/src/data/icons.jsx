export function ServiceIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "service-icon-svg"
  };

  const stroke = "#bb8a3c";
  const soft = "#183553";

  const icons = {
    cloud: (
      <svg {...commonProps}>
        <rect x="8" y="20" width="48" height="28" rx="14" stroke={soft} strokeWidth="2" />
        <path d="M22 36h20" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <path
          d="M24 27a8 8 0 0 1 15-2 7 7 0 1 1 2 14H23a6 6 0 0 1 1-12Z"
          stroke={stroke}
          strokeWidth="2"
        />
      </svg>
    ),
    grid: (
      <svg {...commonProps}>
        <rect x="10" y="10" width="18" height="18" rx="4" stroke={stroke} strokeWidth="2.5" />
        <rect x="36" y="10" width="18" height="18" rx="4" stroke={soft} strokeWidth="2.5" />
        <rect x="10" y="36" width="18" height="18" rx="4" stroke={soft} strokeWidth="2.5" />
        <rect x="36" y="36" width="18" height="18" rx="4" stroke={stroke} strokeWidth="2.5" />
      </svg>
    ),
    spark: (
      <svg {...commonProps}>
        <path
          d="M31 10l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z"
          stroke={stroke}
          strokeWidth="2.5"
        />
        <circle cx="47" cy="47" r="7" stroke={soft} strokeWidth="2.5" />
      </svg>
    ),
    people: (
      <svg {...commonProps}>
        <circle cx="23" cy="24" r="8" stroke={stroke} strokeWidth="2.5" />
        <circle cx="42" cy="22" r="6" stroke={soft} strokeWidth="2.5" />
        <path
          d="M14 47c2-7 7-11 13-11s11 4 13 11"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M35 46c1-4 4-7 9-8" stroke={soft} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path
          d="M32 10l16 6v13c0 11-7 19-16 25-9-6-16-14-16-25V16l16-6Z"
          stroke={soft}
          strokeWidth="2.5"
        />
        <path
          d="M24 31l5 5 11-12"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    network: (
      <svg {...commonProps}>
        <circle cx="16" cy="32" r="6" stroke={stroke} strokeWidth="2.5" />
        <circle cx="48" cy="16" r="6" stroke={soft} strokeWidth="2.5" />
        <circle cx="48" cy="48" r="6" stroke={soft} strokeWidth="2.5" />
        <path d="M22 29l20-10M22 35l20 10" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    route: (
      <svg {...commonProps}>
        <path
          d="M16 48c0-10 10-10 10-20s-10-10-10-20"
          stroke={soft}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="48" r="5" fill={stroke} />
        <circle cx="16" cy="8" r="5" fill={soft} />
        <rect x="36" y="20" width="16" height="24" rx="5" stroke={stroke} strokeWidth="2.5" />
      </svg>
    )
  };

  return icons[type] || icons.grid;
}
