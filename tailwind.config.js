const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],


    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans], zenmaru: ["Zen Maru Gothic"],
            },

            colors: {
                // 'カラー名': 'カラーコード'
                'dark-green': '#06bbbc', 'box-gray':'#eaeaea', 'box-bordergray':'#c7c7c7', 'title-purple1':'#7a54a8','my-purple2':'#884898', 'my-purple3':'#9969d3',
              },
        },
    },

   

    plugins: [require('@tailwindcss/forms')],
};