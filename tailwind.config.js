/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f9a826',
        secondary: '#fef6e4',
        accent: '#8bd3dd',
        text: '#5e6472',
        background: '#fffffe'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif']
      }
    }
  },
  plugins: []
};
