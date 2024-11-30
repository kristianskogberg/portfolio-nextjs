import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1a1a1a",
      },
      colors: {
        accent: "#02F8AE",
        neon: "#39FF14",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        code: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
