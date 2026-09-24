"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
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
    desc: "An AI-powered UI generator converting natural-language prompts into 20+ reusable components with live Monaco editor integration.",
    tags: ["React.js", "Gemini API", "Vercel", "Tailwind CSS"],
  },
  {
    title: "TravelMate",
    desc: "An AI travel planner powered by Gemini API, supporting 5+ planning workflows and 6 cached RESTful APIs over PostgreSQL.",
    tags: ["TypeScript", "Flask", "PostgreSQL", "Tailwind CSS"],
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F14] text-[#0F172A] dark:text-[#E7ECF1] transition-colors selection:bg-[#8B7CF6] selection:text-white">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/80 dark:bg-[#0B0F14]/80 border-b border-[#E2E8F0] dark:border-[#232B36] transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight text-[#0F172A] dark:text-white">
            Pahal Srivastava
          </span>

          <div className="flex items-center gap-6 text-sm text-[#64748B] dark:text-[#8C97A5] font-mono">
            <a href="#about" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">Experience</a>
            <a href="#activity" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">Activity</a>
            <a href="#projects" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-colors">Skills</a>

            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-[#11161D] text-[#64748B] dark:text-[#8C97A5] hover:text-[#0F172A] dark:hover:text-white transition-colors"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24 border-b border-[#E2E8F0] dark:border-[#232B36]"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE]/50 dark:bg-[#161C25] border border-[#DDD6FE] dark:border-[#232B36] font-mono text-xs text-[#6D28D9] dark:text-[#5FE3C0] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#5FE3C0] animate-pulse" />
            Bengaluru, India
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-5 leading-[1.15]">
            Exploring how deep models think and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0D9488] dark:from-[#8B7CF6] dark:to-[#5FE3C0]">
              building the distributed systems that power them.
            </span>
          </h1>

          <p className="font-mono text-[#6D28D9] dark:text-[#8B7CF6] text-base mb-6">
            Software Engineer · Systems &amp; AI
          </p>

          <p className="text-[#475569] dark:text-[#8C97A5] max-w-xl text-base leading-relaxed mb-8">
            Curious about every layer of the compute stack—from model internals and neural workflows to high-performance, fault-tolerant backend infrastructure.
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <a 
              href="mailto:pahalsrivastava05@gmail.com" 
              className="bg-[#0F172A] text-white dark:bg-[#E7ECF1] dark:text-black px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all shadow-sm"
            >
              Email me
            </a>
            <a 
              href="https://github.com/pahalsrivastava" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-[#CBD5E1] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-transparent px-5 py-2.5 rounded-lg text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] dark:hover:bg-[#161C25] transition-all"
            >
              GitHub
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-[#CBD5E1] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-transparent px-5 py-2.5 rounded-lg text-[#64748B] dark:text-[#8C97A5] hover:border-[#0D9488] dark:hover:border-[#5FE3C0] hover:text-[#0D9488] dark:hover:text-[#5FE3C0] transition-all"
            >
              Resume ↗
            </a>
          </div>
        </motion.section>

        {/* ABOUT */}
        <section id="about" className="py-16 border-b border-[#E2E8F0] dark:border-[#232B36]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider">About</div>
          <div className="bg-[#FFFFFF] dark:bg-[#11161D] border border-[#E2E8F0] dark:border-[#232B36] rounded-xl p-6 font-mono text-sm space-y-3 shadow-sm dark:shadow-inner transition-colors">
            <div><span className="text-[#0D9488] dark:text-[#5FE3C0]">$</span> whoami</div>
            <div className="text-[#64748B] dark:text-[#8C97A5]">Software engineer focused on scalable backend architectures, agentic LLM pipelines, and edge systems.</div>
            <div><span className="text-[#0D9488] dark:text-[#5FE3C0]">$</span> cat interests.txt</div>
            <div className="text-[#64748B] dark:text-[#8C97A5]">Distributed workflows · Low-latency microservices · RAG systems · Edge intelligence</div>
            <div className="text-[#94A3B8] dark:text-[#8C97A5]/70 pt-2 border-t border-[#E2E8F0] dark:border-[#232B36]"># B.E. CSE, Dayananda Sagar College of Engineering — CGPA 9.2</div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="py-16 border-b border-[#E2E8F0] dark:border-[#232B36]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider">Experience</div>
          <h2 className="text-2xl font-bold mb-10 tracking-tight">Timeline</h2>

          <div className="relative pl-6 sm:pl-8 border-l border-[#CBD5E1] dark:border-[#232B36] space-y-8 my-4 transition-colors">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node */}
                <span 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                    exp.current 
                      ? "border-[#0D9488] dark:border-[#5FE3C0] bg-[#FFFFFF] dark:bg-[#0B0F14] shadow-[0_0_10px_#5FE3C0]" 
                      : "border-[#CBD5E1] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-[#11161D] group-hover:border-[#7C3AED] dark:group-hover:border-[#8B7CF6]"
                  }`}
                />

                {/* Card */}
                <div className="p-4 rounded-xl border border-transparent group-hover:border-[#E2E8F0] dark:group-hover:border-[#232B36] group-hover:bg-[#FFFFFF] dark:group-hover:bg-[#11161D]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-base text-[#0F172A] dark:text-white group-hover:text-[#0D9488] dark:group-hover:text-[#5FE3C0] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="font-mono text-[10px] text-[#0D9488] dark:text-[#5FE3C0] bg-[#CCFBF1] dark:bg-[#5FE3C0]/10 px-2 py-0.5 rounded-full font-medium">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-[#64748B] dark:text-[#8C97A5] font-mono mt-0.5">
                      {exp.company} <span className="text-[#CBD5E1] dark:text-[#232B36] mx-1.5">•</span> <span className="text-xs text-[#64748B]/80 dark:text-[#8C97A5]/80">{exp.type}</span>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GITHUB ACTIVITY */}
        <section id="activity" className="py-16 border-b border-[#E2E8F0] dark:border-[#232B36]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider">GitHub Activity</div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Contributions, combined</h2>
          <Heatmap />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 border-b border-[#E2E8F0] dark:border-[#232B36]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider">Projects</div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Things I&apos;ve built</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((proj) => (
              <div 
                key={proj.title} 
                className="p-6 rounded-xl border border-[#E2E8F0] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-[#11161D] hover:border-[#8B7CF6]/50 transition-all group shadow-sm"
              >
                <h3 className="font-bold text-[#0F172A] dark:text-white text-lg mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#8B7CF6] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#64748B] dark:text-[#8C97A5] leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-[#0D9488] dark:text-[#5FE3C0] bg-[#CCFBF1] dark:bg-[#5FE3C0]/10 px-2.5 py-0.5 rounded-full border border-[#99F6E4] dark:border-[#5FE3C0]/20 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16 border-b border-[#E2E8F0] dark:border-[#232B36]">
          <div className="font-mono text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider">Skills</div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Toolbox</h2>
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] mb-2">AI / LLM</div>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude", "Llama", "Hugging Face", "LangChain", "TensorFlow", "RAG", "Prompt Engineering", "LLM Fine-Tuning", "AI Agents"].map(s => (
                  <span key={s} className="border border-[#E2E8F0] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-[#11161D] rounded-lg px-3 py-1.5 text-xs text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono shadow-sm">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] mb-2">Languages &amp; Frameworks</div>
              <div className="flex flex-wrap gap-2">
                {["Python", "TypeScript", "JavaScript", "C++", "React", "Node.js", "GraphQL", "Flask", "REST APIs"].map(s => (
                  <span key={s} className="border border-[#E2E8F0] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-[#11161D] rounded-lg px-3 py-1.5 text-xs text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono shadow-sm">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#64748B] dark:text-[#8C97A5] mb-2">Data &amp; Infra</div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "Docker", "Apache Airflow", "CI/CD", "Sentry", "Jest", "Git"].map(s => (
                  <span key={s} className="border border-[#E2E8F0] dark:border-[#232B36] bg-[#FFFFFF] dark:bg-[#11161D] rounded-lg px-3 py-1.5 text-xs text-[#0F172A] dark:text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-20 font-mono text-sm text-[#64748B] dark:text-[#8C97A5]">
          <div className="text-xs text-[#0D9488] dark:text-[#5FE3C0] mb-2 uppercase tracking-wider">Contact</div>
          <div className="text-[#0F172A] dark:text-white text-xl font-bold mb-4">Let&apos;s build together.</div>
          <div className="space-y-1">
            <div>
              <a href="mailto:pahalsrivastava05@gmail.com" className="text-[#0D9488] dark:text-[#5FE3C0] hover:underline">
                pahalsrivastava05@gmail.com
              </a>
            </div>
            <div>+91 93800 61839</div>
          </div>
          <div className="mt-12 text-xs text-[#94A3B8] dark:text-[#8C97A5]/50 border-t border-[#E2E8F0] dark:border-[#232B36] pt-6">
            © 2026 Pahal Srivastava. Crafted with Next.js, Framer Motion &amp; Tailwind.
          </div>
        </footer>
      </div>
    </main>
  );
}