const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      ringWidth: ['hover', 'focus'],
      backgroundColor: ['focus'],
      borderWidth: ['hover']
    }
  }
};
