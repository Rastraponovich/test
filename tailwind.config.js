/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            lineHeight: {
                tighter: "1.2",
                4.5: "1.125rem",
            },
            spacing: {
                3.75: "15px",
            },
            opacity: {
                12: "0.12",
            },
            padding: {
                0.25: "1.5px",
            },

            boxShadow: {
                card: "0px 4px 25px rgba(137, 137, 137, 0.15)",
                "card-hover": "0px 4px 15px rgba(137, 137, 137, 0.3)",
                button: "0px 4px 15px rgba(137, 137, 137, 0.15)",
                button_hover: "0px 4px 12px 0px rgba(137, 137, 137, 0.25)",
                border: "0px 0px 0px 1px",
                card_bottom: "0px 25px 25px -15px rgba(137, 137, 137, 0.15)",
                alert: "0px 8px 22px -6px rgba(24, 39, 75, 0.06)",
            },
            fontFamily: {
                sans: ["var(--font-sans-pro)", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            yellow: {
                DEFAULT: "#F6DB4D",
                hover: "#FBD13D",
                dark: "#D3A52B",
                100: "#FFFBE8",
                300: "#FFF6CA",
                500: "#E4BF00",
            },
            green: {
                DEFAULT: "#359D5F",
                active: "#267746",
                hover: "#29804C",
                100: "#EBFFF3",
                300: "#C3F4D6",
            },
            gray: {
                100: "#F8F8F8",
                200: "#F2F2F2",
                300: "#CECECE",
                400: "#9B9B9B",
                500: "#606060",
                600: "#020202",
                700: "#1B1B1B",
                800: "#303030",
                hover: "#ECECEC",
                placeholder: "#A3A3A3",
            },
            border: {
                DEFAULT: "#E4E4E4",
            },
            blue: {
                DEFAULT: "#CCE5FE",
                200: "#B8DBFF",
                300: "#A7D3FF",
                400: "#E7F3FF",
                500: "#CAE4FF",
                600: "#007BFB",
                700: "#709CFF",
                710: "#568BFF",
                720: "#467EF9",
                800: "#3E79FB",
            },
            black: {
                DEFAULT: "#000000",
                600: "#1C1C1C",
            },
            white: "#FFFFFF",
            transparent: "transparent",
            red: {
                DEFAULT: "#EE3D48",
                100: "#FFF7F7",
                300: "#FFD2D2",
                500: "#F04B69",
                600: "#E60000",
            },
            ochra: "#EFC800",
            alert: {
                DEFAULT: "#969696",
                info: "#E5F2FF",
                success: "#EDFAED",
                warning: "#FFFBE6",
                error: "#FEEDF0",
            },
        },
        fontSize: {
            ...defaultTheme.fontSize,
            "2.5xl": ["1.75rem", "1"],
            "3xl": ["2rem", "2.75rem"],
            "4xl": ["2.5rem", "1"],
        },
        screens: {
            "2xs": "375px",
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    plugins: [require("tailwindcss-animate")],
}
