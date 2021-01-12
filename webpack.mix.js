const mix = require('laravel-mix');
require('laravel-mix-tailwind');

// eslint-disable-next-line no-unused-vars
const extractLibraries = ['vue'];

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import']
});

mix.js(`js/site.js`, `site.js`).sass(
    `sass/main.scss`,
    `css/main.css`
).tailwind();
