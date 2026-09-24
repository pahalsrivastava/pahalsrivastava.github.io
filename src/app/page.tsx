"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal as TerminalIcon, 
  Sparkles, 
  Code2, 
  Globe, 
  Trophy, 
  Award 
} from "lucide-react";
import { Heatmap } from "@/components/Heatmap";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Talview",
    type: "Full-time",
    period: "April 2026 – Present",
    current: true,
  },
  {
    role: "Software Development Intern",
    company: "Talview",
    type: "Internship",
    period: "Sept 2025 – April 2026",
    current: false,
  },
  {
    role: "Developer Project Intern",
    company: "Gail India Limited",
    type: "Internship",
    period: "Jul 2025 – Sept 2025",
    current: false,
  },
  {
    role: "Machine Learning Intern",
    company: "PlantoAI",
    type: "Internship",
    period: "Feb 2025 – Apr 2025",
    current: false,
  },
];

const projects = [
  {
    title: "AutoBlocks",
    tagline: "AI-Powered Generative UI System",
    desc: "Translates natural language prompts directly into 20+ reusable, composable components with live Monaco editor sandboxing.",
    tags: ["React.js", "Gemini API", "Vercel", "Tailwind CSS"],
    metrics: "3x faster iteration cycles",
    icon: Code2,
  },
  {
    title: "TravelMate",
    tagline: "Autonomous Agentic Travel Engine",
    desc: "Intelligent trip orchestrator with 5+ autonomous workflows, 6 high-throughput REST APIs, and sub-second cached queries.",
    tags: ["TypeScript", "Flask", "PostgreSQL", "Tailwind CSS"],
    metrics: "25% response time cut",
    icon: Globe,
  },
];

