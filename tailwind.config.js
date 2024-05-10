/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customWhite: "#F7FAFC",
        customBlack: "#141C47",
        customYellow: "#F9CB81",
        lightBlue: {
          default: "#40AFF6",
          dark: "#3589BF",
        },
        customGray: "#6A6B6D",
        customGreen: {
          default: "#63E06A",
          dark: "#219D28",
          light: "#9AEB9F",
        },
        customRed: "#fc4747",
      },
    },
  },
  plugins: [],
};
