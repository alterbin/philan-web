import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sec_color: "var(--sec-color)",
        text_color: "var(--text-color)",
        sub_text_color: "var(--sub-text-color)"
      },
    },
  },
  plugins: [],
} satisfies Config;
