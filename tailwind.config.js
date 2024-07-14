/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#004aad',
        colorSelect: '#80e823',
        colorHover: '#1B1A55',
        colorLight: '#999999',
        colorError: '#FF6961',
        bgColor: '#ffffff',
        borderHeader: '#0505050f',
      },
    },
  },
  plugins: [],
};
