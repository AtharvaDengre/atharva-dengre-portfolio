'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { showToast } from './ToastContainer';

interface GyroContextType {
  gyroEnabled: boolean;
  isSupportedMobile: boolean;
  toggleGyro: () => Promise<void>;
}

const GyroContext = createContext<GyroContextType>({
  gyroEnabled: false,
  isSupportedMobile: false,
  toggleGyro: async () => {},
});

export function GyroProvider({ children }: { children: ReactNode }) {
  const [gyroEnabled, setGyroEnabled] = useState(false);
  const [isSupportedMobile, setIsSupportedMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Check touch/mobile device with DeviceOrientationEvent support
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice && !!window.DeviceOrientationEvent) {
      setIsSupportedMobile(true);
    }
  }, []);

  const toggleGyro = async () => {
    if (!isSupportedMobile) return;

    if (gyroEnabled) {
      setGyroEnabled(false);
      showToast('3D Motion Tilt Disabled', 'fa-compass');
      return;
    }

    // Turning ON: Check iOS permission flow if required
    const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientation?.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientation.requestPermission();
        if (permission === 'granted') {
          setGyroEnabled(true);
          showToast('3D Motion Tilt Enabled ✨', 'fa-compass');
        } else {
          setGyroEnabled(false);
          showToast('Motion Permission Denied', 'fa-triangle-exclamation');
        }
      } catch {
        setGyroEnabled(false);
      }
    } else {
      setGyroEnabled(true);
      showToast('3D Motion Tilt Enabled ✨', 'fa-compass');
    }
  };

  return (
    <GyroContext.Provider value={{ gyroEnabled, isSupportedMobile, toggleGyro }}>
      {children}
    </GyroContext.Provider>
  );
}

export function useGyro() {
  return useContext(GyroContext);
}
