'use client';

import { useState, useEffect, useRef } from 'react';
import { showToast } from './ToastContainer';

export default function Hero() {
  // Typewriter effect
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
    <header className="relative z-10 min-h-[calc(100vh-70px)] flex items-center py-20" id="hero" ref={heroRef}>
      <div className="max-w-[1240px] mx-auto px-7 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Hero Left Content */}
          <div>
            <div className="status-badge-group flex flex-col items-start gap-2 mb-6">
              <div className="status-badge glow-border inline-flex items-center gap-2.5 px-4.5 h-[36px] rounded-full bg-[rgba(255,45,75,0.08)] border border-[rgba(255,45,75,0.3)] font-mono text-[12px] text-accent-red">
                <span className="pulse-dot w-2 h-2 rounded-full bg-accent-red shadow-[0_0_10px_#ff2d4b] animate-pulse" />
                <span className="status-text">Open to relocation — Dubai · Singapore · Malaysia</span>
              </div>
              <div className="status-subline-dim font-mono text-[12px] text-text-muted tracking-wider ml-1.5 flex items-center gap-2">
                <i className="fa-solid fa-compass text-accent-amber" /> Also exploring: EU roles · Remote (EMEA / APAC time zones)
              </div>
            </div>

            <h1 className="font-headline text-[clamp(48px,7vw,108px)] leading-[0.9] tracking-tighter uppercase mb-4">
              <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(246,240,248,0.45)]">ATHARVA</span>
              <span className="block text-text-main">
                DEN<span className="text-accent-red drop-shadow-[0_0_20px_rgba(255,45,75,0.4)]">GRE</span>
              </span>
            </h1>

            <div className="role-subtitle">
              SAP S/4HANA MM &amp; MDG Consultant | S2P &amp; P2P Operations | SAP GenAI &amp; Agentic ERP Automations
            </div>

            <div className="font-mono text-[clamp(15px,2vw,20px)] text-accent-amber mb-6 min-h-[32px] flex items-center">
              <span className="text-accent-red mr-1.5 font-bold">&gt; </span>
              <span>{roleText}</span>
              <span className="cursor-caret" />
            </div>

            <p className="text-[16.5px] text-text-muted max-w-[580px] mb-9 leading-relaxed">
              Delivering <strong className="text-text-main font-bold">Source-to-Pay (S2P)</strong> and{' '}
              <strong className="text-text-main font-bold">Procure-to-Pay (P2P)</strong> operations &amp; master data governance at{' '}
              <strong className="text-text-main font-bold border-b border-dotted border-accent-red">99.8% SLA</strong> across{' '}
              <strong className="text-text-main font-bold border-b border-dotted border-accent-red">50,000+ monthly transactions</strong> for a
              global Petrochemicals enterprise at IBM — while building multi-agent AI systems natively on SAP S/4HANA.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-12">
              <a href="#sap-ai" className="btn-primary-glass">
                <span>Explore SAP × AI Work</span>
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="#simulator" className="btn-secondary-glass">
                <i className="fa-solid fa-terminal" />
                <span>Test AI Agent Demo</span>
              </a>
              <button onClick={copyEmail} className="btn-icon-glass" title="Copy Email (atharvadengre@gmail.com)">
                <i className="fa-regular fa-copy" />
              </button>
              <a href="https://www.linkedin.com/in/atharva-dengre" target="_blank" rel="noopener noreferrer" className="btn-icon-glass" title="LinkedIn Profile">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://github.com/AtharvaDengre" target="_blank" rel="noopener noreferrer" className="btn-icon-glass" title="GitHub Repositories">
                <i className="fa-brands fa-github" />
              </a>
            </div>

            {/* Stat Glass Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border-glass border border-border-glass rounded-xl overflow-hidden backdrop-blur-xl shadow-2xl">
              <div className="bg-bg-glass-card p-4 text-center hover:bg-rgba(35,18,42,0.7) transition-colors">
                <div className="font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.years}+</div>
                <div className="font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">Years IBM AMS</div>
                <div className="font-sans text-[10px] text-text-faint mt-0.5">Gold-Tier Account</div>
              </div>
              <div className="bg-bg-glass-card p-4 text-center hover:bg-rgba(35,18,42,0.7) transition-colors">
                <div className="font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.sla}%</div>
                <div className="font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">SLA Track Record</div>
                <div className="font-sans text-[10px] text-text-faint mt-0.5">S2P &amp; P2P Delivery</div>
              </div>
              <div className="bg-bg-glass-card p-4 text-center hover:bg-rgba(35,18,42,0.7) transition-colors">
                <div className="font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.txns}K+</div>
                <div className="font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">Monthly Txns</div>
                <div className="font-sans text-[10px] text-text-faint mt-0.5">Vendor &amp; PO Data</div>
              </div>
              <div className="bg-bg-glass-card p-4 text-center hover:bg-rgba(35,18,42,0.7) transition-colors">
                <div className="font-headline text-[clamp(20px,2.4vw,30px)] text-accent-red leading-none">{stats.certs}x</div>
                <div className="font-mono text-[11px] font-bold text-text-main mt-1.5 uppercase">SAP Certified</div>
                <div className="font-sans text-[10px] text-text-faint mt-0.5">MM, MDG &amp; GenAI</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Command Center Card */}
          <div className="flex justify-center relative">
            <div className="glass-command-wrapper" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="command-glow-ring" />

              {/* Floating Top Badge */}
              <div className="glass-badge badge-top-right float-anim-1 -top-6 -right-4 z-30">
                <i className="fa-solid fa-globe text-xl text-accent-red" />
                <div>
                  <div className="font-display text-[13px] font-bold text-text-main">Relocation-Ready</div>
                  <div className="font-mono text-[10px] text-text-faint">Dubai · Singapore · Malaysia · EU</div>
                </div>
              </div>

              {/* Central Command Card */}
              <div className="glass-command-card pt-6">
                <div className="command-card-header flex justify-between items-center w-full pb-4 mb-5 border-b border-border-glass pt-2">
                  <div className="command-card-title flex items-center gap-2 text-text-main font-bold font-mono text-[11px]">
                    <span className="pulse-dot-green w-2 h-2 rounded-full bg-accent-green shadow-[0_0_10px_#39d353] animate-pulse" />
                    <span>SYSTEM_TELEMETRY // ATHARVA.DENGRE</span>
                  </div>
                  <div className="command-card-tag text-accent-red bg-accent-red/10 px-2 py-0.5 rounded border border-accent-red/25 font-mono text-[10.5px]">S2P &amp; P2P ENGINE</div>
                </div>

                <div className="monogram-container">
                  <div className="monogram-ring-outer" />
                  <div className="monogram-ring-inner" />
                  <div className="monogram-badge">
                    <span className="monogram-text">AD</span>
                    <span className="monogram-sub">S2P · P2P · AI</span>
                  </div>
                </div>

                <div className="command-metrics-list flex flex-col gap-3.5 mb-5 w-full">
                  <div className="command-metric-row bg-white/[0.03] border border-border-glass rounded-lg p-3 w-full">
                    <div className="metric-info flex justify-between items-center w-full mb-1.5 font-mono text-[11.5px]">
                      <span className="metric-name text-text-main flex items-center gap-1.5">
                        <i className="fa-solid fa-server text-accent-red" /> S2P / P2P S/4HANA Operations
                      </span>
                      <span className="metric-val text-accent-green font-bold whitespace-nowrap shrink-0 ml-2">ONLINE (99.8% SLA)</span>
                    </div>
                    <div className="metric-progress h-1 bg-white/10 rounded overflow-hidden w-full">
                      <div className="metric-fill fill-green h-full rounded bg-accent-green" style={{ width: '99.8%' }} />
                    </div>
                  </div>

                  <div className="command-metric-row bg-white/[0.03] border border-border-glass rounded-lg p-3 w-full">
                    <div className="metric-info flex justify-between items-center w-full mb-1.5 font-mono text-[11.5px]">
                      <span className="metric-name text-text-main flex items-center gap-1.5">
                        <i className="fa-solid fa-sitemap text-accent-purple" /> MDG Master Data Lifecycle
                      </span>
                      <span className="metric-val text-accent-purple font-bold whitespace-nowrap shrink-0 ml-2">ACTIVE (50K+ Txns)</span>
                    </div>
                    <div className="metric-progress h-1 bg-white/10 rounded overflow-hidden w-full">
                      <div className="metric-fill fill-purple h-full rounded bg-accent-purple" style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div className="command-metric-row bg-white/[0.03] border border-border-glass rounded-lg p-3 w-full">
                    <div className="metric-info flex justify-between items-center w-full mb-1.5 font-mono text-[11.5px]">
                      <span className="metric-name text-text-main flex items-center gap-1.5">
                        <i className="fa-solid fa-diagram-project text-accent-amber" /> Ariba CIG &amp; Z-IDOC Middleware
                      </span>
                      <span className="metric-val text-accent-amber font-bold whitespace-nowrap shrink-0 ml-2">STABLE (ZARB/ZICP/ZWPO)</span>
                    </div>
                    <div className="metric-progress h-1 bg-white/10 rounded overflow-hidden w-full">
                      <div className="metric-fill fill-amber h-full rounded bg-accent-amber" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>

                <div className="command-card-footer flex justify-between gap-2.5 pt-3.5 border-t border-border-glass">
                  <div className="footer-badge font-mono text-[11px] text-text-muted bg-white/[0.04] py-1.5 px-3 rounded border border-border-glass flex items-center justify-center gap-1.5 flex-1">
                    <i className="fa-solid fa-certificate" /> 3x SAP Certified
                  </div>
                  <div className="footer-badge font-mono text-[11px] text-text-muted bg-white/[0.04] py-1.5 px-3 rounded border border-border-glass flex items-center justify-center gap-1.5 flex-1">
                    <i className="fa-solid fa-shield-halved" /> IBM Gold-Tier
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="glass-badge badge-bottom-left float-anim-2 -bottom-5 -left-4 z-30">
                <i className="fa-solid fa-microchip text-xl text-accent-purple" />
                <div>
                  <div className="font-display text-[13px] font-bold text-text-main">SAP Joule &amp; watsonx</div>
                  <div className="font-mono text-[10px] text-text-faint">Assist-to-Human AI Triage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
