/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '24': '24px',
        '14': '14px',
      },
      fontWeight: {
        bold: '700',
        regular: '400',
      },
      lineHeight: {
        '150': '150%',
      },
      letterSpacing: {
        '0': '0px',
      },
      width: {
        '88': '88px', 
      },
      padding: {
        '40': '40px', 
      },
      colors: {
        'grey-900': '#141414',
        'grey-800': '#1F1F1F',
        'grey-700': '#333333',
        'green': '#C4F82A',
        'white': '#ffff'
      },

      spacing: {
        500: '40px',
        300: '24px',
        200: '16px',
        150: '12px',
        100: '8px',
        50: '4px'
      },

      screens: {
        sm: '490px',
        md: '744px',
        '2md': '1024px',
        lg: '1280px',
        xl: '1920px',
      },

    },
  },
  plugins: [

  ],
}
