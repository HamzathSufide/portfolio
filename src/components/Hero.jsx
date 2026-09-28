import React from 'react';
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  MessageSquare,
  ArrowRight,
  FileText,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Code2,
  Video
} from 'lucide-react';
import { personalInfo, socialLinks } from '../config/portfolio-data';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-red-50/50 via-white to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-rose-600 rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Subheadline Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 bg-zinc-900 text-white text-xs font-bold rounded-md shadow-sm">
                Java Backend Developer
              </span>
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-md shadow-sm">
                Software Engineer
              </span>
              <span className="px-3 py-1 bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-bold rounded-md">
                Technology Presenter
              </span>
              <span className="px-3 py-1 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-md">
                Project & Business Enthusiast
              </span>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              "{personalInfo.bio}"
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-black text-red-600">3+ Yrs</div>
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Tech Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-black text-zinc-900">Enterprise</div>
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Java & Banking</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-black text-red-600">Multitalented</div>
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Dev + Presenter</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Connect:</span>
              
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all duration-200"
                title="WhatsApp Direct Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Column - Profile Frame Visual */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Outer Decorative Ring */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-600 via-rose-500 to-zinc-900 rotate-6 blur-md opacity-40 animate-pulse-glow" />
              
              {/* Inner Styled Border Card */}
              <div className="relative w-full h-full rounded-3xl bg-zinc-950 p-2 border-2 border-red-600/40 shadow-2xl overflow-hidden group">
                {/* Visual Treatment Image */}
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Red Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                {/* Floating Info Overlay Tags */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-red-600/30 text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold">Java & Spring Boot</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-red-600 text-white font-black uppercase">
                      Enterprise
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-rose-400" />
                      <span className="text-xs font-bold">Tech Presenter</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold">
                      Public Speaker
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
