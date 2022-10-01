module.exports = {
  variants: {
    extend: {
    },
  },
  content: [
    "../Furm/templates/*.html",
    "../Furm/templates/*/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
  }
}