import React, { useState } from 'react';
import {
  Server,
  Database,
  Layout,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { techStack } from '../config/portfolio-data';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    { key: 'backend', label: 'Backend', icon: Server },
    { key: 'database', label: 'Database', icon: Database },
    { key: 'frontend', label: 'Frontend', icon: Layout },
    { key: 'security', label: 'Security', icon: ShieldCheck },
    { key: 'testing', label: 'Testing', icon: CheckCircle2 },
    { key: 'practices', label: 'Practices', icon: Workflow },
  ];

  const currentCategoryData = techStack[activeCategory] || techStack.backend;

  return (
    <section id="skills" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            Technology <span className="text-red-600">Stack</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Core engineering competencies, frameworks, database systems, and modern software development practices.
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-950 text-white border-2 border-red-600 shadow-lg shadow-black/20 scale-105'
                    : 'bg-white text-zinc-700 hover:bg-red-50 hover:text-red-600 border border-zinc-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-red-500' : 'text-zinc-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-600/30">
              ⚡
            </div>
            <div>
              <h3 className="text-2xl font-black text-zinc-950">
                {currentCategoryData.category}
              </h3>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                Production Tested Competencies
              </p>
            </div>
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategoryData.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-red-600/40 hover:bg-white transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-zinc-200 text-zinc-700">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Visual Indicator Bar */}
                <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
