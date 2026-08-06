'use client';

import { useState } from 'react';
import { showToast } from './ToastContainer';
import { useGyro } from './GyroContext';

export default function FloatingControls() {
  const [glowOn, setGlowOn] = useState(true);
  const { gyroEnabled, isSupportedMobile, toggleGyro } = useGyro();

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
      {/* Glass FX Toggle & Gyroscope Motion Toggle on Bottom-Left */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2">
        {/* Ambient Glass Glow Toggle */}
        <button
          onClick={toggleGlow}
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#160c1a]/80 border ${
            glowOn ? 'border-accent-red/50 text-accent-red shadow-[0_0_15px_rgba(255,45,75,0.3)]' : 'border-border-glass-light text-text-faint'
          } flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:scale-110 active:scale-95 shadow-2xl opacity-80 hover:opacity-100`}
          title="Toggle Ambient Glass Glow / Performance Mode"
          aria-label="Toggle ambient glass glow effects"
        >
          <i className="fa-solid fa-wand-magic-sparkles text-xs sm:text-sm" />
        </button>

        {/* Gyroscope 3D Motion Tilt Toggle - Only visible on supported touch/mobile devices */}
        {isSupportedMobile && (
          <button
            onClick={toggleGyro}
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#160c1a]/80 border ${
              gyroEnabled
                ? 'border-accent-red/60 text-accent-red shadow-[0_0_15px_rgba(255,45,75,0.35)]'
                : 'border-border-glass-light text-text-faint'
            } flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:scale-110 active:scale-95 shadow-2xl opacity-80 hover:opacity-100`}
            title="Toggle 3D Motion Tilt (Gyroscope)"
            aria-label="Toggle gyroscope 3D motion tilt effect"
          >
            <i className="fa-solid fa-compass text-xs sm:text-sm" />
          </button>
        )}
      </div>

      {/* Scroll to Top on Bottom-Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#160c1a]/80 border border-border-glass-light text-text-main flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red hover:-translate-y-0.5 shadow-2xl opacity-80 hover:opacity-100"
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          <i className="fa-solid fa-chevron-up text-xs sm:text-sm" />
        </button>
      </div>
    </>
  );
}
