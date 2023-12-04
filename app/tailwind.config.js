/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      'main': '#16DAC1',
      'black': '#1B1B1B',
      'white': '#FFFFFF',
      'yellow': '#FFEF5F',
      'light': '#DEE8E8',
      'transparent': 'transparent'
    },
    borderRadius: {
      'xl': '0.75rem',
      '3xl': '1.25rem',
      'full': '9999px',
    },
    extend: {},
  },
  plugins: [],
}

