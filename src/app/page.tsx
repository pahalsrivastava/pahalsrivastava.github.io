"use client";

import { motion } from "framer-motion";
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
    desc: "An AI-powered UI generator converting natural-language prompts into 20+ reusable components with live Monaco editor integration[cite: 1].",
    tags: ["React.js", "Gemini API", "Vercel", "Tailwind CSS"],
  },
  {
    title: "TravelMate",
    desc: "An AI travel planner powered by Gemini API, supporting 5+ planning workflows and 6 cached RESTful APIs over PostgreSQL[cite: 1].",
    tags: ["TypeScript", "Flask", "PostgreSQL", "Tailwind CSS"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#E7ECF1] selection:bg-[#8B7CF6] selection:text-black">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#0B0F14]/80 border-b border-[#232B36]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight text-white">Pahal Srivastava[cite: 1]</span>
          <div className="flex gap-6 text-sm text-[#8C97A5] font-mono">
            <a href="#about" className="hover:text-[#5FE3C0] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#5FE3C0] transition-colors">Experience</a>
            <a href="#activity" className="hover:text-[#5FE3C0] transition-colors">Activity</a>
            <a href="#projects" className="hover:text-[#5FE3C0] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#5FE3C0] transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24 border-b border-[#232B36]"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#161C25] border border-[#232B36] font-mono text-xs text-[#5FE3C0] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5FE3C0] animate-pulse" />
            Bengaluru, India[cite: 1]
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
            Engineering intelligent systems <br />
            from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7CF6] to-[#5FE3C0]">models to production.</span>
          </h1>

          <p className="font-mono text-[#8B7CF6] text-base mb-6">
            Software Engineer · Full-Stack &amp; Agentic AI Systems[cite: 1]
          </p>

          <p className="text-[#8C97A5] max-w-xl text-base leading-relaxed mb-8">
            Specialized in bridging high-performance distributed backends with agentic AI architectures. Focused on low-latency microservices, fine-tuned LLM workflows, and resilient engineering.
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <a 
              href="mailto:pahalsrivastava05@gmail.com" 
              className="bg-[#E7ECF1] text-black px-5 py-2.5 rounded-lg font-medium hover:bg-white transition-all shadow-sm shadow-[#E7ECF1]/10"
            >
              Email me[cite: 1]
            </a>
            <a 
              href="https://github.com/pahalsrivastava" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-[#232B36] px-5 py-2.5 rounded-lg text-[#E7ECF1] hover:border-[#8B7CF6] hover:bg-[#161C25] transition-all"
            >
              GitHub[cite: 1]
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-[#232B36] px-5 py-2.5 rounded-lg text-[#8C97A5] hover:border-[#5FE3C0] hover:text-[#5FE3C0] transition-all"
            >
              Resume ↗
            </a>
          </div>
        </motion.section>

        {/* ABOUT */}
        <section id="about" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2 uppercase tracking-wider">About</div>
          <div className="bg-[#11161D] border border-[#232B36] rounded-xl p-6 font-mono text-sm space-y-3 shadow-inner">
            <div><span className="text-[#5FE3C0]">$</span> whoami</div>
            <div className="text-[#8C97A5]">Software engineer crafting multimodal agentic systems and scalable distributed workflows.</div>
            <div><span className="text-[#5FE3C0]">$</span> cat interests.txt</div>
            <div className="text-[#8C97A5]">Agentic LLM architectures · RAG pipelines · High-concurrency orchestrations · Edge intelligence</div>
            <div className="text-[#8C97A5]/70 pt-2 border-t border-[#232B36]"># B.E. CSE, Dayananda Sagar College of Engineering — CGPA 9.2[cite: 1]</div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2 uppercase tracking-wider">Experience</div>
          <h2 className="text-2xl font-bold mb-10 tracking-tight">Timeline</h2>

          <div className="relative pl-6 sm:pl-8 border-l border-[#232B36] space-y-8 my-4">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <span 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                    exp.current 
                      ? "border-[#5FE3C0] bg-[#0B0F14] shadow-[0_0_10px_#5FE3C0]" 
                      : "border-[#232B36] bg-[#11161D] group-hover:border-[#8B7CF6]"
                  }`}
                />

                {/* Card */}
                <div className="p-4 rounded-xl border border-transparent group-hover:border-[#232B36] group-hover:bg-[#11161D]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-base text-white group-hover:text-[#5FE3C0] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="font-mono text-[10px] text-[#5FE3C0] bg-[#5FE3C0]/10 px-2 py-0.5 rounded-full">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-[#8C97A5] font-mono mt-0.5">
                      {exp.company} <span className="text-[#232B36] mx-1.5">•</span> <span className="text-xs text-[#8C97A5]/80">{exp.type}</span>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#8C97A5] whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GITHUB ACTIVITY */}
        <section id="activity" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2 uppercase tracking-wider">GitHub Activity</div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Contributions, combined</h2>
          <Heatmap />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2 uppercase tracking-wider">Projects</div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Things I&apos;ve built</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((proj) => (
              <div 
                key={proj.title} 
                className="p-6 rounded-xl border border-[#232B36] bg-[#11161D] hover:border-[#8B7CF6]/50 transition-all group"
              >
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#8B7CF6] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#8C97A5] leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-[#5FE3C0] bg-[#5FE3C0]/10 px-2.5 py-0.5 rounded-full border border-[#5FE3C0]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2 uppercase tracking-wider">Skills</div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Toolbox</h2>
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs text-[#8C97A5] mb-2">AI / LLM</div>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude", "Llama", "Hugging Face", "LangChain", "TensorFlow", "RAG", "Prompt Engineering", "LLM Fine-Tuning", "AI Agents"].map(s => (
                  <span key={s} className="border border-[#232B36] bg-[#11161D] rounded-lg px-3 py-1.5 text-xs text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#8C97A5] mb-2">Languages &amp; Frameworks</div>
              <div className="flex flex-wrap gap-2">
                {["Python", "TypeScript", "JavaScript", "C++", "React", "Node.js", "GraphQL", "Flask", "REST APIs"].map(s => (
                  <span key={s} className="border border-[#232B36] bg-[#11161D] rounded-lg px-3 py-1.5 text-xs text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#8C97A5] mb-2">Data &amp; Infra</div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "Docker", "Apache Airflow", "CI/CD", "Sentry", "Jest", "Git"].map(s => (
                  <span key={s} className="border border-[#232B36] bg-[#11161D] rounded-lg px-3 py-1.5 text-xs text-[#E7ECF1] hover:border-[#8B7CF6] transition-colors font-mono">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-20 font-mono text-sm text-[#8C97A5]">
          <div className="text-xs text-[#5FE3C0] mb-2 uppercase tracking-wider">Contact</div>
          <div className="text-white text-xl font-bold mb-4">Let&apos;s build together.</div>
          <div className="space-y-1">
            <div>
              <a href="mailto:pahalsrivastava05@gmail.com" className="text-[#5FE3C0] hover:underline">
                pahalsrivastava05@gmail.com[cite: 1]
              </a>
            </div>
            <div>+91 93800 61839[cite: 1]</div>
          </div>
          <div className="mt-12 text-xs text-[#8C97A5]/50 border-t border-[#232B36] pt-6">
            © 2026 Pahal Srivastava. Crafted with Next.js, Framer Motion &amp; Tailwind.
          </div>
        </footer>
      </div>
    </main>
  );
}