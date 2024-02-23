/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary': {
        100: '#e9f7t7',
        200: '#def3f3',
        300: '#bae5e6',
        400: '#20acaf',
        500: '#1d9b9e',
        600: '#1a8a8c',
        700: '#188183',
        800: '#136769',
        900: '#0e4d4f',
        1000: '#0b3c3d'
      },
      'secondary': {
        100: '#e7e8ea',
        200: '#dadce0',
        300: '#b3b6be',
        400: '#0b152d',
        500: '#0a1329',
        600: '#091124',
        700: '#081022',
        800: '#070d1b',
        900: '#050914',
        1000: '#040710',
      },
      'neutral': {
        ligth: '#e9e9e9',
        ligth_hover: '#dedede',
        ligth_active: '#bbbbbb',
        normal: '#252525',
        normal_hover: '#212121',
        normal_active: '#1e1e1e',
        dark: '#1c1c1c',
        dark_hover: '#161616',
        dark_active: '#111111',
        darker: '#0d0d0d'
      } 
    }
  },
  plugins: [],
}

