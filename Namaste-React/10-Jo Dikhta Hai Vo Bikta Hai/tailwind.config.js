/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'rgb(247, 186, 36)',
        'custom-light-yellow': 'rgb(250, 237, 204)',
        'custom-brown': 'rgb(99,10,12)'
      },
    },
  },
  plugins: [],
}