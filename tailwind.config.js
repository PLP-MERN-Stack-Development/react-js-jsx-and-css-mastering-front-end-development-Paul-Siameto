/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 important: enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
