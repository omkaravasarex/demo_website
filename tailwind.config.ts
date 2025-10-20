import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        clouthr: {
          purple: '#6b2ad6',
          indigo: '#5b2cff',
          orange: '#f59e0b',
          gold: '#fbbf24'
        }
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ]
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #5b2cff 0%, #6b2ad6 35%, #f59e0b 100%)',
        'brand-radial': 'radial-gradient(600px circle at 0% 0%, rgba(91,44,255,0.25), transparent 40%), radial-gradient(800px circle at 100% 0%, rgba(245,158,11,0.15), transparent 40%)'
      }
    },
  },
  plugins: [],
} satisfies Config;
