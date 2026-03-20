/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        ink: {
          DEFAULT: '#111111',
          dark: '#e8e8e8',
        },
        muted: {
          DEFAULT: '#6b7280',
          dark: '#9ca3af',
        },
        accent: '#2563eb',
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#1f1f1f',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.DEFAULT'),
            maxWidth: '72ch',
            lineHeight: '1.75',
            'h1,h2,h3,h4': { fontFamily: theme('fontFamily.mono').join(', ') },
            code: { backgroundColor: '#f3f4f6', padding: '0.2em 0.4em', borderRadius: '3px' },
          },
        },
        invert: {
          css: {
            color: theme('colors.ink.dark'),
            code: { backgroundColor: '#1f1f1f' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
