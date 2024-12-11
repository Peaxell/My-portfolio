/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",  // Include this line for the components folder
  ],
  theme: {
    extend: {
      spacing:{

        '11' : '6rem',

        '18' : '10rem',
      },

    fontSize:{
      'new':'1.19rem'

    },

      height:{
          'h8':'30rem',
          'h7': '20rem',
            "h6": '17rem',
             "h25": '25rem',
             'h10':'32rem',
             'h10s':'10rem',
'h13':'13rem',



      },   

      screens:{
        
        'max-md': { 'max': '850px' },
          
        'maxx': { 'max': '768px' },
       
        'md-min': '1220px',
 'minx': '1220px'
        
      },

      padding:{

        'phalf': '50%'

      },

       width:{
          'w8':'45rem',

          'w10':'90%',

          'w95':'95%',

          'w3':'80%',
          'w3s':'100%',

          'w10s':'10rem',

          'w4': '40rem',
          'w35':'35rem',

          'w7': '20rem',

          'whalf':'50%',

          'w13':'13rem',

          "w6": '17rem'
       },
       gap:{
        'g22':'22rem'
       },


      colors: {
        // Custom color scheme for personal branding
        primary: "#1F2937",
        accent: "#3B82F6",
        highlight: "#F59E0B",
      },

      borderRadius: {
        '4xl': '2rem', // Add your custom size
        '5xl': '2.5rem', // Another custom size
        '6xl': '4rem', // And so on...
      },

      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        fadeInOut: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 10s infinite',
      },


    },
  },
  plugins: [],
}
