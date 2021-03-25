module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./apps/**/*.html', './apps/**/*.ts'],
    options: {
      safelist: [/^mat-/, /^cdk-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    float: false,
  },
  plugins: [require('tailwindcss-debug-screens')],
};
