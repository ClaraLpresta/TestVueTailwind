module.exports = {
  purge: ['./index.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding:'2rem',
      center: true,
      screens: {
        '2xl': '1280px',
        'xl': '1280',
        'lg': '1170px',
        'md': '970px',
        'sm': '750px'
      }
    },
    extend: {
      textColor: theme => ({
        'primary': '#ff0076',
        'secondary': '#231768',
      }),
      backgroundColor: theme => ({
        'primary': '#ff0076'
      }),
      backgroundImage: theme => ({
        'secondary': 'linear-gradient(270deg,#34219e,#231768)'
      }),
      borderRadius: theme => ({
        'sm': '4px'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
