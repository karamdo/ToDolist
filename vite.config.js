import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        port: 3030,
    },
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
});