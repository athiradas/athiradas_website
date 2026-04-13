import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grey Mahout palette
        background: {
          DEFAULT: '#faf8f5',
          secondary: '#eeece8',
          tertiary: '#f1f0ee',
        },
        foreground: {
          DEFAULT: '#1c1f26',
          secondary: '#3a3f4a',
          muted: '#676f7e',
        },
        primary: {
          DEFAULT: '#212631',
          hover: '#14181f',
          glow: '#212631',
        },
        accent: {
          // Grey Mahout gold
          DEFAULT: '#d2962d',
          hi: '#e6b350',
          // legacy aliases kept so existing class references still compile
          sage: '#d2962d',
          warm: '#d2962d',
          terracotta: '#d2962d',
          sand: '#eeece8',
          purple: '#d2962d',
          cyan: '#d2962d',
          pink: '#d2962d',
        },
        dark: {
          DEFAULT: '#14181f',
          card: '#1d222a',
          ink: '#f5f3f0',
          muted: '#8a93a3',
        },
        border: '#e5e2dc',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3a3f4a',
            '--tw-prose-headings': '#1c1f26',
            '--tw-prose-links': '#d2962d',
            '--tw-prose-code': '#212631',
            '--tw-prose-pre-bg': '#14181f',
            maxWidth: '70ch',
          },
        },
      },
      animation: {
        'reveal': 'reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'draw-line': 'draw-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'draw-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
