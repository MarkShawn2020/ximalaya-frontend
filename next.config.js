const allDomains = [// ref:https://stackoverflow.com/a/73951135/9422455
	{protocol: "http", hostname: "**"},
	{protocol: "https", hostname: "**"},
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	
	images: {
		remotePatterns: allDomains
	},
	
}

module.exports = nextConfig
