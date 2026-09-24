import React from 'react';
import { portfolioData, TimelineItem, AchievementItem, ProjectItem } from '../data/portfolioData';

export default function Portfolio(): React.JSX.Element {
  const { timeline, achievements, projects, toolbox, profile } = portfolioData;

  return (
    // Rich, dark gradient background to make the glass panels pop beautifully
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 p-6 md:p-12 space-y-12 font-sans">
      
      {/* HEADER SECTION (Removed Resume Button, Direct LinkedIn Connect) */}
      <header className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {profile.name}
          </h1>
          <p className="text-slate-400 mt-2 text-lg">{profile.title}</p>
        </div>
        <div className="flex gap-4">
          <a 
            href={profile.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Connect with Me
          </a>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto space-y-12">

        {/* 1. TIMELINE & FIRST EXPERIENCE */}
        <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">⏳ Professional Timeline</h2>
          <div className="space-y-6 border-l-2 border-slate-700 pl-4 ml-2">
            {timeline.map((exp: TimelineItem, idx: number) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900 group-hover:bg-emerald-400 transition-colors" />
                <span className="text-sm font-semibold text-slate-500">{exp.year}</span>
                <h3 className="text-lg font-bold text-slate-200">
                  {exp.role} @ <span className="text-emerald-400">{exp.company}</span>
                </h3>
                <p className="text-slate-400 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. ACHIEVEMENTS */}
        <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">🏆 Major Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach: AchievementItem, idx: number) => (
              <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-all">
                <h3 className="font-bold text-slate-200">{ach.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{ach.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DYNAMIC GITHUB CONTRIBUTIONS HEATMAP (Moved above Toolbox) */}
        <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">📊 Code Contributions</h2>
          <div className="flex justify-center items-center p-4 bg-slate-950/40 rounded-xl border border-white/5 overflow-x-auto">
            <img 
              src={`https://rshah.org{profile.githubUsername}`} 
              alt="GitHub Contributions Heatmap" 
              className="max-w-full h-auto filter invert brightness-125 dark:invert-0 contrast-125"
            />
          </div>
        </section>

        {/* 4. TECH TOOLBOX */}
        <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🛠️ Tech Toolbox</h2>
          <div className="flex flex-wrap gap-2">
            {toolbox.map((tech: string, idx: number) => (
              <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 5. PROJECTS (Includes SmartLife Public) */}
        <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">💻 Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj: ProjectItem, idx: number) => (
              <div key={idx} className="flex flex-col justify-between p-6 bg-white/5 border border-white/5 hover:border-white/20 rounded-xl transition-all shadow-md group">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.techStack.map((tech: string, tIdx: number) => (
                      <span key={tIdx} className="text-xs bg-slate-900 text-blue-400 px-2.5 py-1 rounded-md font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
                  <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-400 hover:underline">Live Demo →</a>
                  <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 hover:text-slate-200 hover:underline">Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. RUNTIME CONSOLE (Moved to the absolute bottom) */}
        <section className="backdrop-blur-md bg-black/40 border border-red-500/20 rounded-2xl p-6 md:p-8 shadow-2xl font-mono">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500 ml-2">bash — runtime_console.log</span>
            </div>
            <span className="text-xs text-emerald-400 animate-pulse">● System Active</span>
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <p className="text-slate-500">\$ npm run start:portfolio</p>
            <p className="text-blue-400">› Compiling layout components...</p>
            <p className="text-emerald-400">✔ Applied glassmorphism layers successfully.</p>
            <p className="text-indigo-400">› Synced GitHub contribution engine.</p>
            <p className="text-slate-400">› Loaded module: SmartLife Public (React, Clerk, PG).</p>
            <p className="text-yellow-500 font-semibold mt-2">Ready on http://localhost:3000 🔥</p>
          </div>
        </section>

      </main>
    </div>
  );
}
