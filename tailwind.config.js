/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BC5851',
        secondary: '#CE7C65'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif']
      }
    }
  },
  plugins: []
};
