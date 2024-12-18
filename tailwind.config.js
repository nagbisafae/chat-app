/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Serif', 'serif'],
        libre: ['Libre Baskerville', 'serif'],
      },
      colors: {
        customBlue: "#2B616D",
        BlueVert: "#B2DBD5",
        gris: "#797C7B",
        orange: "#FA8D62",
        orangee: "#FB8C00", // Ajoute un nom pour ta couleur
      },
      spacing: {
        "60px": "60px",
        "120px": "120px",
        "400px": "400px",
        cust: "226px",
        // Ajoute la valeur 120px
      },
      width: {
        custom: "450px",
        custom1: "500px",
        custom2: "550px",
        custom3: "650px",
        custom4: "225px",
      },
      top: {
        cus: "225px",
      },
    },
  },
  plugins: [],
};
