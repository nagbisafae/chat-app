/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
      },
      fontFamily: {
        serif: ["Roboto Serif", "serif"],
        libre: ["Libre Baskerville", "serif"],
      },
      colors: {
        customBlue: "#2B616D",
        customBlue1: "#94D2C9",
        BlueVert: "#B2DBD5",
        gris: "#797C7B",
        orange: "#FA8D62",
        orangee: "#FB8C00", // Ajoute un nom pour ta couleur
      },
      spacing: {
        "60px": "60px",
        "120px": "120px",
        "400px": "400px",
        "450px": "450px",
        "300px": "300px",
        cust: "226px",
        custt: "250px",
        cu: "777px",
        // Ajoute la valeur 120px
      },
      width: {
        custom: "450px",
        custom1: "500px",
        custom2: "550px",
        custom3: "650px",
        custom4: "225px",
        custom5: "777px",
        custom6: "950px",
        custom7: "730px",
        custom12: "550px",
      },
      top: {
        cus: "225px",
      },
      height: { custom5: "548px", custom11: "670px" },
      left: {
        lee: "300px",
      },
    },
  },
  plugins: [],
};
