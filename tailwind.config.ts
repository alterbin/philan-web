import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
} satisfies Config;
