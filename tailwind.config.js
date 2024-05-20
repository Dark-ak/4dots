/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#7A45FF",
        'priDark': "#5C2DD4",
        'ye': "#FFCE67",
        "pin":"#FD6687"
      },
      fontFamily:{
        mono : "Space mono, sans-serif",
        quick : "Quicksand, sans-serif"
      },
      boxShadow:{
        "4xl": '0 4.50px rgb(0,0,0)'
      }
    },
  },
  plugins: [],
}

