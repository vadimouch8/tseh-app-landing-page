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
        tsehBg: "var(--bg)",
        tsehText: "var(--text)",
        tsehMuted: "var(--muted)",
        tsehAccent: "var(--accent)",
        tsehCard: "var(--card)"
      },
      boxShadow: {
        card: "0 6px 18px rgba(31, 31, 31, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
