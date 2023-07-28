/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.redditinc.com",
				port: "",
				pathname: "/assets/images/site/**"
			}
		]
	},
	experimental: {
		serverActions: true
	}
};

module.exports = nextConfig;
