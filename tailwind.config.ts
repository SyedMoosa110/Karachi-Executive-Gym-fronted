import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#07080B',
        titanium: '#0D0F15',
        gold: '#FFB800',
        acid: '#D4FF00',
        ice: '#00F0FF',
        mute: '#9AA0AE',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 28px rgba(255,184,0,0.35)',
        acid: '0 0 22px rgba(212,255,0,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config
