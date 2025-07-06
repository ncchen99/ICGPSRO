/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'chaney': ['Impact', 'Arial Black', 'sans-serif'],
                'space': ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                'dark-space': '#393E46',
                'cosmic-teal': '#00ADB5',
                'stellar-mint': '#AAD8D3',
                'cosmic-white': '#EEEEEE',
                'deep-space': '#1a1d23',
                'nebula-blue': '#0099a8',
                'aurora-green': '#88c5c0',
                'star-white': '#f8f9fa',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            animation: {
                'gradient-shift': 'gradient-shift 3s ease infinite',
                'twinkle': 'twinkle 4s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 7s infinite',
                'orbit': 'orbit 20s linear infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'twinkle': {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.2)' },
                },
                'fadeInUp': {
                    'from': { opacity: '0', transform: 'translateY(30px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'blob': {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'orbit': {
                    '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
                },
            },
        },
    },
    plugins: [],
} 