'use client';

import { useState } from 'react';
import { showToast } from './ToastContainer';

export default function FloatingControls() {
  const [glowOn, setGlowOn] = useState(true);

  const toggleGlow = () => {
    const nextState = !glowOn;
    setGlowOn(nextState);
    const blobs = document.querySelectorAll<HTMLElement>('.ambient-glow');
    blobs.forEach((b) => {
      b.style.opacity = nextState ? '0.5' : '0.05';
    });
    showToast(nextState ? 'Ambient Glass Glow Enabled' : 'Ambient Glass Glow Dimmed', 'fa-wand-magic-sparkles');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#160c1a]/90 border border-border-glass-light text-text-main flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red hover:-translate-y-0.5 shadow-2xl"
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          <i className="fa-solid fa-chevron-up text-sm" />
        </button>
      </div>

      {/* Glass FX Toggle on Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleGlow}
          className={`w-11 h-11 rounded-full bg-[#160c1a]/90 border ${
            glowOn ? 'border-accent-red/50 text-accent-red shadow-[0_0_15px_rgba(255,45,75,0.3)]' : 'border-border-glass-light text-text-faint'
          } flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:scale-110 active:scale-95 shadow-2xl`}
          title="Toggle Ambient Glass Glow / Performance Mode"
          aria-label="Toggle ambient glass glow effects"
        >
          <i className="fa-solid fa-wand-magic-sparkles text-sm" />
        </button>
      </div>
    </>
  );
}
