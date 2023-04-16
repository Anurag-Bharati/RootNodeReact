/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {},
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com"],
        minimumCacheTTL: 60,
    },
};

module.exports = nextConfig;
