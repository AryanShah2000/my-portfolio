import React from "react";
import GlassCard from "./GlassCard";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "selfscan.ai",
      time: "Nov 2025",
      description: "An app to discuss any health concerns and build a historical health log which doctors can easily interpret.",
      tech: ["Next.js", "Supabase", "OpenAI"]
    },
    {
      id: 2,
      title: "ReBal",
      time: "Oct 2025",
      description: "An app designed to help individuals understand their portfolio mix and net worth projections.",
      tech: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "KeepUp",
      time: "Oct 2025 - Present",
      description: "A weekly newsletter aimed at breaking down advancements in the AI industry for a non-technical audience.",
      tech: ["Research", "Substack", "Perplexity"]
    },
    {
      id: 4,
      title: "MyFFAgent",
      time: "Aug 2025",
      description: "An app created to help fantasy football players that participate in several leagues.",
      tech: ["HTML", "Javascript"]
    },
    {
      id: 5,
      title: "My9",
      time: "July 2025",
      description: "A productivity app aimed at gamifying your short-term goals using psychologically proven techniques.",
      tech: ["HTML", "Javascript"]
    },
    {
      id: 6,
      title: "ChatAnalyzer",
      time: "Oct 2024",
      description: "A fun tool to analyze your WhatsApp group chats, to see who has sent the most & least messages over time.",
      tech: ["Python", "Colab"]
    }
  ];

  return (
    <section id="projects" className="w-full pt-12 pb-24 px-6 bg-gradient-to-br from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl font-bold text-white px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <GlassCard key={project.id} className="h-full">
              {/* Project Title and Time */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-white/60">{project.time}</p>
              </div>
              
              {/* Project Image */}
              <div className="w-full h-48 mb-4 bg-white/10 border-2 border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                {project.id === 1 ? (
                  <img 
                    src="/selfscan.png" 
                    alt="SelfScan project" 
                    className="w-full h-full object-cover"
                  />
                ) : project.id === 2 ? (
                  <img 
                    src="/rebal.png" 
                    alt="ReBal project" 
                    className="w-full h-full object-cover"
                  />
                ) : project.id === 3 ? (
                  <img 
                    src="/keepup.png" 
                    alt="KeepUp project" 
                    className="w-full h-full object-cover"
                  />
                ) : project.id === 4 ? (
                  <img 
                    src="/myffagent.png" 
                    alt="MyFFAgent project" 
                    className="w-full h-full object-cover"
                  />
                ) : project.id === 5 ? (
                  <img 
                    src="/my9.png" 
                    alt="My9 project" 
                    className="w-full h-full object-cover"
                  />
                ) : project.id === 6 ? (
                  <img 
                    src="/chatanalyzer.png" 
                    alt="ChatAnalyzer project" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white/60 text-center">
                    <svg 
                      className="w-16 h-16 mx-auto mb-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <p className="text-xs">Project Image</p>
                  </div>
                )}
              </div>
              
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}