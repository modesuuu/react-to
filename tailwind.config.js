/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'bl' : '#000',
        'shadow' : '#48464C',
        'btn' : '#79747E',
        'black' : '#45474B',
        'green' : '#495E57',
        'white' : '#F5F7F8',
        'grey' : '#CCC9C9',
        'op' : '#7CA09478',
        'yellow' : '#FCF022',
        "clear" : {
          "/white" : '#FCFDFD',
          "/yellow": '#FCF022',
          "/green": '#7CA094',
          "/black": '#757980',
        }
      }
    },
  },
  plugins: [],
}

