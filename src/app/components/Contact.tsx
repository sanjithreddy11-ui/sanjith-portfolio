import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sanjithreddy08@gmail.com",
    href: "mailto:sanjithreddy08@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 75694 42081",
    href: "tel:+917569442081",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sanjithreddy11-ui",
    href: "https://github.com/sanjithreddy11-ui",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "y-sanjith-reddy",
    href: "https://www.linkedin.com/in/y-sanjith-reddy",
  },
];

export function Contact() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            07 / Contact
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
            Get in <span style={{ color: "var(--accent)" }}>Touch</span>
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
            I'm actively looking for internship opportunities. Whether you have a project
            in mind or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="group flex items-center gap-4 p-4 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: "var(--primary)" }}
                >
                  <Icon size={18} color="#fff" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-wider mb-0.5"
                    style={{
                      color: "var(--muted-foreground)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {label.toUpperCase()}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:underline"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--foreground)",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--foreground)",
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div
            className="rounded-3xl border p-8"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={52} style={{ color: "#22c55e" }} className="mb-4" />
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "var(--foreground)",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--foreground)",
                  }}
                >
                  Send me a message
                </h3>

                <div>
                  <label
                    className="block mb-2 text-sm font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif", color: "var(--foreground)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      background: "var(--input-background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif", color: "var(--foreground)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      background: "var(--input-background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif", color: "var(--foreground)" }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      background: "var(--input-background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-70"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    boxShadow: "0 4px 20px rgba(15,52,96,0.25)",
                  }}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
