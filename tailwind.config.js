/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : '#1C96C5',
        secondary: '#CFECF7',
        hover: '#257899'
      }
    },
  },
  plugins: [],
}

