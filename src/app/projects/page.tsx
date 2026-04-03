import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "fongkhumfarm-v2",
    description:
      "เว็บไซต์ฟองคำฟาร์ม -- ฟาร์มผลิตปุ๋ยมูลไส้เดือน จ.เชียงใหม่ สร้างด้วย Next.js 15 + Tailwind CSS รองรับ responsive design ครบทุกอุปกรณ์",
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Static Export"],
    github: "https://github.com/haocomm/fongkhumfarm-v2",
    status: "completed" as const,
    highlights: [
      "Blog system สำหรับบทความเกษตร",
      "Thai fonts (Noto Sans Thai)",
      "Responsive design ทุกหน้าจอ",
      "14 static pages",
    ],
  },
  {
    name: "marine",
    description:
      "เว็บแนะนำ Team Marine -- ทีม AI agents 5 ตัว ที่ทำงานร่วมกันเป็นทีมพัฒนาซอฟต์แวร์ สร้างด้วย Next.js 15 + Tailwind CSS",
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/haocomm/marine",
    status: "in-progress" as const,
    highlights: [
      "Team member showcase with SVG avatars",
      "Philosophy and workflow documentation",
      "Project portfolio page",
      "Navy/cyan theme design",
    ],
  },
  {
    name: "haocomcloud.com",
    description:
      "Haocomcloud Landing Page -- AI-powered platform infrastructure landing page สำหรับ 6 ระบบ production (cybersecurity, monitoring, automation ฯลฯ) สร้างด้วย Next.js 16 + Tailwind 4",
    techStack: [
      "Next.js 16",
      "Tailwind CSS 4",
      "TypeScript",
      "Lucide React",
      "Vercel",
    ],
    github: "https://github.com/haocomm/haocomcloud.com",
    status: "completed" as const,
    highlights: [
      "10 section landing page (Hero, Capabilities, Workflow, Dashboard, Trust, Deployed Systems)",
      "Glass morphism design with purple/cyan gradient theme",
      "Scroll-triggered animations",
      "Deployed on Vercel (static export)",
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
                    {projects.filter((p) => p.status === "in-progress").length}
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
