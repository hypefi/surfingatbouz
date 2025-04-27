/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-bangers)', 'cursive'],
      },
      colors: {
        primary: '#0077cc',
        secondary: '#48bbd8',
        accent: '#f4a261',
        neutral: '#333333',
        'base': '#ffffff',
      },
    },
  },
  plugins: [],
} 