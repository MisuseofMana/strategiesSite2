// import colors from 'vuetify/es5/util/colors'
// Uncomment the above if you want to use standard vuetify colors such as colors.red.lighten4
// List is in node_modules/vuetify/src/styles/settings/_colors.scss

// HTML Class ex: "primary--text text--lighten-3" will make the component's text #F09890. The second part is used to select lighten/darken variants.
// CSS (in component file): .custom { color: var(--v-gray_dark-base)} Note: -base is required at the end if not specifying a lighten/darken variant

const theme = {
    options: { customProperties: true },
    light: true, // Change to dark: true for dark theme
    themes: {
      light: {
        // Vuetify Defaults
        primary: '#013768',
        anchor: '#bf281a',
        secondary: '#013768',
        accent: '#bf281a',
        error: '#9f0002',
        warning: '#c84801',
        success: '#4eb6a5',
        info: '#407596', // Links and such
      },
      dark: {
        // Only use to check if this is working
        primary: '#407596',
        secondary: '#e13121',
      },
    },
  }
  
  export default theme