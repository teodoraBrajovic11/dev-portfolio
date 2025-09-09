import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: colors.neutral[200],
        "secondary-hover": colors.neutral[300],
        "secondary-border": colors.neutral[400],
        "secondary-text": colors.neutral[500],
        "secondary-dark": colors.neutral[800],
        "secondary-dark-hover": colors.neutral[900],
      },
    },
  },
  plugins: [],
};
