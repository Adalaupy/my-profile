/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	output: "export",
	assetPrefix: isProd ? "/my-profile/" : "",
	basePath: isProd ? "/my-profile" : "",
	images: { unoptimized: true },
	reactStrictMode: true,
};

export default nextConfig;
