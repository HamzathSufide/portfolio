import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Code,
  ArrowRight,
  X
} from 'lucide-react';
import { projects } from '../config/portfolio-data';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Red Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Engineering <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Scalable cloud applications, secure API systems, and backend microservice architectures engineered for production performance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-800 hover:border-red-600/50 shadow-2xl hover:shadow-red-600/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-md bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase">
                    {project.highlightBadge}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Contribution Box */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-red-600/20 text-xs text-zinc-300">
                  <span className="font-bold text-red-400 block mb-1">My Technical Contribution:</span>
                  <span>{project.myContribution}</span>
                </div>

                {/* Key Features List */}
                <div className="space-y-1.5 pt-1">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Footer: Tech Badges & View Button */}
              <div className="pt-6 mt-6 border-t border-zinc-800 space-y-4">
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-[11px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 hover:scale-105 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-red-600/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative text-white shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-3 py-1 rounded-md bg-red-600/20 text-red-400 text-xs font-bold uppercase">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-2 text-white">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {selectedProject.summary}
            </p>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-red-600/30 space-y-2">
              <h4 className="text-xs font-bold text-red-400 uppercase">Architecture & Contribution</h4>
              <p className="text-xs sm:text-sm text-zinc-300">
                {selectedProject.myContribution}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">All Key Features:</h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-zinc-800 text-xs font-semibold text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-rose-600 transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
