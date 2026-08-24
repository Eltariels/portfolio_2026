/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0d1712',
          900: '#12201a',
          800: '#1b2e22',
          700: '#24402f',
          600: '#345940',
          500: '#4a7355',
        },
        leather: {
          900: '#2b1f16',
          800: '#3d2c1e',
          700: '#4f3b28',
          600: '#6b4f3a',
          500: '#8a6b4c',
        },
        gold: {
          400: '#e3c565',
          300: '#eddca0',
          500: '#c9a227',
          600: '#a8841d',
        },
        parchment: {
          100: '#f5efdd',
          200: '#ece2c6',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'rune-glow': 'radial-gradient(circle at 50% 0%, rgba(201,162,39,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
}
