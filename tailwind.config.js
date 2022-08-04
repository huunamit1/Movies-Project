const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: `'Montserrat',Arial,Helvetica,sans-serif`,
            },
            height: {
                'header-pc': '66px',
                avatar: '28px',
                'search-avatar': '32px',
                search: '40px',
            },
            width: {
                avatar: '28px',
                'search-avatar': '32px',
                search: '420px',
            },
            colors: {
                primary: '#4AC6D2',
                text: '#292929',
                desc: '#0000008a',
            },
            lineHeight: {
                sm: '1.15',
            },
            transitionTimingFunction: {
                ease: 'ease',
            },
            transitionDuration: {
                300: '300ms',
            },
            backgroundImage: {
                '404-page':
                    'url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif")',
                'linear-primary':
                    'linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%)',
            },
            aspectRatio: {
                image: '9 / 16',
            },
            keyframes: {
                'loader-start': {
                    '0%': {
                        transform: 'scale(0) rotate(0deg)',
                    },
                    '100%': {
                        transform: 'scale(0.7) rotate(360deg)',
                    },
                },
                'loader-circles': {
                    '0%': {
                        'box-shadow': '0 0 0 #18ffff',
                        opacity: 1,
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        'box-shadow':
                            '24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff',
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'rotate(360deg)',
                        'box-shadow':
                            '25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black',
                    },
                },
            },
            animation: {
                'loader-start': 'loader-start 1s ease alternate infinite',
                'loader-circles':
                    'loader-circles 1s ease-in-out alternate infinite',
            },
            maxWidth: {
                search: '420px',
            },
            zIndex: {
                5: 5,
                99: 99,
                100: 100,
                full: 9999,
            },
        },
        screens: {
            xxs: '400px',
            xs: '540px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            gx: '1112px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        plugin(function ({ addVariant }) {
            addVariant('not-last-child', '&:not(:last-child)');
        }),
    ],
};
