/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f9a826', // 溫暖的橙黃色
        secondary: '#fef6e4', // 柔和的米色
        accent: '#8bd3dd', // 清新的淺藍色
        text: '#5e6472', // 深灰色文字
        background: '#fffffe' // 純白色背景
      },
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif']
      }
    }
  },
  plugins: []
};
