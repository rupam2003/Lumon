/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 0,
        unoptimized:true,
        domains: ['lh3.googleusercontent.com','res.cloudinary.com'],
    },
};

export default nextConfig;
