/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#2B616D",
        BlueVert: "#B2DBD5",
        gris: "#797C7B", // Ajoute un nom pour ta couleur
      },
      spacing: {
        "60px": "60px", // Ajoute la valeur 120px
      },
    },
  },
  plugins: [],
};
