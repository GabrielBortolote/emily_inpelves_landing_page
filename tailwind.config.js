/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px'
      },
      letterSpacing: {
        superWide: '0.2em',
      },
      colors: {
        light: "#F2F5E0",
        lightGreen: "#606C38",
        darkGreen: "#283618",
        darkSkin: "#BC6C25",
        lightSkin: "#DDA15E",
      },
      fontFamily: {
        goudy: ['var(--font-sorts-mill-goudy)'],
        meow: ['var(--font-meow-script)'],
        doulaise: ['var(--font-monsieur_la_doulaise)'],
      }
    },
  },
  plugins: [],
};
