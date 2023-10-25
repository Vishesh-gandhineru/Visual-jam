/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth:{
      'content':'1250px',
    },
    colors: {
      'color-gray': '#353f4f',
      'color-pink': '#c73e9b',
      'color-subgray':"#757575",
      'color-body' : "#6c757d",

    },
    fontSize: {
      "mob-h1": ['1.923076rem', '1.35'],
      "mob-h2": ['1.60256rem', '1.35'],
      "mob-h3": ['calc(1.3rem + .6vw)', '1.4'],
      "mob-h4": ['1.34615rem', '1.4'],
      "mob-h5": ['1.217948rem', '1.4'],
      "mob-h6": ['1.34615rem', '1.4'],
      "mob-p": ['1rem', '1.8'],
      "mob-a": ['1rem', '1'],
      "tab-h1": ['3rem', '1.25'],
      "tab-h2": ['2.125rem', '1.25'],
      "tab-h3": ['calc(1.3rem + .6vw', '1.35'],
      "tab-h4": ['1.625rem', '1.45'],
      "tab-h5": ['1.25rem', '1.35'],
      "tab-h6": ['1.25rem', '1.35'],
      "tab-p": ['1rem', '1'],
      "tab-a": ['1rem', '1'],
      "desk-h1": ['3.25rem', '1.35'],
      "desk-h2": ['2.75rem', '1.25'],
      "desk-h3": ['1.3125rem', '1.66'],
      "desk-h4": ['1.75rem', '1.45'],
      "desk-h5": ['1.375rem', '1.35'],
      "desk-h6": ['1.375rem', '1.35'],
      "desk-p": ['1.2rem', '1.6'],
      "desk-a": ['1rem', '1'],
      
    },
    extend: {},
  },
  plugins: [],
}