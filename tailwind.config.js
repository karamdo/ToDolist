/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "#333",
            bg: "#F0E0E0",
            prime: "#FFA050",
            hover: "#eF9040",
            checked: "#dF8030",
            wHover: "#E0D0D0",
            dHover: "#504d4d",
        },
        extend: {},
    },
    plugins: [],
};
