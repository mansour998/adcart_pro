module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B365D", // navy-900 - deep navy for trust and professional authority
          50: "#F0F4F8", // navy-50
          100: "#D9E2EC", // navy-100
          200: "#BCCCDC", // navy-200
          300: "#9FB3C8", // navy-300
          400: "#829AB1", // navy-400
          500: "#627D98", // navy-500
          600: "#486581", // navy-600
          700: "#334E68", // navy-700
          800: "#243B53", // navy-800
          900: "#1B365D", // navy-900
        },
        secondary: {
          DEFAULT: "#FFB81C", // amber-500 - UAE gold for energy and premium positioning
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFD54F", // amber-300
          400: "#FFCA28", // amber-400
          500: "#FFB81C", // amber-500
          600: "#FFB300", // amber-600
          700: "#FF8F00", // amber-700
          800: "#FF6F00", // amber-800
          900: "#E65100", // amber-900
        },
        accent: {
          DEFAULT: "#00A8CC", // cyan-900 - technology blue for interactive elements
          50: "#E0F7FA", // cyan-50
          100: "#B2EBF2", // cyan-100
          200: "#80DEEA", // cyan-200
          300: "#4DD0E1", // cyan-300
          400: "#26C6DA", // cyan-400
          500: "#00BCD4", // cyan-500
          600: "#00ACC1", // cyan-600
          700: "#0097A7", // cyan-700
          800: "#00838F", // cyan-800
          900: "#00A8CC", // cyan-900
        },
        background: "#FFFFFF", // white - pure white for content clarity
        surface: "#F8F9FA", // gray-50 - subtle gray for card depth
        text: {
          primary: "#2C3E50", // slate-800 - readable dark for extended content
          secondary: "#6C757D", // gray-600 - clear hierarchy for supporting information
        },
        success: {
          DEFAULT: "#28A745", // green-600 - campaign success and positive metrics
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
        },
        warning: {
          DEFAULT: "#FFC107", // yellow-500 - attention without alarm for notifications
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          500: "#EAB308", // yellow-500
        },
        error: {
          DEFAULT: "#DC3545", // red-600 - clear problem indication with helpful tone
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
        border: {
          DEFAULT: "#E9ECEF", // gray-200 - clean borders
          light: "#F1F3F4", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // optimized for digital reading with excellent multilingual support
        montserrat: ['Montserrat', 'sans-serif'], // modern sans-serif for headlines and CTAs
        mono: ['JetBrains Mono', 'monospace'], // technical data display and dashboard elements
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.5rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
        'card': '8px', // modern feel for cards and interactive elements
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // subtle elevation for interactive cards
        'card': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      transitionDuration: {
        'quick': '200ms', // quick feedback like button presses
        'smooth': '300ms', // hover states and micro-interactions
        'page': '400ms', // page transitions and complex state changes
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}