import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import { coffee } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte}"],

    theme: {
        extend: {
            container: {
                padding: "1rem",
                center: true,
            },
            fontFamily: {
                sans: ["Inter", "sans-serif", "system-ui"],
                serif: ["Georgia", "serif"],
            },
            fontSize: {
                tiny: "0.5rem",
                xs: "0.75rem",
                sm: "0.8rem",
                base: "1rem",
                xl: "1.25rem",
                "2xl": "1.563rem",
                "3xl": "1.953rem",
                "4xl": "2.441rem",
                "5xl": "3.052rem",
            },
            fontWeight: {
                hairline: "50",
                thin: "100",
                normal: "300",
            },
        },
    },

    plugins: [typography, forms, daisyui],
    daisyui: {
        themes: [
            {
                mytheme: {
                    ...coffee,
                },
            },
        ],
        dark: true,
        styled: true,
        utils: true,
        logs: false,
    },
};
