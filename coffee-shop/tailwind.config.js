module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode:'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {

 
    extend: {
      screens:{
        xs:'320px',
        sm:'640px',
        md:'1024px',
        xl:'1200px',
        xxl:'1500px'
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
