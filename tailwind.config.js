/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-red': '0 4px 6px rgba(255, 0, 0, 0.4)', // Red shadow
        'custom-blue': '0 4px 6px rgba(0, 0, 255, 0.4)', // Blue shadow
      },
      animation: {
        bgPulse: "bgPulse 5s infinite ease-in-out",

      },
      keyframes: {
        bgPulse: {
          "0%, 100%": { opacity: 0.1, transform: "scale(0.9)" },
          "50%": { opacity: 0.2, transform: "scale(1)" }, // Reduced scaling
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}