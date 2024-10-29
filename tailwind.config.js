/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "#311",
            bg: "#F0E0E0",
            prime: "#44ee22",
            hover: "#6d2",
            checked: "#123",
            wHover: "#a11",
            dHover: "#504d4d",
        },
        extend: {},
    },
    plugins: [],
};
