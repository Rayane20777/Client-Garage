/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2B5E', // Dark blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Bright blue
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FF6B35', // Warm orange
          foreground: '#FFFFFF',
        },
        background: '#F0F9FF', // Very light blue
        muted: {
          DEFAULT: '#E0F2FE', // Lighter blue
          foreground: '#475569',
        },
        button: {
          primary: '#0F2B5E', // Dark blue
          secondary: '#FF6B35', // Warm orange
          text: '#FFFFFF',
        },
      },
      boxShadow: {
        'hover': '0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)',
      },
    },
  },
  plugins: [],
}

