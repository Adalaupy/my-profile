import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadein: {
					"0%": {
						transform: "scaleX(0)",
						"transform-origin": "left",
					},
					"100%": {
						transform: "scaleX(1)",
					},
				},

				mover: {
					"0%": {
						transform: "translateX(-1000%)",
						opacity: "0",
						scale: "0.5",
					},
					"100%": {
						transform: "translateX(0%)",
						opacity: "100%",
						scale: "1",
					},
				},

				movel: {
					"0%": {
						transform: "translateX(-800%)",
						opacity: "0",
						scale: "0",
					},

					"100%": {
						transform: "translateX(0%)",
						opacity: "100%",
						scale: "1",
					},
				},

				movel2: {
					"0%": { opacity: "0", transform: "translate(-500%,-200%)" },
					"50%": { opacity: "0" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},

				zoomIn: {
					"0%": { opacity: "0", transform: "scale(0)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
			},
			animation: {
				fadein: "fadein 0.3s ease-out",
				mover: "mover 1s ease-out",
				movel: "movel 2s ease-out",
				movel2: "movel2 1s ease-in-out",
				zoomIn: "zoomIn 0.5s ease-in-out",
			},
			colors: {
				blue: {
					1: "#1f00a6fa",
					2: "2a05fb9d",
				},
				w: "#fff",
			},
		},
	},
	plugins: [],
};
export default config;
