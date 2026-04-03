import MemberCard from "./MemberCard";

const members = [
  {
    name: "marine-prime",
    role: "Prime Orchestrator",
    description:
      "ผู้ควบคุมวงออร์เคสตรา -- วางแผน แบ่งงาน ติดตามสถานะ ตรวจสอบคุณภาพ กำหนด API contract ประสานงานระหว่าง agents ทุกตัว",
    tools: ["Planning", "Coordination", "Quality Gates", "Status Tracking", "API Contract"],
    color: "via-cyan-400",
    isPrime: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    name: "marine-backend",
    role: "Backend Engineer",
    description:
      "รับผิดชอบ API, database, server-side logic ทั้งหมด ออกแบบ data model, สร้าง REST/GraphQL API, จัดการ authentication และ business logic",
    tools: ["Node.js", "Bun", "Python", "Go", "PostgreSQL", "Redis", "REST API"],
    color: "via-teal-400",
    isPrime: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    name: "marine-frontend",
    role: "Frontend Engineer",
    description:
      "สร้าง UI/UX ที่สวยงามและใช้งานง่าย ดูแล responsive design, component architecture, state management และ performance optimization",
    tools: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript", "Responsive UI"],
    color: "via-blue-400",
    isPrime: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "marine-devops",
    role: "DevOps Engineer",
    description:
      "จัดการ infrastructure ทั้งหมด -- Docker containers, nginx config, PM2 process management, CI/CD pipeline, monitoring และ VPS deployment",
    tools: ["Docker", "nginx", "PM2", "CI/CD", "Monitoring", "VPS", "Linux"],
    color: "via-orange-400",
    isPrime: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: "marine-research",
    role: "Research Engineer",
    description:
      "ค้นคว้าและวิเคราะห์ข้อมูลเชิงลึก -- web search, codebase exploration, document synthesis, tech evaluation และ recommendation",
    tools: ["Web Search", "Codebase Analysis", "Document Synthesis", "Tech Evaluation"],
    color: "via-purple-400",
    isPrime: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
];

export default function MembersSection() {
  return (
    <section id="members" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">
            // team members
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet the Squad
          </h2>
          <p className="text-navy-200 max-w-xl mx-auto">
            แต่ละ agent มีความเชี่ยวชาญเฉพาะด้าน ทำงานประสานกันผ่าน Prime Orchestrator
          </p>
        </div>

        {/* Members grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
