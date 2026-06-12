import { useScrollReveal } from "./useScrollReveal";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const coursework = [
  "Web Technologies",
  "Data Structures",
  "Object-Oriented Programming",
];

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-24" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            04 / Education
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
            Academic <span style={{ color: "var(--accent)" }}>Background</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main card */}
          <div
            className="rounded-3xl overflow-hidden border shadow-lg"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="p-8"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <GraduationCap size={28} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest mb-1"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    DEGREE
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "#fff",
                    }}
                  >
                    B.Tech
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4
                className="mb-2"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--foreground)",
                }}
              >
                Ajeenkya DY Patil University
              </h4>
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={14} style={{ color: "var(--accent)" }} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  2025 — 2029
                </span>
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                style={{ background: "var(--secondary)" }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-green-400"
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  Currently Enrolled • 2nd Year
                </span>
              </div>

              <div>
                <p
                  className="flex items-center gap-2 mb-4 text-sm font-semibold"
                  style={{ color: "var(--foreground)", fontFamily: "'Inter', sans-serif" }}
                >
                  <BookOpen size={16} style={{ color: "var(--accent)" }} />
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-4 py-2 rounded-lg text-sm border"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        borderColor: "var(--border)",
                        background: "var(--secondary)",
                        color: "var(--foreground)",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline & Stats */}
          <div className="space-y-6">
            {[
              { year: "2025", label: "Enrolled in B.Tech", detail: "Started Computer Science journey at ADYPU" },
              { year: "2026", label: "2nd Year — Present", detail: "Deepening front-end skills, building projects" },
              { year: "2027", label: "3rd Year (Upcoming)", detail: "Internship opportunities & advanced projects" },
              { year: "2029", label: "Graduation (Expected)", detail: "B.Tech degree completion" },
            ].map(({ year, label, detail }, i) => (
              <div key={year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{
                      background: i <= 1 ? "var(--primary)" : "var(--muted)",
                      color: i <= 1 ? "#fff" : "var(--muted-foreground)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {year.slice(2)}
                  </div>
                  {i < 3 && (
                    <div
                      className="w-0.5 flex-1 mt-2"
                      style={{ background: "var(--border)" }}
                    />
                  )}
                </div>
                <div className="pb-6">
                  <p
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: i <= 1 ? "var(--foreground)" : "var(--muted-foreground)",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
