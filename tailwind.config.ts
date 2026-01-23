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
        background: {
          DEFAULT: '#0a0e27',
          secondary: '#141b33',
          tertiary: '#1a2238',
        },
        foreground: {
          DEFAULT: '#e4e4e7',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
        primary: {
          DEFAULT: '#60a5fa',
          hover: '#3b82f6',
          glow: '#2563eb',
        },
        accent: {
          purple: '#a78bfa',
          cyan: '#22d3ee',
          pink: '#f472b6',
        },
        border: '#27272a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#e4e4e7',
            '--tw-prose-headings': '#f4f4f5',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-code': '#22d3ee',
            '--tw-prose-pre-bg': '#141b33',
            maxWidth: '70ch',
          },
        },
      },
      animation: {
        'glitch': 'glitch 0.5s cubic-bezier(.25, .46, .45, .94) both infinite',
        'fade-in': 'fade-in 0.5s ease-in forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
