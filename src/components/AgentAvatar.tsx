interface AvatarProps {
  agent: "marine-prime" | "marine-backend" | "marine-frontend" | "marine-devops" | "marine-research";
  size?: number;
  className?: string;
}

export default function AgentAvatar({ agent, size = 48, className = "" }: AvatarProps) {
  const avatars: Record<string, React.ReactNode> = {
    "marine-prime": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="#0a192f" stroke="#22d3ee" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="url(#prime-grad)" opacity="0.3" />
        {/* Star / crown symbol */}
        <path d="M60 22L68 44H90L72 56L78 78L60 64L42 78L48 56L30 44H52L60 22Z" fill="#22d3ee" opacity="0.9" />
        {/* Inner circle */}
        <circle cx="60" cy="52" r="8" fill="#060f1d" stroke="#22d3ee" strokeWidth="1.5" />
        {/* Signal waves */}
        <path d="M40 85C40 85 48 78 60 78C72 78 80 85 80 85" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M46 92C46 92 52 86 60 86C68 86 74 92 74 92" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <defs>
          <radialGradient id="prime-grad" cx="60" cy="60" r="50">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#060f1d" />
          </radialGradient>
        </defs>
      </svg>
    ),
    "marine-backend": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="#0a192f" stroke="#2dd4bf" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="url(#backend-grad)" opacity="0.2" />
        {/* Server rack */}
        <rect x="35" y="28" width="50" height="18" rx="3" fill="#1d3674" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="35" y="51" width="50" height="18" rx="3" fill="#1d3674" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="35" y="74" width="50" height="18" rx="3" fill="#1d3674" stroke="#2dd4bf" strokeWidth="1.5" />
        {/* LED dots */}
        <circle cx="44" cy="37" r="3" fill="#2dd4bf" />
        <circle cx="54" cy="37" r="3" fill="#2dd4bf" opacity="0.5" />
        <circle cx="44" cy="60" r="3" fill="#2dd4bf" />
        <circle cx="54" cy="60" r="3" fill="#22d3ee" opacity="0.5" />
        <circle cx="44" cy="83" r="3" fill="#2dd4bf" />
        <circle cx="54" cy="83" r="3" fill="#2dd4bf" opacity="0.5" />
        {/* Lines */}
        <line x1="68" y1="37" x2="78" y2="37" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.4" />
        <line x1="68" y1="60" x2="78" y2="60" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.4" />
        <line x1="68" y1="83" x2="78" y2="83" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.4" />
        <defs>
          <radialGradient id="backend-grad" cx="60" cy="60" r="50">
            <stop stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#060f1d" />
          </radialGradient>
        </defs>
      </svg>
    ),
    "marine-frontend": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="#0a192f" stroke="#60a5fa" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="url(#frontend-grad)" opacity="0.2" />
        {/* Browser window */}
        <rect x="28" y="30" width="64" height="56" rx="4" fill="#1d3674" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Title bar */}
        <rect x="28" y="30" width="64" height="12" rx="4" fill="#233f7e" />
        <circle cx="38" cy="36" r="2.5" fill="#ef4444" opacity="0.7" />
        <circle cx="47" cy="36" r="2.5" fill="#eab308" opacity="0.7" />
        <circle cx="56" cy="36" r="2.5" fill="#22c55e" opacity="0.7" />
        {/* Code brackets */}
        <text x="40" y="62" fill="#60a5fa" fontSize="14" fontFamily="monospace" opacity="0.9">&lt;/&gt;</text>
        {/* Layout lines */}
        <rect x="36" y="70" width="20" height="3" rx="1" fill="#60a5fa" opacity="0.4" />
        <rect x="36" y="76" width="32" height="3" rx="1" fill="#60a5fa" opacity="0.3" />
        <defs>
          <radialGradient id="frontend-grad" cx="60" cy="60" r="50">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#060f1d" />
          </radialGradient>
        </defs>
      </svg>
    ),
    "marine-devops": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="#0a192f" stroke="#fb923c" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="url(#devops-grad)" opacity="0.2" />
        {/* Infinity / DevOps loop */}
        <path d="M38 60C38 50 46 44 54 44C62 44 66 50 60 60C54 70 58 76 66 76C74 76 82 70 82 60C82 50 74 44 66 44C58 44 54 50 60 60C66 70 62 76 54 76C46 76 38 70 38 60Z" stroke="#fb923c" strokeWidth="2.5" fill="none" />
        {/* Gear on left */}
        <circle cx="44" cy="60" r="6" fill="#1d3674" stroke="#fb923c" strokeWidth="1.5" />
        <circle cx="44" cy="60" r="2.5" fill="#fb923c" />
        {/* Gear on right */}
        <circle cx="76" cy="60" r="6" fill="#1d3674" stroke="#fb923c" strokeWidth="1.5" />
        <circle cx="76" cy="60" r="2.5" fill="#fb923c" />
        {/* Arrows */}
        <path d="M56 42L60 38L64 42" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M64 78L60 82L56 78" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <defs>
          <radialGradient id="devops-grad" cx="60" cy="60" r="50">
            <stop stopColor="#fb923c" />
            <stop offset="1" stopColor="#060f1d" />
          </radialGradient>
        </defs>
      </svg>
    ),
    "marine-research": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="#0a192f" stroke="#a78bfa" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="url(#research-grad)" opacity="0.2" />
        {/* Magnifying glass */}
        <circle cx="52" cy="52" r="18" fill="none" stroke="#a78bfa" strokeWidth="2.5" />
        <line x1="65" y1="65" x2="82" y2="82" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
        {/* Sparkles inside lens */}
        <circle cx="46" cy="46" r="2" fill="#a78bfa" opacity="0.6" />
        <circle cx="56" cy="44" r="1.5" fill="#a78bfa" opacity="0.4" />
        <circle cx="48" cy="56" r="1.5" fill="#a78bfa" opacity="0.5" />
        {/* Data dots */}
        <circle cx="52" cy="52" r="4" fill="#a78bfa" opacity="0.15" />
        <path d="M44 50L50 46L56 52L62 48" stroke="#a78bfa" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <defs>
          <radialGradient id="research-grad" cx="60" cy="60" r="50">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#060f1d" />
          </radialGradient>
        </defs>
      </svg>
    ),
  };

  return (
    <div className={`shrink-0 ${className}`}>
      {avatars[agent]}
    </div>
  );
}
