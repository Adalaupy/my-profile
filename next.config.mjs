/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: "export",
	// basePath: "/my-profile",
	// reactStrictMode: true,
	images: {
		localPatterns: [
			{
				pathname: "/public/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
