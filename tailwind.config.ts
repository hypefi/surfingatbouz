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
        sans: ['var(--font-poppins)', 'sans-serif'], // Set Poppins as default sans-serif
        display: ['var(--font-bangers)', 'cursive'], // Set Bangers for display/headings
      },
      colors: {
        primary: '#0077cc',
        secondary: '#48bbd8',
        accent: '#f4a261',
        neutral: '#333333',
        'base': '#ffffff', // Renamed from base-100 for simplicity
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 