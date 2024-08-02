/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {  
    extend: {
      screens: {
        phone: "450px",
        tablet: "900px",
      }
    },
  },
  plugins: [],
}

