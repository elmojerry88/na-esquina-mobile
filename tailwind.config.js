/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './App/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'azul-button': '#70C7F9'
    },
    extend: {},
  },
  plugins: [],
};