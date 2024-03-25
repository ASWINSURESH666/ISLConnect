/** @type {import('tailwindcss').Config} */

// postcss.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
