/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'green': '#8CCE17',
        'blue': '#0FAFED',
        'orange': '#F27F0C',
        'black': '#383838',
        'black-light': '#606060',
        'white': '#FFFFFF',
        'body': '#F4F5F9',
      },
      textColor: {
        'green': '#8CCE17',
        'blue': '#0FAFED',
        'orange': '#F27F0C',
        'black': '#383838',
        'black-light': '#606060',
        'white': '#FFFFFF',
        'body': '#F4F5F9',
      },
    },
    spacing: {
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
      '7': '35px',
      '8': '40px',
      '9': '45px',
      '10': '50px',
      '11': '55px',
      '12': '60px',
      '13': '65px',
      '14': '70px',
      '15': '75px',
      '16': '80px',
    }
  },
  variants: {},
  plugins: [],
  separator: '_',
  corePlugins: {
      height: false
  }
}
