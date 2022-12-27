const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        540: "540 px",
      },
      boxShadow: {
        form: "0 15px 35px 0 rgba(60, 66, 87, .8), 0 5px 0 rgba(0,0,0, .12)",
        inputfocus: "0 0 0 2px #F472B6",
      },
    },
  },
  plugins: [],
};
