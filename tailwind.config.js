module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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