/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Logistics Industrial – transport company branding
        primary: {
          DEFAULT: '#0EA5E9',   // Transport blue
          foreground: '#ffffff',
          hover: '#0284C7',
          muted: 'rgba(14, 165, 233, 0.12)',
        },
        secondary: {
          DEFAULT: '#F59E0B',   // Truck yellow
          foreground: '#0F172A',
          hover: '#D97706',
          muted: 'rgba(245, 158, 11, 0.12)',
        },
        dark: '#1E293B',        // Industrial dark (footer, accents)
        background: '#F1F5F9',  // Light bg
        foreground: '#0F172A',   // Text
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0F172A',
        },
        muted: {
          DEFAULT: '#E2E8F0',
          foreground: '#64748B',
        },
        border: '#CBD5E1',
        input: '#CBD5E1',
        ring: '#0EA5E9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'section-label': ['0.8125rem', { lineHeight: '1.25', letterSpacing: '0.08em' }],
        'page-title': ['2rem', { lineHeight: '1.2' }],
        'page-title-lg': ['2.5rem', { lineHeight: '1.15' }],
      },
      borderRadius: {
        'card': '0.75rem',
        'card-lg': '1rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        'card-hover': '0 4px 12px -2px rgb(14 165 233 / 0.12), 0 2px 6px -2px rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
}
