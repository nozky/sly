module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Grape-Nuts': [ 'Grape Nuts', 'Roboto']
      },
      colors: {
        'royal': '#141e30',
        'royal-light': '#243b55'
      }
    },
  },
  plugins: [],
}
