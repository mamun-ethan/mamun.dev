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
    colors: {
      off_white: "#FFFBF7",
      text_gray: "#565656",
      text_white: "#fff",
      nevy_blue: "#03091E",
      blue: "#0000DC",
      text_sm: "#B3B1C0",
    },
    fontFamily: {
      serif: ["Roboto Serif", "system-ui"],
      nic: ["Niconne", "system-ui"],
      pop: ["Poppins", "system-ui"],
    },

    animation: {
      subtleBounce: "subtleBounce 0.8s ease-in-out infinite",
      wave: "wave 0.8s ease-in-out infinite",
    },
    keyframes: {
      subtleBounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" },
      },
      wave: {
        "0%, 100%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(20deg)" },
      },
    },
  },

  plugins: [],
};
