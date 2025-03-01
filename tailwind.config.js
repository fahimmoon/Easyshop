/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-slight': {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rainbow': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'morphing': {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'glowing': {
          '0%': { boxShadow: '0 0 5px #4f46e5, 0 0 10px #4f46e5, 0 0 15px #4f46e5' },
          '50%': { boxShadow: '0 0 20px #4f46e5, 0 0 25px #4f46e5, 0 0 30px #4f46e5' },
          '100%': { boxShadow: '0 0 5px #4f46e5, 0 0 10px #4f46e5, 0 0 15px #4f46e5' }
        },
        'levitate': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(-2deg)' },
          '75%': { transform: 'translateY(5px) rotate(2deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' }
        },
        'pop-up': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'spark': {
          '0%': { filter: 'brightness(100%) contrast(100%)' },
          '50%': { filter: 'brightness(200%) contrast(150%)' },
          '100%': { filter: 'brightness(100%) contrast(100%)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'bounce-slight': 'bounce-slight 2s ease-in-out infinite',
        'scale-up': 'scale-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'rainbow': 'rainbow 5s linear infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'glowing': 'glowing 2s ease-in-out infinite',
        'levitate': 'levitate 3s ease infinite',
        'pop-up': 'pop-up 0.5s ease-out',
        'spark': 'spark 2s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200% 200%',
        '300%': '300% 300%'
      }
    },
  },
  plugins: [],
}
