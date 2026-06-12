import { useScrollReveal } from "./useScrollReveal";
import { Github, ExternalLink, ShoppingCart, LayoutDashboard, Briefcase } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Store Application",
    description:
      "Developed a responsive e-commerce platform with dynamic product rendering and category-based filtering. Implemented shopping cart and wishlist functionality using Local Storage. Integrated REST APIs to fetch real-time product data. Optimized performance through lazy loading and efficient DOM manipulation.",
    techs: ["HTML5", "CSS3", "JavaScript", "REST API"],
    icon: ShoppingCart,
    accentColor: "#0f3460",
    gradientFrom: "#0f3460",
    gradientTo: "#1a6bbd",
    image: "https://imgdb.in/i/e7cQRVfKo0.jpg",
    github: "https://github.com/sanjithreddy11-ui",
    demo: "#",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Built a productivity dashboard with drag-and-drop task organization and progress tracking. Developed reusable React components using hooks and state management. Implemented task persistence using Local Storage. Improved UI responsiveness through optimized component rendering.",
    techs: ["React.js", "CSS3", "JavaScript"],
    icon: LayoutDashboard,
    accentColor: "#1a6bbd",
    gradientFrom: "#1a6bbd",
    gradientTo: "#4a9eda",
    image: "https://imgdb.in/i/e7ckSmCoG4.jpg",
    github: "https://github.com/sanjithreddy11-ui",
    demo: "#",
  },
  {
    title: "Job Portal Application",
    description:
      "Developed a modern and responsive job portal application that enables users to search, filter, and explore job opportunities through an intuitive UI. Implemented advanced filtering by job title, location, category, and experience level. Integrated REST APIs to dynamically fetch real-time job listings. Designed with reusable React components and optimized state management for enhanced performance across all devices.",
    techs: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API", "Responsive Design"],
    icon: Briefcase,
    accentColor: "#0a4080",
    gradientFrom: "#0a4080",
    gradientTo: "#1a6bbd",
    image: "https://imgdb.in/i/e7caZ7ogOk.jpg",
    github: "https://github.com/sanjithreddy11-ui",
    demo: "#",
  },
];

export function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 / Projects
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            Featured <span style={{ color: "var(--accent)" }}>Work</span>
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
            }}
          >
            A selection of projects that showcase my skills in building modern, responsive
            web applications.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      className="group rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className={`grid ${index % 2 === 0 ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"}`}>
        {/* Image */}
        <div
          className={`relative overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}
          style={{ minHeight: "260px", background: project.gradientFrom }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            style={{ minHeight: "260px", opacity: 0.92 }}
          />
          {/* Subtle gradient overlay — only at edges so the image stays visible */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${project.gradientFrom}55 0%, transparent 40%, transparent 60%, ${project.gradientFrom}33 100%)`,
              pointerEvents: "none",
            }}
          />
          {/* Bottom caption bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
            style={{
              background: `linear-gradient(to top, ${project.gradientFrom}ee 0%, transparent 100%)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}
              >
                <Icon size={18} color="#fff" />
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {project.title}
              </span>
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(0,0,0,0.35)",
                color: "#fff",
                fontFamily: "'JetBrains Mono', monospace",
                backdropFilter: "blur(4px)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`p-8 lg:p-10 flex flex-col justify-between ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 700,
                color: "var(--foreground)",
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold border"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    borderColor: "var(--border)",
                    color: "var(--accent)",
                    background: "var(--secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:scale-105 hover:shadow-md"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: "var(--border)",
                color: "var(--foreground)",
                background: "var(--card)",
              }}
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-md"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
