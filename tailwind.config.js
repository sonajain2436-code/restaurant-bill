/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8f1',
          100: '#feeedc',
          200: '#fcd9b6',
          300: '#f9bd84',
          400: '#f5984c',
          500: '#ea6d20', // Warm amber-orange restaurant tone
          600: '#dc5214',
          700: '#b73c12',
          800: '#923015',
          900: '#772a15',
          950: '#401208',
        },
        surface: {
          50: '#faf8f5', // Warm cream background
          100: '#f3efe8',
          200: '#e6ded4',
          300: '#d5c7b7',
          400: '#b8a390',
          500: '#9b826f',
          600: '#7d6656',
          700: '#645145',
          800: '#342a24',
          900: '#231c18', // Deep charcoal / warm dark brown
          950: '#14100e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier Prime', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 10px -2px rgba(0, 0, 0, 0.05), 0 4px 20px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -4px rgba(35, 28, 24, 0.08)',
        'floating': '0 12px 36px -6px rgba(35, 28, 24, 0.16)',
        'modal': '0 20px 60px -15px rgba(20, 16, 14, 0.3)',
      }
    },
  },
  plugins: [],
}
