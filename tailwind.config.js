/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#605BF7',
          DEFAULT: '#533fd3',
          dark: '#1a2a6c',
        },
        secondary: {
          DEFAULT: '#5091d1',
        },
        accent: {
          DEFAULT: '#FF8A3D',
        },
        danger: {
          DEFAULT: '#ff6b6b',
        },
        warning: {
          DEFAULT: '#f39c12',
        },
        success: {
          DEFAULT: '#27ae60',
        }
      },
      boxShadow: {
        custom: '0 5px 25px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}
