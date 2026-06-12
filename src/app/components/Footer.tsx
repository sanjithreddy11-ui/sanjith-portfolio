import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="py-12"
      style={{
        background: "linear-gradient(135deg, var(--primary) 0%, #0a1f3d 100%)",
        color: "#fff",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(74,158,218,0.2)" }}
            >
              <Code2 size={20} color="#7ec8f0" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                Yaramada Sanjith Reddy
              </p>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Front-End Developer
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sanjithreddy11-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:scale-110 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
              aria-label="GitHub"
            >
              <Github size={17} color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/in/y-sanjith-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:scale-110 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={17} color="#fff" />
            </a>
            <a
              href="mailto:sanjithreddy08@gmail.com"
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:scale-110 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
              aria-label="Email"
            >
              <Mail size={17} color="#fff" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105 hover:bg-white/10"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <ArrowUp size={15} />
            Back to Top
          </button>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            © {new Date().getFullYear()} Yaramada Sanjith Reddy. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
