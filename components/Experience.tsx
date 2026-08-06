export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 border-t border-border-glass">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-13.5">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">02</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">PROFESSIONAL EXPERIENCE</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="relative pl-5">
          <div className="absolute left-0 top-2.5 bottom-2.5 w-0.5 bg-gradient-to-b from-accent-red to-accent-purple shadow-[0_0_10px_#ff2d4b]" />

          <div className="glass-panel">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-3.5">
              <div>
                <h3 className="font-headline text-22px text-text-main inline">Package Specialist — SAP (Delivery, Operations &amp; Data)</h3>
                <span className="text-accent-red font-mono text-base font-bold ml-2">@ IBM India Pvt. Ltd.</span>
              </div>
              <div className="font-mono text-xs py-1.5 px-3.5 rounded-full bg-accent-red/10 border border-accent-red text-accent-red">
                <i className="fa-solid fa-crown mr-1" /> Petrochemicals Account (IBM Gold-Tier)
              </div>
            </div>

            <div className="flex flex-wrap gap-5 font-mono text-xs text-text-faint mb-5 pb-4 border-b border-border-glass">
              <span className="flex items-center gap-1.5"><i className="fa-regular fa-calendar" /> Nov 2023 — Present · 2 yrs 10 mos (2.8+ Yrs Total SAP Exp)</span>
              <span className="flex items-center gap-1.5"><i className="fa-solid fa-location-dot" /> Pune, India (Hybrid)</span>
              <span className="flex items-center gap-1.5"><i className="fa-solid fa-chart-line" /> 50K+ Monthly Txns · 99.8% SLA</span>
            </div>

            <div className="text-[15.5px] text-text-muted mb-6 leading-relaxed">
              <p>
                Acting as informal SME within the AMS engagement — supporting a sub-team of 3 on MM and MDG ticket triage, escalation handling, knowledge transfer, and onboarding. Resolving complex enterprise SAP incidents via ServiceNow with structured RCA and preventive operational controls.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card-sub">
                <div className="flex items-center gap-2.5 font-display text-sm font-bold text-text-main mb-2.5">
                  <i className="fa-solid fa-cart-shopping text-accent-red text-base" />
                  <span>S2P &amp; P2P Operations</span>
                </div>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Reviewed Purchase Requisitions &amp; processed Purchase Orders (ME21N/ME22N/ME23N) across direct/indirect categories. Resolved pricing, tax codes, payment terms, account assignments, price variances, release blocks, and 3-way match exceptions. Executed Goods Receipt (MIGO) &amp; Invoice Verification (MIRO).
                </p>
              </div>

              <div className="glass-card-sub">
                <div className="flex items-center gap-2.5 font-display text-sm font-bold text-text-main mb-2.5">
                  <i className="fa-solid fa-id-card text-accent-red text-base" />
                  <span>Master Data Governance &amp; Migration</span>
                </div>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Owned end-to-end Vendor / Customer / Employee / Intercompany Business Partner &amp; Material Master lifecycle across company codes. Executed mass migration using LSMW, Migration Cockpit, and Winshuttle (Studio &amp; Transaction) with zero-defect rollback design. Modified MDG workflows on Fiori &amp; BRFplus routing.
                </p>
              </div>

              <div className="glass-card-sub">
                <div className="flex items-center gap-2.5 font-display text-sm font-bold text-text-main mb-2.5">
                  <i className="fa-solid fa-diagram-project text-accent-red text-base" />
                  <span>IDOC, Interface &amp; WRICEF Support</span>
                </div>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Monitored and reprocessed standard IDOCs (ORDERS, ORDRSP, DESADV, INVOIC, CREMAS, DEBMAS) and custom Z-IDOCs (ZARB, ZICP, ZWPO) via WE02/WE05/WE19/BD87. Resolved SAP Ariba (CIG), third-party WMS linkage, and logistics carrier interface failures. Delivered WRICEF functional specs with ABAP developers for BAdI / user-exits.
                </p>
              </div>

              <div className="glass-card-sub">
                <div className="flex items-center gap-2.5 font-display text-sm font-bold text-text-main mb-2.5">
                  <i className="fa-solid fa-wand-magic-sparkles text-accent-red text-base" />
                  <span>Analytics, Intercompany &amp; Hypercare</span>
                </div>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Setup Intercompany (IC) master data &amp; customer-vendor linkages enabling IC procurement &amp; billing flows. Executed SQL on SAP HANA for duplicate vendor detection. Built Power BI &amp; Excel dashboards tracking PO cycle time &amp; master data quality. Executed cutover tasks &amp; post-go-live hypercare stabilization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
