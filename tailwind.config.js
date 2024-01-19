/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: [
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",

            // Or if using `src` directory:
            "./src/**/*.{js,ts,jsx,tsx,mdx}",
            { raw: '<div class="font-bold">', extension: "html" },
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                NeueMachinaLight: ["NeueMachina-Light", "sans-serif"],
            },
            fontFamily: {
                NeueMachinaRegular: ["NeueMachina-Regular", "sans-serif"],
            },
            fontFamily: {
                NeueMachinaUltrabold: ["NeueMachina-Ultrabold", "sans-serif"],
            },
            fontFamily: {
                LiteraturnayaBoldItalic: [
                    "Literaturnaya-Bold-Italic",
                    "sans-serif",
                ],
            },
            fontFamily: {
                LiteraturnayaBold: ["Literaturnaya-Bold", "sans-serif"],
            },
            fontFamily: {
                LiteraturnayaItalic: ["Literaturnaya-Italic", "sans-serif"],
            },
            fontFamily: {
                LiteraturnayaPlain: ["Literaturnaya-Plain", "sans-serif"],
            },
        },
    },
    plugins: [],
};
