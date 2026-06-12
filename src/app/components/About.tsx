import { useScrollReveal } from "./useScrollReveal";
import { User, MapPin, GraduationCap, Code2, Sparkles } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech 2nd Year", sub: "Ajeenkya DY Patil University" },
  { icon: MapPin, label: "Hyderabad, India", sub: "Open to remote & relocation" },
  { icon: Code2, label: "Front-End Focused", sub: "React.js, HTML, CSS, JavaScript" },
  { icon: Sparkles, label: "Available for Internships", sub: "Actively seeking opportunities" },
];

const traits = [
  "Passionate about Front-End Development",
  "Skilled in creating responsive web applications",
  "Strong understanding of HTML, CSS, JavaScript, React.js, and Git",
  "Focused on building high-performance, accessible user interfaces",
  "Fast learner with a growth mindset and problem-solving approach",
];

export function About() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="mb-16">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            01 / About Me
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            Crafting digital experiences
            <br />
            <span style={{ color: "var(--accent)" }}>one pixel at a time</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--muted-foreground)",
                }}
              >
                I'm a B.Tech 2nd-year Computer Science student with a deep passion for
                front-end development. I love turning design ideas into real, functional
                web interfaces that are both beautiful and accessible.
              </p>
              <p
                className="mb-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--muted-foreground)",
                }}
              >
                Every project I take on is an opportunity to push my skills further —
                whether it's optimizing performance, crafting smooth animations, or
                ensuring pixel-perfect responsive layouts across all devices.
              </p>

              <ul className="space-y-3">
                {traits.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
                  >
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Avatar placeholder */}
            <div className="flex flex-col items-center gap-6">
              <div
                className="relative w-52 h-52 rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <User size={80} color="rgba(255,255,255,0.3)" />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 text-center text-sm font-semibold"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Y. Sanjith Reddy
                </div>
              </div>
              <div
                className="px-5 py-3 rounded-xl border text-center"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  color: "var(--accent)",
                }}
              >
                {"<"} Front-End Developer {"/>"}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{ background: "var(--secondary)" }}
              >
                <Icon size={20} style={{ color: "var(--accent)" }} />
              </div>
              <p
                className="font-semibold mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "var(--foreground)",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
