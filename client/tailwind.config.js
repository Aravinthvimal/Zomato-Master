const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navcolor: {
        50: '#ffe5e7',
        100: '#fabac0',
        200: '#f18f96',
        300: '#e9626d',
        400: '#e23744',
        500: '#c81d2a',
        600: '#9d1520',
        700: '#700d16',
        800: '#46060c',
        900: '#1e0002',
      },
        delivery: {
        50: '#fff8e1',
        100: '#fcebb6',
        200: '#f8de88',
      },
        ratingscolor: {
        50: '#e3fce9',
        100: '#bef1ca',
        200: '#97e6aa',
        300: '#6fdc89',
        400: '#48d368',
        500: '#2fb94f',
        600: '#23903c',
        700: '#17672a',
        800: '#093e18',
        900: '#001703',
      },
        restaurantcolor: {
        50: '#fceff2',
        100: '#ddd7d9',
        200: '#c1bfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#413f40',
        800: '#292526',
        900: '#16090d',
      },
        offercolor: {
        50: '#fff1e5',
        100: '#fbd5b8',
        200: '#faba87',
        300: '#fa9d56',
        400: '#fa8129',
        500: '#e16915',
        600: '#af520f',
        700: '#7d3a09',
        800: '#4b2306',
        900: '#1a0b00',
      },
        cuisinecolor: 
        {
        50: '#dff7ff',
        100: '#bce2f4',
        200: '#95cde8',
        300: '#6eb9de',
        400: '#48a5d3',
        500: '#308cba',
        600: '#216d91',
        700: '#144e69',
        800: '#033041',
        900: '#00121b',
      },
    },
      borderWidth: {
        "1": "1px"
      },
      fontSize: {
        "tiny": "14px",
        "2xs": "10px"
        
      },
      borderWidth: {
        "1": "1px"
      },
      letterSpacing: {
        "extra-wide": "0.25em"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
