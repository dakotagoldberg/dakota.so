/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        lilac: {
          50: "#F6F8FF",
          100: "#F6F4FF",
          200: "#EFECFA",
          300: "#E3DFF2",
          400: "#D1CCE4",
          500: "#BDB4DC",
          600: "#9C94BE",
          700: "#7D779B",
          800: "#58517A",
          900: "#282342",
          950: "#09090A",
        },
        'lilac-prose': {
          50: '#DAD9DD',
          100: '#CFCFD3',
          200: '#BAB9C0',
          300: '#A5A4AD',
          400: '#908E99',
          500: '#7B7986',
          600: '#605E69',
          700: '#45444B',
          800: '#2A292E',
          900: '#0F0F10',
          950: '#010101'
        },
        indigo: {
          light: '#DEE7FF',
          DEFAULT: '#4376FF',
          dark: '#081E56',
        },
        violet: {
          light: '#F1EAFC',
          DEFAULT: '#946FFF',
          dark: '#311361',
        },
        'accent-border': {
          light: '#C5D2F4',
          dark: '#312676',
        },
      },
      tracking: {
        tighter: "-.04em",
      },
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.lilac-prose[800]'),
            '--tw-prose-headings': theme('colors.lilac-prose[900]'),
            '--tw-prose-lead': theme('colors.lilac-prose[700]'),
            '--tw-prose-links': theme('colors.lilac-prose[900]'),
            '--tw-prose-bold': theme('colors.lilac-prose[900]'),
            '--tw-prose-counters': theme('colors.lilac-prose[600]'),
            '--tw-prose-bullets': theme('colors.lilac-prose[400]'),
            '--tw-prose-hr': theme('colors.lilac-prose[300]'),
            '--tw-prose-quotes': theme('colors.lilac-prose[900]'),
            '--tw-prose-quote-borders': theme('colors.lilac-prose[300]'),
            '--tw-prose-captions': theme('colors.lilac-prose[700]'),
            '--tw-prose-code': theme('colors.lilac-prose[900]'),
            '--tw-prose-pre-code': theme('colors.lilac-prose[100]'),
            '--tw-prose-pre-bg': theme('colors.lilac-prose[900]'),
            '--tw-prose-th-borders': theme('colors.lilac-prose[300]'),
            '--tw-prose-td-borders': theme('colors.lilac-prose[200]'),
            '--tw-prose-invert-body': theme('colors.lilac-prose[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.lilac-prose[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.lilac-prose[400]'),
            '--tw-prose-invert-bullets': theme('colors.lilac-prose[600]'),
            '--tw-prose-invert-hr': theme('colors.lilac-prose[700]'),
            '--tw-prose-invert-quotes': theme('colors.lilac-prose[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.lilac-prose[700]'),
            '--tw-prose-invert-captions': theme('colors.lilac-prose[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.lilac-prose[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.lilac-prose[600]'),
            '--tw-prose-invert-td-borders': theme('colors.lilac-prose[700]'),
          },
        },
        dark: {
          css: {
            color: theme("colors.lilac.200"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(), // Iconify
  ],
}
