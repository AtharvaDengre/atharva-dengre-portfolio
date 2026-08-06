'use client';

import { useEffect, useState, useRef } from 'react';
import { showToast } from './ToastContainer';

export default function GyroTiltManager() {
  const [needsPermission, setNeedsPermission] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);

  // Orientation target values
  const targetX = useRef(0);
  const targetY = useRef(0);
  // Smoothed orientation values (LERP)
  const currentX = useRef(0);
  const currentY = useRef(0);

  const rafId = useRef<number | null>(null);
  const isListening = useRef(false);

  useEffect(() => {
    // 1. Respect prefers-reduced-motion
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // 2. Feature detect touch / mobile device with orientation support
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) return;

    if (!window.DeviceOrientationEvent) return;

    const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientation.requestPermission === 'function') {
      // iOS 13+ permission required
      setNeedsPermission(true);
    } else {
      // Non-iOS or Android devices with auto orientation support
      enableGyroListeners();
    }

    return () => {
      stopGyro();
    };
  }, []);

  const enableGyroListeners = () => {
    if (isListening.current) return;
    isListening.current = true;
    window.addEventListener('deviceorientation', handleOrientation, true);
    setMotionEnabled(true);
    setNeedsPermission(false);
    startAnimationLoop();
  };

  const requestPermission = async () => {
    try {
      const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<'granted' | 'denied'>;
      };

      if (typeof DeviceOrientation.requestPermission === 'function') {
        const permission = await DeviceOrientation.requestPermission();
        if (permission === 'granted') {
          enableGyroListeners();
          showToast('3D Motion Effects Enabled ✨', 'fa-compass');
        } else {
          setNeedsPermission(false);
        }
      } else {
        enableGyroListeners();
      }
    } catch {
      setNeedsPermission(false);
    }
  };

  const handleOrientation = (e: DeviceOrientationEvent) => {
    if (e.beta === null || e.gamma === null) return;

    // Standard phone holding angle is ~45 deg
    const beta = e.beta; // -180 to 180 (front/back tilt)
    const gamma = e.gamma; // -90 to 90 (left/right tilt)

    // Normalize beta around neutral 45 deg angle
    const normBeta = beta - 45;

    // Clamp tilt angles to +-10deg for refined, non-chaotic motion
    const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

    // Map beta to rotateX (inverted for natural depth response)
    targetX.current = clamp(-normBeta * 0.22, -10, 10);
    // Map gamma to rotateY
    targetY.current = clamp(gamma * 0.22, -10, 10);
  };

  const startAnimationLoop = () => {
    const update = () => {
      // Smooth LERP (0.08 for fluid motion)
      currentX.current += (targetX.current - currentX.current) * 0.08;
      currentY.current += (targetY.current - currentY.current) * 0.08;

      // Select target 3D cards (#avatarCard, .gyro-tilt)
      const tiltCards = document.querySelectorAll<HTMLElement>('#avatarCard, .gyro-tilt');
      tiltCards.forEach((card) => {
        card.style.transform = `perspective(1000px) rotateX(${currentX.current.toFixed(2)}deg) rotateY(${currentY.current.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      });

      rafId.current = requestAnimationFrame(update);
    };

    update();
  };

  const stopGyro = () => {
    isListening.current = false;
    window.removeEventListener('deviceorientation', handleOrientation, true);
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
  };

  if (!needsPermission || motionEnabled) return null;

  return (
    <div className="fixed bottom-16 left-4 z-50 animate-bounce">
      <button
        onClick={requestPermission}
        className="px-3.5 py-2 rounded-full bg-[#160c1a]/95 border border-accent-red/60 text-accent-red font-mono text-[11px] font-bold flex items-center gap-2 backdrop-blur-xl shadow-[0_10px_25px_rgba(255,45,75,0.35)] cursor-pointer active:scale-95 transition-all"
        title="Enable Gyroscope 3D Motion"
      >
        <span>Enable motion effects ✨</span>
      </button>
    </div>
  );
}
