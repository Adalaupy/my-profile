import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes:{
                fadein:{
                    '0%': {
                        transform: 'scaleX(0)',
                        'transform-origin':'left'
                    },
                    '100%': {
                        transform: 'scaleX(1)'
                    }
                }
            } ,
            animation:{
                fadein: 'fadein 0.3s ease-out'
            },
            colors: {
                blue: {
                    1: '#1f00a6fa',
                    2: '2a05fb9d'
                },
                w:'#fff'
            },
        },
    },
    plugins: [],
};
export default config;
