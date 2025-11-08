/**
 * LaunchPad Design System
 * Extracted from designer's SVG reference files
 *
 * This file contains all design tokens for colors, typography, spacing, and components
 * to ensure pixel-perfect implementation of the new design
 */

export const designSystem = {
  colors: {
    // Primary Brand Colors
    primary: {
      DEFAULT: '#2982a1',    // Main brand blue (most prominent color)
      dark: '#00598f',       // Darker blue variant
      darker: '#00264d',     // Darkest blue
      light: '#54adb8',      // Light cyan
      cyan: '#00f9ff',       // Bright cyan accent
    },

    // Secondary Colors
    secondary: {
      DEFAULT: '#30639a',    // Secondary blue
      light: '#306196',      // Light variant
      navy: '#213c5e',       // Navy blue
      dark: '#234060',       // Dark navy
    },

    // Background Colors (Light Blue/Cyan Tints)
    background: {
      DEFAULT: '#ffffff',
      primary: '#d0ecf0',    // Most used background (331 instances)
      secondary: '#d7eaf4',  // Second most used (237 instances)
      tertiary: '#e7f6f7',   // Third most used (212 instances)
      light: '#d1ecf0',
      lighter: '#cfebef',
      lightest: '#bfe5e6',
      pale: '#e6f5f7',
      soft: '#e4f4f6',
      cream: '#fdf4ea',      // Warm background option
    },

    // Accent Colors
    accent: {
      yellow: '#f3ba38',     // Warning/highlight yellow
      orange: '#fabd35',     // Bright orange
      warmCream: '#f0dac6',  // Warm neutral
    },

    // Status/Alert Colors
    status: {
      success: '#54adb8',    // Success/complete (cyan)
      warning: '#f3ba38',    // Warning (yellow)
      error: '#b54e47',      // Error/critical (red)
      danger: '#be533e',     // Danger (dark red)
      alert: '#87342d',      // Alert (darker red)
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

    // Gradient Colors
    gradient: {
      cyan: ['#c3e7e8', '#c7e8ea', '#cdebee', '#d2ecf0'],
      blue: ['#d2ecf1', '#d4ecf1', '#d6ebf3', '#d8ebf4'],
      light: ['#cceaed', '#ceebee', '#ceebef', '#cbeaed'],
    }
  },

  typography: {
    // Font Families (from SVG analysis)
    fonts: {
      body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    // Font Sizes (extracted from SVGs, converted to rem)
    sizes: {
      xs: '0.5rem',      // ~8px
      sm: '0.75rem',     // ~12px
      base: '1rem',      // ~16px
      lg: '1.125rem',    // ~18px
      xl: '1.25rem',     // ~20px
      '2xl': '1.5rem',   // ~24px
      '3xl': '2rem',     // ~32px
      '4xl': '2.25rem',  // ~36px
    },

    // Font Weights
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },

    // Line Heights
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    }
  },

  spacing: {
    // Spacing scale (in rem)
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    DEFAULT: '0.5rem',   // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.25rem',   // 20px - Standard from design
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    card: '0 2px 8px rgba(41, 130, 161, 0.08)',
    cardHover: '0 4px 16px rgba(41, 130, 161, 0.12)',
  },

  components: {
    button: {
      primary: {
        bg: '#2982a1',
        text: '#ffffff',
        hover: '#00598f',
        active: '#00264d',
      },
      secondary: {
        bg: '#f3ba38',
        text: '#000000',
        hover: '#fabd35',
        active: '#f3ba38',
      },
      outline: {
        border: '#2982a1',
        text: '#2982a1',
        hover: {
          bg: '#d0ecf0',
          border: '#00598f',
        }
      },
      sizes: {
        sm: {
          px: '1rem',
          py: '0.5rem',
          fontSize: '0.875rem',
          borderRadius: '0.75rem',
        },
        md: {
          px: '1.5rem',
          py: '0.75rem',
          fontSize: '1rem',
          borderRadius: '1rem',
        },
        lg: {
          px: '2rem',
          py: '1rem',
          fontSize: '1.125rem',
          borderRadius: '1.25rem',
        }
      }
    },

    card: {
      bg: '#ffffff',
      border: 'transparent',
      borderRadius: '1.25rem',
      shadow: '0 2px 8px rgba(41, 130, 161, 0.08)',
      padding: '1.5rem',
      hover: {
        shadow: '0 4px 16px rgba(41, 130, 161, 0.12)',
        transform: 'translateY(-2px)',
      }
    },

    input: {
      bg: '#ffffff',
      border: '#d0ecf0',
      borderFocus: '#2982a1',
      text: '#000000',
      placeholder: '#495a75',
      borderRadius: '0.75rem',
      padding: {
        x: '1rem',
        y: '0.75rem',
      }
    },

    badge: {
      success: {
        bg: '#d0ecf0',
        text: '#2982a1',
      },
      warning: {
        bg: '#fdf4ea',
        text: '#f3ba38',
      },
      error: {
        bg: '#fdf4ea',
        text: '#b54e47',
      },
      borderRadius: '0.5rem',
      padding: {
        x: '0.75rem',
        y: '0.25rem',
      }
    },

    progressBar: {
      bg: '#d0ecf0',
      fill: '#2982a1',
      height: '0.5rem',
      borderRadius: '9999px',
    },

    sidebar: {
      bg: '#ffffff',
      width: '16rem',
      border: '#d0ecf0',
      itemHover: '#d0ecf0',
      itemActive: '#2982a1',
      itemActiveText: '#ffffff',
    }
  },

  layout: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      container: '1200px',
    },

    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  }
}

export default designSystem
