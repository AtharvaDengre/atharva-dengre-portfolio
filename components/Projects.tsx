export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 border-t border-border-glass">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-13.5">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">07</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">PROJECTS &amp; INITIATIVES</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="glass-panel p-7.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-green/12 border border-accent-green text-accent-green w-fit mb-3.5 flex items-center gap-1.5">
                <i className="fa-solid fa-star" /> Demonstrated to IBM Leadership
              </div>
              <h3 className="font-display text-lg font-bold text-text-main mb-3">Multi-Agent AI Incident Resolution Framework (SAP AMS)</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Assist-to-human architecture for SAP AMS spanning intake template, clarification/verification, diagnosis, resolution, and routing agents over a domain-tagged knowledge base. Reduced manual triage for recurring MM/MDG incidents.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Agentic AI</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">SAP AMS</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">ServiceNow</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">BRFplus</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Lucidchart</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-panel p-7.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-green/12 border border-accent-green text-accent-green w-fit mb-3.5 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check" /> Deployed System
              </div>
              <h3 className="font-display text-lg font-bold text-text-main mb-3">watsonx RAG Knowledge Chatbot</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Retrieval-Augmented Generation chatbot built on IBM watsonx for enterprise SAP knowledge retrieval, grounding responses in validated MDG &amp; MM standard operating procedures to assist AMS consultants.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">RAG Architecture</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">IBM watsonx</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">LLMs</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Knowledge Base</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="glass-panel p-7.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-green/12 border border-accent-green text-accent-green w-fit mb-3.5 flex items-center gap-1.5">
                <i className="fa-solid fa-database" /> Master Data Initiative
              </div>
              <h3 className="font-display text-lg font-bold text-text-main mb-3">Master Data Cleansing &amp; Mass Migration Initiative</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Led data validation and reconciliation cycles on SAP HANA to detect duplicate vendor and customer records, executing corrective mass updates via LSMW, Migration Cockpit, and Winshuttle Studio.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">SAP HANA SQL</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">LSMW</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Migration Cockpit</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Winshuttle</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="glass-panel p-7.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-amber/12 border border-accent-amber text-accent-amber w-fit mb-3.5 flex items-center gap-1.5">
                <i className="fa-solid fa-flask" /> AI RCA Initiative
              </div>
              <h3 className="font-display text-lg font-bold text-text-main mb-3">AI-Assisted RCA &amp; Governance Reporting</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Designed a GenAI prompt framework to standardize RCA summaries for procurement and master data incidents, converting technical error findings into executive-ready governance insights.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">GenAI RCA</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Governance</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">ServiceNow</span>
            </div>
          </div>

          {/* Project 5 */}
          <div className="glass-panel p-7.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-purple/12 border border-accent-purple text-accent-purple w-fit mb-3.5 flex items-center gap-1.5">
                <i className="fa-solid fa-laptop-code" /> SAP AI Stack Hands-On
              </div>
              <h3 className="font-display text-lg font-bold text-text-main mb-3">SAP AI Stack &amp; Joule Integration</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Hands-on exploration of SAP GenAI Hub and SAP AI Launchpad on BTP for enterprise LLM consumption, prompt orchestration, and SAP Joule conversational AI integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">SAP Joule</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">SAP BTP</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">GenAI Hub</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">AI Launchpad</span>
            </div>
          </div>

          {/* Project 6 */}
          <div className="glass-panel p-7.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs py-1 px-3 rounded-full bg-accent-purple/12 border border-accent-purple text-accent-purple w-fit mb-3.5 flex items-center gap-1.5">
                <i className="fa-solid fa-lightbulb" /> Case Study
              </div>
              <h3 className="font-display text-lg font-bold text-text-main mb-3">Generative AI for Supply Chain &amp; S2P Optimization</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Evaluation of how LLMs and SAP BTP services enhance supplier performance analysis, demand forecasting insights, and natural-language query interfaces for enterprise sourcing teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Generative AI</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">Supply Chain</span>
              <span className="font-mono text-xs py-1 px-2.5 rounded bg-bg-glass-sub border border-border-glass text-text-faint">S2P</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
