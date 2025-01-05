/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      colors: {
        'gradient-text': {
          from: '#09f1b8',
          via: '#00a2ff',
          via2: '#ff00d2',
          to: '#fed90f',
        },
      },
    },
  },
  plugins: [],

};

