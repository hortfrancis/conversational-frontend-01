/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", 'sans-serif', 'system-ui'],
                montserrat_alternates: ["Montserrat Alternates", 'sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}