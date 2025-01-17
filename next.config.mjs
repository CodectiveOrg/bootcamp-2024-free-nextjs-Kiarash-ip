/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.paziresh24.com",
        pathname: "/getImage/**",
      },
    ],
  },
};

export default nextConfig;
