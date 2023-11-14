/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        "layout": "auto 1fr auto"
      },
      colors: {
        "logo-main": "#9b0404"
      },
      fontFamily: {
        main: ['Montserrat']
      }
    },
  },
  plugins: [],
}

