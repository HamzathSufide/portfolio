import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { experience } from '../config/portfolio-data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            Professional <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Hands-on engineering trajectory working across enterprise banking systems, core Java microservices, and modern web applications.
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Red Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-red-600 via-rose-500 to-zinc-300 -translate-x-1/2 rounded-full hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-1 bg-red-600 rounded-full sm:hidden" />

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border-4 border-red-600 text-white shadow-lg shadow-red-600/40">
                    <Building2 className="w-4 h-4 text-red-500" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl hover:border-red-600/50 hover:shadow-red-600/10 transition-all duration-300 group">
                      
                      {/* Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500">
                          <Calendar className="w-3.5 h-3.5 text-red-600" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-950 group-hover:text-red-600 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-bold text-zinc-700 mb-2 flex items-center gap-2">
                        <span>{item.company}</span>
                        <span className="text-zinc-300">•</span>
                        <span className="text-xs text-zinc-500 font-medium">{item.location}</span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-2 mb-6">
                        <h4 className="text-[11px] font-black uppercase text-zinc-400 tracking-wider">
                          Key Deliverables & Responsibilities:
                        </h4>
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 text-[11px] font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
