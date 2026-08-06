'use client';

import { useState, useEffect } from 'react';

interface ToastItem {
  id: number;
  message: string;
  icon?: string;
}

export function showToast(message: string, icon = 'fa-circle-check') {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('show-toast', { detail: { message, icon } })
    );
  }
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; icon?: string }>;
      const { message, icon } = customEvent.detail;
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, icon }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3200);
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  return (
    <div id="toastContainer" className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className="toast">
          <i className={`fa-solid ${t.icon || 'fa-circle-check'}`}></i>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
