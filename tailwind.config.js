/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'dark-blue': '#314363',
        'navy-blue': '#263857',
        'grey-03': '#7E98BA',
        'grey-01': '#E3E3E3',
        'input-field': '#F8FBFF'
      },
      fontSize: {
        '13': ['13px',{
          lineHeight: '18.2px'
        }],
        '45': ['45px', {
          lineHeight: '63px',
        }],
      },
      borderRadius: {
        'none': '0',
        '16': '16px',
        '35' : '35px',
      },
      boxShadow: {
        'sh-gray': '0px 4px 19px 0px rgba(210, 209, 209, 0.25)'
      }
    },
  },
  plugins: [],
}