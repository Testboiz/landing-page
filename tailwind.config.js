/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ['"Sansita Swashed"', 'system-ui'],
      },
      fontOpticalSizing: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
}

