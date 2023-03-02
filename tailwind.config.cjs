const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          100: "#eefae9",
          200: "#dcf4d3",
          300: "#cbefbc",
          400: "#b9e9a6",
          500: "#a8e490",
          600: "#86b673",
          700: "#658956",
          800: "#435b3a",
          900: "#222e1d",
        },
      },
      screens: {
        lg: "992px",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
