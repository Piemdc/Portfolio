/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#000000',
        'primary-focus' : '#9c99a3',
        'primary-content' : '#ffffff',

        'secondary' : '#570000',
        'secondary-focus' : '#ca0202',
        'secondary-content' : '#ffffff',

        'accent' : '#37cdbe',
        'accent-focus' : '#2ba69a',
        'accent-content' : '#ffffff',

        'neutral' : '#3b424e',
        'neutral-focus' : '#2a2e37',
        'neutral-content' : '#ffffff',

        'base-100' : '#ffffff',
        'base-200' : '#f9fafb',
        'base-300' : '#ced3d9',
        'base-content' : '#1e2734',

        'info' : '#1c92f2',
        'success' : '#009485',
        'warning' : '#ff9900',
        'error' : '#ff5724'
      },
      fontFamily : {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        title: ['Yeseva', ...defaultTheme.fontFamily.sans]
      },
      backdropBlur: {
        xs: '1px',
      },
      backgroundImage: {
        'head': "url('../public/images/bg6img1.png')",
        'about': "url('../public/images/bg6img2.png')",
      },
    },
  },
  plugins: [],
}
