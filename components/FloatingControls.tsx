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
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-2.5">
      <button
        onClick={toggleGlow}
        className="w-11 h-11 rounded-full bg-[#160c1a]/85 border border-border-glass-light text-text-main flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red hover:-translate-y-1 shadow-lg"
        title="Toggle Glass Ambient Glow"
      >
        <i className="fa-solid fa-wand-magic-sparkles" />
      </button>

      <button
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-[#160c1a]/85 border border-border-glass-light text-text-main flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red hover:-translate-y-1 shadow-lg"
        title="Scroll to Top"
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </div>
  );
}
