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
    <header className="hero-section relative z-10 min-h-[calc(100vh-70px)] flex items-center py-20" id="hero" ref={heroRef}>
      <div className="hero-container max-w-[1240px] mx-auto px-7 w-full">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="hero-content">
            <div className="status-badge-group flex flex-col items-start gap-2.5 mb-6">
              <div className="status-badge glow-border inline-flex items-center gap-2.5 px-4.5 py-2 h-[36px] rounded-full bg-[rgba(255,45,75,0.08)] border border-[rgba(255,45,75,0.3)] text-accent-red font-mono text-[12px]">
                <span className="pulse-dot w-2 h-2 rounded-full bg-accent-red shadow-[0_0_10px_#ff2d4b] animate-pulse"></span>
                <span className="status-text">Open to relocation — Dubai · Singapore · Malaysia</span>
              </div>
              <div className="status-subline-dim font-mono text-[12px] text-text-muted flex items-center gap-2 ml-1.5 tracking-wide">
                <i className="fa-solid fa-compass text-accent-amber"></i> Also exploring: EU roles · Remote (EMEA / APAC time zones)
              </div>
            </div>

            <h1 className="mega-title font-headline text-[clamp(48px,7vw,108px)] leading-[0.9] tracking-tighter uppercase mb-4">
              <span className="title-outline block text-transparent [-webkit-text-stroke:1.5px_rgba(246,240,248,0.45)]">ATHARVA</span>
              <span className="title-fill block text-text-main">DEN<span className="accent-red text-accent-red drop-shadow-[0_0_20px_rgba(255,45,75,0.4)]">GRE</span></span>
            </h1>

            <div className="role-subtitle font-display text-[clamp(14px,1.6vw,17px)] text-text-muted mb-4 leading-relaxed">
              SAP S/4HANA MM &amp; MDG Consultant | S2P &amp; P2P Operations | SAP GenAI &amp; Agentic ERP Automations
            </div>

            <div className="typing-container font-mono text-[clamp(13px,1.5vw,17.5px)] text-accent-amber mb-6 min-h-[32px] leading-normal">
              <span className="typing-prefix text-accent-red font-bold">&gt;&nbsp;</span>
              <span className="inline whitespace-normal">
                <span id="typingText" className="typing-text">{roleText}</span>
                <span className="cursor-caret inline-block w-2.5 h-4 bg-accent-red ml-1 align-middle animate-pulse"></span>
              </span>
            </div>

            <p className="hero-description text-[16.5px] text-text-muted max-w-[580px] mb-9 leading-relaxed">
              Delivering <strong className="text-text-main font-bold">Source-to-Pay (S2P)</strong> and <strong className="text-text-main font-bold">Procure-to-Pay (P2P)</strong> operations &amp; master data governance at 
              <strong className="highlight-val text-text-main font-bold border-b border-dotted border-accent-red ml-1 mr-1">99.8% SLA</strong> across <strong className="highlight-val text-text-main font-bold border-b border-dotted border-accent-red ml-1 mr-1">50,000+ monthly transactions</strong> 
              for a global Petrochemicals enterprise at IBM — while building multi-agent AI systems natively on SAP S/4HANA.
            </p>

            <div className="hero-cta-group flex flex-wrap gap-3.5 mb-12">
              <a href="#sap-ai" className="btn-primary-glass inline-flex items-center gap-2.5 font-mono text-[13px] font-bold py-3.5 px-7 rounded-md bg-gradient-to-r from-accent-red to-[#b8142e] border border-accent-red text-white uppercase tracking-wider shadow-[0_10px_30px_rgba(255,45,75,0.35)] transition-all hover:scale-[1.02]">
                <span>Explore SAP × AI Work</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#simulator" className="btn-secondary-glass inline-flex items-center gap-2.5 font-mono text-[13px] font-medium py-3.5 px-6 rounded-md bg-bg-glass border border-border-glass-light text-text-main uppercase tracking-wider backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red">
                <i className="fa-solid fa-terminal"></i>
                <span>Test AI Agent Demo</span>
              </a>
              <button onClick={copyEmail} className="btn-icon-glass w-12 h-12 rounded-md bg-bg-glass border border-border-glass-light text-text-main inline-flex items-center justify-center text-base cursor-pointer backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red" title="Copy Email (atharvadengre@gmail.com)">
                <i className="fa-regular fa-copy"></i>
              </button>
              <a href="https://www.linkedin.com/in/atharva-dengre" target="_blank" rel="noopener noreferrer" className="btn-icon-glass w-12 h-12 rounded-md bg-bg-glass border border-border-glass-light text-text-main inline-flex items-center justify-center text-base backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red" title="LinkedIn Profile">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/AtharvaDengre" target="_blank" rel="noopener noreferrer" className="btn-icon-glass w-12 h-12 rounded-md bg-bg-glass border border-border-glass-light text-text-main inline-flex items-center justify-center text-base backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red" title="GitHub Repositories">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            {/* Stat Glass Cards Grid */}
            <div className="stat-glass-grid grid grid-cols-2 sm:grid-cols-4 gap-px bg-border-glass border border-border-glass rounded-xl overflow-hidden backdrop-blur-xl shadow-2xl">
              <div className="stat-glass-card bg-bg-glass-card p-4 text-center hover:bg-[rgba(35,18,42,0.7)] transition-colors">
                <div className="stat-value font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.years}+</div>
                <div className="stat-label font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">Years IBM AMS</div>
                <div className="stat-sub font-sans text-[10px] text-text-faint mt-0.5">Gold-Tier Account</div>
              </div>
              <div className="stat-glass-card bg-bg-glass-card p-4 text-center hover:bg-[rgba(35,18,42,0.7)] transition-colors">
                <div className="stat-value font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.sla}%</div>
                <div className="stat-label font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">SLA Track Record</div>
                <div className="stat-sub font-sans text-[10px] text-text-faint mt-0.5">S2P &amp; P2P Delivery</div>
              </div>
              <div className="stat-glass-card bg-bg-glass-card p-4 text-center hover:bg-[rgba(35,18,42,0.7)] transition-colors">
                <div className="stat-value font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.txns}K+</div>
                <div className="stat-label font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">Monthly Txns</div>
                <div className="stat-sub font-sans text-[10px] text-text-faint mt-0.5">Vendor &amp; PO Data</div>
              </div>
              <div className="stat-glass-card bg-bg-glass-card p-4 text-center hover:bg-[rgba(35,18,42,0.7)] transition-colors">
                <div className="stat-value font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.certs}x</div>
                <div className="stat-label font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">SAP Certified</div>
                <div className="stat-sub font-sans text-[10px] text-text-faint mt-0.5">MM, MDG &amp; GenAI</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Command Center Card */}
          <div className="hero-visual flex justify-center relative">
            <div className="glass-command-wrapper relative w-full max-w-[440px] p-[15px]" id="avatarCard" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="command-glow-ring absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-red via-accent-purple to-accent-amber blur-2xl opacity-45 z-0 animate-pulse"></div>
              
              {/* Top Floating Badge */}
              <div className="glass-badge badge-top-right float-anim-1 absolute -top-8 -right-6 z-30 bg-[rgba(18,9,24,0.95)] border border-[rgba(255,45,75,0.5)] backdrop-blur-2xl px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] whitespace-nowrap">
                <i className="fa-solid fa-globe badge-icon text-xl text-accent-red"></i>
                <div>
                  <div className="badge-title font-display text-[13px] font-bold text-text-main">Relocation-Ready</div>
                  <div className="badge-sub font-mono text-[10px] text-text-faint">Dubai · Singapore · Malaysia · EU</div>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="glass-badge badge-bottom-left float-anim-2 absolute -bottom-8 -left-6 z-30 bg-[rgba(18,9,24,0.95)] border border-[rgba(157,78,221,0.5)] backdrop-blur-2xl px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] whitespace-nowrap">
                <i className="fa-solid fa-microchip badge-icon text-xl text-accent-purple"></i>
                <div>
                  <div className="badge-title font-display text-[13px] font-bold text-text-main">SAP Joule &amp; watsonx</div>
                  <div className="badge-sub font-mono text-[10px] text-text-faint">Assist-to-Human AI Triage</div>
                </div>
              </div>

              <div className="glass-command-card relative z-10 rounded-2xl overflow-hidden border border-border-glass-light bg-[rgba(18,9,24,0.75)] backdrop-blur-2xl p-6 shadow-2xl">
                {/* Header Bar */}
                <div className="command-card-header flex justify-between items-center w-full pb-4 border-b border-border-glass mb-5 font-mono text-[11px]">
                  <div className="command-card-title flex items-center gap-2 text-text-main font-bold whitespace-nowrap">
                    <span className="pulse-dot-green w-2 h-2 rounded-full bg-accent-green shadow-[0_0_10px_#39d353] animate-pulse shrink-0"></span>
                    <span className="truncate">SYSTEM_TELEMETRY // ATHARVA.DENGRE</span>
                  </div>
                  <div className="command-card-tag text-accent-red bg-[rgba(255,45,75,0.1)] px-2 py-0.5 rounded border border-[rgba(255,45,75,0.25)] whitespace-nowrap shrink-0 ml-2">S2P &amp; P2P ENGINE</div>
                </div>

                {/* Monogram Core Visual */}
                <div className="monogram-container relative w-[130px] h-[130px] my-2.5 mx-auto flex items-center justify-center">
                  <div className="monogram-ring-outer absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-accent-red via-accent-purple to-accent-amber animate-spin"></div>
                  <div className="monogram-ring-inner absolute inset-3 rounded-full border border-dashed border-white/25"></div>
                  <div className="monogram-badge w-24 h-24 rounded-full bg-radial from-[rgba(35,15,45,0.9)] to-[rgba(12,6,18,0.95)] border border-border-glass-light flex flex-col items-center justify-center shadow-[0_0_25px_rgba(255,45,75,0.3)]">
                    <span className="monogram-text font-headline text-3xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-accent-red">AD</span>
                    <span className="monogram-sub font-mono text-[8.5px] text-accent-amber uppercase tracking-wider mt-1 whitespace-nowrap">S2P · P2P · AI</span>
                  </div>
                </div>

                {/* Live Enterprise Metrics Panel */}
                <div className="command-metrics-list flex flex-col gap-3.5 mb-5">
                  <div className="command-metric-row bg-[rgba(255,255,255,0.03)] border border-border-glass rounded-lg p-3">
                    <div className="metric-info flex justify-between items-start w-full font-mono text-[11px] mb-1.5">
                      <span className="metric-name text-text-main flex items-start gap-1.5 leading-snug">
                        <i className="fa-solid fa-server text-accent-red mt-0.5" />
                        <span>S2P / P2P S/4HANA<br />Operations</span>
                      </span>
                      <span className="metric-val text-accent-green font-bold whitespace-nowrap ml-2">ONLINE (99.8% SLA)</span>
                    </div>
                    <div className="metric-progress h-1 bg-[rgba(255,255,255,0.08)] rounded overflow-hidden"><div className="metric-fill fill-green h-full bg-accent-green rounded" style={{ width: '99.8%' }}></div></div>
                  </div>

                  <div className="command-metric-row bg-[rgba(255,255,255,0.03)] border border-border-glass rounded-lg p-3">
                    <div className="metric-info flex justify-between items-start w-full font-mono text-[11px] mb-1.5">
                      <span className="metric-name text-text-main flex items-start gap-1.5 leading-snug">
                        <i className="fa-solid fa-sitemap text-accent-purple mt-0.5" />
                        <span>MDG Master Data Lifecycle</span>
                      </span>
                      <span className="metric-val text-accent-purple font-bold whitespace-nowrap ml-2">ACTIVE (50K+ Txns)</span>
                    </div>
                    <div className="metric-progress h-1 bg-[rgba(255,255,255,0.08)] rounded overflow-hidden"><div className="metric-fill fill-purple h-full bg-accent-purple rounded" style={{ width: '95%' }}></div></div>
                  </div>

                  <div className="command-metric-row bg-[rgba(255,255,255,0.03)] border border-border-glass rounded-lg p-3">
                    <div className="metric-info flex justify-between items-start w-full font-mono text-[11px] mb-1.5">
                      <span className="metric-name text-text-main flex items-start gap-1.5 leading-snug">
                        <i className="fa-solid fa-diagram-project text-accent-amber mt-0.5" />
                        <span>Ariba CIG &amp; Z-IDOC<br />Middleware</span>
                      </span>
                      <span className="metric-val text-accent-amber font-bold whitespace-nowrap ml-2">STABLE (ZARB/ZICP/ZWPO)</span>
                    </div>
                    <div className="metric-progress h-1 bg-[rgba(255,255,255,0.08)] rounded overflow-hidden"><div className="metric-fill fill-amber h-full bg-accent-amber rounded" style={{ width: '92%' }}></div></div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="command-card-footer flex justify-between gap-2.5 pt-3.5 border-t border-border-glass">
                  <div className="footer-badge flex-1 flex items-center justify-center gap-1.5 font-mono text-[11px] text-text-muted bg-[rgba(255,255,255,0.04)] py-1.5 px-3 rounded border border-border-glass whitespace-nowrap"><i className="fa-solid fa-certificate"></i> 3x SAP Certified</div>
                  <div className="footer-badge flex-1 flex items-center justify-center gap-1.5 font-mono text-[11px] text-text-muted bg-[rgba(255,255,255,0.04)] py-1.5 px-3 rounded border border-border-glass whitespace-nowrap"><i className="fa-solid fa-shield-halved"></i> IBM Gold-Tier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
