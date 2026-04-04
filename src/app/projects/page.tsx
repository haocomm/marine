import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "blog.ipptt.com",
    description:
      "Personal/Tech Blog -- บล็อกส่วนตัวสำหรับบทความเทคโนโลยี สร้างด้วย Next.js 16 + MDX รองรับ dark/light mode, search, RSS feed, categories, tags",
    techStack: ["Next.js 16", "Tailwind CSS 4", "MDX", "Vercel"],
    github: "https://github.com/haocomm/blog-ipptt",
    liveUrl: "https://blog.ipptt.com",
    status: "completed" as const,
    highlights: [
      "7 blog posts จาก retrospective sessions",
      "Client-side search (Cmd+K)",
      "RSS 2.0 feed + Share buttons",
      "Related posts + Table of Contents",
      "39 static pages",
    ],
  },
  {
    name: "haocomcloud.com",
    description:
      "Landing page สำหรับ Haocomm Cloud -- แนะนำ services, capabilities, workflow และ deployed systems สร้างด้วย Next.js 16 + Tailwind CSS",
    techStack: ["Next.js 16", "Tailwind CSS 4", "Lucide React", "Vercel"],
    github: "https://github.com/haocomm/haocomcloud.com",
    liveUrl: "https://haocomcloud.com",
    status: "completed" as const,
    highlights: [
      "10 sections: Hero, Capabilities, Workflow, Dashboard",
      "Navy/cyan theme matching marine.ipptt.com",
      "Responsive design + animations",
    ],
  },
  {
    name: "marine.ipptt.com",
    description:
      "เว็บแนะนำ Team Marine -- ทีม AI agents 5 ตัว ที่ทำงานร่วมกันเป็นทีมพัฒนาซอฟต์แวร์ สร้างด้วย Next.js 16 + Tailwind CSS",
    techStack: ["Next.js 16", "Tailwind CSS 4", "TypeScript", "Vercel"],
    github: "https://github.com/haocomm/marine",
    liveUrl: "https://marine.ipptt.com",
    status: "completed" as const,
    highlights: [
      "Team member showcase with SVG avatars",
      "Philosophy and workflow documentation",
      "Project portfolio page",
      "Navy/cyan theme design",
    ],
  },
  {
    name: "fongkhumfarm-v2",
    description:
      "เว็บไซต์ฟองคำฟาร์ม -- ฟาร์มผลิตปุ๋ยมูลไส้เดือน จ.เชียงใหม่ สร้างด้วย Next.js 15 + Tailwind CSS รองรับ responsive design ครบทุกอุปกรณ์",
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/haocomm/fongkhumfarm-v2",
    liveUrl: "https://fongkhumfarm.com",
    status: "completed" as const,
    highlights: [
      "Blog system สำหรับบทความเกษตร",
      "Thai fonts (Noto Sans Thai)",
      "Responsive design ทุกหน้าจอ",
      "14 static pages",
    ],
  },
  {
    name: "oracle.ipptt.com",
    description:
      "Landing page สำหรับ Haocomm-AI Oracle -- ศูนย์กลางที่เชื่อมทุกงาน ทุกความคิด ทุกคน แสดง 5 Principles, Team Marine, Projects และ About",
    techStack: ["Next.js 16", "Tailwind CSS 4", "TypeScript", "Vercel"],
    github: "https://github.com/haocomm/oracle-ipptt",
    liveUrl: "https://oracle.ipptt.com",
    status: "completed" as const,
    highlights: [
      "11 components (Hero, Principles, TeamMarine, Projects, About)",
      "Purple/emerald/gold theme + glassmorphism",
      "5 Principles of Oracle แสดง interactive",
    ],
  },
  {
    name: "oracle-v3.ipptt.com",
    description:
      "Arra-Oracle v3 — Knowledge search engine ค้นหา retrospective, learnings, resonance จาก haocomm-ai-oracle vault พร้อม oracle-studio UI",
    techStack: ["Bun", "TypeScript", "arra-oracle-v3", "oracle-studio", "nginx"],
    github: "https://github.com/Soul-Brews-Studio/oracle-v3",
    liveUrl: "https://oracle-v3.ipptt.com",
    status: "completed" as const,
    highlights: [
      "166 documents indexed (61 resonance, 28 learnings, 77 retrospectives)",
      "nginx reverse proxy + SSL (certbot)",
      "oracle-studio UI สำหรับ browse/search documents",
      "PM2 process management",
    ],
  },
  {
    name: "haocomm-ai-oracle-instruction",
    description:
      "เอกสาร instruction ครบชุดสำหรับตั้งค่าและใช้งาน Haocomm-AI Oracle — ตั้งแต่ Claude Code, Oracle Agent, marine team, vault structure จนถึง deployment",
    techStack: ["Markdown", "GitHub"],
    github: "https://github.com/haocomm/haocomm-ai-oracle-instruction",
    status: "completed" as const,
    highlights: [
      "9 ไฟล์ instruction (README + 01-08)",
      "1,369 บรรทัด documentation",
      "ครอบคลุม setup, workflow, skills, และ deployment",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative pt-32 pb-16 px-4 gradient-bg grid-pattern">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-float" />
          <div className="max-w-6xl mx-auto relative">
            <span className="text-cyan-400 font-mono text-sm mb-4 block">
              // projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Work
            </h1>
            <p className="text-navy-200 max-w-2xl text-lg">
              Projects ที่ Team Marine สร้างและดูแล -- ตั้งแต่เว็บไซต์ธุรกิจจนถึงเครื่องมือภายใน
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>

            {/* Stats bar */}
            <div className="mt-16 p-6 rounded-xl bg-navy-900/30 border border-navy-700/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 font-mono">{projects.length}</div>
                  <div className="text-sm text-navy-400 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400 font-mono">
                    {projects.filter((p) => p.status === "completed").length}
                  </div>
                  <div className="text-sm text-navy-400 mt-1">Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 font-mono">
                    {projects.filter((p) => p.status !== "completed").length}
                  </div>
                  <div className="text-sm text-navy-400 mt-1">In Progress</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 font-mono">5</div>
                  <div className="text-sm text-navy-400 mt-1">Agents</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
