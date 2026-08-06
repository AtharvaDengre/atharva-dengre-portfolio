'use client';

import { useState } from 'react';

interface CertItem {
  id: string;
  category: 'sap' | 'ibm' | 'redhat';
  issuerBadgeClass: string;
  issuerBadgeIcon: string;
  issuerBadgeText: string;
  title: string;
  dateIcon: string;
  dateText: string;
  tags: string[];
}

export default function Certifications() {
  const [filter, setFilter] = useState<'all' | 'sap' | 'ibm' | 'redhat'>('all');

  const certs: CertItem[] = [
    {
      id: '1',
      category: 'sap',
      issuerBadgeClass: 'bg-[rgba(0,143,211,0.2)] text-[#00a3e0] border border-[rgba(0,143,211,0.4)]',
      issuerBadgeIcon: 'fa-gem',
      issuerBadgeText: 'SAP Certified',
      title: 'SAP Master Data Governance on SAP S/4HANA',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued May 2026',
      tags: ['Enterprise MDG', 'S/4HANA'],
    },
    {
      id: '2',
      category: 'sap',
      issuerBadgeClass: 'bg-[rgba(0,143,211,0.2)] text-[#00a3e0] border border-[rgba(0,143,211,0.4)]',
      issuerBadgeIcon: 'fa-robot',
      issuerBadgeText: 'SAP Certified',
      title: 'SAP Certified — Generative AI Developer',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued Apr 2026',
      tags: ['SAP GenAI Hub', 'BTP / Joule'],
    },
    {
      id: '3',
      category: 'sap',
      issuerBadgeClass: 'bg-[rgba(0,143,211,0.2)] text-[#00a3e0] border border-[rgba(0,143,211,0.4)]',
      issuerBadgeIcon: 'fa-cart-shopping',
      issuerBadgeText: 'SAP Certified',
      title: 'SAP Certified Associate — S/4HANA Sourcing & Procurement',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued Jun 2024 · Valid thru 2027',
      tags: ['SAP MM', 'S2P & P2P Procurement'],
    },
    {
      id: '4',
      category: 'ibm',
      issuerBadgeClass: 'bg-[rgba(15,98,254,0.2)] text-[#4589ff] border border-[rgba(15,98,254,0.4)]',
      issuerBadgeIcon: 'fa-users',
      issuerBadgeText: 'IBM Challenge',
      title: 'IBMer watsonx Challenge AI Automation',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: '2025 & 2026 Participant',
      tags: ['watsonx', 'AI Automation Challenge'],
    },
    {
      id: '5',
      category: 'ibm',
      issuerBadgeClass: 'bg-[rgba(15,98,254,0.2)] text-[#4589ff] border border-[rgba(15,98,254,0.4)]',
      issuerBadgeIcon: 'fa-brain',
      issuerBadgeText: 'IBM',
      title: 'Generative & Agentic AI Foundation & Advanced',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued Nov 2025',
      tags: ['Agentic Systems', 'LLMs'],
    },
    {
      id: '6',
      category: 'ibm',
      issuerBadgeClass: 'bg-[rgba(15,98,254,0.2)] text-[#4589ff] border border-[rgba(15,98,254,0.4)]',
      issuerBadgeIcon: 'fa-user-tie',
      issuerBadgeText: 'IBM',
      title: 'Consulting Agentic AI Foundations',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued Oct 2025',
      tags: ['AI Consulting', 'Enterprise'],
    },
    {
      id: '7',
      category: 'ibm',
      issuerBadgeClass: 'bg-[rgba(15,98,254,0.2)] text-[#4589ff] border border-[rgba(15,98,254,0.4)]',
      issuerBadgeIcon: 'fa-cloud',
      issuerBadgeText: 'IBM',
      title: 'Certified Professional Developer — Cloud v6',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued Dec 2023',
      tags: ['IBM Cloud', 'Architecture'],
    },
    {
      id: '8',
      category: 'redhat',
      issuerBadgeClass: 'bg-[rgba(238,0,0,0.2)] text-[#ff4d4d] border border-[rgba(238,0,0,0.4)]',
      issuerBadgeIcon: 'fa-brands fa-redhat',
      issuerBadgeText: 'Red Hat Live Training',
      title: 'Red Hat Official Live Training — OpenShift Administration II (DO280 v4.14)',
      dateIcon: 'fa-solid fa-chalkboard-user',
      dateText: 'Red Hat Live Instructor-Led Course (Dec 2025)',
      tags: ['Red Hat Live Training', 'OpenShift DO280'],
    },
    {
      id: '9',
      category: 'redhat',
      issuerBadgeClass: 'bg-[rgba(238,0,0,0.2)] text-[#ff4d4d] border border-[rgba(238,0,0,0.4)]',
      issuerBadgeIcon: 'fa-brands fa-redhat',
      issuerBadgeText: 'Red Hat Live Training',
      title: 'Red Hat Official Live Training — OpenShift Developer I (DO188)',
      dateIcon: 'fa-solid fa-chalkboard-user',
      dateText: 'Red Hat Live Instructor-Led Course (Mar 2025)',
      tags: ['Red Hat Live Training', 'Podman DO188'],
    },
    {
      id: '10',
      category: 'redhat',
      issuerBadgeClass: 'bg-[rgba(255,153,0,0.2)] text-[#ff9900] border border-[rgba(255,153,0,0.4)]',
      issuerBadgeIcon: 'fa-brands fa-aws',
      issuerBadgeText: 'AWS',
      title: 'AWS Academy Cloud Foundations',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued 2024',
      tags: ['AWS Cloud', 'Foundations'],
    },
    {
      id: '11',
      category: 'redhat',
      issuerBadgeClass: 'bg-[rgba(0,188,242,0.2)] text-[#00bcf2] border border-[rgba(0,188,242,0.4)]',
      issuerBadgeIcon: 'fa-solid fa-network-wired',
      issuerBadgeText: 'Cisco & Industry',
      title: 'CCNAv7 Networking & Chemicals/Petroleum Bronze Solutions',
      dateIcon: 'fa-regular fa-calendar-check',
      dateText: 'Issued 2023 - 2024',
      tags: ['Cisco CCNA', 'Petrochemicals Domain'],
    },
  ];

  const filteredCerts = filter === 'all' ? certs : certs.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="relative z-10 py-24 border-t border-border-glass">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-8">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">05</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">CERTIFICATIONS &amp; FORMAL TRAINING</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2.5 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`font-mono text-xs py-2 px-4 rounded-full border transition-all ${
              filter === 'all'
                ? 'bg-accent-red/15 border-accent-red text-text-main'
                : 'bg-bg-glass border-border-glass text-text-muted hover:border-accent-red'
            }`}
          >
            All Credentials &amp; Training (11)
          </button>
          <button
            onClick={() => setFilter('sap')}
            className={`font-mono text-xs py-2 px-4 rounded-full border transition-all ${
              filter === 'sap'
                ? 'bg-accent-red/15 border-accent-red text-text-main'
                : 'bg-bg-glass border-border-glass text-text-muted hover:border-accent-red'
            }`}
          >
            SAP Certified (3)
          </button>
          <button
            onClick={() => setFilter('ibm')}
            className={`font-mono text-xs py-2 px-4 rounded-full border transition-all ${
              filter === 'ibm'
                ? 'bg-accent-red/15 border-accent-red text-text-main'
                : 'bg-bg-glass border-border-glass text-text-muted hover:border-accent-red'
            }`}
          >
            IBM Badges &amp; Challenges (4)
          </button>
          <button
            onClick={() => setFilter('redhat')}
            className={`font-mono text-xs py-2 px-4 rounded-full border transition-all ${
              filter === 'redhat'
                ? 'bg-accent-red/15 border-accent-red text-text-main'
                : 'bg-bg-glass border-border-glass text-text-muted hover:border-accent-red'
            }`}
          >
            Red Hat &amp; Cloud Training (4)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((c) => (
            <div key={c.id} className="glass-panel p-6 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className={`font-mono text-[11px] font-bold py-1 px-2.5 rounded w-fit mb-3.5 uppercase ${c.issuerBadgeClass}`}>
                  <i className={`${c.issuerBadgeIcon} mr-1.5`} /> {c.issuerBadgeText}
                </div>
                <h3 className="font-display text-base font-bold text-text-main mb-3 leading-snug">{c.title}</h3>
                <div className="font-mono text-[11.5px] text-accent-red mb-4">
                  <i className={`${c.dateIcon} mr-1.5`} /> {c.dateText}
                </div>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {c.tags.map((t, idx) => (
                  <span key={idx} className="font-mono text-[10px] py-1 px-2 rounded bg-white/5 border border-border-glass text-text-faint">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
