interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  liveUrl?: string;
  status: "completed" | "in-progress";
  highlights?: string[];
}

export default function ProjectCard({
  name,
  description,
  techStack,
  github,
  liveUrl,
  status,
  highlights,
}: ProjectProps) {
  return (
    <div className="relative p-6 rounded-xl bg-navy-900/50 border border-navy-700/50 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300 group">
      {/* Status badge */}
      <div className="absolute top-4 right-4">
        <span
          className={`px-2.5 py-1 text-xs font-mono rounded ${
            status === "completed"
              ? "bg-teal-400/10 text-teal-400 border border-teal-400/20"
              : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
          }`}
        >
          {status === "completed" ? "COMPLETED" : "IN PROGRESS"}
        </span>
      </div>

      {/* Project icon */}
      <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400/20 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {name}
      </h3>

      {/* Description */}
      <p className="text-navy-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <ul className="mb-4 space-y-1">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-navy-300">
              <span className="text-cyan-400 mt-0.5 shrink-0">-</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono rounded-md bg-navy-800/80 text-navy-300 border border-navy-700/50 group-hover:border-navy-600/50 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Live
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
