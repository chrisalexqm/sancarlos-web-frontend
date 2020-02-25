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
        'black-blue': '#2C3E50',
        'white': '#FFFFFF',
        'body': '#F4F5F9',
      },
      textColor: {
        'green': '#8CCE17',
        'blue': '#0FAFED',
        'orange': '#F27F0C',
        'black': '#383838',
        'black-light': '#606060',
        'black-blue': '#2C3E50',
        'white': '#FFFFFF',
        'body': '#F4F5F9',
      },
    },
    spacing: {
      '0': '0',
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
    },
    borderRadius: {
      '0': '0',
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
      'full': '9999px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {},
  plugins: [],
  separator: '_',
  corePlugins: {
      boxShadow: false
  }
}
