import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ background: "var(--accent)" }}
          >
            <Code2 size={18} color="#fff" />
          </div>
          <span
            className="hidden sm:block font-semibold tracking-tight"
            style={{ color: "var(--primary)", fontFamily: "'Outfit', sans-serif" }}
          >
            Sanjith
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-secondary"
                style={{
                  color:
                    activeSection === href.slice(1)
                      ? "var(--accent)"
                      : "var(--foreground)",
                  fontWeight: activeSection === href.slice(1) ? 600 : 400,
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-border transition-all hover:bg-secondary"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={16} style={{ color: "var(--accent)" }} />
            ) : (
              <Moon size={16} style={{ color: "var(--primary)" }} />
            )}
          </button>
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            onClick={() => scrollTo("#contact")}
          >
            Hire Me
          </button>
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={18} style={{ color: "var(--foreground)" }} />
            ) : (
              <Menu size={18} style={{ color: "var(--foreground)" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 border-t border-border bg-card/95 backdrop-blur-md">
          {links.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="block w-full text-left py-3 text-sm border-b border-border last:border-0 transition-colors hover:text-accent"
              style={{
                color:
                  activeSection === href.slice(1)
                    ? "var(--accent)"
                    : "var(--foreground)",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
