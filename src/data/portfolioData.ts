export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

export interface ProfileDetails {
  name: string;
  title: string;
  linkedin: string;
  githubUsername: string;
}

export interface PortfolioDataConfig {
  timeline: TimelineItem[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
  toolbox: string[];
  profile: ProfileDetails;
}

export const portfolioData: PortfolioDataConfig = {
  // 1. TIMELINE & EXPERIENCES (Moved First)
  timeline: [
    {
      year: "2024 - Present",
      role: "Full Stack Developer",
      company: "Your Company / Freelance",
      description: "Building scalable web architecture and data-driven systems."
    }
  ],

  // 2. ACHIEVEMENTS (Moved Second)
  achievements: [
    { 
      title: "Hackathon Winner", 
      detail: "Built a fully functional real-time dashboard in 48 hours." 
    },
    { 
      title: "Open Source Contributor", 
      detail: "Merged 50+ PRs across globally recognized developer tools." 
    }
  ],

  // 3. PROJECTS (With 'SmartLife Public' added)
  projects: [
    {
      title: "SmartLife Public",
      description: "A data-driven web application built with React, Clerk authentication, and PostgreSQL that helps users track their expenses, habits, and goals. This app empowers users to monitor their spending, build lasting routines, and analyze behavioral trends seamlessly.",
      techStack: ["React", "Clerk Auth", "PostgreSQL", "Tailwind CSS"],
      liveLink: "https://your-live-demo-link.com",
      githubLink: "https://github.com"
    }
  ],

  // 4. TECH TOOLBOX
  toolbox: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "Git"],

  // Profile Specifics
  profile: {
    name: "Your Name",
    title: "Full-Stack Engineer & Product Builder",
    linkedin: "https://linkedin.com", 
    githubUsername: "YOUR_GITHUB_USERNAME" 
  }
};