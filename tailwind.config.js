module.exports = {
  purge: ["./templates/**/*.html", "./theme/**/*.html"],
  darkMode: false,
  theme: {
    textShadow: {
      default: '0px 0px 1px rgba(0, 0, 0, .20), 0px 0px 1px rgba(1, 0, 5, .10)',
      sm: '1px 1px 3px rgba(36, 37, 47, .25)',
      md: '0px 1px 2px rgba(30, 29, 39, .19), 1px 2px 4px rgba(54, 64, 147, .18)',
      lg: '3px 3px 6px rgba(0, 0, 0, .26), 0 0 5px rgba(15, 3, 86, .22)',
      xl: '1px 1px 3px rgba(0, 0, 0, .29), 2px 4px 7px rgba(73, 64, 125, .35)',
      xxl: '4px 1px 3px rgb(0, 0, 0)',
      none: 'none',
    },
    extend: {
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/forms'),
      require('tailwindcss-textshadow'),
  ],
};
