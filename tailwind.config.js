/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      colors: {
        custom_init: '#57544F',  // Replace with your color A
        custom_mid: '#BAA16D',  // Replace with your color B
        custom_end: '#BDB7AB',  // Replace with your color C
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontFamily: {
        'sansita': ['"Sansita Swashed"', 'system-ui'],
      },
      fontOpticalSizing: {
        auto: 'auto',
      },
    },

  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },

}

