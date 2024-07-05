/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        'bouncing': {
          'from,20%,53%,to' : { transform: 'translate3d(0, 0, 0)', animation_timing_function: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
          '40%,43%' : { transform: 'translate3d(0, calc(-30px + 20px), 0) scaleY(1.05)', animation_timing_function: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
          '70%' : { transform: 'translate3d(0, calc(-15px + 10px), 0) scaleY(1.05)', animation_timing_function: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
          '80%' : { transform: 'translate3d(0, 0, 0) scaleY(0.95)', animation_timing_function: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
          '90%' : { transform: 'translate3d(0, -4px, 0) scaleY(1.02)'}
        },
      },

      animation: {
        'bouncing': 'bouncing 1.5s infinite',
      }
    },
  },
  plugins: [],
};