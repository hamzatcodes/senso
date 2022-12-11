/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      16: "1rem",
      18: "1.156rem",
      20: "1.234rem",
      21: "1.312rem",
      22: "1.344rem",
      24: "1.5rem",
      25: "1.586rem",
      28: "1.75rem",
      32: "1.988rem",
      40: "3.75rem",
      49: "3.039rem",
      52: "3.279rem",
      60: "3.75rem",
      89: "5.563rem",
      100: "6.25rem",
      150: "9.375rem",
      156: "9.768rem",
      289: "18.083rem",
    },
    colors: {
      light: "#E0F2FF",
      dark: "#002254",
      dark2: "#031734",
      dark3: "#153375",
      blue: "#0084FF",
      white: "#ffffff",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
