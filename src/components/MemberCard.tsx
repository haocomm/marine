interface MemberProps {
  name: string;
  role: string;
  description: string;
  tools: string[];
  color: string;
  icon: React.ReactNode;
  isPrime?: boolean;
}

export default function MemberCard({
  name,
  role,
  description,
  tools,
  color,
  icon,
  isPrime,
}: MemberProps) {
  return (
    <div
      className={`relative p-6 rounded-xl border transition-all duration-300 group hover:-translate-y-1 ${
        isPrime
          ? "bg-gradient-to-br from-navy-900/80 to-cyan-400/5 border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10 col-span-1 md:col-span-2 lg:col-span-1"
          : "bg-navy-900/50 border-navy-700/50 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/5"
      }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      {/* Icon + Name */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg shrink-0 ${
            isPrime
              ? "bg-cyan-400/20 text-cyan-400"
              : "bg-navy-800 text-navy-300 group-hover:text-cyan-400 transition-colors"
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <p className={`text-sm font-mono ${isPrime ? "text-cyan-400/80" : "text-navy-400"}`}>
            {role}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-navy-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-1 text-xs font-mono rounded-md bg-navy-800/80 text-navy-300 border border-navy-700/50 group-hover:border-navy-600/50 transition-colors"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Prime badge */}
      {isPrime && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-mono rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
            LEAD
          </span>
        </div>
      )}
    </div>
  );
}
