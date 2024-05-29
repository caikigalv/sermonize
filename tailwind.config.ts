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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "bgServico": "#D2E4FF",
        "bgColaborador": "#589FE1",
        "bgFooter": "#126EC3"
        
      },
      colors:{
        "textColor":"#00346487",
        "BlueDark": "#00043B",
        "BlueDarkMedio":"#003464",
        "BlueMedio":" #126EC3",
        
      },
    },
  },
  plugins: [],
};
export default config;
