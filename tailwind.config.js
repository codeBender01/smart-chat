module.exports = {
    mode: 'jit',
    content: ['./src/**/**/*.{js,ts,jsx,tsx,html,mdx}', './src/**/*.{js,ts,jsx,tsx,html,mdx}'],
    darkMode: 'class',
    theme: {
        screens: {md: {max: '900px'}, sm: {max: '600px'}},
        extend: {
            colors: {
                gray: {
                    100: '#f7f7f7',
                    300: '#cff0e0',
                    600: '#828282',
                    '100_01': '#f5f4f4',
                },
                blue: {500: '#1da1f2', A400: '#1877f2'},
                light_green: {100: '#ddfbc7'},
                light_blue: {50: '#ceeafc'},
                red: {100: '#ffd3e2'},
                lime: {100: '#f4f0cb'},
                green: {A700: '#15c370'},
                pink: {A400: '#e90d53'},
                blue_gray: {900: '#272d40'},
                white: {A700: '#ffffff'},
                black: {'900_26': '#00000026'},
            },
            fontFamily: {
                opensans: 'Open Sans',
                quicksand: 'Quicksand',
                lato: 'Lato',
            },
            boxShadow: {bs: '0px 2px  6px 2px #00000026'},
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
