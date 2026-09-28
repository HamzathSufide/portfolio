import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../config/portfolio-data';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'PM & Delivery', href: '#pm-delivery' },
    { label: 'Presentation', href: '#presentation' },
    { label: 'Business', href: '#business' },
    { label: 'Versatility', href: '#versatility' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-red-600/20 py-3 shadow-xl shadow-black/20 text-white'
          : 'bg-transparent py-5 text-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer text-decoration-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-xl shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform duration-300">
              H
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg tracking-tight ${scrolled ? 'text-white' : 'text-zinc-950'}`}>
                {personalInfo.shortName}
                <span className="text-red-600">.</span>
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-red-600 -mt-1">
                ENGINEER & PRESENTER
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                  scrolled
                    ? 'text-zinc-300 hover:text-white hover:bg-red-600/10'
                    : 'text-zinc-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Connect CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                scrolled ? 'text-white hover:bg-zinc-800' : 'text-zinc-900 hover:bg-zinc-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-zinc-950 border-b border-red-600/20 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-xs font-semibold text-zinc-200 hover:text-white hover:bg-red-600/20 border border-zinc-800"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30"
            >
              <Send className="w-4 h-4" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
