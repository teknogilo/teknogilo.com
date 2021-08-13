module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/parts/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark   :    '#202020',
                purple :    '#3E64FF'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}