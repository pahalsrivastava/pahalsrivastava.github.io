"use client";

import { motion } from "framer-motion";
import { Heatmap } from "@/components/Heatmap";

const experiences = [
  {
    idx: "01",
    role: "Associate Software Engineer",
    company: "Talview (AIWF Technologies Pvt Ltd)",
    period: "April 2026 – Present",
    bullets: [
      "Created 15+ Temporal workflows for cron jobs and background processing, optimizing high-concurrency exam stability.",
      "Built real-time data pipelines automating 7+ recurring reports, eliminating manual reporting overhead.",
      "Contributed to Alvy, Talview's patented multimodal AI proctor, driving 90% parity with human proctors.",
      "Built a multimodal RAG assistant inside Alvy using vector search and tool-calling, slashing support tickets by 70%.",
    ],
  },
  {
    idx: "02",
    role: "Software Development Intern",
    company: "Talview (AIWF Technologies Pvt Ltd)",
    period: "Sept 2025 – April 2026",
    bullets: [
      "Rebuilt 3 core Temporal UI interfaces, improving frontend monitoring performance.",
      "Migrated 20+ React components into shared components, reducing duplicate code.",
      "Added distributed tracing and uplifted test coverage using Sentry and Jest.",
    ],
  },
  {
    idx: "03",
    role: "Developer Project Intern",
    company: "Gail India Limited",
    period: "Jul 2025 – Sept 2025",
    bullets: [
      "Modernized legacy SCADA infrastructure, upgrading EIGRP-based systems.",
      "Diagnosed recurring network faults, reducing network errors by 9.5%.",
    ],
  },
  {
    idx: "04",
    role: "ML Intern",
    company: "PlantoAI",
    period: "Feb 2025 – Apr 2025",
    bullets: [
      "Owned end-to-end ML pipelines fine-tuning open-source LLMs into 3 production AI copilots.",
      "Refined fine-tuning and prompting strategies, cutting hallucination rates by 30%.",
    ],
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
  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#E7ECF1] selection:bg-[#8B7CF6] selection:text-black">
      <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#0B0F14]/80 border-b border-[#232B36]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-sm">Pahal Srivastava</span>
          <div className="flex gap-5 text-sm text-[#8C97A5] font-mono">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#activity" className="hover:text-white transition">Activity</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <motion.section 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 border-b border-[#232B36]"
        >
          <div className="font-mono text-xs text-[#5FE3C0] mb-3">Bengaluru, India</div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Building the systems<br />behind AI that works.
          </h1>
          <p className="font-mono text-[#8B7CF6] mb-6">Software Engineer · Full-Stack &amp; LLM Systems</p>
          <p className="text-[#8C97A5] max-w-xl text-base mb-8">
            Building event-driven microservices, real-time data pipelines, and production agentic AI proctor systems at Talview.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <a href="mailto:pahalsrivastava05@gmail.com" className="bg-[#E7ECF1] text-black px-4 py-2 rounded font-medium hover:bg-white transition">
              Email me
            </a>
            <a href="https://github.com/pahalsrivastava" target="_blank" rel="noreferrer" className="border border-[#232B36] px-4 py-2 rounded hover:border-[#8B7CF6] transition">
              GitHub
            </a>
          </div>
        </motion.section>

        <section id="about" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2">About</div>
          <div className="bg-[#11161D] border border-[#232B36] rounded-lg p-5 font-mono text-sm space-y-3">
            <div><span className="text-[#5FE3C0]">$</span> whoami</div>
            <div className="text-[#8C97A5]">Associate Software Engineer at Talview (AIWF Technologies), working on Alvy — a patented multimodal agentic AI proctor.</div>
            <div><span className="text-[#5FE3C0]">$</span> cat interests.txt</div>
            <div className="text-[#8C97A5]">RAG systems · LLM fine-tuning · distributed backend infra · edge computing</div>
            <div className="text-[#8C97A5]/70 pt-2 border-t border-[#232B36]"># B.E. CSE, Dayananda Sagar College of Engineering — CGPA 9.2</div>
          </div>
        </section>

        <section id="experience" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2">Experience</div>
          <h2 className="text-2xl font-bold mb-10">Where I&apos;ve worked</h2>
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.idx} className="grid grid-cols-[32px_1fr] gap-4">
                <span className="font-mono text-xs text-[#8B7CF6]">{exp.idx}</span>
                <div>
                  <h3 className="font-medium text-lg text-white">{exp.role} — {exp.company}</h3>
                  <div className="font-mono text-xs text-[#8C97A5] mb-3">{exp.period}</div>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-[#8C97A5]">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="activity" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2">GitHub Activity</div>
          <h2 className="text-2xl font-bold mb-8">Contributions, combined</h2>
          <Heatmap />
        </section>

        <section id="projects" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2">Projects</div>
          <h2 className="text-2xl font-bold mb-8">Things I&apos;ve built</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((proj) => (
              <div key={proj.title} className="p-5 rounded-lg border border-[#232B36] bg-[#11161D]">
                <h3 className="font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-xs text-[#8C97A5] mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-[#5FE3C0] bg-[#5FE3C0]/10 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16 border-b border-[#232B36]">
          <div className="font-mono text-xs text-[#5FE3C0] mb-2">Skills</div>
          <h2 className="text-2xl font-bold mb-8">Toolbox</h2>
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs text-[#8C97A5] mb-2">AI / LLM</div>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude", "Llama", "Hugging Face", "LangChain", "TensorFlow", "RAG", "Prompt Engineering", "LLM Fine-Tuning", "AI Agents"].map(s => (
                  <span key={s} className="border border-[#232B36] rounded-full px-3 py-1 text-xs text-[#E7ECF1]">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#8C97A5] mb-2">Languages &amp; Frameworks</div>
              <div className="flex flex-wrap gap-2">
                {["Python", "TypeScript", "JavaScript", "C++", "React", "Node.js", "GraphQL", "Flask", "REST APIs"].map(s => (
                  <span key={s} className="border border-[#232B36] rounded-full px-3 py-1 text-xs text-[#E7ECF1]">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#8C97A5] mb-2">Data &amp; Infra</div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "Docker", "Apache Airflow", "CI/CD", "Sentry", "Jest", "Git"].map(s => (
                  <span key={s} className="border border-[#232B36] rounded-full px-3 py-1 text-xs text-[#E7ECF1]">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-16 font-mono text-sm text-[#8C97A5]">
          <div className="text-xs text-[#5FE3C0] mb-2">Contact</div>
          <div className="text-white text-lg font-bold mb-4">Let&apos;s talk</div>
          <div><a href="mailto:pahalsrivastava05@gmail.com" className="text-[#5FE3C0] hover:underline">pahalsrivastava05@gmail.com</a></div>
          <div>+91 93800 61839</div>
          <div className="mt-8 text-xs text-[#8C97A5]/60">© 2026 Pahal Srivastava</div>
        </footer>
      </div>
    </main>
  );
}