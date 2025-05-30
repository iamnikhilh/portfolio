/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        'background-light': '#1e1e1e',
        'neon-blue': '#2563eb',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#ec4899',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(37, 99, 235, 0.5), 0 0 10px rgba(37, 99, 235, 0.2)',
          },
          '100%': {
            'box-shadow': '0 0 10px rgba(37, 99, 235, 0.8), 0 0 20px rgba(37, 99, 235, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
};