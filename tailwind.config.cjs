/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*tsx', './*html'],
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
    },
    extend: {
      colors: {
        'orangeJuice': '#FF3200',
        'azulFormacao': '#04288B',
      }
    },
  },
  plugins: [],
};
