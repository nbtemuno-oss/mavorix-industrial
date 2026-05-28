import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B172A",
        steel: "#334155",
        signal: "#F97316",
        mint: "#16A34A"
      },
      boxShadow: {
        industrial: "0 24px 80px rgba(15, 23, 42, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
