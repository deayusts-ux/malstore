/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#11b7d4",
                "primary-hover": "#0ea5c0",
                "accent-sale": "#E68826",
                "accent-rating": "#804D80",
                "background-light": "#ffffff",
                "background-dark": "#101113",
                "surface-dark": "#1D1E20",
                "surface-darker": "#161719",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
