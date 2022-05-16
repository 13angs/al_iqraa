// apps/app1/tailwind.config.js
const { join } = require('path');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // no longer support
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
};