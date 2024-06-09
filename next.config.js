// /** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.garmin.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "static.garmincdn.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.garmin.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "garmin-web.cyberworxindia.com",
                port: "",
            },
        ],
        domains: ["localhost"],
    },

    async redirects() {
        return [
            {
                source: "/account",
                destination: "/account/profile",
                permanent: true,
            },
        ];
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             destination: "http://localhost:3000/api/:path*", // Proxy to Backend
    //         },
    //     ];
    // },
};

// export default nextConfig;
