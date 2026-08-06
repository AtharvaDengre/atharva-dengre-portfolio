'use client';

import { useState } from 'react';
import { showToast } from './ToastContainer';

interface StepLog {
  agent: string;
  text: string;
}

interface Scenario {
  title: string;
  steps: StepLog[];
}

export default function SapAi() {
  const scenarioData: Record<string, Scenario> = {
    vendor_block: {
      title: 'Vendor Master BP Release Block (MDG / ME21N)',
      steps: [
        { agent: '[01 INTAKE AGENT]', text: 'Received Ticket #INC-9482: "PO creation blocked for Vendor 409210 (Company Code 1000)". Parsing payload...' },
        { agent: '[01 INTAKE AGENT]', text: 'Extracted parameters: Vendor=409210, CompCode=1000, T-Code=ME21N, ErrorCode=ME024.' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Checking context: Querying SAP MDG change request history for Vendor 409210...' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Found CR #88412 pending approval in Fiori MDG-S workflow (BRFplus block rule triggered).' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Querying watsonx RAG Knowledge Base for MDG-S rule BRF_MDG_VEND_BLK_04...' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Match found (Confidence: 98.4%): Vendor address field missing tax registration ID, auto-applying Posting Block.' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Assist-to-Human Fix Recommendation:' },
        { agent: '[04 RESOLUTION AGENT]', text: '1. Update Tax ID 2 under MDG-S CR #88412.\n2. Execute BRFplus decision re-evaluation.\n3. Release posting block via t-code BP / MDG governance approval.' },
        { agent: '[05 ROUTING AGENT]', text: 'Ticket enriched with full RCA payload and assigned to Senior MDG Consultant (Atharva Dengre).' },
      ],
    },
    idoc_desadv: {
      title: 'Custom Z-IDOC DESADV Quantity Mismatch Error (WE02 / ZWPO / Ariba)',
      steps: [
        { agent: '[01 INTAKE AGENT]', text: 'Received Alert #IDOC-4912: "Status 51 on IDOC DESADV_01 #892019482 via Ariba CIG Interface".' },
        { agent: '[01 INTAKE AGENT]', text: 'Parsed segment E1EDP20: Item 10, Delivery Qty 500 EA vs PO Line Qty 450 EA.' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Fetching PO 4500891022 line details via SAP RFC query...' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Confirmed PO 4500891022 allows 10% over-delivery tolerance, but IDOC exceeds limit by 11.1%.' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Consulting SAP AMS IDOC Troubleshooting Engine...' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Root Cause (Confidence: 96.8%): Supplier dispatched excess batch without PO tolerance amendment in ME22N.' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Assist-to-Human Resolution Plan:' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Option A: Buyer updates PO 4500891022 over-delivery tolerance to 15% in ME22N.\nOption B: Reprocess IDOC in BD87 after vendor sends updated DESADV dispatch advice.' },
        { agent: '[05 ROUTING AGENT]', text: 'Notified P2P Procurement Operations team with step-by-step reprocessing commands.' },
      ],
    },
    pricing_match: {
      title: 'PO 3-Way Match Tax Pricing Discrepancy (ME22N / MIRO)',
      steps: [
        { agent: '[01 INTAKE AGENT]', text: 'Received Incident #INC-10492: "MIRO Invoice posting blocked for PO 4500771209 (3-Way Match Price Variance)".' },
        { agent: '[01 INTAKE AGENT]', text: 'Identified variance: Invoice tax amount $14,200 vs PO calculated tax $12,800 (Difference: $1,400).' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Inspecting pricing procedure MWST tax code determination in SAP S/4HANA MM...' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Identified region code mismatch between Vendor Plant and Delivery Location.' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Executing RAG similarity search against historical MM incident database...' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Root Cause (Confidence: 99.1%): Tax jurisdiction code updated in SAP S/4HANA post PO issuance.' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Assist-to-Human Action Plan:' },
        { agent: '[04 RESOLUTION AGENT]', text: '1. Update condition record in ME22N for line 10.\n2. Re-trigger PO release strategy.\n3. Release MIRO payment block via MRBR.' },
        { agent: '[05 ROUTING AGENT]', text: 'Dispatched context summary to Accounts Payable & Sourcing Lead.' },
      ],
    },
  };

  const [selectedScenario, setSelectedScenario] = useState('vendor_block');
  const [logs, setLogs] = useState<{ agent: string; text: string; type: string }[]>([
    { agent: '[SYSTEM]', text: 'Engine initialized. Select a scenario above and click "Run Simulation".', type: 'info' },
    { agent: '[HINT]', text: 'Multi-Agent architecture: Intake -> Clarification -> RAG Diagnosis -> Resolution -> Routing.', type: 'hint' },
  ]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Status: Idle');
  const [running, setRunning] = useState(false);

  const runSimulation = () => {
    if (running) return;
    setRunning(true);

    const scenario = scenarioData[selectedScenario];
    setLogs([{ agent: '[SYSTEM]', text: `Initializing Multi-Agent Engine for Scenario: "${scenario.title}"...`, type: 'highlight' }]);
    setStatus('Status: Processing Agent Pipeline...');
    setProgress(10);

    let idx = 0;
    const total = scenario.steps.length;

    const timer = setInterval(() => {
      if (idx < total) {
        const step = scenario.steps[idx];
        const type = step.agent.includes('RESOLVE') ? 'highlight' : step.agent.includes('ROUTING') ? 'success' : 'info';
        setLogs((prev) => [...prev, { agent: step.agent, text: step.text, type }]);
        idx++;
        setProgress(Math.min(Math.round((idx / total) * 100), 100));
      } else {
        clearInterval(timer);
        setLogs((prev) => [...prev, { agent: '[SYSTEM]', text: 'Multi-Agent Pipeline Completed. Assist-to-Human Recommendation Ready.', type: 'success' }]);
        setStatus('Status: Completed Successfully');
        setRunning(false);
      }
    }, 700);
  };

  const clearTerminal = () => {
    setLogs([{ agent: '[SYSTEM]', text: 'Terminal cleared. Select scenario and click "Run Simulation".', type: 'info' }]);
    setProgress(0);
    setStatus('Status: Idle');
    showToast('Terminal cleared');
  };

  return (
    <section id="sap-ai" className="relative z-10 py-24 border-t border-border-glass bg-[radial-gradient(circle_at_50%_50%,rgba(35,12,40,0.3)_0%,transparent_70%)]">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-6">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">04</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">SAP × AI ARCHITECTURE &amp; INITIATIVES</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <p className="text-[16.5px] text-text-muted max-w-[760px] mb-12 leading-relaxed">
          Applying <strong className="text-text-main">SAP Joule</strong>, <strong className="text-text-main">SAP GenAI Hub</strong>, <strong className="text-text-main">SAP AI Launchpad</strong>, and <strong className="text-text-main">IBM watsonx</strong> to real-world enterprise AMS challenges — bridging core S2P &amp; P2P ERP workflows with agentic AI intelligence.
        </p>

        {/* Multi-Agent Workflow Diagram */}
        <div className="glass-panel mb-8">
          <div className="flex justify-between items-center flex-wrap gap-3.5 mb-7">
            <h3 className="font-display text-xl font-bold text-text-main flex items-center gap-3">
              <i className="fa-solid fa-network-wired text-accent-red" /> Multi-Agent Incident Triage Architecture
            </h3>
            <span className="font-mono text-xs py-1.5 px-3.5 rounded-full bg-accent-green/10 border border-accent-green text-accent-green flex items-center gap-1.5">
              <i className="fa-solid fa-check" /> Demonstrated to IBM Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
            <div className="glass-card-sub text-center p-4">
              <div className="font-mono text-[11px] text-accent-red font-bold mb-1.5">01</div>
              <div className="text-2xl text-text-main mb-2"><i className="fa-solid fa-inbox" /></div>
              <h4 className="font-display text-xs font-bold text-text-main mb-1.5">Intake Agent</h4>
              <p className="text-[11.5px] text-text-muted leading-tight">Structured intake &amp; payload parsing of SAP AMS incidents from ServiceNow.</p>
            </div>

            <div className="text-accent-red text-sm opacity-60 text-center max-lg:rotate-90 max-lg:my-2"><i className="fa-solid fa-chevron-right" /></div>

            <div className="glass-card-sub text-center p-4">
              <div className="font-mono text-[11px] text-accent-red font-bold mb-1.5">02</div>
              <div className="text-2xl text-text-main mb-2"><i className="fa-solid fa-circle-question" /></div>
              <h4 className="font-display text-xs font-bold text-text-main mb-1.5">Clarification</h4>
              <p className="text-[11.5px] text-text-muted leading-tight">Asks targeted follow-ups to gather missing context before triage starts.</p>
            </div>

            <div className="text-accent-red text-sm opacity-60 text-center max-lg:rotate-90 max-lg:my-2"><i className="fa-solid fa-chevron-right" /></div>

            <div className="glass-card-sub text-center p-4">
              <div className="font-mono text-[11px] text-accent-red font-bold mb-1.5">03</div>
              <div className="text-2xl text-text-main mb-2"><i className="fa-solid fa-stethoscope" /></div>
              <h4 className="font-display text-xs font-bold text-text-main mb-1.5">Diagnosis</h4>
              <p className="text-[11.5px] text-text-muted leading-tight">Queries domain RAG knowledge base to isolate likely root cause.</p>
            </div>

            <div className="text-accent-red text-sm opacity-60 text-center max-lg:rotate-90 max-lg:my-2"><i className="fa-solid fa-chevron-right" /></div>

            <div className="glass-card-sub text-center p-4">
              <div className="font-mono text-[11px] text-accent-red font-bold mb-1.5">04</div>
              <div className="text-2xl text-text-main mb-2"><i className="fa-solid fa-lightbulb" /></div>
              <h4 className="font-display text-xs font-bold text-text-main mb-1.5">Resolution</h4>
              <p className="text-[11.5px] text-text-muted leading-tight">Surfaces verified fix paths with assist-to-human recommendation.</p>
            </div>

            <div className="text-accent-red text-sm opacity-60 text-center max-lg:rotate-90 max-lg:my-2"><i className="fa-solid fa-chevron-right" /></div>

            <div className="glass-card-sub text-center p-4">
              <div className="font-mono text-[11px] text-accent-red font-bold mb-1.5">05</div>
              <div className="text-2xl text-text-main mb-2"><i className="fa-solid fa-route" /></div>
              <h4 className="font-display text-xs font-bold text-text-main mb-1.5">Routing</h4>
              <p className="text-[11.5px] text-text-muted leading-tight">Routes ticket with complete diagnostic context attached.</p>
            </div>
          </div>
        </div>

        {/* AI Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel p-6 border-t-2 border-t-transparent hover:border-t-accent-red">
            <div className="font-mono text-[10.5px] text-accent-red uppercase tracking-wider mb-2.5">Philosophy</div>
            <h3 className="font-display text-base font-bold text-text-main mb-2.5">Assist-to-Human by Design</h3>
            <p className="text-xs text-text-muted leading-relaxed">The framework never auto-executes changes on production SAP. Every agent hands off to an expert consultant — maximizing speed while preserving strict auditability.</p>
          </div>

          <div className="glass-panel p-6 border-t-2 border-t-transparent hover:border-t-accent-red">
            <div className="font-mono text-[10.5px] text-accent-red uppercase tracking-wider mb-2.5">Knowledge Retrieval</div>
            <h3 className="font-display text-base font-bold text-text-main mb-2.5">watsonx RAG Knowledge Engine</h3>
            <p className="text-xs text-text-muted leading-relaxed">Built a Retrieval-Augmented Generation chatbot on IBM watsonx for enterprise knowledge retrieval — grounding answers in validated MDG/MM standard operating procedures.</p>
          </div>

          <div className="glass-panel p-6 border-t-2 border-t-transparent hover:border-t-accent-red">
            <div className="font-mono text-[10.5px] text-accent-red uppercase tracking-wider mb-2.5">SAP Native &amp; Joule</div>
            <h3 className="font-display text-base font-bold text-text-main mb-2.5">SAP GenAI Hub &amp; SAP Joule</h3>
            <p className="text-xs text-text-muted leading-relaxed">Hands-on with LLM orchestration natively inside SAP Business Technology Platform (BTP) — connecting model intelligence and SAP Joule directly with SAP S/4HANA tables.</p>
          </div>

          <div className="glass-panel p-6 border-t-2 border-t-transparent hover:border-t-accent-red">
            <div className="font-mono text-[10.5px] text-accent-red uppercase tracking-wider mb-2.5">Governance &amp; RCA</div>
            <h3 className="font-display text-base font-bold text-text-main mb-2.5">AI-Assisted RCA &amp; Governance</h3>
            <p className="text-xs text-text-muted leading-relaxed">Standardizing RCA summaries for procurement and master data incidents using GenAI prompt frameworks — converting technical error findings into executive governance insights.</p>
          </div>
        </div>

        {/* Live Interactive Simulator */}
        <div id="simulator" className="glass-panel border-accent-red/30 shadow-[0_20px_60px_rgba(255,45,75,0.15)]">
          <div className="flex justify-between items-end flex-wrap gap-5 mb-6 pb-5 border-b border-border-glass">
            <div>
              <span className="font-mono text-xs text-accent-amber uppercase tracking-wider mb-2 block">
                <i className="fa-solid fa-terminal" /> Live Interactive Sandbox
              </span>
              <h3 className="font-display text-22px text-text-main mb-1">Test the SAP AMS Multi-Agent Triage Simulator</h3>
              <p className="text-[13.5px] text-text-muted">Select an SAP incident scenario below to watch the Multi-Agent pipeline execute step-by-step in real time!</p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <label htmlFor="scenarioSelect" className="font-mono text-xs text-text-muted">Select Ticket Scenario:</label>
              <select
                id="scenarioSelect"
                value={selectedScenario}
                onChange={(e) => setSelectedScenario(e.target.value)}
                className="bg-bg-dark border border-border-glass-light text-text-main font-mono text-[12.5px] py-2.5 px-3.5 rounded-md outline-none cursor-pointer min-w-[320px] max-sm:w-full"
              >
                <option value="vendor_block">1. Vendor Master BP Release Block (MDG / ME21N)</option>
                <option value="idoc_desadv">2. Custom Z-IDOC DESADV Quantity Mismatch Error (WE02 / ZWPO / Ariba)</option>
                <option value="pricing_match">3. PO 3-Way Match Tax Pricing Discrepancy (ME22N / MIRO)</option>
              </select>
              <button onClick={runSimulation} className="btn-primary-glass py-2.5 px-5 text-xs">
                <i className="fa-solid fa-play" /> Run Simulation
              </button>
            </div>
          </div>

          <div className="bg-[#08040a]/95 border border-white/15 rounded-xl overflow-hidden font-mono">
            <div className="bg-[#160c1a]/90 px-4 py-3 flex items-center justify-between border-b border-border-glass">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11.5px] text-text-faint">SAP_AMS_MultiAgent_Framework.log — Live Execution Engine</div>
              <button onClick={clearTerminal} className="bg-transparent border-none text-text-faint text-xs cursor-pointer hover:text-accent-red">
                <i className="fa-solid fa-trash-can" /> Clear
              </button>
            </div>

            <div className="h-[280px] overflow-y-auto p-4 text.xs leading-relaxed space-y-1.5 font-mono">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`break-words ${
                    log.type === 'highlight'
                      ? 'text-accent-red font-bold'
                      : log.type === 'success'
                      ? 'text-accent-green'
                      : log.type === 'hint'
                      ? 'text-text-faint'
                      : 'text-[#8ab4f8]'
                  }`}
                >
                  <span className="text-accent-amber font-semibold">{log.agent}: </span>
                  <span>{log.text}</span>
                </div>
              ))}
            </div>

            <div className="px-4 py-2.5 bg-[#0f0812]/90 border-t border-border-glass flex items-center justify-between text-[11px]">
              <div className="flex-1 max-w-[300px] h-1 bg-white/10 rounded overflow-hidden mr-3.5">
                <div className="h-full bg-accent-red transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-text-faint">{status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
