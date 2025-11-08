/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (Cyan/Blue)
        primary: {
          DEFAULT: '#2982a1',
          dark: '#00598f',
          darker: '#00264d',
          light: '#54adb8',
          cyan: '#00f9ff',
        },

        // Secondary Colors
        secondary: {
          DEFAULT: '#30639a',
          light: '#306196',
          navy: '#213c5e',
          dark: '#234060',
        },

        // Background Colors (Light Blue/Cyan Tints)
        background: {
          DEFAULT: '#ffffff',
          primary: '#d0ecf0',
          secondary: '#d7eaf4',
          tertiary: '#e7f6f7',
          light: '#d1ecf0',
          lighter: '#cfebef',
          lightest: '#bfe5e6',
          pale: '#e6f5f7',
          soft: '#e4f4f6',
          cream: '#fdf4ea',
        },

        // Accent Colors
        accent: {
          yellow: '#f3ba38',
          orange: '#fabd35',
          warmCream: '#f0dac6',
        },

        // Status/Alert Colors
        status: {
          success: '#54adb8',
          warning: '#f3ba38',
          error: '#b54e47',
          danger: '#be533e',
          alert: '#87342d',
        },

        // Neutral/Grays
        neutral: {
          white: '#ffffff',
          black: '#000000',
          darkest: '#030002',
          darker: '#050003',
          dark: '#2b0d19',
          medium: '#3b1c2a',
          steel: '#475670',
          slate: '#495a75',
          light: '#6e4046',
          pale: '#b5daf1',
          sky: '#c1e6e7',
          lightSky: '#c7eaf9',
        },
      },

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      fontSize: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
      },

      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },

      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 8px rgba(41, 130, 161, 0.08)',
        'card-hover': '0 4px 16px rgba(41, 130, 161, 0.12)',
      },

      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
