module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode:'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{

        xs:'320px'


      },

      fontFamily:{

        heading:['Bahnschrift','Condensed']
      },

      colors:{

        heading:'#7D5a50',
        para:'#393939'
      },
  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
