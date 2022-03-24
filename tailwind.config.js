module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                myrtle: {
                    100: '#89cfcb',
                    200: '#75c7c3',
                    300: '#61bfba',
                    400: '#4eb7b2',
                    500: '#3aafa9',
                    600: '#349e98',
                    700: '#2e8c87',
                    800: '#297a76',
                    900: '#236965',
                },
                darkgreen: {
                    100: '#5d666a',
                    200: '#455155',
                    300: '#2e3b3f',
                    400: '#17252a',
                    500: '#17252a',
                    600: '#152126',
                    700: '#121e22',
                    800: '#101a1d',
                    900: '#0e1619',
                },
                midred: {
                    100: '#c77579',
                    200: '#bf6166',
                    300: '#b74e53',
                    400: '#af3a40',
                    500: '#af3a40',
                    600: '#9e343a',
                    700: '#8c2e33',
                    800: '#7a292d',
                    900: '#692326',
                },
                white: '#f9ffff'
            },
        },
        fontFamily: {
            'lato': ['Lato', 'sans-serif']
        },
    },
    plugins: [],
}
