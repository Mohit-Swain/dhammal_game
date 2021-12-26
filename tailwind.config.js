module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  variants: {
    extend: {
      ringWidth: ['hover', 'focus'],
      backgroundColor: ['focus']
    }
  }
};
