/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#8a817c",
      secondary: "#bcb8b1",
      dark: "#463f3a",
      highligth: "#f4f3ee",
      dull: "#e0afa0",
    },
    screens: {
      mobilem: "375px",
      mobilel: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopl: "1440px",
      "4kay": "2560px",
    },
  },
  plugins: [],
};
