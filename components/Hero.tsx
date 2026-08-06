'use client';

import { useState, useEffect, useRef } from 'react';
import { showToast } from './ToastContainer';

export default function Hero() {
  const roles = [
    'Source-to-Pay (S2P) & Procure-to-Pay (P2P) Operations',
    'SAP S/4HANA MM & MDG Specialist @ IBM',
    'Leveraging SAP GenAI Hub & watsonx for ERP Automations',
    'Ariba CIG, Z-IDOC (ZARB/ZICP/ZWPO) & WRICEF Lead',
    'SAP Joule, Agentic AI & Intelligent Triage Architect',
  ];

  const [roleText, setRoleText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    const typingSpeed = isDeleting ? 30 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
        if (charIdx + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setRoleText(currentRole.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, roleIdx]);

  // Stat Count-up Effect
  const [stats, setStats] = useState({ years: 0, sla: 0, txns: 0, certs: 0 });
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            let step = 0;
            const totalSteps = 45;
            const interval = setInterval(() => {
              step++;
              setStats({
                years: parseFloat(((2.8 / totalSteps) * step).toFixed(1)),
                sla: parseFloat(((99.8 / totalSteps) * step).toFixed(1)),
                txns: Math.round((50 / totalSteps) * step),
                certs: Math.round((3 / totalSteps) * step),
              });
              if (step >= totalSteps) {
                setStats({ years: 2.8, sla: 99.8, txns: 50, certs: 3 });
                clearInterval(interval);
              }
            }, 30);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // 3D Card Tilt Effect
  const cardRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 16;
    const rotateY = (x - centerX) / 16;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('atharvadengre@gmail.com').then(() => {
      showToast('Copied email: atharvadengre@gmail.com');
    });
  };

  return (
    <header className="hero-section" id="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Hero Text Content */}
          <div className="hero-content">
            <div className="status-badge-group">
              <div className="status-badge glow-border">
                <span className="pulse-dot"></span>
                <span className="status-text">Open to relocation — Dubai · Singapore · Malaysia</span>
              </div>
              <div className="status-subline-dim"><i className="fa-solid fa-compass amber-icon"></i> Also exploring: EU roles · Remote (EMEA / APAC time zones)</div>
            </div>

            <h1 className="mega-title">
              <span className="title-outline">ATHARVA</span>
              <span className="title-fill">DEN<span className="accent-red">GRE</span></span>
            </h1>

            <div className="role-subtitle">
              SAP S/4HANA MM &amp; MDG Consultant | S2P &amp; P2P Operations | SAP GenAI &amp; Agentic ERP Automations
            </div>

            <div className="typing-container">
              <span className="typing-prefix">&gt; </span>
              <span id="typingText" className="typing-text">{roleText}</span>
              <span className="cursor-caret"></span>
            </div>

            <p className="hero-description">
              Delivering <strong>Source-to-Pay (S2P)</strong> and <strong>Procure-to-Pay (P2P)</strong> operations &amp; master data governance at 
              <strong className="highlight-val">99.8% SLA</strong> across <strong className="highlight-val">50,000+ monthly transactions</strong> 
              for a global Petrochemicals enterprise at IBM — while building multi-agent AI systems natively on SAP S/4HANA.
            </p>

            <div className="hero-cta-group">
              <a href="#sap-ai" className="btn-primary-glass">
                <span>Explore SAP × AI Work</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#simulator" className="btn-secondary-glass">
                <i className="fa-solid fa-terminal"></i>
                <span>Test AI Agent Demo</span>
              </a>
              <button onClick={copyEmail} className="btn-icon-glass" title="Copy Email (atharvadengre@gmail.com)">
                <i className="fa-regular fa-copy"></i>
              </button>
              <a href="https://www.linkedin.com/in/atharva-dengre" target="_blank" rel="noopener noreferrer" className="btn-icon-glass" title="LinkedIn Profile">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/AtharvaDengre" target="_blank" rel="noopener noreferrer" className="btn-icon-glass" title="GitHub Repositories">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            {/* Stat Glass Cards Grid */}
            <div className="stat-glass-grid">
              <div className="stat-glass-card">
                <div className="stat-value">{stats.years}+</div>
                <div className="stat-label">Years IBM AMS</div>
                <div className="stat-sub">Gold-Tier Account</div>
              </div>
              <div className="stat-glass-card">
                <div className="stat-value">{stats.sla}%</div>
                <div className="stat-label">SLA Track Record</div>
                <div className="stat-sub">S2P &amp; P2P Delivery</div>
              </div>
              <div className="stat-glass-card">
                <div className="stat-value">{stats.txns}K+</div>
                <div className="stat-label">Monthly Txns</div>
                <div className="stat-sub">Vendor &amp; PO Data</div>
              </div>
              <div className="stat-glass-card">
                <div className="stat-value">{stats.certs}x</div>
                <div className="stat-label">SAP Certified</div>
                <div className="stat-sub">MM, MDG &amp; GenAI</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Command Center Card */}
          <div className="hero-visual">
            <div className="glass-command-wrapper tilt-card" id="avatarCard" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="command-glow-ring"></div>
              
              {/* Top Floating Badge */}
              <div className="glass-badge badge-top-right float-anim-1">
                <i className="fa-solid fa-globe badge-icon"></i>
                <div>
                  <div className="badge-title">Relocation-Ready</div>
                  <div className="badge-sub">Dubai · Singapore · Malaysia · EU</div>
                </div>
              </div>

              <div className="glass-command-card">
                {/* Header Bar */}
                <div className="command-card-header">
                  <div className="command-card-title">
                    <span className="pulse-dot-green"></span>
                    <span>SYSTEM_TELEMETRY // ATHARVA.DENGRE</span>
                  </div>
                  <div className="command-card-tag">S2P &amp; P2P ENGINE</div>
                </div>

                {/* Monogram Core Visual */}
                <div className="monogram-container">
                  <div className="monogram-ring-outer"></div>
                  <div className="monogram-ring-inner"></div>
                  <div className="monogram-badge">
                    <span className="monogram-text">AD</span>
                    <span className="monogram-sub">S2P · P2P · AI</span>
                  </div>
                </div>

                {/* Live Enterprise Metrics Panel */}
                <div className="command-metrics-list">
                  <div className="command-metric-row">
                    <div className="metric-info">
                      <span className="metric-name"><i className="fa-solid fa-server red-icon"></i> S2P / P2P S/4HANA Operations</span>
                      <span className="metric-val text-green">ONLINE (99.8% SLA)</span>
                    </div>
                    <div className="metric-progress"><div className="metric-fill fill-green" style={{ width: '99.8%' }}></div></div>
                  </div>

                  <div className="command-metric-row">
                    <div className="metric-info">
                      <span className="metric-name"><i className="fa-solid fa-sitemap purple-icon"></i> MDG Master Data Lifecycle</span>
                      <span className="metric-val text-purple">ACTIVE (50K+ Txns)</span>
                    </div>
                    <div className="metric-progress"><div className="metric-fill fill-purple" style={{ width: '95%' }}></div></div>
                  </div>

                  <div className="command-metric-row">
                    <div className="metric-info">
                      <span className="metric-name"><i className="fa-solid fa-diagram-project amber-icon"></i> Ariba CIG &amp; Z-IDOC Middleware</span>
                      <span className="metric-val text-amber">STABLE (ZARB/ZICP/ZWPO)</span>
                    </div>
                    <div className="metric-progress"><div className="metric-fill fill-amber" style={{ width: '92%' }}></div></div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="command-card-footer">
                  <div className="footer-badge"><i className="fa-solid fa-certificate"></i> 3x SAP Certified</div>
                  <div className="footer-badge"><i className="fa-solid fa-shield-halved"></i> IBM Gold-Tier</div>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="glass-badge badge-bottom-left float-anim-2">
                <i className="fa-solid fa-microchip badge-icon alt"></i>
                <div>
                  <div className="badge-title">SAP Joule &amp; watsonx</div>
                  <div className="badge-sub">Assist-to-Human AI Triage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
