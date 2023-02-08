/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        { loader: '@svgr/webpack', options: { icon: true, typescript: true } },
      ],
    });

    return config;
  },
};

export default nextConfig;
