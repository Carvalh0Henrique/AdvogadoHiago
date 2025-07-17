/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#003366',
        'primary-dark': '#002244',
        'secondary': '#d4a017',
        'secondary-hover': '#b8860b',
      }
    }
  },
  plugins: [],
}