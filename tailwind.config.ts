import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#090b0f",
        graphite: "#12161c",
        steel: "#8a949f",
        scarlet: "#e11d2e",
        ember: "#ff3946"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.45)",
        redglow: "0 0 34px rgba(225, 29, 46, 0.35)"
      },
      backgroundImage: {
        "garage-grid":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
