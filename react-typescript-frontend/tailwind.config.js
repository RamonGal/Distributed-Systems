module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui'), require("@tailwindcss/typography")],
  
  daisyui: {
    themes: ["cupcake", "forest"],
  },

};
