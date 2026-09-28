import React from 'react';
import {
  Video,
  Play,
  Instagram,
  Sparkles,
  Volume2,
  ExternalLink,
  MessageCircle,
  Share2
} from 'lucide-react';
import { presentationVideos } from '../config/portfolio-data';

export default function PresentationVideos() {
  return (
    <section id="presentation" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Red Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>Tech Storytelling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Beyond Code — <span className="text-red-600">Technology & Presentation</span>
          </h2>
          <blockquote className="text-base sm:text-lg text-zinc-300 italic font-light border-l-4 border-red-600 pl-4 py-1 max-w-2xl mx-auto text-left sm:text-center sm:border-l-0 sm:border-t-2 sm:pt-4">
            "Technology is not only about building solutions. It is also about explaining ideas, presenting possibilities, and connecting people with technology."
          </blockquote>
        </div>

        {/* Competencies Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            "Video Presentation",
            "Technology Presentation",
            "Public Speaking",
            "Product Presentation",
            "Technical Explanation",
            "Presentation Design",
            "Content Creation",
            "Communication"
          ].map((item, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold hover:border-red-600/40 hover:text-white transition-all"
            >
              ✨ {item}
            </span>
          ))}
        </div>

        {/* Video Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentationVideos.map((video) => (
            <div
              key={video.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600/50 shadow-2xl hover:shadow-red-600/20 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Banner Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${video.thumbnailBg} flex flex-col items-center justify-center p-6 text-center overflow-hidden`}>
                {video.coverImage && (
                  <img
                    src={video.coverImage}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent group-hover:opacity-60 transition-opacity" />
                
                {/* Play Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:scale-110 transition-transform relative z-10 border-2 border-white/20">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>

                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase border border-white/20">
                  <Instagram className="w-3 h-3 text-rose-400" />
                  <span>{video.platform}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-white group-hover:text-red-500 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 hover:scale-105 transition-all"
                  >
                    <span>Watch Video</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
