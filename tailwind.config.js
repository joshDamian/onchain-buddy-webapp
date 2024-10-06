/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ob: {
          primary: '#7931F6',
          extras: {
            white: '#FAF9F6',
            offWhite: '#FFF8F5',
            offGreen: '#F8FDFA',
            offWhite2: '#FFFDFC',
            offWhite3: '#FDFDFD',
            gray: '#CFCFCF',
            black: '#2F2F2F',
          },
          bodyText: '#3B3B3B',
          bodyText2: '#666666',
        },
      },
      backgroundImage: {
        primaryGradient: 'radial-gradient(circle, #7931F6 1%, #471D90 100%)',
        secondaryGradient: 'linear-gradient(0deg, #3B3B3B 0%, #A1A1A1 100%)',
        purpleGradient:
          'conic-gradient(from 45deg, rgba(244, 237, 255, 0.24) 6%, rgba(214, 197, 243, 0.50) 100%)',
        heroBg: "url('/hero-bg.png')",
        heroBg2: "url('/hero2-bg.jpg')",
        heroBg3: "url('/hero3-bg.png')",
        heroBg4: "url('/hero4-bg.png')",
        heroBg5: "url('/hero5-bg.png')",
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
