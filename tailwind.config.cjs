/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          mustard: "#ffb703",
          navyblue: "#023047"
        }
      },
    },
    plugins: [],
  };