export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg grid-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-mono">
            AI Agent Squad
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="text-white">Team</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Marine
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-navy-200 max-w-2xl mx-auto mb-4 leading-relaxed">
          5 AI Agents ทำงานร่วมกันเป็นทีมพัฒนาซอฟต์แวร์
        </p>
        <p className="text-base text-navy-300 max-w-xl mx-auto mb-12">
          Backend / Frontend / DevOps / Research / Orchestrator
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#members"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-cyan-400 text-navy-950 font-semibold rounded-lg hover:bg-cyan-300 transition-all hover:shadow-lg hover:shadow-cyan-400/25"
          >
            Meet the Team
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-navy-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
