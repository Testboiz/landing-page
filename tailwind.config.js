/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_init: '#57544F',  // Replace with your color A
        custom_mid: '#BAA16D',  // Replace with your color B
        custom_end: '#BDB7AB',  // Replace with your color C
      },
      fontFamily: {
        'sansita': ['"Sansita Swashed"', 'system-ui'],
      },
      fontOpticalSizing: {
        auto: 'auto',
      },
    },
  },
}

