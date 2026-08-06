export default function About() {
  return (
    <section id="about" className="section-glass">
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-bio glass-panel">
            <h3 className="panel-heading">
              <i className="fa-solid fa-user-gear icon-accent"></i> S2P / P2P Enterprise Delivery Meets Agentic AI
            </h3>
            <p>
              I&apos;m a <strong>SAP S/4HANA MM Consultant &amp; Master Data Specialist at IBM</strong> with 2.8+ years of hands-on experience delivering end-to-end <strong>Source-to-Pay (S2P)</strong> and <strong>Procure-to-Pay (P2P)</strong> operations, Master Data Management (MDM), and cross-system integration for a global Petrochemicals enterprise — an IBM gold-tier account.
            </p>
            <p>
              Day to day, I own Purchase Requisition review, Purchase Order processing (ME21N/ME22N/ME23N), Goods Receipt (MIGO), Invoice Verification (MIRO), 3-way match exception handling, vendor/customer/employee/intercompany master data lifecycles, IDOC monitoring &amp; reprocessing (including custom Z-IDOCs: ZARB, ZICP, ZWPO), MDG Fiori workflow modifications, and SAP Activate conversion wave execution with post-go-live hypercare.
            </p>
            <p>
              I hold <strong>3x SAP Certified Associate credentials</strong>: <em>SAP S/4HANA Sourcing &amp; Procurement</em>, <em>SAP Master Data Governance on S/4HANA</em>, and <em>SAP Generative AI Developer</em>. I bridge core enterprise SAP operations with cutting-edge AI architecture.
            </p>
            <p>
              On the AI side, I work hands-on with <strong>SAP Joule</strong>, <strong>SAP GenAI Hub</strong>, <strong>SAP AI Launchpad</strong>, and <strong>IBM watsonx</strong>. I designed and presented a multi-agent AI incident resolution framework for SAP AMS to IBM leadership — an assist-to-human architecture spanning intake, clarification, diagnosis, resolution, and routing over domain knowledge bases.
            </p>

            <div className="toolbelt-container">
              <h4 className="toolbelt-heading">Core Enterprise, Integration &amp; AI Stack</h4>
              <div className="chip-cloud">
                <span className="tech-chip"><i className="fa-solid fa-cart-flatbed"></i> Source-to-Pay (S2P)</span>
                <span className="tech-chip"><i className="fa-solid fa-receipt"></i> Procure-to-Pay (P2P)</span>
                <span className="tech-chip"><i className="fa-solid fa-database"></i> SAP S/4HANA MM</span>
                <span className="tech-chip"><i className="fa-solid fa-sitemap"></i> SAP MDG on S/4HANA</span>
                <span className="tech-chip"><i className="fa-solid fa-boxes-packing"></i> Material Master</span>
                <span className="tech-chip"><i className="fa-solid fa-id-card"></i> Business Partner (Vendor/Customer/Employee)</span>
                <span className="tech-chip"><i className="fa-solid fa-code-branch"></i> BRFplus Routing</span>
                <span className="tech-chip"><i className="fa-solid fa-plug"></i> SAP Ariba CIG &amp; WMS</span>
                <span className="tech-chip"><i className="fa-solid fa-file-export"></i> LSMW / Migration Cockpit / Winshuttle</span>
                <span className="tech-chip"><i className="fa-solid fa-cube"></i> WRICEF Objects (W, R, I, C, E, F)</span>
                <span className="tech-chip"><i className="fa-solid fa-network-wired"></i> Z-IDOCs (ZARB, ZICP, ZWPO)</span>
                <span className="tech-chip"><i className="fa-solid fa-headset"></i> ServiceNow ITSM</span>
                <span className="tech-chip"><i className="fa-solid fa-chart-pie"></i> Power BI / SQL on HANA</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-bolt"></i> SAP Joule</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-robot"></i> SAP GenAI Hub</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-microchip"></i> SAP AI Launchpad</span>
                <span className="tech-chip highlight-chip"><i className="fa-solid fa-brain"></i> IBM watsonx RAG</span>
              </div>
            </div>
          </div>

          <div className="focus-panel glass-panel">
            <h3 className="panel-heading"><i className="fa-solid fa-crosshairs icon-accent"></i> Core Competencies &amp; Education</h3>

            <div className="education-subcard glass-card-sub mb-5 p-4">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-2xl text-accent-purple"></i>
                <div>
                  <h4 className="font-display text-[14.5px] font-bold text-text-main">B.E. — Computer Science &amp; Engineering</h4>
                  <div className="font-mono text-[11.5px] text-accent-red mt-0.5">Prof. Ram Meghe Institute of Tech &amp; Research · CGPA: 8.3 / 10</div>
                </div>
              </div>
            </div>

            <ul className="focus-list">
              <li className="focus-item">
                <span className="focus-bullet"><i className="fa-solid fa-caret-right"></i></span>
                <div>
                  <strong>S2P &amp; P2P End-to-End Governance</strong>
                  <p>Purchasing requisitions, ME21N/ME22N PO processing, MIGO goods receipts, MIRO 3-way match, source lists, info records, and pricing procedures.</p>
                </div>
              </li>
              <li className="focus-item">
                <span className="focus-bullet"><i className="fa-solid fa-caret-right"></i></span>
                <div>
                  <strong>MDG Architecture &amp; Mass Conversion Waves</strong>
                  <p>Configuring MDG Fiori workflows, BRFplus approval routing, intercompany linkages, and wave migration via LSMW, Migration Cockpit, and Winshuttle Studio.</p>
                </div>
              </li>
              <li className="focus-item">
                <span className="focus-bullet"><i className="fa-solid fa-caret-right"></i></span>
                <div>
                  <strong>Cross-System Integration &amp; WRICEF Support</strong>
                  <p>Ariba CIG, WMS, and logistics carrier interface troubleshooting. IDOC WE02/WE05/WE19/BD87 reprocessing for custom Z-IDOCs (ZARB, ZICP, ZWPO).</p>
                </div>
              </li>
              <li className="focus-item">
                <span className="focus-bullet"><i className="fa-solid fa-caret-right"></i></span>
                <div>
                  <strong>Multi-Agent AI &amp; Intelligent Automation</strong>
                  <p>Building assist-to-human AI agent workflows for SAP incident triage, watsonx RAG knowledge bases, and SAP Joule / BTP GenAI Hub integrations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
