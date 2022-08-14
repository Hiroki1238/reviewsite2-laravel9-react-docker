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
                sans: ['Nunito', ...defaultTheme.fontFamily.sans], zenmaru: ["Zen Maru Gothic"], kosugimaru: ["Kosugi Maru"], rocknroll: ["RocknRoll One"], decol: ["Kaisei Decol"]
            },

            colors: {
                // 'カラー名': 'カラーコード'
                'link-blue': '#227cd6', 'dark-green': '#06bbbc', 'box-gray':'#eaeaea','my-gray1':'#424242', 'menutitle-gray': '#5b5b5b','menu-gray': '#686868', 'box-bordergray':'#c7c7c7', 'shadowgray1':'#bfbfbf', 'title-purple1':'#7a54a8','title-purple2':'#9780b5','my-purple2':'#884898', 'my-purple3':'#9969d3', 'my-purple4' : '#a06edd', 'green-white':'#f9ffff', 'bookmark-red':'#842530',
              },
        },
    },

   

    plugins: [require('@tailwindcss/forms')],
};