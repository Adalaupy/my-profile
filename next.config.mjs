/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: "export",
	// basePath: "/my-profile",
	// reactStrictMode: true,
	images: {
		localPatterns: [
			{
				pathname: "/images/**",
				search: "",
			},
			{
				pathname: "/projects/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
