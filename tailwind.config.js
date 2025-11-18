/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891b2', // cyan-600
          light: '#22d3ee',   // cyan-400
          dark: '#0e7490',    // cyan-700
        },
        secondary: {
          DEFAULT: '#f97316', // orange-500
          light: '#fb923c',   // orange-400
          dark: '#ea580c',    // orange-600
        },
        neutral: {
          100: '#f8fafc', // slate-50
          200: '#f1f5f9', // slate-100
          300: '#e2e8f0', // slate-200
          400: '#cbd5e1', // slate-300
          500: '#94a3b8', // slate-400
          600: '#64748b', // slate-500
          700: '#475569', // slate-600
          800: '#334155', // slate-700
          900: '#1e293b', // slate-800
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
