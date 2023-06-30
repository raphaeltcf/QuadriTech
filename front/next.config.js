/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakeimg.pl',
			},
		],
	},
};

module.exports = nextConfig;
