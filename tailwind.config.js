/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mindflexGreen: "#4F997E",
        mindflexOrange: "#FF7400",
        mindflexBlue: "#DCEDF8",
        mindflexYellow: "#FCEDC9",
        mindflexPink: "#FDD6CD",
        mindflexLightGreen: "#E9F9DC",
        mindflexLightOrange: "#F09E54",
        mindflexTeal: "#A0E3E2",
        mindflexPurple: "#AEAFF7",
        mindflexDarkGreen: "#57B894",
      },
    },
  },
  plugins: [],
};
