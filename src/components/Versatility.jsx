import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Zap,
  Code2,
  Server,
  Kanban,
  Presentation,
  Video,
  TrendingUp,
  Award,
  Cpu,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { versatilityCapabilities } from '../config/portfolio-data';

export default function Versatility() {
  const getIconForNumber = (num) => {
    switch (num) {
      case "01": return Code2;
      case "02": return Server;
      case "03": return Kanban;
      case "04": return Presentation;
      case "05": return Video;
      case "06": return TrendingUp;
      case "07": return Award;
      case "08": return Cpu;
      case "09": return MessageSquare;
      case "10": return BookOpen;
      default: return Zap;
    }
  };

  return (
    <section id="versatility" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multidisciplinary Skillset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight uppercase">
            One Professional. <span className="text-red-600">Multiple Capabilities.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Combining software engineering mastery with project delivery, clear presentation, business thinking, and creative execution.
          </p>
        </div>

        {/* 10 Animated Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {versatilityCapabilities.map((item) => {
            const Icon = getIconForNumber(item.number);
            return (
              <div
                key={item.number}
                className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200 hover:border-red-600/50 hover:bg-white shadow-sm hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 px-2 py-0.5 rounded bg-red-50 border border-red-200">
                      {item.number}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-base font-black text-zinc-950 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-[11px] font-bold text-red-700 uppercase tracking-wider">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-zinc-200 flex items-center justify-between text-[10px] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <span>CAPABILITY</span>
                  <span>✓ VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
