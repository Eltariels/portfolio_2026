/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#03050a',
          900: '#070b14',
          800: '#0b111f',
          700: '#111a2e',
          600: '#182440',
          500: '#213258',
        },
        cyan: {
          200: '#a8f5ff',
          300: '#7fe9ff',
          400: '#3fd4ff',
          500: '#12b8f0',
          600: '#0a8fc2',
        },
        magenta: {
          300: '#ff9df2',
          400: '#ff5ce8',
          500: '#e321d6',
          600: '#b014ab',
        },
        amber: {
          300: '#ffd873',
          400: '#ffc233',
          500: '#f0a90a',
        },
        ink: {
          100: '#e8f1fb',
          200: '#c3d3e8',
          300: '#8fa3c2',
          400: '#5c7093',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        ui: ['Rajdhani', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(63, 212, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(63, 212, 255, 0.07) 1px, transparent 1px)',
        'hud-glow':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(63, 212, 255, 0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(227, 33, 214, 0.12), transparent 60%)',
      },
      backgroundSize: {
        grid: '42px 42px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(63, 212, 255, 0.35), 0 0 2px rgba(63, 212, 255, 0.6)',
        'glow-magenta': '0 0 20px rgba(227, 33, 214, 0.3), 0 0 2px rgba(227, 33, 214, 0.6)',
      },
    },
  },
  plugins: [],
}
