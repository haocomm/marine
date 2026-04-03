export default function About() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Coordinated Execution",
      description:
        "ทุก agent ทำงานประสานกัน -- backend, frontend, devops ขนานกัน ลด bottleneck",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Quality Gates",
      description:
        "ก่อน deliver ทุกงานต้องผ่าน quality check -- tests, review, integration test",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Iterative Process",
      description:
        "Plan first, execute, review, improve -- วนซ้ำจนได้ผลลัพธ์ที่ดีที่สุด",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">
            // about us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What is Team Marine?
          </h2>
          <p className="text-navy-200 max-w-2xl mx-auto text-lg">
            Team Marine คือทีม AI agents 5 ตัว ที่ทำงานร่วมกันเหมือนทีมพัฒนาซอฟต์แวร์จริง
            แต่ละตัวมีความเชี่ยวชาญเฉพาะด้าน ควบคุมโดย Prime Orchestrator
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-navy-900/50 border border-navy-700/50 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow diagram */}
        <div className="mt-16 p-8 rounded-xl bg-navy-900/30 border border-navy-700/30">
          <h3 className="text-center text-lg font-semibold text-white mb-8">
            Orchestration Flow
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="px-6 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white font-mono text-sm">
              Human Request
            </div>
            <div className="w-px h-6 bg-cyan-400/40" />
            <div className="px-6 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-mono text-sm">
              Marine Prime (Plan + Coordinate)
            </div>
            <div className="w-px h-6 bg-cyan-400/40" />
            <div className="flex flex-wrap justify-center gap-3">
              {["Backend", "Frontend", "DevOps", "Research", "Security"].map((agent) => (
                <div
                  key={agent}
                  className="px-4 py-2 rounded-lg bg-navy-800/80 border border-navy-600/50 text-navy-200 font-mono text-xs"
                >
                  {agent}
                </div>
              ))}
            </div>
            <div className="w-px h-6 bg-cyan-400/40" />
            <div className="px-6 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-mono text-sm">
              Marine Prime (Review + Deliver)
            </div>
            <div className="w-px h-6 bg-cyan-400/40" />
            <div className="px-6 py-3 rounded-lg bg-teal-400/10 border border-teal-400/30 text-teal-400 font-mono text-sm">
              Delivered to Human
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
