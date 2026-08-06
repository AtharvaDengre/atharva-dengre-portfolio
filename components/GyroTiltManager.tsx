'use client';

import { useEffect, useRef } from 'react';
import { useGyro } from './GyroContext';

// Configurable Gyroscope Motion Constants
const GYRO_SENSITIVITY = 0.55; // Multiplier mapping device orientation to tilt
const MAX_TILT_DEG = 20; // Maximum tilt angle in degrees (+-20deg)
const LERP_FACTOR = 0.08; // LERP smoothing speed (fluid & zero jitter)
const GYRO_RESUME_DELAY_MS = 500; // Debounce delay in ms after user stops touching/scrolling

export default function GyroTiltManager() {
  const { gyroEnabled } = useGyro();

  // Orientation target values
  const targetX = useRef(0);
  const targetY = useRef(0);
  // Smoothed orientation values (LERP)
  const currentX = useRef(0);
  const currentY = useRef(0);

  const rafId = useRef<number | null>(null);
  const isUserInteracting = useRef(false);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!gyroEnabled) {
      // Ease back to flat neutral 0deg when disabled
      targetX.current = 0;
      targetY.current = 0;

      // Unregister orientation & touch/scroll listeners
      window.removeEventListener('deviceorientation', handleOrientation, true);
      window.removeEventListener('touchstart', handleTouchOrScrollStart);
      window.removeEventListener('touchmove', handleTouchOrScrollStart);
      window.removeEventListener('touchend', handleTouchOrScrollStart);
      window.removeEventListener('touchcancel', handleTouchOrScrollStart);
      window.removeEventListener('scroll', handleTouchOrScrollStart);

      // Start easing loop to return cards smoothly to flat 0deg
      startAnimationLoop(true);
      return;
    }

    // Attach orientation & touch/scroll listeners when enabled
    window.addEventListener('deviceorientation', handleOrientation, true);
    window.addEventListener('touchstart', handleTouchOrScrollStart, { passive: true });
    window.addEventListener('touchmove', handleTouchOrScrollStart, { passive: true });
    window.addEventListener('touchend', handleTouchOrScrollStart, { passive: true });
    window.addEventListener('touchcancel', handleTouchOrScrollStart, { passive: true });
    window.addEventListener('scroll', handleTouchOrScrollStart, { passive: true });

    startAnimationLoop(false);

    return () => {
      stopGyro();
    };
  }, [gyroEnabled]);

  const handleTouchOrScrollStart = () => {
    isUserInteracting.current = true;
    targetX.current = 0;
    targetY.current = 0;

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }

    resumeTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
    }, GYRO_RESUME_DELAY_MS);
  };

  const handleOrientation = (e: DeviceOrientationEvent) => {
    if (isUserInteracting.current) return;
    if (e.beta === null || e.gamma === null) return;

    const beta = e.beta; // -180 to 180 (front/back tilt)
    const gamma = e.gamma; // -90 to 90 (left/right tilt)

    // Normalize beta around neutral 45 deg angle
    const normBeta = beta - 45;

    const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

    targetX.current = clamp(-normBeta * GYRO_SENSITIVITY, -MAX_TILT_DEG, MAX_TILT_DEG);
    targetY.current = clamp(gamma * GYRO_SENSITIVITY, -MAX_TILT_DEG, MAX_TILT_DEG);
  };

  const startAnimationLoop = (stopWhenFlat = false) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const update = () => {
      currentX.current += (targetX.current - currentX.current) * LERP_FACTOR;
      currentY.current += (targetY.current - currentY.current) * LERP_FACTOR;

      const tiltCards = document.querySelectorAll<HTMLElement>('#avatarCard, .gyro-tilt');
      tiltCards.forEach((card) => {
        card.style.transform = `perspective(1000px) rotateX(${currentX.current.toFixed(2)}deg) rotateY(${currentY.current.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      if (stopWhenFlat && Math.abs(currentX.current) < 0.05 && Math.abs(currentY.current) < 0.05) {
        tiltCards.forEach((card) => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
        if (rafId.current) cancelAnimationFrame(rafId.current);
        return;
      }

      rafId.current = requestAnimationFrame(update);
    };

    update();
  };

  const stopGyro = () => {
    window.removeEventListener('deviceorientation', handleOrientation, true);
    window.removeEventListener('touchstart', handleTouchOrScrollStart);
    window.removeEventListener('touchmove', handleTouchOrScrollStart);
    window.removeEventListener('touchend', handleTouchOrScrollStart);
    window.removeEventListener('touchcancel', handleTouchOrScrollStart);
    window.removeEventListener('scroll', handleTouchOrScrollStart);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    if (rafId.current) cancelAnimationFrame(rafId.current);
  };

  return null;
}
