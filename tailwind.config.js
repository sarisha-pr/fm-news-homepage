/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    screens:{
      xs:'390px',
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl: '1200px',
    },

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'almost-white': '#FFFDFA',
      'dark-space-blue': '#00001A',
      'gunmetal': '#5E607A',
      'light-vermillion': '#F15D51',
      'silver': '#C5C6CE',
      'yellow': '#E9AA52',
    },

   /**
   * Setup font-family
   */
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      /**
       * Create custom text-shadow
       * Reference: https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
       */
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },

  // Do not include tailwind default container
  corePlugins: {
    container: false
  },
  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        /**
         * Create custom container
         * Reference: https://stefvanlooveren.me/blog/custom-container-width-tailwind-css
         */
        '.container': {
          width: '100%',
          paddingLeft: '16px',
          paddingRight: '16px',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen sm': {
            maxWidth: '540px',
            paddingLeft: '0',
            paddingRight: '0',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '920px',
          },
          '@screen xl': {
            maxWidth: '1110px',
          },
        },

        /**
         * Create custom writing mode
         */
        '.wm-vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.wm-horizontal-tb': {
          writingMode: 'horizontal-tb',
        },

        /**
         * Image scale
         */
        '.img-scale': {
          transform: 'scale(1.1)',
        },
      })
    },

    /**
     * Create custom text-shadow
     * Reference: https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
     */
    function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],

  safelist: [
  ],
}
