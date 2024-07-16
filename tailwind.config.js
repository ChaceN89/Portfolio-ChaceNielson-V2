/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#181616', // dark near black

        secondary: '#fff', // white
        
        accent: '#CBD5E1', // lighter color
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'chalkduster': ['Chalkduster', 'cursive'],
        'wingdings': ['Wingdings', 'cursive'], 
        'mangold': ['Mangold', 'sans-serif'], // If available
        'techead': ['Techead', 'sans-serif'], // If available
        'sharung': ['Sharung', 'sans-serif'], // If available
        'baddest': ['Baddest', 'sans-serif'], // If available
        'mageri': ['Mageri', 'sans-serif'], // If available
      },
      fontSize: {
        medium: '0.950rem',
      },
      maxHeight: {
        '102': '28rem',
        '108': '32rem',
        '111': '33rem',
        '114': '36rem',
        '120': '40rem',
        '126': '44rem',
        '132': '48rem',
        '138': '52rem',
        '144': '56rem',
        '152': '60rem',
        '158': '64rem',
        '164': '68rem',
        '170': '72rem',
      },
      height: {
        '102': '28rem',
        '108': '32rem',
        '111': '33rem',
        '114': '36rem',
        '120': '40rem',
        '126': '44rem',
        '132': '48rem',
        '138': '52rem',
        '144': '56rem',
        '152': '60rem',
        '158': '64rem',
        '164': '68rem',
        '170': '72rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}