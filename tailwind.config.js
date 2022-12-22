/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'create': "url('/public/images/create.png')",
      'reflect': "url('/public/images/reflect.png')",

    },
  },
  plugins: [],
}
