/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif']
      },
      colors: {
        'custom-cyan': 'hsl(179, 62%, 43%)',
        'darker-cyan': 'rgba(74,190,189,255)',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)',
        'grayish-blue': 'hsl(218, 22%, 67%)'
      }
    },
  },
  plugins: [],
}
