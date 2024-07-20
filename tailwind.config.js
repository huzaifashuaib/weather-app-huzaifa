/** @type {import('tailwindcss').Config} */

import {COLORS} from './src/constants/themeColor'
import {backImages} from './src/constants/backgroundImges'
import {customFontFamily} from './src/constants/fontFamily'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:COLORS,
      backgroundImage:backImages,
      fontFamily:customFontFamily,
      screens:{
        small:'400px'
      }
    },
  },
  plugins: [
   
  ],
}

