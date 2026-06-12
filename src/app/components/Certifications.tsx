import { useScrollReveal } from "./useScrollReveal";

const certs = [
  {
    title: "Front-End Developer Professional Certificate",
    provider: "Coursera",
    description:
      "Comprehensive front-end development program covering modern web development practices, responsive design, JavaScript, React, and version control.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
    color: "#0f3460",
    accentColor: "#1a6bbd",
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="20" fill="#0056D2" />
        <path d="M12 20C12 15.582 15.582 12 20 12C22.416 12 24.589 13.015 26.121 14.657L29 11.778C26.701 9.377 23.527 8 20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C23.527 32 26.701 30.623 29 28.222L26.121 25.343C24.589 26.985 22.416 28 20 28C15.582 28 12 24.418 12 20Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    provider: "HackerRank",
    description:
      "Advanced JavaScript concepts including ES6+, algorithms, problem-solving techniques, and data structures for efficient web development.",
    skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures"],
    color: "#1a6bbd",
    accentColor: "#4a9eda",
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="40" height="40" rx="8" fill="#2EC866" />
        <path d="M20 8L28 13V27L20 32L12 27V13L20 8Z" fill="white" fillOpacity="0.2"/>
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="monospace">HR</text>
      </svg>
    ),
  },
  {
    title: "Responsive Web Design Certification",
    provider: "freeCodeCamp",
    description:
      "Advanced responsive web design techniques using Flexbox, CSS Grid, accessibility standards, and mobile-first development.",
    skills: ["CSS Grid", "Flexbox", "Media Queries", "Responsive Design"],
    color: "#0a4080",
    accentColor: "#0f3460",
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="40" height="40" rx="8" fill="#006400" />
        <text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="monospace">f</text>
      </svg>
    ),
  },
];

export function Certifications() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="py-24" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            05 / Certifications
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
            Professional <span style={{ color: "var(--accent)" }}>Certifications</span>
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
            Industry-recognized credentials that validate my front-end development expertise
            and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: (typeof certs)[0] }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1.5"
        style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.accentColor}, #4a9eda)` }}
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Provider logo + badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="p-2.5 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-lg"
            style={{ background: "var(--secondary)" }}
          >
            {cert.logo}
          </div>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "var(--secondary)",
              color: cert.accentColor,
              border: `1px solid ${cert.accentColor}30`,
            }}
          >
            {cert.provider}
          </span>
        </div>

        {/* Title */}
        <h3
          className="mb-3"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--foreground)",
            lineHeight: 1.35,
          }}
        >
          {cert.title}
        </h3>

        {/* Description */}
        <p
          className="mb-6 flex-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          {cert.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "var(--secondary)",
                color: "var(--accent)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom hover accent line */}
      <div
        className="h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${cert.color}, #4a9eda)` }}
      />
    </div>
  );
}
