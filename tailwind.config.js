/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            lineHeight: {
                11: "2.75rem",
                12: "3rem",
            },
            colors: {
                error: "#920000",
                borderColor: "#D9D9D9",
                headerBorderBottomColor: "#dcdcdc",
                primary: "#6dcff6",
                lightGrey: "#f3f3f3",
            },
            fontSize: {
                help: "0.8em",
            },
        },
    },
    plugins: [],
};
