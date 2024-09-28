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
        custom_init: '#57544F',
        custom_mid: '#BAA16D',
        custom_end: '#BDB7AB',
        custom_carousel_caption: '#717171',
        dot_active: '#717171',
        header_footer_brown: "#805C3A",
        grey_content_bg: "#A3A19B",
        grey_pengumuman_bg: '#BDB7AB',
        dropdown_brown: '#CBBA9E',
        accordion_selengkapnya: '#D9D9D9',
        museum_selection: '#E3E1DE',
        body_bg: "#E7E6E2",
        dot_inactive: '#E8E6E3',
        dropdown_menu_brown: '#EAE3D8'

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

