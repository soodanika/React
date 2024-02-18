/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'my-yellow': 'rgb(247, 186, 36)',
        'my-light-yellow': 'rgb(250, 237, 204)',
        'my-brown': 'rgb(102, 14, 16)'
      },
    },
  },
  plugins: [],
}