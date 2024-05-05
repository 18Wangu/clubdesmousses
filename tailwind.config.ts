import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'club-bouton': '60px', //ajout d'un nouveau border-radius qui n'était pas présent dans la configuration de base
      },
    },
  },
  plugins: [],
};
export default config;
