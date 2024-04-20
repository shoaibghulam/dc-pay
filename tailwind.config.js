import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      fontSize:{
        md:"16px",
      },
      colors:{
        primary:"#45265D",
        secondary:"#2B0846",
        info:'#2E1542'
      },
      fontFamily:{
        monto:["Montserrat", "sans-serif"],
        "open-sans":["Open Sans","sans-serif"],
      },
      backgroundImage: {
        'hero': "url('./src/assets/images/hero.png')",
       
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}