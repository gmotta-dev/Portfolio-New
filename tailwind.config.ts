import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        mostard: {
          50: "#FFFBEB",
          100: "#FFF5C6",
          200: "#FFE988",
          300: "#FFDB58",
          400: "#FFC520",
          500: "#F9A407",
          600: "#DD7B02",
        },
      },

      fontFamily: {
        poppins: ["var(--Poppins)", "sans-serif"],
        "bebas-neue": ["var(--Bebas-Neue)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
