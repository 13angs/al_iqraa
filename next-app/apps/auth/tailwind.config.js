// apps/app1/tailwind.config.js
const { join } = require('path');
const colors = require('tailwindcss/colors');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // no longer support
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: ({ theme }) => ({
      ...theme.colors,
      primary: colors.indigo['600'],
      secondary: colors.slate,
      
      // background
      // colors.slate['900']
      "dark-color": colors.slate['900'],
      "light-color": "#F2F3F4",

      // paper
      // colors.slate['800']
      "dark-paper": colors.slate['800'],
      "light-paper": "#ffffff",

      // inner paper
      "dark-in-paper": colors.slate['700'],
      "light-in-paper": colors.slate['100'],

      // button
      "btn-color": colors.indigo['600'],

      // text
      "light-text": "#000000",
      "dark-text": colors.slate['200']

    })
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
};