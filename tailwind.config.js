/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#60FF60",
        dimPrimary: "rgba(96, 255, 96, 0.08)",
        secondary: "#2221FF",
        dimWhite: "rgba(255, 255, 255, 0.8)",
        dimBlack: "rgba(27, 28, 30, 1)",
        dimmerBlack: "rgba(27, 28, 30, 0.8)",
        dimmestBlack: "rgba(27, 28, 30, 0.6)",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        space: ['Space Grotesk', "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
