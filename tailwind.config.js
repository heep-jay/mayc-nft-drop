/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '460px',
        510: '510px',
        700: '700px',
        800: '800px',
        900: '900px',
        '90vh': '90vh',
      },
      width: {
        150: '150px',
        190: '220px',
        200: '230px',
        210: '240px',
        250: '250px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        900: '880px',
        1024: '1024px',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1536px',
        'desktop': '1280px',
       
      }
    },
  },


  backgroundColor: {
    fromGr: '#ff930f',
    toGr: '#d6cF12',
    
  },
  plugins: [],
}
