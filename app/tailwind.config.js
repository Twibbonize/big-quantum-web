/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ['Manrope', 'sans-serif'],
            body: ['Manrope', 'sans-serif'],
            serif: ['Marck Script', 'cursive']
        },
        borderRadius: {
            'xl': '0.75rem',
            '3xl': '1.25rem',
            'full': '9999px'
        },
        extend: {
            fontSize: {
                xxs: ['10px', '10px']
            },
            colors: {
                main: '#16DAC1',
                black: '#1B1B1B',
                content: '#8D8D8D',
                white: '#FFFFFF',
                yellow: '#FFEF5F',
                light: '#DEE8E8',
                stroke: '#D9D9D9',
                transparent: 'transparent'
            }
        }
    },
    variants: {
        extend: {},
      },
    plugins: [],
};
