/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        '188px': '11.75rem',
      },
      boxShadow: {
        'card': '0px 0px 16px rgba(0, 128, 128, 0.16)'
      },
      width: {
        '90': '23rem'
      },
      height: {
        '42': '10.625rem'
      }
    },
    colors: {
      'rich-black': '#001A1A',
      'teal': '#008080',
      'light': '#E6F2F2',
      'white': '#fff'
    }
  },
  plugins: [],
};
