/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d8f6a',
      },
      backgroundImage: {
        'banner': "url('/assets/images/banner/banner-img.jpg')",
      },
    },
  },
  plugins: [],
}
