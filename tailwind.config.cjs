/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cloud: "#172B4D",
        matisse: "#026aa7",
        btnblue: "#0065ff",
        btnhoverblue: "#003d99",
        pgray: "#5e6c84",
      },
    },
    fontFamily: {
      abeezee: ["ABeeZee", "sans-serif"],
    },
  },
  plugins: [],
};
