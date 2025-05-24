const animatePlugin = require('tailwindcss-animate');

module.exports = {
  darkMode: false,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

    theme: {
    extend: {
      // any theme overrides here
    },
  },

  plugins: [
    animatePlugin,       // slide-in / animate-in / etc.
    // …other plugins if you have them
  ],
};
