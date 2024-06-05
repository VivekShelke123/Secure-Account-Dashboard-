import { Baskervville, Merriweather } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        bg1 : "#d6dbdc",
        bg2 : 'rgb(255, 255, 255)',
        dash: "#DBAE58"
      },
      fontFamily:{
        merriweather :['Merriweather','serif'],
        Libre_Baskervile :['Libre Baskerville', 'serif']
      },
    },
  },
  plugins: [
    function ({ addUtilities }:any) {
      addUtilities({
        '.scrollbar-hide': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.scrollbar-thin': {
          '::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        },
        '.scrollbar': {
          '::-webkit-scrollbar': {
            width: '12px',
            height: '12px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        },
      }, ['responsive']);
    },
  ],
};
export default config;
