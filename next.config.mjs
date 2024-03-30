/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                pathname: '/v2/**',
            }, {
                protocol: 'https',
                hostname: 'www.freecodecamp.org',
                port: '',
                pathname: '/news/**',
            },
        ],
    },
};

export default nextConfig;
