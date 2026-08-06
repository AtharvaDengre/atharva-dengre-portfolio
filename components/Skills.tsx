'use client';

import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative z-10 py-24 border-t border-border-glass" ref={sectionRef}>
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-13.5">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">06</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">SKILLS &amp; COMPETENCY MATRIX</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="glass-panel p-6">
            <h3 className="font-display text-base font-bold text-text-main pb-4 mb-5 border-b border-border-glass flex items-center gap-2.5">
              <i className="fa-solid fa-layer-group text-accent-red" /> SAP S/4HANA MM, S2P &amp; P2P
            </h3>
            <div className="flex flex-col gap-4.5">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>SAP S/4HANA MM &amp; PO Processing (ME21N/22N/23N)</span>
                  <span className="font-mono text-accent-red">96%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '96%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>Source-to-Pay (S2P) &amp; Procure-to-Pay (P2P)</span>
                  <span className="font-mono text-accent-red">95%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '95%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>Goods Receipt (MIGO) &amp; MIRO 3-Way Match</span>
                  <span className="font-mono text-accent-red">92%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '92%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>Release Strategies, Pricing &amp; Output Determination</span>
                  <span className="font-mono text-accent-red">90%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '90%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>SAP Ariba CIG &amp; WMS / Logistics Integration</span>
                  <span className="font-mono text-accent-red">85%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '85%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>Intercompany Procurement &amp; Master Setup</span>
                  <span className="font-mono text-accent-red">88%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '88%' : '0%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="glass-panel p-6">
            <h3 className="font-display text-base font-bold text-text-main pb-4 mb-5 border-b border-border-glass flex items-center gap-2.5">
              <i className="fa-solid fa-network-wired text-accent-red" /> Master Data, WRICEF &amp; IDOC
            </h3>
            <div className="flex flex-col gap-4.5">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>SAP MDG (Material, Vendor, Customer, Employee)</span>
                  <span className="font-mono text-accent-red">94%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '94%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>LSMW, Migration Cockpit &amp; Winshuttle Studio</span>
                  <span className="font-mono text-accent-red">92%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '92%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>IDoc Reprocessing (Standard &amp; ZARB/ZICP/ZWPO)</span>
                  <span className="font-mono text-accent-red">92%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '92%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>WRICEF Object Support (ABAP BAdI / User-Exits)</span>
                  <span className="font-mono text-accent-red">88%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '88%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>BRFplus Routing &amp; Fiori Workflow</span>
                  <span className="font-mono text-accent-red">85%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '85%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>SQL on SAP HANA &amp; Power BI Analytics</span>
                  <span className="font-mono text-accent-red">84%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '84%' : '0%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="glass-panel p-6">
            <h3 className="font-display text-base font-bold text-text-main pb-4 mb-5 border-b border-border-glass flex items-center gap-2.5">
              <i className="fa-solid fa-microchip text-accent-red" /> AI &amp; Agentic Systems
            </h3>
            <div className="flex flex-col gap-4.5">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>SAP Joule &amp; SAP GenAI Hub / Launchpad</span>
                  <span className="font-mono text-accent-red">85%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '85%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>IBM watsonx &amp; RAG Systems</span>
                  <span className="font-mono text-accent-red">88%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '88%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>Multi-Agent AI Triage Frameworks</span>
                  <span className="font-mono text-accent-red">86%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '86%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>AI-Assisted RCA &amp; Prompt Engineering</span>
                  <span className="font-mono text-accent-red">88%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '88%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>ServiceNow Incident Analytics &amp; ITIL</span>
                  <span className="font-mono text-accent-red">92%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '92%' : '0%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-sans text-text-main">
                  <span>Responsible AI &amp; Enterprise Governance</span>
                  <span className="font-mono text-accent-red">82%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple to-accent-red rounded-full transition-all duration-1000 ease-out" style={{ width: animated ? '82%' : '0%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
