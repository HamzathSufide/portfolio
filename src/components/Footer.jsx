import React from 'react';
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Mail,
  ArrowUp
} from 'lucide-react';
import { personalInfo, socialLinks } from '../config/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Left Brand info */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-xl font-black tracking-tight uppercase">
              {personalInfo.name} <span className="text-red-600">.</span>
            </div>
            <p className="text-xs text-zinc-400 font-medium max-w-md">
              Software Engineer | Java Backend Developer | Technology Presenter | Project & Business Enthusiast
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg shadow-red-600/30"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © 2026 Hamzath Sufide P S. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-zinc-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
