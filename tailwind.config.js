/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        karon: {
          bg: "#202020",
          surface: "#272727",
          border: "#333333",
          text: "#E6E2D3",
          muted: "#8C8880",
          subtle: "#5A5751",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        editorial: "0.15em",
      },
      fontSize: {
        "10xl": ["9rem", { lineHeight: "0.9" }],
        "11xl": ["11rem", { lineHeight: "0.85" }],
      },
    },
  },
  plugins: [],
};
