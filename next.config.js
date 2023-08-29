/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [320, 480, 768, 1280].flatMap(size => [size, size * 2]),
    },
}

module.exports = nextConfig
