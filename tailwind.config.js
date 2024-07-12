/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#0E2954',
        colorSelect: '#80e823',
        colorHover: '#1B1A55',
        colorLight: '#B9B4C7',
        colorError: '#FF6961',
        bgColor: '#ffffff',
        borderHeader: '#0505050f',
      },
    },
  },
  plugins: [],
};
