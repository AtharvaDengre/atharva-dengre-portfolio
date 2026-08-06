export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 border-t border-border-glass">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-13.5">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">01</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">ABOUT ME</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8">
          <div className="glass-panel">
            <h3 className="font-display text-xl font-bold text-text-main mb-6 flex items-center gap-3">
              <i className="fa-solid fa-user-gear text-accent-red" /> S2P / P2P Enterprise Delivery Meets Agentic AI
            </h3>
            <p className="text-text-muted text-[15.5px] mb-4.5 leading-relaxed">
              I&apos;m a <strong className="text-text-main font-bold">SAP S/4HANA MM Consultant &amp; Master Data Specialist at IBM</strong> with 2.8+ years of hands-on experience delivering end-to-end <strong className="text-text-main font-bold">Source-to-Pay (S2P)</strong> and <strong className="text-text-main font-bold">Procure-to-Pay (P2P)</strong> operations, Master Data Management (MDM), and cross-system integration for a global Petrochemicals enterprise — an IBM gold-tier account.
            </p>
            <p className="text-text-muted text-[15.5px] mb-4.5 leading-relaxed">
              Day to day, I own Purchase Requisition review, Purchase Order processing (ME21N/ME22N/ME23N), Goods Receipt (MIGO), Invoice Verification (MIRO), 3-way match exception handling, vendor/customer/employee/intercompany master data lifecycles, IDOC monitoring &amp; reprocessing (including custom Z-IDOCs: ZARB, ZICP, ZWPO), MDG Fiori workflow modifications, and SAP Activate conversion wave execution with post-go-live hypercare.
            </p>
            <p className="text-text-muted text-[15.5px] mb-4.5 leading-relaxed">
              I hold <strong className="text-text-main font-bold">3x SAP Certified Associate credentials</strong>: <em>SAP S/4HANA Sourcing &amp; Procurement</em>, <em>SAP Master Data Governance on S/4HANA</em>, and <em>SAP Generative AI Developer</em>. I bridge core enterprise SAP operations with cutting-edge AI architecture.
            </p>
            <p className="text-text-muted text-[15.5px] mb-4.5 leading-relaxed">
              On the AI side, I work hands-on with <strong className="text-text-main font-bold">SAP Joule</strong>, <strong className="text-text-main font-bold">SAP GenAI Hub</strong>, <strong className="text-text-main font-bold">SAP AI Launchpad</strong>, and <strong className="text-text-main font-bold">IBM watsonx</strong>. I designed and presented a multi-agent AI incident resolution framework for SAP AMS to IBM leadership — an assist-to-human architecture spanning intake, clarification, diagnosis, resolution, and routing over domain knowledge bases.
            </p>

            <div className="mt-8 pt-6 border-t border-border-glass">
              <h4 className="font-mono text-xs text-text-faint uppercase tracking-wider mb-4">Core Enterprise, Integration &amp; AI Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                <span className="tech-chip"><i className="fa-solid fa-cart-flatbed" /> Source-to-Pay (S2P)</span>
                <span className="tech-chip"><i className="fa-solid fa-receipt" /> Procure-to-Pay (P2P)</span>
                <span className="tech-chip"><i className="fa-solid fa-database" /> SAP S/4HANA MM</span>
                <span className="tech-chip"><i className="fa-solid fa-sitemap" /> SAP MDG on S/4HANA</span>
                <span className="tech-chip"><i className="fa-solid fa-boxes-packing" /> Material Master</span>
                <span className="tech-chip"><i className="fa-solid fa-id-card" /> Business Partner (Vendor/Customer/Employee)</span>
                <span className="tech-chip"><i className="fa-solid fa-code-branch" /> BRFplus Routing</span>
                <span className="tech-chip"><i className="fa-solid fa-plug" /> SAP Ariba CIG &amp; WMS</span>
                <span className="tech-chip"><i className="fa-solid fa-file-export" /> LSMW / Migration Cockpit / Winshuttle</span>
                <span className="tech-chip"><i className="fa-solid fa-cube" /> WRICEF Objects (W, R, I, C, E, F)</span>
                <span className="tech-chip"><i className="fa-solid fa-network-wired" /> Z-IDOCs (ZARB, ZICP, ZWPO)</span>
                <span className="tech-chip"><i className="fa-solid fa-headset" /> ServiceNow ITSM</span>
                <span className="tech-chip"><i className="fa-solid fa-chart-pie" /> Power BI / SQL on HANA</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-bolt" /> SAP Joule</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-robot" /> SAP GenAI Hub</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-microchip" /> SAP AI Launchpad</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-brain" /> IBM watsonx RAG</span>
              </div>
            </div>
          </div>

          <div className="glass-panel">
            <h3 className="font-display text-xl font-bold text-text-main mb-6 flex items-center gap-3">
              <i className="fa-solid fa-crosshairs text-accent-red" /> Core Competencies &amp; Education
            </h3>

            {/* Education Card */}
            <div className="glass-card-sub mb-5 p-4">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-2xl text-accent-purple" />
                <div>
                  <h4 className="font-display text-[14.5px] font-bold text-text-main">B.E. — Computer Science &amp; Engineering</h4>
                  <div className="font-mono text-[11.5px] text-accent-red mt-0.5">Prof. Ram Meghe Institute of Tech &amp; Research · CGPA: 8.3 / 10</div>
                </div>
              </div>
            </div>

            <ul className="list-none flex flex-col gap-5">
              <li className="flex items-start gap-3.5">
                <span className="text-accent-red text-sm mt-0.5"><i className="fa-solid fa-caret-right" /></span>
                <div>
                  <strong className="font-display text-[15px] font-bold text-text-main block mb-1">S2P &amp; P2P End-to-End Governance</strong>
                  <p className="text-[13.5px] text-text-muted">Purchasing requisitions, ME21N/ME22N PO processing, MIGO goods receipts, MIRO 3-way match, source lists, info records, and pricing procedures.</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="text-accent-red text-sm mt-0.5"><i className="fa-solid fa-caret-right" /></span>
                <div>
                  <strong className="font-display text-[15px] font-bold text-text-main block mb-1">MDG Architecture &amp; Mass Conversion Waves</strong>
                  <p className="text-[13.5px] text-text-muted">Configuring MDG Fiori workflows, BRFplus approval routing, intercompany linkages, and wave migration via LSMW, Migration Cockpit, and Winshuttle Studio.</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="text-accent-red text-sm mt-0.5"><i className="fa-solid fa-caret-right" /></span>
                <div>
                  <strong className="font-display text-[15px] font-bold text-text-main block mb-1">Cross-System Integration &amp; WRICEF Support</strong>
                  <p className="text-[13.5px] text-text-muted">Ariba CIG, WMS, and logistics carrier interface troubleshooting. IDOC WE02/WE05/WE19/BD87 reprocessing for custom Z-IDOCs (ZARB, ZICP, ZWPO).</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="text-accent-red text-sm mt-0.5"><i className="fa-solid fa-caret-right" /></span>
                <div>
                  <strong className="font-display text-[15px] font-bold text-text-main block mb-1">Multi-Agent AI &amp; Intelligent Automation</strong>
                  <p className="text-[13.5px] text-text-muted">Building assist-to-human AI agent workflows for SAP incident triage, watsonx RAG knowledge bases, and SAP Joule / BTP GenAI Hub integrations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
