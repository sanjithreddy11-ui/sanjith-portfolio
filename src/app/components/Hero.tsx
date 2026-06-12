import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import resumePdf from "../../imports/my_resume.pdf";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 158, 218, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(74, 158, 218, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--primary) 0%, #0a1f3d 40%, #1a3a6b 100%)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative shapes */}
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-60 h-60 rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #4a9eda 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: "rgba(74,158,218,0.4)",
              background: "rgba(74,158,218,0.1)",
              color: "#7ec8f0",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Available for internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 leading-none"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Yaramada
            <br />
            <span style={{ color: "#7ec8f0" }}>Sanjith Reddy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 600,
              color: "#a8d4f0",
              letterSpacing: "0.05em",
            }}
          >
            Front-End Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              color: "#6aadcc",
              letterSpacing: "0.08em",
            }}
          >
            HTML · CSS · JavaScript · React.js
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 max-w-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#b8cfe0",
            }}
          >
            Passionate Front-End Developer focused on building responsive, user-friendly,
            and high-performance web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: "#4a9eda",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 4px 24px rgba(74,158,218,0.35)",
              }}
            >
              View Projects
            </button>
            <a
              href={resumePdf}
              download="Yaramada_Sanjith_Reddy_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 border"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 border"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <Mail size={15} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/sanjithreddy11-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
              }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/y-sanjith-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sanjithreddy08@gmail.com"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
              }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Code card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "#0d1f35",
              border: "1px solid rgba(74,158,218,0.2)",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-5 py-4 border-b"
              style={{ borderColor: "rgba(74,158,218,0.15)" }}
            >
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span
                className="ml-3 text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#6aadcc" }}
              >
                sanjith.tsx
              </span>
            </div>
            <div className="p-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", lineHeight: 1.8 }}>
              <div style={{ color: "#6aadcc" }}>
                <span style={{ color: "#7ec8f0" }}>const</span>{" "}
                <span style={{ color: "#a8d4f0" }}>developer</span>{" "}
                <span style={{ color: "#fff" }}>=</span>{" "}
                <span style={{ color: "#7ec8f0" }}>{`{`}</span>
              </div>
              <div className="pl-6" style={{ color: "#b8cfe0" }}>
                <div><span style={{ color: "#7ec8f0" }}>name</span>: <span style={{ color: "#86efac" }}>"Yaramada Sanjith Reddy"</span>,</div>
                <div><span style={{ color: "#7ec8f0" }}>role</span>: <span style={{ color: "#86efac" }}>"Front-End Developer"</span>,</div>
                <div><span style={{ color: "#7ec8f0" }}>education</span>: <span style={{ color: "#86efac" }}>"B.Tech 2nd Year"</span>,</div>
                <div><span style={{ color: "#7ec8f0" }}>skills</span>: [</div>
                <div className="pl-6">
                  <span style={{ color: "#86efac" }}>"HTML5"</span>,{" "}
                  <span style={{ color: "#86efac" }}>"CSS3"</span>,
                </div>
                <div className="pl-6">
                  <span style={{ color: "#86efac" }}>"JavaScript"</span>,{" "}
                  <span style={{ color: "#86efac" }}>"React.js"</span>
                </div>
                <div>],</div>
                <div><span style={{ color: "#7ec8f0" }}>status</span>: <span style={{ color: "#86efac" }}>"open to work"</span>,</div>
                <div><span style={{ color: "#7ec8f0" }}>location</span>: <span style={{ color: "#86efac" }}>"Hyderabad, India"</span>,</div>
              </div>
              <div style={{ color: "#7ec8f0" }}>{`}`};</div>
              <br />
              <div style={{ color: "#6aadcc" }}>
                <span style={{ color: "#7ec8f0" }}>function</span>{" "}
                <span style={{ color: "#fbbf24" }}>buildAmazing</span>() {"{"}
              </div>
              <div className="pl-6" style={{ color: "#b8cfe0" }}>
                <span style={{ color: "#7ec8f0" }}>return</span>{" "}
                <span style={{ color: "#86efac" }}>"great web experiences"</span>;
              </div>
              <div style={{ color: "#6aadcc" }}>{"}"}</div>
              <div className="mt-2" style={{ color: "#6aadcc" }}>
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
