module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'galaxy': "url('https://st2.depositphotos.com/3769671/8857/v/600/depositphotos_88570376-stock-illustration-galaxy-background-with-stars.jpg')",
       'sky': "url('https://wallpaperaccess.com/full/39632.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

