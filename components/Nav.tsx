'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="mainNav"
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-border-glass ${
        scrolled
          ? 'bg-bg-dark/95 shadow-lg border-accent-red/30 backdrop-blur-xl'
          : 'bg-bg-dark/75 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-2.5 font-display font-extrabold text-[16px] tracking-wide text-text-main shrink-0 mr-3.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-red shadow-[0_0_12px_#ff2d4b] animate-pulse" />
          <span>
            ATHARVA<span className="text-accent-red">DENGRE</span>
          </span>
        </a>

        <div
          id="navMenu"
          className={`flex items-center gap-5 flex-nowrap font-mono text-[11.5px] uppercase tracking-wider text-text-muted transition-transform duration-300 max-[1100px]:fixed max-[1100px]:top-[70px] max-[1100px]:left-0 max-[1100px]:w-full max-[1100px]:bg-bg-dark/95 max-[1100px]:backdrop-blur-2xl max-[1100px]:p-8 max-[1100px]:flex-col max-[1100px]:border-b max-[1100px]:border-accent-red ${
            mobileOpen ? 'max-[1100px]:translate-y-0' : 'max-[1100px]:-translate-y-[150%]'
          }`}
        >
          <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-user-astronaut text-[11px] opacity-70" /> About
          </a>
          <a href="#experience" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-briefcase text-[11px] opacity-70" /> Experience
          </a>
          <a href="#activate" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-layer-group text-[11px] opacity-70" /> Methodology
          </a>
          <a href="#sap-ai" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-brain text-[11px] opacity-70" /> SAP × AI
          </a>
          <a href="#certifications" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-certificate text-[11px] opacity-70" /> Certs
          </a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-sliders text-[11px] opacity-70" /> Skills
          </a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-cubes text-[11px] opacity-70" /> Projects
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-accent-red transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <i className="fa-solid fa-paper-plane text-[11px] opacity-70" /> Contact
          </a>
        </div>

        <div className="flex items-center gap-3.5 shrink-0">
          <a href="#simulator" className="btn-glass text-[11px] py-2 px-3.5 border-accent-red/40 shadow-[0_0_15px_rgba(255,45,75,0.2)]">
            <i className="fa-solid fa-microchip text-accent-red" /> Live AI Simulator
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hidden max-[1100px]:block bg-transparent border border-border-glass text-text-main text-lg py-2 px-3 rounded-md cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </nav>
  );
}
