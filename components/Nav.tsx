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
    <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-wrap">
        <a href="#" className="logo-brand">
          <span className="logo-dot"></span>
          <span className="logo-text">
            ATHARVA<span className="highlight">DENGRE</span>
          </span>
        </a>

        <div className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`} id="navMenu">
          <a href="#simulator" onClick={() => setMobileOpen(false)} className="nav-link text-accent-red font-bold">
            <i className="fa-solid fa-microchip nav-icon text-accent-red"></i> Live AI Simulator
          </a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-user-astronaut nav-icon"></i> About
          </a>
          <a href="#experience" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-briefcase nav-icon"></i> Experience
          </a>
          <a href="#activate" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-layer-group nav-icon"></i> Methodology
          </a>
          <a href="#sap-ai" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-brain nav-icon"></i> SAP × AI
          </a>
          <a href="#certifications" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-certificate nav-icon"></i> Certs
          </a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-sliders nav-icon"></i> Skills
          </a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="nav-link">
            <i className="fa-solid fa-cubes nav-icon"></i> Projects
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="nav-link nav-cta-mobile">
            <i className="fa-solid fa-paper-plane"></i> Contact
          </a>
        </div>

        <div className="nav-actions">
          <a href="#simulator" className="btn-glass btn-sm btn-pulse">
            <i className="fa-solid fa-microchip red-icon"></i> Live AI Simulator
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
