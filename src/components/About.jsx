import React, { useState } from 'react';
import {
  Code2,
  Kanban,
  Presentation,
  TrendingUp,
  Video,
  CheckCircle2,
  Sparkles,
  Layers,
  Zap,
  Target
} from 'lucide-react';
import { aboutDimensions } from '../config/portfolio-data';

export default function About() {
  const [activeTab, setActiveTab] = useState('engineering');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-red-600" />;
      case 'Kanban': return <Kanban className="w-5 h-5 text-red-600" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-red-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-red-600" />;
      case 'Video': return <Video className="w-5 h-5 text-red-600" />;
      default: return <Sparkles className="w-5 h-5 text-red-600" />;
    }
  };

  const selectedDimension = aboutDimensions.find(d => d.id === activeTab) || aboutDimensions[0];

  return (
    <section id="about" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <UserIcon className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            About <span className="text-red-600">Me</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            I am a Software Engineer specializing in Java and Spring Boot with experience building enterprise applications, REST APIs, database-driven systems, and modern web applications. Beyond writing code, I combine engineering precision with project coordination, technology presentation, business understanding, and creative video storytelling.
          </p>
        </div>

        {/* 5 Dimensions Interactive Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          {aboutDimensions.map((dim) => {
            const isActive = activeTab === dim.id;
            return (
              <button
                key={dim.id}
                onClick={() => setActiveTab(dim.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-950 text-white shadow-lg shadow-black/20 border-2 border-red-600 scale-105'
                    : 'bg-white text-zinc-700 hover:bg-red-50 hover:text-red-600 border border-zinc-200'
                }`}
              >
                {getIcon(dim.icon)}
                <span>{dim.title}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Dimension Highlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/50 max-w-5xl mx-auto transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase">
                <Target className="w-3.5 h-3.5" />
                <span>{selectedDimension.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950">
                {selectedDimension.title} Capabilities
              </h3>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {selectedDimension.description}
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-zinc-950 text-white space-y-2 border border-red-600/30">
                  <div className="flex items-center justify-between text-xs font-bold text-red-400">
                    <span>VERSATILE CAPABILITY FOCUS</span>
                    <span>100% ALIGNED</span>
                  </div>
                  <div className="text-xs text-zinc-300 font-medium">
                    Integrating software development with multidisciplinary professional capabilities.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Skills Grid */}
            <div className="lg:col-span-6">
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 space-y-3">
                <h4 className="text-xs font-black uppercase text-zinc-400 tracking-wider mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-red-600" />
                  <span>Key Competencies</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDimension.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-red-600/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function UserIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
