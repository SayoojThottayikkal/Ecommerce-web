/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#DB4444",
        button1: "#00FF66",
        button2: "#000000",
        primary: "#5F2EEA",
        secondary: "#1CC8EE",
        error: "#ED2E7E",
        success: "#00BA88",
        warning: "#F4B740",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },

      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      },
    },
  },
  plugins: [],
};
