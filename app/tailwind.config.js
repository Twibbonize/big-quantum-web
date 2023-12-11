/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
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
            container: {
                center: true
            },
            fontSize: {
                xxs: ['10px', '10px']
            },
            spacing: {
                '2.5': '10px',
                '3.5': '14px'
            },
            colors: {
                main: '#16DAC1',
                black: '#1B1B1B',
                content: '#8D8D8D',
                white: '#FFFFFF',
                yellow: '#FFEF5F',
                light: '#DEE8E8',
                stroke: '#d9d9d9',
                transparent: 'transparent',
                gray: {
                    100: '#F4F4F4',
                    200: '#E8E8E8',
                    300: '#D3D3D3',
                    400: '#8D8D8D'
                }
            },
            boxShadow: {
                card: 'var(--shadow-card)'
            }
        }
    },
    variants: {
        extend: {},
      },
    plugins: [],
};
