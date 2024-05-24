/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "t1.kakaocdn.net",
        port: "",
        pathname: "/account_images/**",
      },
    ],
  },
};

export default nextConfig;
