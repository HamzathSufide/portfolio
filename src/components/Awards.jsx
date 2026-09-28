import React from 'react';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  Star,
  Building2,
  Calendar
} from 'lucide-react';
import { featuredAward } from '../config/portfolio-data';

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Red Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Awards & <span className="text-red-600">Recognition</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Formal organizational recognition for leadership excellence, engineering adaptability, and consistent high performance.
          </p>
        </div>

        {/* Featured Award Premium Card */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-3xl p-8 sm:p-12 border-2 border-red-600/40 shadow-2xl shadow-red-600/20 max-w-4xl mx-auto relative overflow-hidden group">
          
          {/* Subtle Decorative Badge Icon */}
          <div className="absolute -right-8 -bottom-8 opacity-10 text-red-500 pointer-events-none">
            <Trophy className="w-80 h-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 3D Red Badge Icon */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 p-0.5 shadow-2xl shadow-red-600/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[22px] bg-zinc-950 flex flex-col items-center justify-center p-4">
                  <Trophy className="w-12 h-12 text-red-500 mb-1 animate-pulse-glow" />
                  <div className="flex gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/30 text-xs font-bold uppercase">
                {featuredAward.badge}
              </span>
            </div>

            {/* Right Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-semibold">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-red-500" />
                  <span>{featuredAward.organization}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-500" />
                  <span>{featuredAward.period}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-500 transition-colors">
                {featuredAward.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Awarded by Aitrich Technologies in recognition of exceptional professional performance, leadership mindset, continuous innovation, and adaptable problem-solving across core Java development projects.
              </p>

              {/* Award Highlights */}
              <div className="space-y-2 pt-2 border-t border-zinc-800">
                {featuredAward.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
