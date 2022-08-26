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
                'link-blue': '#227cd6', 'dark-green': '#06bbbc', 'box-gray':'#eaeaea','my-gray1':'#494949', 'menutitle-gray': '#5b5b5b','menu-gray': '#686868', 'box-bordergray':'#c7c7c7', 'shadowgray1':'#bfbfbf', 'title-purple1':'#7a54a8','title-purple2':'#874898', 'button-purple2':'#9780b5', 'my-purple2':'#884898', 'my-purple3':'#9969d3', 'my-purple4' : '#a06edd', 'green-white':'#f9ffff', 'bookmark-red':'#842530', 'gray-50': '#f9fbfc', 'gray-150': '#f4f5f7', 'gray-170': '#eff0f2', 'gray-250': '#eaebef',
              },

              width: {
                 '1/9': '0.11111111%',
                 '1/8': '12.5%',
                 '1/7': '14.2857143%',
                 '2/7': '28.5714286%',
                 '3/7': '42.8571429%',
                 '4/7': '57.1428571%',
                 '5/8': '62.5%',
                 '5/7': '71.4285714%',
                 '7/9': '77.7777777%',
                 '6/7': '85.7142857%',
               },

               aspectRatio: {
                'slideshow': '6/5',
              },
        },
    },

   

    plugins: [require('@tailwindcss/forms')],
};