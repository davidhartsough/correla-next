/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgbase: "rgb(var(--bg-color) / <alpha-value>)",
        bluebase: "rgb(16 121 212 / <alpha-value>)",
        bluehover: "rgb(16 102 212 / <alpha-value>)",
        bluebtn: "rgb(38 144 237 / <alpha-value>)",
        borderbase: "rgb(var(--border-color) / <alpha-value>)",
        borderhover: "rgb(var(--border-hover) / <alpha-value>)",
        borderfocus: "rgb(var(--border-focus) / <alpha-value>)",
      },
      animation: {
        "spin-med": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
