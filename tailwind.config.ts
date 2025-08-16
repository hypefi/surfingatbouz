import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)', 'Montserrat', 'sans-serif'],
        display: ['var(--font-baloo)', 'Montserrat Alternates', 'cursive'],
      },
      colors: {
        primary: '#1a73e8',
        secondary: '#00b8c4',
        accent: '#ff7a5a',
        neutral: '#1a2a3a',
        'base': '#f9fbfc',
        'card': '#f1f5f9',
        'sandy': '#f2e9d8',
      },
      backgroundImage: {
        "wave-pattern": "url('/images/wave-pattern.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'surf': '0 4px 14px 0 rgba(0, 184, 196, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config; 