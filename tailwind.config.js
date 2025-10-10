/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="purple"]'], // Usar data-theme para el selector
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Slab', 'serif'],
      },
      colors: {
        // Purple theme
        purple: {
          1: '#f9f6f8',
          2: '#f8f1f5',
          3: '#f8e3ee',
          4: '#f5d5e7',
          5: '#f1c7de',
          6: '#eab7d3',
          7: '#e1a3c6',
          8: '#d788b7',
          9: '#a6177c',
          10: '#95006d',
          11: '#af2484',
          12: '#631149',
        },
        // Blue theme
        blue: {
          1: '#f4f7fb',
          2: '#edf3f9',
          3: '#dfedfb',
          4: '#d1e5fa',
          5: '#c0dbf5',
          6: '#adceee',
          7: '#94bce3',
          8: '#6ea5d8',
          9: '#216196',
          10: '#0d5286',
          11: '#28679d',
          12: '#213d57',
        },
        // Principales - usaremos estos para theme-aware colors
        accent: {
          DEFAULT: '#216196', // blue por defecto
          purple: '#a6177c',  // purple variant
        },
        background: '#FAFDFF',
        text: '#222936',
      },
    },
  },
  plugins: [],
}