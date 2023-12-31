/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily : {
        'montserrat' : ['Montserrat', 'sans-serif'],
        'free' : ['Freehand', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}

