/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "50px",
        // md: "500px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

