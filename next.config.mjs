/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quickchart.io",
        port: "",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
