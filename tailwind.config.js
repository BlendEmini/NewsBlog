/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            colors: {
                mainBgDark: "#181A2A",
                logoColor: "#e8ccb2",
                scLightBg: "#F4F4F5",
                scLightText: "#3B3C4A",
                blueButton: "#4B6BFB",
                lightGrey: "#999999",
                lightBlueButton: "#4b6bfb73",
                lightHoverBG: "#e5e5e59a",
                darkHoverBG: "#3A3F58",
                darkHoverText: "#9FA2B4",
                lightParagraphColor: "#3B3C4A",
                darkParagraphColor: "#BABABF",
                btnBackground: "#4b6bfb0d",
            },
            alignItems: {
                center: "center",
            },
            maxHeight: {
                400: "400px",
            },
            width: {
                478: "478px", // Custom width definition
                350: "290px",
                800: "800px",
            },
            height: {
                243: "243px",
                462: "462px",
            },
        },
    },
    plugins: [],
};
