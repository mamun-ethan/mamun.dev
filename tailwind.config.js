/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1200px",
      // => @media (min-width: 1440px) { ... }
    },
    color: {
      primary: "#FFFEF8",
      secondary: "#141C3A",
      accent: "#0000DC",
    },

    extend: {},
  },
  plugins: [],
};
