import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-3px)" },
          "50%": { transform: "translateX(3px)" },
          "75%": { transform: "translateX(-3px)" },
        },
        pulseGray: {
          "0%, 100%": { transform: "scale(1)", filter: "grayscale(100%)" },
          "50%": { transform: "scale(0.98)", filter: "grayscale(0%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounce2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "20%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
        pulseGray: "pulseGray 2.5s infinite ease-in-out",
        bounce: "bounce 1.5s infinite ease-in-out",
        bounce2: "bounce2 2.5s infinite ease-in",
      },
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
      },
      fontWeight: {
        lt: "300", // Light
        rg: "400", // Regular
        md: "500", // Medium
        sb: "600", // Semi-bold
        bd: "700", // Bold
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sec_color: "var(--sec-color)",
        text_color: "var(--text-color)",
        sub_text_color: "var(--sub-text-color)",
        sec_text_color: "var(--sec-text-color)",
        green: {
          90: "var(--main-color)",
        },
        black: {
          60: "#263238",
        },
        gold: "#C78A3A",
      },
    },
  },
  plugins: [],
} satisfies Config;
