/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'banana-yellow': '#E2B714',
        'charcoal': 'rgb(36,36,36)',
        'goose-grey': '#333333',
      },
    },
  },
  plugins: [],
};
