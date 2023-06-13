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
	headers: () => [
		{
			source: '/:path*',
			headers: [
				{
					key: 'Cache-Control',
					value: 'no-store',
				},
			],
		},
	],
};

module.exports = nextConfig;
