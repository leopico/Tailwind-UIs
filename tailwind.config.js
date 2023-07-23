/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "446px",
      },
      inset: {
        26: "104px",
      },
    },
  },
  plugins: [],
};
