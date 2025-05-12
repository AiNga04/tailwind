module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "custom-35": "35px",
      },
      colors: {
        "custom-gray-33": "#333",
        "custom-orange-fa": "#ffa400",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};
