/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F2F5E0",
        darkGreen: "#606C38",
        lighGreen: "#283618",
        darkSkin: "#DDA15E",
        lightSkin: "#BC6C25",
      }
    },
  },
  plugins: [],
};
