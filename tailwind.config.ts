import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'rgba(0, 0, 0, 0.7)',
        'highlight': 'rgb(254, 216, 79)',
        'light-black': 'rgb(29, 53, 45)',
        'light-gray': 'rgba(0, 0, 0, 0.02)',
        'medium-gray': 'rgba(0, 0, 0, 0.07)'
      },
      screens: {
        'desktop': '1100px',
      },
      width: {
        '1100': '1100px'
      }
    },
  },
  plugins: [],
};
export default config;
