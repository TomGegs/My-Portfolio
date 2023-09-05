/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            encode: ['Encode Sans Semi Expanded', 'sans-serif'],
            Nohemi: ['Nohemi', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#1bb7cc',
                secondary: '#0cb5a4',
                altSecond: '#8553F4',
                primaryDark: '#192442',
                bgPrimary: '#232323',
                bgSecondary: '#090909',
            },
            animation: {
                gradient: 'gradient 5s infinite',
                wave: 'wave 2s linear infinite',
            },

            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '100% 100%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '400% 400%',
                        'background-position': 'right center',
                    },
                },
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
