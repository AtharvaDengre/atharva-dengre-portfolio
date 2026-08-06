export default function Methodology() {
  return (
    <section id="activate" className="relative z-10 py-24 border-t border-border-glass">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-13.5">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">03</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">SAP IMPLEMENTATION METHODOLOGY EXPOSURE</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* SAP Activate Card */}
          <div className="glass-panel p-7.5">
            <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-red/10 border border-accent-red text-accent-red w-fit mb-4 flex items-center gap-1.5 uppercase tracking-wider">
              <i className="fa-solid fa-bolt" /> SAP Activate Methodology (S/4HANA)
            </div>
            <h3 className="font-display text-lg font-bold text-text-main mb-5">Realize · Deploy · Run Phase Exposure</h3>

            <div className="flex flex-col gap-4">
              <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-4">
                <span className="font-mono text-[10.5px] font-bold text-accent-amber tracking-wider block mb-1.5">REALIZE PHASE</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Mass data migration via LSMW, Migration Cockpit, and Winshuttle. Master data cleansing for manufacturing (Make-to-Order / Engineer-to-Order) and process industry domains. Z-IDOC resolution, WRICEF object support, and MM configuration validation.
                </p>
              </div>

              <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-4">
                <span className="font-mono text-[10.5px] font-bold text-accent-amber tracking-wider block mb-1.5">DEPLOY PHASE</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Conversion wave execution, go-live readiness checks, data cutover validation, and interface stability verification across SAP Ariba (CIG), WMS, and logistics carriers.
                </p>
              </div>

              <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-4">
                <span className="font-mono text-[10.5px] font-bold text-accent-amber tracking-wider block mb-1.5">RUN PHASE</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Hypercare stabilization, incident triage &amp; structured RCA, RFC fix deployment, performance monitoring, and smooth AMS steady-state transition.
                </p>
              </div>
            </div>
          </div>

          {/* ASAP Methodology Card */}
          <div className="glass-panel p-7.5">
            <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-purple/10 border border-accent-purple text-accent-purple w-fit mb-4 flex items-center gap-1.5 uppercase tracking-wider">
              <i className="fa-solid fa-arrows-spin" /> ASAP Methodology (ECC)
            </div>
            <h3 className="font-display text-lg font-bold text-text-main mb-5">Go-Live &amp; Support Phase Exposure</h3>

            <div className="flex flex-col gap-4">
              <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-4">
                <span className="font-mono text-[10.5px] font-bold text-accent-amber tracking-wider block mb-1.5">GO-LIVE &amp; SUPPORT</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Production data migration support, system performance monitoring, hyper-care incident resolution, and structured handover to the AMS operational team.
                </p>
              </div>

              <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-4">
                <span className="font-mono text-[10.5px] font-bold text-accent-amber tracking-wider block mb-1.5">ASAP PHASES FAMILIARITY</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Conceptual familiarity across full ASAP phases: Project Preparation, Business Blueprint, Realization, Final Preparation, and Go-Live &amp; Support.
                </p>
              </div>

              <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-4">
                <span className="font-mono text-[10.5px] font-bold text-accent-amber tracking-wider block mb-1.5">WRICEF FRAMEWORK</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed">
                  Hands-on WRICEF classification: Workflow (Fiori/MDG/BRFplus), Reports (Power BI/HANA SQL), Interfaces (Z-IDOC/RFC/Ariba CIG), Conversions (Migration Cockpit/LSMW/Winshuttle), Enhancements (BAdI/user-exits), Forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
