/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFBC2C",
          dark: "#F2A601",
        },
        secondary: "#539165",
        tertiary: "#3F557F",
        redcolor: "#DD2539",
        graycolor: "#1F1F1F",
        background: "#FEFEFB",
      },
    },
  },
  plugins: [],
};
