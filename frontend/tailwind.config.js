/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'beige-light': '#F0EBE3',
        beige: '#E4DCC8',
        'beige-dark': '#D4C4AD',
        'brown-light': '#A0826D',
        brown: '#7D6556',
        'brown-dark': '#5C4A3D',
        'brown-darker': '#453829',
        'brown-darkest': '#2D2319',
        gold: '#C8A882',
        'gold-light': '#D9BC9F',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
