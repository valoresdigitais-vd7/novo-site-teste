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
          DEFAULT: '#5B8DEF', // azul médio - cor de destaque principal
          light: '#A7C7FF',   // azul claro - foco, hover e linhas sutis
          dark: '#1E40AF',    // azul escuro - botões e textos sobre fundos claros
        },
        secondary: {
          DEFAULT: '#A78BFA', // lilás principal
          light: '#C4B5FD',   // lilás claro
          dark: '#7C3AED',    // lilás escuro
        },
        accent: {
          DEFAULT: '#4ADE80', // verde menta suave
          light: '#86EFAC',
          dark: '#22C55E',
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
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}