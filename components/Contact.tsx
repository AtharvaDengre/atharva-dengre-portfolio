'use client';

import { showToast } from './ToastContainer';

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText('atharvadengre@gmail.com').then(() => {
      showToast('Copied email: atharvadengre@gmail.com');
    });
  };

  return (
    <section id="contact" className="relative z-10 py-24 border-t border-border-glass">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="flex items-center gap-4.5 mb-13.5">
          <span className="font-headline text-base text-accent-red bg-accent-red/10 px-3 py-1 rounded border border-accent-red/25">08</span>
          <h2 className="font-headline text-[clamp(26px,3.5vw,40px)] tracking-tight text-text-main">CONTACT &amp; CONNECT</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border-glass-light to-transparent" />
        </div>

        <div className="glass-panel p-8 sm:p-12 text-center">
          <h3 className="font-headline text-[clamp(24px,3.5vw,38px)] text-text-main mb-3.5">Let&apos;s talk SAP S/4HANA, S2P / P2P, MDG, or AI in the enterprise.</h3>
          <p className="text-[15.5px] text-text-muted max-w-[660px] mx-auto mb-9 leading-relaxed">
            Currently based in <strong className="text-text-main">Pune, India</strong> — open to relocation across <strong className="text-text-main">Dubai, Singapore &amp; Malaysia</strong>, and exploring <strong className="text-text-main">EU roles</strong> and <strong className="text-text-main">remote positions in EMEA/APAC time zones</strong>.
          </p>

          {/* Reflowed Contact Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px] mx-auto mb-9">
            <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-5 text-center backdrop-blur-xl">
              <i className="fa-solid fa-envelope text-xl text-accent-red mb-2 block" />
              <div className="font-mono text-[10.5px] text-text-faint uppercase tracking-wider mb-1">Email Address</div>
              <div className="font-mono text-[13px] font-semibold text-text-main">atharvadengre@gmail.com</div>
            </div>

            <div className="bg-bg-glass-sub border border-border-glass rounded-xl p-5 text-center backdrop-blur-xl">
              <i className="fa-solid fa-location-dot text-xl text-accent-red mb-2 block" />
              <div className="font-mono text-[10.5px] text-text-faint uppercase tracking-wider mb-1">Location Status</div>
              <div className="font-mono text-[12px] font-semibold text-text-main leading-tight">Pune, India · Open to relocation · EMEA / APAC remote</div>
            </div>
          </div>

          <form id="contactForm" className="max-w-[640px] mx-auto mb-9 text-left" action="https://formsubmit.co/atharvadengre@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Portfolio Message - Atharva Dengre Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label htmlFor="cf-name" className="block font-mono text-[11.5px] text-text-faint uppercase tracking-wider mb-2">Your Name</label>
                <input id="cf-name" type="text" name="Name" required placeholder="e.g. Hiring Manager / Recruiter" className="w-full bg-[#09050b]/70 border border-border-glass-light rounded-lg p-3.5 text-text-main text-sm outline-none focus:border-accent-red transition-colors" />
              </div>
              <div>
                <label htmlFor="cf-email" className="block font-mono text-[11.5px] text-text-faint uppercase tracking-wider mb-2">Your Email</label>
                <input id="cf-email" type="email" name="Email" required placeholder="e.g. manager@enterprise.com" className="w-full bg-[#09050b]/70 border border-border-glass-light rounded-lg p-3.5 text-text-main text-sm outline-none focus:border-accent-red transition-colors" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="cf-message" className="block font-mono text-[11.5px] text-text-faint uppercase tracking-wider mb-2">Message / Opportunity Details</label>
              <textarea id="cf-message" name="Message" required placeholder="Hello Atharva, I'd like to discuss an SAP S/4HANA MM / MDG / S2P opportunity..." className="w-full bg-[#09050b]/70 border border-border-glass-light rounded-lg p-3.5 text-text-main text-sm outline-none focus:border-accent-red transition-colors min-h-[120px] resize-y" />
            </div>

            <button type="submit" className="btn-primary-glass w-full justify-center py-4 text-sm cursor-pointer">
              <span>Send Message Direct to Email</span>
              <i className="fa-solid fa-paper-plane" />
            </button>

            <div className="font-mono text-xs text-text-faint text-center mt-3.5">
              <i className="fa-solid fa-shield-heart mr-1.5" /> Direct inbox submission — typically responds within 24 hours.
            </div>
          </form>

          <div className="flex justify-center gap-3.5 flex-wrap">
            <a href="https://www.linkedin.com/in/atharva-dengre" target="_blank" rel="noopener noreferrer" className="btn-secondary-glass">
              <i className="fa-brands fa-linkedin" /> Connect on LinkedIn
            </a>
            <a href="https://github.com/AtharvaDengre" target="_blank" rel="noopener noreferrer" className="btn-secondary-glass">
              <i className="fa-brands fa-github" /> View GitHub
            </a>
            <button onClick={copyEmail} className="btn-secondary-glass cursor-pointer">
              <i className="fa-regular fa-envelope" /> Copy Email Address
            </button>
            <a href="#hero" className="btn-secondary-glass">
              <i className="fa-solid fa-arrow-up" /> Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
