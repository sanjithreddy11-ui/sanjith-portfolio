import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    color: "#0f3460",
    skills: [
      { name: "HTML5", level: 90, icon: "🌐" },
      { name: "CSS3", level: 88, icon: "🎨" },
      { name: "JavaScript (ES6+)", level: 82, icon: "⚡" },
      { name: "React.js", level: 78, icon: "⚛️" },
    ],
  },
  {
    title: "Styling & Layout",
    color: "#1a6bbd",
    skills: [
      { name: "Flexbox", level: 92, icon: "📐" },
      { name: "CSS Grid", level: 85, icon: "🔲" },
      { name: "Responsive Design", level: 88, icon: "📱" },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "#0a4080",
    skills: [
      { name: "Git", level: 80, icon: "🔀" },
      { name: "GitHub", level: 80, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Chrome DevTools", level: 85, icon: "🔧" },
    ],
  },
];

function AnimatedBar({ level, color }: { level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="h-2 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: color }}
      />
    </div>
  );
}

export function Skills() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            02 / Skills
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
            Technical <span style={{ color: "var(--accent)" }}>Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(({ title, color, skills }) => (
            <SkillCard key={title} title={title} color={color} skills={skills} />
          ))}
        </div>

        {/* Tech chip list */}
        <div className="mt-12 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
          <p
            className="mb-6 text-center text-sm font-medium"
            style={{ color: "var(--muted-foreground)", fontFamily: "'Inter', sans-serif" }}
          >
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML5", "CSS3", "JavaScript", "React.js", "Flexbox", "CSS Grid", "REST APIs", "Local Storage", "Git", "GitHub", "VS Code", "Chrome DevTools"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm border transition-all hover:scale-105 hover:shadow-md"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.78rem",
                    borderColor: "var(--border)",
                    background: "var(--card)",
                    color: "var(--foreground)",
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  color,
  skills,
}: {
  title: string;
  color: string;
  skills: { name: string; level: number; icon: string }[];
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl border"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-1 h-8 rounded-full"
          style={{ background: color }}
        />
        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--foreground)",
          }}
        >
          {title}
        </h3>
      </div>
      <div className="space-y-5">
        {skills.map(({ name, level, icon }) => (
          <div key={name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span>{icon}</span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  {name}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {level}%
              </span>
            </div>
            <AnimatedBar level={level} color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}
