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
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    // 追加
    theme: {
        extend: {
            colors: {
                // 'カラー名': 'カラーコード'
                'my-purple1': '#7a54a8',
            },
        },
    },

    theme: {
        extend: {
            colors: {
                // 'カラー名': 'カラーコード'
                'my-purple2': '#884898',
            },
        },
    },

    theme: {
        extend: {
            colors: {
                // 'カラー名': 'カラーコード'
                'my-purple3': '#9969d3',
            },
        },
    },

    theme: {
        extend: {
            colors: {
                // 'カラー名': 'カラーコード'
                'my-gray1': '#eaeaea',
            },
        },
    },

    theme: {
        extend: {
            colors: {
                // 'カラー名': 'カラーコード'
                'my-gray2': '#404040',
            },
        },
    },

    // 追加
    theme: {
        extend: {
            colors: {
                // 'カラー名': 'カラーコード'
                'box-gray3': '#3f3f3f',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
