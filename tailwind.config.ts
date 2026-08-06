import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#09050b',
        'bg-dark-alt': '#100a14',
        'bg-glass': 'rgba(255, 255, 255, 0.035)',
        'bg-glass-card': 'rgba(22, 12, 26, 0.65)',
        'bg-glass-sub': 'rgba(32, 18, 38, 0.55)',
        'border-glass': 'rgba(255, 255, 255, 0.12)',
        'border-glass-light': 'rgba(255, 255, 255, 0.22)',
        'accent-red': '#ff2d4b',
        'accent-red-hover': '#ff526c',
        'accent-red-glow': 'rgba(255, 45, 75, 0.45)',
        'accent-purple': '#9d4edd',
        'accent-amber': '#ff9e2c',
        'accent-green': '#39d353',
        'text-main': '#f6f0f8',
        'text-muted': '#c4b5c8',
        'text-faint': '#85728a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Outfit', 'sans-serif'],
        headline: ['var(--font-headline)', 'Archivo Black', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