const achievements = [
  {
    badge: "National Winner",
    title: "Winner · Smart India Hackathon 2024",
    stat: "+35%",
    statLabel: "Accuracy Boost",
    desc: "Engineered a high-concurrency SCADA discovery tool with Prometheus & Grafana, boosting accuracy by 35%.",
    tags: ["SCADA Discovery", "Prometheus", "Grafana", "High Concurrency"],
    icon: Trophy,
    accent: "from-[#F59E0B]/20 via-[#F59E0B]/5 to-transparent",
    iconColor: "text-[#F59E0B]",
    borderHover: "hover:border-[#F59E0B]/50",
  },
  {
    badge: "Elite Cohort",
    title: "ACM Winter School 2025",
    stat: "Top 90",
    statLabel: "Nationwide Selection",
    desc: "Selected among the top 90 engineers nationwide for edge computing & distributed AI at IISc Bangalore.",
    tags: ["IISc Bangalore", "Edge Computing", "Distributed AI"],
    icon: Award,
    accent: "from-[#8B7CF6]/20 via-[#8B7CF6]/5 to-transparent",
    iconColor: "text-[#8B7CF6]",
    borderHover: "hover:border-[#8B7CF6]/50",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"whoami" | "interests" | "education">("whoami");

  // Mouse spotlight coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#07090E] text-[#0F172A] dark:text-[#E7ECF1] selection:bg-[#8B7CF6] selection:text-white transition-colors duration-500 overflow-x-hidden font-sans"
    >
      {/* 1. Dynamic Cursor Spotlight (Dark Mode Only Glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 124, 246, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Cyber Blueprint Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#161C25_1px,transparent_1px),linear-gradient(to_bottom,#161C25_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-30" />

      {/* 3. Floating Ambient Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 w-[550px] h-[350px] bg-gradient-to-tr from-[#8B7CF6]/20 via-[#5FE3C0]/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Sticky Glass Navbar */}
      <nav className="sticky top-0 z-30 backdrop-blur-xl bg-[#F8FAFC]/70 dark:bg-[#07090E]/70 border-b border-[#E2E8F0]/80 dark:border-[#1E2633]/60 transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5FE3C0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D9488] dark:bg-[#5FE3C0]"></span>
            </span>
            <span className="font-bold text-sm tracking-tight text-[#0F172A] dark:text-white">
              Pahal Srivastava
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#64748B] dark:text-[#8C97A5] font-mono">
            <a href="#about" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">/about</a>
            <a href="#experience" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">/experience</a>
            <a href="#activity" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">/activity</a>
            <a href="#projects" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">/projects</a>
          </div>
        </div>
      </nav>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pt-24 pb-20 border-b border-[#E2E8F0] dark:border-[#1E2633]"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-[#11161D]/80 border border-[#E2E8F0] dark:border-[#232B36] shadow-sm font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-6 backdrop-blur-sm">
            <Sparkles size={12} className="animate-spin text-[#8B7CF6]" style={{ animationDuration: "4s" }} />
            <span>Bengaluru, India · Open to High-Impact Problems</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Exploring how deep models think and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#8B7CF6] to-[#0D9488] dark:to-[#5FE3C0]">
              building the distributed systems that power them.
            </span>
          </h1>

          <p className="font-mono text-sm tracking-wide text-[#6D28D9] dark:text-[#8B7CF6] mb-6">
            &gt; Software Engineer · Systems &amp; Multimodal AI
          </p>

          <p className="text-[#475569] dark:text-[#94A3B8] max-w-2xl text-base leading-relaxed mb-9">
            Learning and Building tech helping the industry since 2025.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 font-mono text-xs">
            <a
              href="mailto:pahalsrivastava05@gmail.com"
              className="group flex items-center gap-2 bg-[#0F172A] text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(139,124,246,0.4)] transition-all duration-300 active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/pahalsrivastava"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-[#CBD5E1] dark:border-[#232B36] bg-white/50 dark:bg-[#11161D]/60 px-5 py-2.5 rounded-lg text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] dark:hover:bg-[#161C25] transition-all backdrop-blur-sm"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://in.linkedin.com/in/pahal-srivastava-8025582a3"
              target="_blank"
              rel="noreferrer"
              className="border border-[#CBD5E1] dark:border-[#232B36] bg-white/50 dark:bg-[#11161D]/60 px-5 py-2.5 rounded-lg text-[#64748B] dark:text-[#8C97A5] hover:border-[#0D9488] dark:hover:border-[#5FE3C0] hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-all backdrop-blur-sm"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="py-16 border-b border-[#E2E8F0] dark:border-[#1E2633]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider font-semibold">
            // Track Record
          </div>
          <h2 className="text-2xl font-bold mb-10 tracking-tight">Timeline</h2>

          <div className="relative pl-6 sm:pl-8 border-l border-[#CBD5E1] dark:border-[#1E2633] space-y-8 my-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node */}
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-2 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                    exp.current
                      ? "border-[#0D9488] dark:border-[#5FE3C0] bg-white dark:bg-[#07090E] shadow-[0_0_12px_#5FE3C0]"
                      : "border-[#CBD5E1] dark:border-[#232B36] bg-white dark:bg-[#11161D] group-hover:border-[#7C3AED] dark:group-hover:border-[#8B7CF6]"
                  }`}
                />

                {/* Glassmorphic Item Card */}
                <div className="p-4 sm:p-5 rounded-xl border border-transparent group-hover:border-[#E2E8F0] dark:group-hover:border-[#232B36] group-hover:bg-white/80 dark:group-hover:bg-[#11161D]/70 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs group-hover:shadow-md">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-base text-[#0F172A] dark:text-white group-hover:text-[#0D9488] dark:group-hover:text-[#5FE3C0] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="font-mono text-[10px] text-[#0D9488] dark:text-[#5FE3C0] bg-[#CCFBF1] dark:bg-[#5FE3C0]/10 px-2 py-0.5 rounded-full font-bold">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#64748B] dark:text-[#8C97A5] font-mono mt-1">
                      {exp.company} <span className="text-[#CBD5E1] dark:text-[#232B36] mx-1.5">•</span> <span>{exp.type}</span>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] whitespace-nowrap bg-[#F1F5F9] dark:bg-[#161C25] px-2.5 py-1 rounded-md">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS / HONORS */}
        <section className="py-16 border-b border-[#E2E8F0] dark:border-[#1E2633]">
          <div className="flex items-center justify-between mb-2">
            <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] uppercase tracking-wider font-semibold">
              // Milestones &amp; Honors
            </div>
            <span className="font-mono text-[11px] text-[#64748B] dark:text-[#8C97A5]">
              Validated Competencies
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-8 tracking-tight">Key Recognition</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border border-[#E2E8F0] dark:border-[#1E2633] bg-white dark:bg-[#0E131A] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.borderHover}`}
                >
                  {/* Subtle Ambient Radial Glow */}
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.accent} blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60`}
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Header: Badge, Icon & Hero Stat */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] dark:border-[#232B36] bg-[#F8FAFC] dark:bg-[#141A23] shadow-xs transition-transform duration-300 group-hover:scale-105">
                            <Icon size={20} className={item.iconColor} />
                          </div>
                          <div>
                            <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EDE9FE] dark:bg-[#1E2633] text-[#7C3AED] dark:text-[#5FE3C0]">
                              {item.badge}
                            </span>
                          </div>
                        </div>

                        {/* Quantitative Metric */}
                        <div className="text-right font-mono">
                          <div className="text-base font-extrabold text-[#0F172A] dark:text-white leading-tight">
                            {item.stat}
                          </div>
                          <div className="text-[10px] text-[#64748B] dark:text-[#8C97A5] uppercase tracking-wider">
                            {item.statLabel}
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#5FE3C0] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] dark:text-[#8C97A5] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F1F5F9] dark:border-[#1E2633]">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-[#475569] dark:text-[#94A3B8] bg-[#F8FAFC] dark:bg-[#161C25] px-2 py-0.5 rounded-md border border-[#E2E8F0] dark:border-[#232B36]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* GITHUB ACTIVITY HUD */}
        <section id="activity" className="py-16 border-b border-[#E2E8F0] dark:border-[#1E2633]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider font-semibold">
            // Telemetry &amp; Commits
          </div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Contributions</h2>
          <Heatmap />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 border-b border-[#E2E8F0] dark:border-[#1E2633]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider font-semibold">
            // Engineered Artefacts
          </div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Featured Projects</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((proj) => {
              const Icon = proj.icon;
              return (
                <div
                  key={proj.title}
                  className="relative group p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#1E2633] bg-white dark:bg-[#0E131A] hover:border-[#8B7CF6]/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-[#EDE9FE] dark:bg-[#1A1F2C] text-[#7C3AED] dark:text-[#8B7CF6]">
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-[#0D9488] dark:text-[#5FE3C0] bg-[#CCFBF1] dark:bg-[#5FE3C0]/10 px-2 py-0.5 rounded-full font-bold">
                        {proj.metrics}
                      </span>
                    </div>

                    <h3 className="font-bold text-[#0F172A] dark:text-white text-lg group-hover:text-[#7C3AED] dark:group-hover:text-[#8B7CF6] transition-colors">
                      {proj.title}
                    </h3>
                    <div className="font-mono text-[11px] text-[#6D28D9] dark:text-[#8B7CF6] mb-2.5">
                      {proj.tagline}
                    </div>
                    <p className="text-xs text-[#64748B] dark:text-[#8C97A5] leading-relaxed mb-5">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F1F5F9] dark:border-[#1E2633]">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[#475569] dark:text-[#94A3B8] bg-[#F1F5F9] dark:bg-[#161C25] px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS CHIPS */}
        <section id="skills" className="py-16 border-b border-[#E2E8F0] dark:border-[#1E2633]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider font-semibold">
            // Capability Matrix
          </div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Capability Matrix</h2>
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] mb-2">AI / LLM &amp; Agents</div>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude", "Llama", "Hugging Face", "LangChain", "TensorFlow", "RAG", "Prompt Engineering", "LLM Fine-Tuning", "AI Agents"].map(s => (
                  <span key={s} className="border border-[#E2E8F0] dark:border-[#1E2633] bg-white dark:bg-[#0E131A] rounded-lg px-3 py-1.5 text-xs text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono shadow-xs">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] mb-2">Languages &amp; Core Stack</div>
              <div className="flex flex-wrap gap-2">
                {["Python", "TypeScript", "JavaScript", "C++", "React", "Node.js", "GraphQL", "Flask", "REST APIs"].map(s => (
                  <span key={s} className="border border-[#E2E8F0] dark:border-[#1E2633] bg-white dark:bg-[#0E131A] rounded-lg px-3 py-1.5 text-xs text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono shadow-xs">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] mb-2">Distributed Infra &amp; Tools</div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "Docker", "Apache Airflow", "CI/CD", "Sentry", "Jest", "Git"].map(s => (
                  <span key={s} className="border border-[#E2E8F0] dark:border-[#1E2633] bg-white dark:bg-[#0E131A] rounded-lg px-3 py-1.5 text-xs text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono shadow-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE TERMINAL HUD */}
        <section id="about" className="py-16 border-b border-[#E2E8F0] dark:border-[#1E2633]">
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] uppercase tracking-wider font-semibold">
              // Runtime Console
            </div>
            <div className="font-mono text-[11px] text-[#94A3B8] dark:text-[#556477]">bash --interactive</div>
          </div>

          <div className="rounded-xl border border-[#E2E8F0] dark:border-[#232B36] bg-white dark:bg-[#0E131A] shadow-xl overflow-hidden backdrop-blur-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F1F5F9] dark:bg-[#141A23] border-b border-[#E2E8F0] dark:border-[#232B36]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-2 font-mono text-xs text-[#64748B] dark:text-[#8C97A5] flex items-center gap-1.5">
                  <TerminalIcon size={12} /> pahal@system:~
                </span>
              </div>

              {/* Tabs */}
              <div className="flex gap-1">
                {(["whoami", "interests", "education"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors ${
                      activeTab === tab
                        ? "bg-white dark:bg-[#1D2430] text-[#7C3AED] dark:text-[#5FE3C0] font-bold shadow-xs"
                        : "text-[#64748B] dark:text-[#8C97A5] hover:text-black dark:hover:text-white"
                    }`}
                  >
                    .{tab}()
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs leading-relaxed min-h-[140px]">
              {activeTab === "whoami" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  <div className="text-[#0D9488] dark:text-[#5FE3C0]">$ current_focus.print()</div>
                  <p className="text-[#64748B] dark:text-[#8C97A5]">
                    Associate SWE crafting multimodal agentic intelligence and event-driven backends. Thrives when debugging complex distributed concurrency or optimizing inference speed.
                  </p>
                </motion.div>
              )}

              {activeTab === "interests" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  <div className="text-[#0D9488] dark:text-[#5FE3C0]">$ cat interests.json</div>
                  <p className="text-[#64748B] dark:text-[#8C97A5]">
                    [&quot;Multimodal Agentic RAG&quot;, &quot;Distributed Workflows (Temporal)&quot;, &quot;Open-Source LLM Fine-Tuning&quot;, &quot;Edge Computing &amp; SCADA Protocols&quot;]
                  </p>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  <div className="text-[#0D9488] dark:text-[#5FE3C0]">$ academic_status.fetch()</div>
                  <p className="text-[#64748B] dark:text-[#8C97A5]">
                    B.E. Computer Science &amp; Engineering, Dayananda Sagar College of Engineering — CGPA: 9.2
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-20 font-mono text-sm text-[#64748B] dark:text-[#8C97A5]">
          <div className="text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider font-semibold">// Connection Protocol</div>
          <div className="text-[#0F172A] dark:text-white text-2xl font-bold mb-4">Let&apos;s build something great.</div>
          <div className="space-y-1">
            <div>
              <a href="mailto:pahalsrivastava05@gmail.com" className="text-[#0D9488] dark:text-[#5FE3C0] hover:underline font-semibold">
                pahalsrivastava05@gmail.com
              </a>
            </div>
            <div>+91 93800 61839</div>
          </div>
          <div className="mt-12 text-xs text-[#94A3B8] dark:text-[#556477] border-t border-[#E2E8F0] dark:border-[#1E2633] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© 2026 Pahal Srivastava</span>
            <span className="text-[11px]">Designed with Next.js, Tailwind &amp; Framer Motion</span>
          </div>
        </footer>
      </div>
    </div>
  );
}