/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ephesis: ['"Ephesis"', 'serif'],
        'funnel-display': ['"Funnel Display"', 'sans-serif'],
        'petit-formal': ['"Petit Formal Script"', 'cursive'],
        'ephesis': ['"Ephesis"', 'serif'],
      },
    },
  },
  plugins: [],
}

