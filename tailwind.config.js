const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      container: {
        screens: {
          xs: "100%",
          ...defaultTheme.screens,
        },
      },
      keyframes: {
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(0%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounceRight: "bounceRight 1s infinite",
      },
    },
  },
  plugins: [],
};

// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//   }
//   50% {
//     transform: translateY(0);
//     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   }
// }
