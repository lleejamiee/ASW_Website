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
        extend: {},
    },
    plugins: [],
};
